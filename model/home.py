from flask.json import JSONEncoder


class Home:
    def __init__(self, address="", city="", state="", price=0):
        self.address = address
        self.city = city
        self.state = state
        self.price = price

    def serialize(self):
        return {
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "price": self.price,
        }
