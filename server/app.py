#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, jsonify, make_response
from flask_migrate import Migrate

from models import db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)


# Local imports
from config import app, db, api
# Add your model imports
from models import Wine, Review, User

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.route('/wines')
def games():

    wines = [wine.to_dict() for wine in Wine.query.all()]

    response = make_response(
        wines,
        200
    )
    return response


if __name__ == '__main__':
    app.run(port=5555, debug=True)

