from collections import UserList
from flask_sqlalchemy import *

# Initialize a local database
db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(45), unique=True, nullable=False)
    password = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    firstname = db.Column(db.String(20), nullable=False)
    lastname = db.Column(db.String(20), nullable=False)
    roles = db.Column(db.Text)
    interest = db.relationship('Interest', backref='User', lazy=True, uselist=False)

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

class Interest(db.Model):
    __tablename__ = 'Interest'
    datascience = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    software_dev = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    optimization = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    engineering = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    statistics = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    mathematics = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    game_dev = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    ai_ml = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    physics = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    chemistry = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    biology = db.Column(db.Boolean, nullable=False, default=False, server_default='false')
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), primary_key=True, nullable=False)
    
    def __repr__(self):
        return 'Interest of {} : (Biology: {}, Chemistry: {}, Mathematics: {}, Physics: {}, Statistics: {}, \
            AI & Machine Learning: {}, Data Science: {}, Software Development: {}, Game Development: {}, Optimization: {}, Engineering: {})'\
                .format(self.user_id, self.biology, self.chemistry, self.mathematics, self.physics, self.statistics,\
                    self.ai_ml, self.datascience, self.software_dev, self.game_dev, self.optimization, self.engineering)