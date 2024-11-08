import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("keys/greenbytes-firebase-key.json")
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://greenbytes-5a45c-default-rtdb.firebaseio.com"  # Replace with your database URL
    })

def update_counter( data , food_item ):
    if food_item in data:
        data[food_item] += 1
    else:
        data[food_item] = 1
    return data

def update_total( food_item ):
    ref = db.reference('/total')
    data = update_counter( ref.get(), food_item)
    ref.set( data )

def update_healthy( food_item ):
    ref = db.reference('/healthy')
    data = update_counter( ref.get(), food_item)
    ref.set( data )

def update_environmentally_friendly( food_item ):
    ref = db.reference('/environmentally_friendly')
    data = update_counter( ref.get(), food_item )
    ref.set(data)

def read_total():
    ref = db.reference('/total')
    return ref.get()

def read_healthy():
    ref = db.reference('/healthy')
    return ref.get()

def read_environmentally_friendly():
    ref = db.reference('/environmentally_friendly')
    return ref.get()    

def main():
    ref = db.reference('/hello')

if __name__ == "__main__":
    main()