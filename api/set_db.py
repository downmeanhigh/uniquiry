import pandas
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
    result = db.relationship('Result', backref='User', lazy=True, uselist=False)

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
        fields = ['biology', 'chemistry', 'mathematics', 'physics', 'statistics',\
                    'ai_ml', 'datascience', 'software_dev', 'game_dev', 'optimization','engineering']
        bools = [self.biology, self.chemistry, self.mathematics, self.physics, self.statistics,\
                    self.ai_ml, self.datascience, self.software_dev, self.game_dev, self.optimization, self.engineering]
        ret = []
        for i, b in enumerate(bools):
            if b:
                ret.append(fields[i])
        return ','.join(ret)


class Result(db.Model):
    __tablename__ = 'Result'
    firstH2 = db.Column(db.Float, nullable=False, default=0)
    secondH2 = db.Column(db.Float, nullable=False, default=0)
    thirdH2 = db.Column(db.Float, nullable=False, default=0)
    firstH1 = db.Column(db.Float, nullable=False, default=0)
    secondH1 = db.Column(db.Float, nullable=False, default=0)
    pw = db.Column(db.Float, nullable=False, default=0)
    total = db.Column(db.Float, nullable=False, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'), primary_key=True, nullable=False)
    
    def __repr__(self):
        return "First H2: {}, second H2: {}, third H2: {}, first H1: {}, second H1: {}, Project Work: {}, total score: {}".format(self.firstH2, self.secondH2, self.thirdH2, self.firstH1, self.secondH1, self.pw, self.total)


class Course(db.Model):
    __tablename__ = 'Course'
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String, nullable=False)
    school = db.Column(db.String(3), nullable=False)
    fac = db.Column(db.String(4), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    bachelor=db.Column(db.String(1), nullable=False)
    desc=db.Column(db.String(1000), nullable=True)
    field = db.Column(db.String(100), nullable=False)
    igp_10 = db.Column(db.String(5), nullable=False)
    igp_90 = db.Column(db.String(5), nullable=False)
    boundary = db.Column(db.Float, nullable=True)
    sal_2020 = db.Column(db.Float, nullable=True)
    sal_2019 = db.Column(db.Float, nullable=True)
    url = db.Column(db.String(100), nullable=False)
    
    def __repr__(self):
        return "{} ({})".format(self.name,self.school.upper()) 
