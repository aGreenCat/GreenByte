import google.generativeai as genai

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
            temperature=0.3,
        ),
    )
    return response.candidates[0].content.parts[0].text

def main():
    print( ask_gemini("Write a sentence with all the characters in the alphabet") )

if __name__ == "__main__":
    main()
