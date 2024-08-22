#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Wine, Review, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        wines = []
        wines.append(Wine(name = 'Educated Guess', type='Cabernet Sauvignon', flavor_profile='Dark and Robust', location = 'Divino', price=20))

        reviews = []
        reviews.append(Review(star_review= 3, comment="I liked that it was dark and robust, but didnt think it was worth $20", wine_id = 1, user_id = 1))

        users = []
        users.append(User(name = "Meredith"))

        db.session.add_all(wines)
        db.session.add_all(reviews)
        db.session.add_all(users)


        db.session.commit()
