from flask import Flask, request, jsonify
from flask_cors import CORS
import json
#import firebase

from food_recognition import recognize

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['GET'])
def get_data():
    return json.loads('{"message":"Hello World"}')

@app.route('/recognize', methods=["POST", "GET"])
def extract_data():
    try:
        data = request.get_json()
        image_url = data.get('image')

        if not image_url:
            return jsonify({"error": "No image provided"}), 400
        
        food_item = recognize(image_url)
        return jsonify({"food_name": food_item})
    
    #TODO: Once the Claude/Gemini Logic to handle the inputs is created, finish this endpoint.

    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)