import google.generativeai as genai
import json

# Read in the API Key from the local dot_env file
with open('keys/gemini.txt', 'r') as file:
    api_key = file.read()

# configure with the Gemeni genai object
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

# function to send a request to Gemini
def ask_gemini(prompt, tokens=256):
    response = model.generate_content(prompt,
        generation_config=genai.types.GenerationConfig(
            candidate_count=1,
            max_output_tokens=tokens,
            temperature=0.1,
        ),
    )
    return response.candidates[0].content.parts[0].text

# gets both nutrition data and the environmental footprint of a certain food description
def get_food_data( food_description ):
    prompt = f'''
        Forget all previous context.
        I am going to give you a description of a certain food that I am about to eat.
        {food_description}

        I want you to return something to me in the exact JSON body format that I request.
        Your response should comprise of only the JSON body that I request and nothing other than it.
        DO NOT include the triple tricks to make it a code block.
        I want it to simply be a string in json format which i can do json.loads() on
        Make sure there are no extra spaces

        Here is the format below, and I will provide descriptions of each individual attribute in the JSON body
        {{ 
            "food_name": string, // the name of the food your were assigned to classify
            "calories_lower" : int, // lower bound for calorie estimation range
            "calories_upper" : int, // upper bound for calorie estimation range
            "carbon_emissions": int, // the number of grams of carbon dioxide emissions
            "gallons_per_item_produced" : int, // what would be the number of gallons of water needed to produce the food we are giving you 
            "grams_of_protein": int,
            "grams_of_carbs": int,
            "grams_of_fats" : int,
            "calories_from_protein": int,
            "calories_from_carbs" : int,
            "calories_from_fats" : int,
            "healthy": boolean, // True or False depending on whether healthy or unhealthy determined by your best analysis
            "environmentally_friendly" // True or False depenidng on whether food is environmentally friend
        }}
        
    '''
    print(json.loads(ask_gemini(prompt)))
    
    

def main():
    print( json.loads( get_food_data("steak") ) )

if __name__ == "__main__":
    main()
