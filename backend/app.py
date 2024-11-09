from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import gemini

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
    """
    Extracts food data by analyzing an image URL provided in the request.

    The function performs the following steps:
    1. Receives a POST request with a JSON body containing the 'image' field.
    2. Extracts the food item from the provided image URL using an image recognition function.
    3. Queries an external service (Gemini) for nutritional and environmental data related to the identified food item.
    4. Updates leaderboard statistics based on the food item (total, healthy, environmentally friendly).
    """
    try:
        data = request.get_json()
        image_url = data.get('image')

        if not image_url or image_url == "":
            return jsonify({"error": "No image provided"}), 400
        
        # Parsing to remove any special characters.
        food_item = ''.join(char for char in recognize(image_url) if char.isalpha() or char.isspace())

        food_analysis = gemini.get_food_data(food_item)
        
        food_analysis_json = json.loads( food_analysis )
        
        # Update Firebase Database to include the food if it matches the schema.
        update_total(food_item)
        if food_analysis_json['healthy']:
            update_healthy(food_item)
        if food_analysis_json['environmentally_friendly']:
            update_environmentally_friendly(food_item)

        return food_analysis_json

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/leaderboard', methods=["GET", "POST"])
def get_leaderboard_stats():
    '''
    Fetches the top 5 leaderboard statistics for different categories: 
    total, healthy, and environmentally friendly food choices.
    '''
    total_stats = find_top_k_total(5)
    healthy_stats = find_top_k_healthy(5)
    environment_stats = find_top_k_environmentally_friendly(5)

    leaderboard_stats = {"total" : total_stats, "healthy" : healthy_stats, "environment" : environment_stats}
    return jsonify(leaderboard_stats)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)