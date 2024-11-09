# KnightHacksFinal

### GreenByte: Empowering Informed Food Choices

## Inspiration
We firmly believe that understanding the nutritional value and environmental impact of the food we consume is critical to making better, healthier, and more sustainable choices. The idea for GreenByte came from the need for accessible and practical information about the foods we eat, especially when it comes to both health and sustainability.

We wanted to create a platform that provides this information in a simple, free, and convenient way. By making this data easily accessible, we hope to help users make more informed decisions about their food choices, ultimately promoting a healthier lifestyle and a more environmentally-conscious behavior.

## What it does
GreenByte is a platform designed to help users make informed decisions about the food they consume by providing two key pieces of information: nutritional contents and the carbon footprint of the food. By uploading pictures of meals, users can receive approximate data on calories, proteins, fats, and other nutritional factors, as well as an estimate of the environmental impact in terms of CO2 emissions from food production. The goal is to encourage healthier eating habits and more sustainable food choices with just a simple photo upload.

## How we built it
GreenByte is built using a combination of modern web development technologies:

- **Backend (Flask):** The backend is powered by Flask, a lightweight Python web framework. Flask handles API requests for food image analysis, retrieves nutritional information, and calculates the carbon footprint based on food data. It interacts with third-party APIs and databases to provide accurate and up-to-date food information.

- **Frontend (React with TypeScript):** The frontend is developed using React, a popular JavaScript library, and TypeScript to ensure type safety and a structured codebase. React is used to create an interactive and dynamic user interface, where users can upload images and view detailed results.

- **Firebase:** Firebase serves as the cloud database and authentication solution. It stores user data, images, food details, and results of each food scan. Firebase's real-time database and easy-to-integrate API allow us to quickly scale and update user data.

- **Image Recognition API with LLaMA Model and Hugging Face Hub:** To analyze uploaded food images, we integrated the LLaMA model (a state-of-the-art model for image recognition) hosted on the Hugging Face Hub. This model processes images to detect and label food items. It is highly accurate in identifying a wide range of foods and ingredients. The recognized food data is then cross-referenced with our nutritional and environmental data sources to provide users with nutritional content and CO2 emissions information. By leveraging the Hugging Face Hub, we benefit from the pre-trained models and streamlined integration for food image analysis.

## Contributions
**Nakib's Tasks:** Designed the leaderboard logic, integrated APIs for dynamic data retrieval, and managed database connections for efficient data storage. Additionally, successfully deployed the project for production use.

**Muslim's Tasks:** Developed front end using React with TypeScript to create an interactive user experience. Worked on CSS styling and Figma mock-up.

**Tedd's Tasks:** Led and designed the core frontend logic using React with TypeScript. Worked on CSS styling and Figma mock-up along with Muslim.

**Ishmam's Tasks:** Created the image recognition endpoint and leaderboard request function from FirebaseDB. Utilized TypeScript to build the food data display and implement the dynamic leaderboard interface.


## Challenges we ran into
**Image Recognition Accuracy:** One of the primary challenges was accurately identifying food items from images. Food can look very different depending on lighting, angles, and preparation styles, and the accuracy of the recognition system was impacted by these variations. It took time to optimize the image recognition process and ensure the system could handle real-world conditions like varying plate sizes and food arrangements.

**Data Availability & Accuracy:** We had to source reliable nutritional and environmental data for a broad range of foods. Many databases have incomplete or inconsistent data, and ensuring we had both nutritional and CO2 emissions information for each food item was a significant challenge. We needed to ensure that this data was accurate and standardized across the platform.

**User Experience Design:** Designing a user-friendly interface that balances simplicity and functionality was another challenge. We wanted the app to be intuitive and easy to navigate, but it also needed to provide a lot of information. We had to iterate several times to find a clean and efficient way to present detailed data without overwhelming users.

## Accomplishments that we're proud of
**Successful Image Recognition Integration:** Despite the challenges with food image recognition, we successfully implemented an image recognition model that identifies a wide variety of food items with good accuracy. This was one of the major technical milestones of the project.

**Real-Time Data Processing:** We were able to integrate real-time processing of images and food data, allowing users to instantly see the nutritional and environmental information of their meals. This feature was crucial for delivering a seamless user experience.

**Cross-Technology Integration:** Successfully integrating Flask for the backend, React with TypeScript for the frontend, and Firebase for cloud data storage was a complex technical accomplishment. It allowed us to build a scalable and reliable platform.

## What we learned
Cross-communication between Flask (Backend) and React (Frontend):
One of the first challenges we tackled was setting up communication between our Flask backend and the React frontend. We learned how to build a RESTful API using Flask and how to make API calls from React to send and retrieve data asynchronously. We used Axios for making HTTP requests from React and handled CORS (Cross-Origin Resource Sharing) issues that arose when trying to connect the frontend and backend, especially during development. This taught us how to configure and secure APIs to allow communication across different domains.

Integrating Firebase with React:
Firebase's real-time database and authentication system were a major part of GreenByte. We learned how to integrate Firebase into our React app to handle user authentication, store images, and manage food scan data. We used Firebase's Authentication API for user login and sign-up and the Firebase Storage API for uploading and retrieving images. Learning how to set up Firebase services and manage real-time data sync in a React app was a valuable experience.

Leveraging Machine Learning APIs (LLaMA model on Hugging Face Hub):
Initially, we weren't familiar with machine learning models and APIs, but we explored the LLaMA model on the Hugging Face Hub to perform food image recognition. We learned how to interact with pre-trained machine learning models and integrate them into our backend using Python. The LLaMA model helped us identify food items from user-uploaded images, and we had to refine our understanding of how image data is processed by models and how to call these models effectively via the Hugging Face API.

## What's next for GreenByte
Improved Food Recognition Accuracy:
While the current image recognition model is functional, we aim to improve its accuracy further by training or fine-tuning models on a larger, more diverse dataset of food images. This will help provide more precise nutritional and carbon footprint data.

Expanded Food Database:
We plan to integrate more comprehensive nutritional and environmental data sources to improve the quality and accuracy of the information provided to users. This includes expanding our database to include more food items and their respective environmental impacts.

Mobile Application:
After refining the web app, we plan to extend the platform to mobile devices to reach a broader audience. This would provide users with a more accessible and portable way to track their food choices and their environmental impact.