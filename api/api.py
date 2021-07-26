import os
import flask
import flask_praetorian
import flask_cors
import pandas

from set_db import db, User, Interest, Result, Course

# Initialize flask app for the example
app = flask.Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'top secret'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

# Connect database to app
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.getcwd(), 'database.db')}"
db.init_app(app)

# Initializes CORS so that the api_tool can talk to the example app
cors = flask_cors.CORS()
cors.init_app(app)

# Initialize the flask-praetorian instance for the app
guard = flask_praetorian.Praetorian()
guard.init_app(app, User)

# Initiate first user
with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(username='uniquiry').count() < 1:
        db.session.add(User(
            username='uniquiry',
            password=guard.hash_password('foreigntalents'),
            email='uniquiry@gmail.com',
            firstname='Uniquiry',
            lastname= 'by ForeignTalents'
            ))
    if db.session.query(Course).count() < 1:
        data = pandas.read_excel("courses.xlsx")
        courses = data.values.tolist()
        for row in courses:
            db.session.add(Course(
                code = row[0],
                school = row[1],
                fac = row[2],
                name = row[3],
                bachelor=row[4],
                desc=row[5],
                field = row[6],
                igp_10 = row[7],
                igp_90 = row[8],
                boundary = row[9],
                sal_2020 = row[10],
                sal_2019 = row[11],
                url = row[12]))
        db.session.commit()

# Register and add users into database
@app.route('/api/register', methods =['POST'])
def register():
    req = flask.request.get_json(force=True)
    new_username = req.get('username', None)
    new_password = req.get('password', None)
    new_email = req.get('email', None)
    new_firstname = req.get('firstname', None)
    new_lastname = req.get('lastname', None)
    db.session.add(User(
        username= new_username,
        password=guard.hash_password(new_password),
        email = new_email,
        firstname = new_firstname,
        lastname = new_lastname
        ))
    db.session.commit()
    user = guard.authenticate(new_username,new_password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200

# Set up some routes for the example
@app.route('/api/')
def home():
    return {"Welcome": "to Uniquiry"}, 200


@app.route('/api/login', methods=['POST'])
def login():
    req = flask.request.get_json(force=True)
    username = req.get('username', None)
    password = req.get('password', None)
    user = guard.authenticate(username, password)
    id = User.query.filter_by(username=username).first().id
    if db.session.query(Interest).filter_by(user_id=id).count() < 1:
        db.session.add(Interest(user_id=id))
    if db.session.query(Result).filter_by(user_id=id).count() < 1:
        db.session.add(Result(user_id=id))
    db.session.commit()
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200


@app.route('/api/refresh', methods=['POST'])
def refresh():
    """
    Refreshes an existing JWT by creating a new one that is a copy of the old
    except that it has a refrehsed access expiration.
    """
    print("refresh request")
    old_token = flask.request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200


@app.route('/api/protected')
@flask_praetorian.auth_required
def protected():
    """
    A protected endpoint. The auth_required decorator will require a header
    containing a valid JWT
    """
    return {'message': f'Welcome to Uniquiry, {flask_praetorian.current_user().firstname}'}

@app.route('/api/interest', methods=['POST'])
@flask_praetorian.auth_required
def interest():
    req = flask.request.get_json(force=True)
    updated = Interest.query.filter_by(user_id=flask_praetorian.current_user().id).first()
    updated.datascience = req.get('datascience', False)
    updated.software_dev = req.get('software_dev', False)
    updated.optimization = req.get('optimization', False)
    updated.engineering = req.get('engineering', False)
    updated.statistics = req.get('statistics', False)
    updated.mathematics = req.get('mathematics', False)
    updated.game_dev = req.get('game_dev', False)
    updated.ai_ml = req.get('ai_ml', False)
    updated.physics = req.get('physics', False)
    updated.chemistry = req.get('chemistry', False)
    updated.biology = req.get('biology', False)
    db.session.commit()
    ret = {'message': 'Interest updated: ' + str(updated)}
    return ret

@app.route('/api/result', methods=['POST'])
@flask_praetorian.auth_required
def result():
    req = flask.request.get_json(force=True)
    updated = Result.query.filter_by(user_id=flask_praetorian.current_user().id).first()
    updated.firstH2 = req.get('firstH2', 0)
    updated.secondH2 = req.get('secondH2', 0)
    updated.thirdH2 = req.get('thirdH2', 0)
    updated.firstH1 = req.get('firstH1', 0)
    updated.secondH1 = req.get('secondH1', 0)
    updated.pw = req.get('projectWork', 0)
    updated.total = req.get('totalRP', 0)
    db.session.commit()
    ret = {'message': 'Result updated'}
    return ret

@app.route('/api/suggested')
@flask_praetorian.auth_required
def suggest():
    match_interest = Interest.query.filter_by(user_id=flask_praetorian.current_user().id).first()
    score = Result.query.filter_by(user_id=flask_praetorian.current_user().id).first()
    fields = str(match_interest).split(",")
    matched = {}
    for field in fields:
        query=Course.query.filter(Course.field.contains(field))
        query=Course.query.filter(Course.boundary <= score.total)
        for q in query:
            if not matched.get(str(q)):
                matched[str(q)] = 0
            matched[str(q)] +=1
    
    return { 'message': str(matched)}

@app.route('/api/search')
def search():
    req = flask.request.get_json(force=True)
    keywords = req.get('keywords', None)
    words = str(keywords).split(" ")
    selected = {}
    query = Course.query
    if not words:
        for word in words:
            query = query.filter(Course.name.contains(word))
    
    return { 'message': str(selected)}

# Run the example
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)