import os
import flask
import flask_praetorian
import flask_cors

from database import db, User, Interest
import re

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
    return {'message': f'protected endpoint (allowed user {flask_praetorian.current_user().firstname})'}

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
    ret = {'message': str(updated)}
    return ret

@app.route('/api/get_interest')
@flask_praetorian.auth_required
def get_interest():
    req = flask.request.get_json(force=True)
    user = Interest.query.filter_by(user_id=flask_praetorian.current_user().id).first()
    ret = {'message': str(user)}
    return ret

# Run the example
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)