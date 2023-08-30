# Querell-AI 🐿️

## Introduction

Welcome to Querell-AI Interviewer, an advanced chatbot powered by the formidable OpenAI API! This AI interviewer is designed to revolutionize technical interviews in the world of React and Node.js development.

## Demo

https://www.loom.com/share/2984fd855cd044188b8ad91b8293d62c?sid=2d5edb9b-10a8-46da-b20b-2519ec5d5e2a

 **Youtube 👇👇**

https://youtu.be/Tt1qdpOpB8I

**AWS Amplify Deployed Link 👇👇**

https://main.d32ba38dimvjzi.amplifyapp.com


## Features

- **Seamless React & Node.js Assessments:** Conduct tech interviews with a focus on React and Node.js domains, evaluating candidates' proficiency and coding skills with precision.

- **Customizable Technical Evaluations:** Tailor the interview process based on specific React and Node.js roles and expertise levels.

- **Extensive Knowledge Repository:** Querell-AI Interviewer covers everything from React components and hooks to server-side rendering and asynchronous programming.

- **Insightful Analysis & Reports:** Receive detailed reports highlighting candidates' strengths, areas for improvement, and overall performance.

- **Data Security & Privacy Assurance:** We value data security and privacy, ensuring a safe and confidential interview experience.

- **Seamless OpenAI API Integration:** Powered by OpenAI's API, ReactNode AI Interviewer integrates into your technical interview workflow effortlessly.

- **Admin Panel - Read All Responses:** New feature! Access the admin panel to read all candidate responses for thorough evaluation.

## Note
- During testing, I utilized the GPT-3.5 turbo model, which has limitations in terms of available tokens. As a result, I constrained the AI to ask only 3 questions to avoid running out of tokens and having it repeat itself.
- To enhance its performance and capabilities, future iterations could benefit from utilizing GPT-4, a more powerful language model.

  
## Technologies Used

- Node.js: Backend server for handling API requests and business logic.
- React.js: Frontend framework for building the user interface.
- Google Cloud Functions: Serverless function deployment for scalable backend services.
- Docker: Containerization technology for easy deployment and management.
- PostgreSQL: Object-Relational Database for data management and storage.
- NeonDB: Incorporating NeonDB for enhanced data management capabilities.
- Prisma: Modern database toolkit for ORM and query building.
- OpenAI API: Powering the advanced chatbot capabilities, providing a seamless interview experience.
- AWS Amplify: Hosting static site (Frontend/Client Deployement).

## Getting Started

Follow these steps to get started with Querell-AI Interviewer:

```bash
npm install
cd backend
npm install
npm start
cd ..
npm run dev
```

- Make sure to go to the `/pdf` endpoint, whether it is in localhost or Vercel.
- Then input the admin password as "AdminOnly1234".
- Upload your API key and PDF for smooth operation.

1. Clone the repository: `git clone https://github.com/your-username/reactnode-ai-interviewer.git`
2. Install the required dependencies: `npm install`
3. Run the application: `npm start`
4. Access the ReactNode AI Interviewer at `http://localhost:3000`

## Docker Deployment

This project is also Dockerized, allowing easy deployment in containers. To run the application using Docker, follow these steps:

1. Make sure you have Docker installed and running on your system.
2. Build the Docker image: `docker build -t reactnode-ai-interviewer .`
3. Run the Docker container: `docker run -p 3000:3000 reactnode-ai-interviewer`

## Deployed on Google Cloud Functions

The backend Node.js code has been deployed on Google Cloud Functions to provide a scalable and serverless environment. The Docker container is used to deploy the application on Google Cloud Functions.


## Future Features Plans

- We are planning to add a feature of uploading a resume and taking interviews based on it.


Let Querell-AI Interviewer elevate your tech interviews to a whole new level! 🚀 Join the tech hiring revolution with us!

