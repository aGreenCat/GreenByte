import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("keys/greenbytes-firebase-key.json")
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://greenbytes-5a45c-default-rtdb.firebaseio.com"  # Replace with your database URL
    })

def main():
    ref = db.reference('/hello')
    print( ref.get() )

if __name__ == "__main__":
    main()