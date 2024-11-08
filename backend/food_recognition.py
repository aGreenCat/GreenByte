import base64
from huggingface_hub import InferenceClient
#TODO: REMOVE api key

with open('keys/food.txt', 'r') as file:
    api_key = file.read().strip()
client = InferenceClient(api_key=api_key)
#
# image_url = "pizza.jpg"
# image = open(image_url, "rb").read()
# image = "data:image/jpeg;base64," + base64.b64encode(image).decode("utf-8")

def food_recogition(image_url):
    # Define the messages structure for the API request
    messages = [
        {
            "role": "user",
            "content": [
                {
                    "type": "image_url",
                    "image_url": {
                        "url": image_url,
                    }
                },
                {
                    "type": "text",
                    "text": "Provide your best guess as to the name of this food dish. Only return the name."
                },

            ]
        }
    ]

    # Send the request to the API for processing the image and getting a response
    stream = client.chat.completions.create(
        model="meta-llama/Llama-3.2-11B-Vision-Instruct",
        messages=messages,
        max_tokens=500,
        stream=True
    )

    food_name = ""

    # Iterate over the streamed response and collect the content
    for chunk in stream:
        content = chunk.choices[0].delta.content
        if content:
            food_name += content

    return food_name.strip()

#Test case
# print(food_recogition("https://t3.ftcdn.net/jpg/09/46/67/92/240_F_946679241_aD3TBjdk977KMIzhb75HedvGOB4SdwDY.jpg"))

