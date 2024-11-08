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
        '''
    
    with open('prompt/food_prompt.txt', 'r') as file:
        prompt += file.read()

        

    # print(json.loads(ask_gemini(prompt)))
    return ask_gemini(prompt)
    
    

def main():
    print( json.loads( get_food_data("steak") ) )

if __name__ == "__main__":
    main()
