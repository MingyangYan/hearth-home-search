from app import app
from flask_restful import Api, Resource, reqparse, fields
from flask import jsonify, make_response, request
import csv
from model.home import Home

# https://github.com/seatgeek/fuzzywuzzy
from fuzzywuzzy import fuzz, process


@app.route("/search", methods=["GET"])
def getHomes():
    arg = request.args.get("address")

    # Parse csv
    # Doing this for every server call since there's no database to store them.
    homes = get_all_home()

    addresses = [home.address for home in homes]
    # Returns a list of tuples with address and matching score in decending order.
    scores = process.extract(arg, addresses, limit=len(addresses))
    filtered_addresses = [tuple[0] for tuple in scores]
    filtered_homes = []

    # Create a list of matching homes
    # This will result in O(n^2) which is bad.
    # In reality, we would store all the home objects in the database.
    # So we could fetch by address to find the home object
    for item in filtered_addresses:
        for home in homes:
            if home.address == item:
                filtered_homes.append(home)

    return make_response(
        jsonify(items=[home.serialize() for home in filtered_homes]), 200
    )


# parse csv file and return a list of homes
def get_all_home():
    homes = []
    # csv file name
    filename = "home_list.csv"
    # reading csv file
    with open(filename, "r") as csvfile:
        # creating a csv reader object
        csvreader = csv.DictReader(csvfile)

        for row in csvreader:
            home = Home(
                row["ADDRESS"],
                row["CITY"],
                row["STATE OR PROVINCE"],
                f'{int(row["PRICE"]):,}',
            )
            homes.append(home)
            # print(json.dumps(home.__dict__))
            # print(row["ADDRESS"], row["CITY"], row["STATE OR PROVINCE"], row["PRICE"])

    return homes
