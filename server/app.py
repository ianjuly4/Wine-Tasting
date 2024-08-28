#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from flask_restful import Api, Resource

from config import app, db, api
from models import Wine, Review, User

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = True
migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)


class Wines(Resource):
    def get(self):
        response_dict_list = [wine.to_dict() for wine in Wine.query.all()]
        response = make_response(
            response_dict_list,
            200,
        )
        return response
    
    def post(self):
        new_wine = Wine(
            name= request.form['name'], 
            type= request.form['type'],
            flavor_profile= request.form['flavor_profile'],
            location= request.form['location'],
            price= request.form['price'],
            image= request.form['image']
        )
        db.session.add(new_wine)
        db.session.commit()

        response_dict = new_wine.to_dict()

        response = make_response(
            response_dict,
            201,
        )
        return response
    
api.add_resource(Wines, '/wines')



class WineByID(Resource):
    def get(self, id):
        response_dict = Wine.query.filter_by(id=id).first().to_dict()
        response = make_response(
            response_dict,
            200,
        )

        return response
    
    def patch(self, id):

        wine = Wine.query.filter(Wine.id == id).first()
        for attr in request.form:
            setattr(wine, attr, request.form[attr])

        db.session.add(wine)
        db.session.commit()

        response_dict = wine.to_dict()

        response = make_response(
            response_dict,
            200
        )

        return response
    
    def delete(self, id):

        wine = Wine.query.filter(Wine.id == id).first()

        db.session.delete(wine)
        db.session.commit()

        response_dict = {"message": "record successfully deleted"}

        response = make_response(
            response_dict,
            200
        )

        return response
    
api.add_resource(WineByID, '/wines/<int:id>')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

