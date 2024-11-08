from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import gemini
#import firebase

from food_recognition import recognize

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def get_data():
    return json.loads('{"message":"Hello World"}')

@app.route('/recognize', methods=["GET", "POST"])
def extract_food_data():
    try:
        data = request.get_json()
        image_url = data.get('image')

        if not image_url:
            return jsonify({"error": "No image provided"}), 400
        
        food_item = recognize(image_url)
        food_analysis = gemini.get_food_data(food_item)

        return json.loads( food_analysis )
    
    #TODO: Once the Claude/Gemini Logic to handle the inputs is created, finish this endpoint.
    except Exception as e:
        print("WE GOT COOKED")
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001)