from flask_sqlalchemy import *

# Initialize a local database
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'Users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(45), unique=True, nullable=False)
    password = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    firstname = db.Column(db.String(20), nullable=False)
    lastname = db.Column(db.String(20), nullable=False)
    roles = db.Column(db.Text)

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

'''
class Interest(db.Model):
    __tablename__ = 'Interests'
    data_science = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    software_engin = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    optimization = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    engineering = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    user_id = db.Column(db.ForeignKey('user.id'), primary_key=True, nullable=False)
    user = db.relationship('User', backref=db.backref('interests', lazy=True))
'''