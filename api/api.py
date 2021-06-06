import os
import flask
import flask_praetorian
import flask_cors

from db import db
from accounts import User

# Initialize flask app for the example
app = flask.Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'top secret'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

# Connect database to app
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.getcwd(), 'accounts.db')}"
db.init_app(app)

# Initializes CORS so that the api_tool can talk to the example app
cors = flask_cors.CORS()
cors.init_app(app)

# Initialize the flask-praetorian instance for the app
guard = flask_praetorian.Praetorian()
guard.init_app(app, User)

# Add users for the example
with app.app_context():
    db.create_all()
    if db.session.query(User).filter_by(username='test').count() < 1:
        db.session.add(User(
            username='test',
            password=guard.hash_password('strongpassword'),
            roles='admin'
            ))
    db.session.commit()


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
    return {'message': f'protected endpoint (allowed user {flask_praetorian.current_user().username})'}

# Run the example
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)