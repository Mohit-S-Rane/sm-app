# Running the Project Locally

## Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed and running.

## Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Mohit-S-Rane/sm-app.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd sm-app/sm-app-be
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the backend directory.
    - Add the necessary environment variables:
      ```bash
        PORT=
        MONGODB_URI=
        CORS_ORIGIN=

        ACCESS_TOKEN_SECRET=
        ACCESS_TOKEN_EXPIRY=
        REFRESH_TOKEN_SECRET=
        REFRESH_TOKEN_EXPIRY=
      ```

5. Start the backend server:
    ```bash
    npm start
    ```

## Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd ../sm-app-fe
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    ng serve
    ```

4. Open your browser and navigate to:
    ```bash
    http://localhost:4200
    ```
    
## Deployment
- Use AWS services (e.g., EC2, S3, RDS) to deploy the application.
- Configure CI/CD pipeline for automated deployment.