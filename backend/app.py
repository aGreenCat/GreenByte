from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import gemini
#import firebase

from food_recognition import recognize
from firebase_helpers import update_counter, update_environmentally_friendly, update_total, update_healthy
from leaderboard import find_top_k_total, find_top_k_healthy, find_top_k_environmentally_friendly

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['GET'])
def get_data():
    return json.loads('{"message":"Hello World"}')

@app.route('/recognize', methods=["GET", "POST"])
def extract_food_data():
    try:
        data = request.get_json()
        image_url = data.get('image')

        if not image_url or image_url == "":
            return jsonify({"error": "No image provided"}), 400
        food_item = ''.join(char for char in recognize(image_url) if char.isalpha() or char.isspace())

        food_analysis = gemini.get_food_data(food_item)
        
        food_analysis_json = json.loads( food_analysis )
        
        update_total(food_item)
        if food_analysis_json['healthy']:
            update_healthy(food_item)
        if food_analysis_json['environmentally_friendly']:
            update_environmentally_friendly(food_item)

        return food_analysis_json

    
    #TODO: Once the Claude/Gemini Logic to handle the inputs is created, finish this endpoint.
    except Exception as e:
        print("WE GOT COOKED")
        print(e)
        return jsonify({"error": str(e)}), 500

@app.route('/leaderboard', methods=["GET", "POST"])
def get_leaderboard_stats():
    total_stats = find_top_k_total(5)
    healthy_stats = find_top_k_healthy(5)
    environment_stats = find_top_k_environmentally_friendly(5)

    leaderboard_stats = {"total" : total_stats, "healthy" : healthy_stats, "environment" : environment_stats}
    print(leaderboard_stats)
    return jsonify(leaderboard_stats)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)