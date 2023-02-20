# shawandpartnersbackend

Here's a step-by-step guide for coders to run the Node.js server code from GitHub:

1.Download and install Node.js on your computer. You can download and install the latest version of Node.js from the official Node.js website at https://nodejs.org.

2.Clone the repository that contains your Node.js server code from GitHub to your local machine using a Git client or by downloading the ZIP file from the repository.

3.Open a terminal or command prompt in the project folder that contains the server code.

4.Install the necessary dependencies for the server. This will depend on the specific functionality of the server, the dependencies for building this web server include Express, octokit, and supertest. You can install these dependencies using the command "npm install".

5.Run the server by executing the main JavaScript file for the server. This file is named server.js  and is located in the ./src directory of the project. You can run the server using the command "node server.js" in the terminal.

6.Test the server by making requests to the endpoints using an HTTP client like Postman or by making requests directly in the browser.

That's it! If everything is working correctly, you should now be able to run and test the Node.js server code that you downloaded from GitHub on your local machine.


GET - /api/users?since={number}: This endpoint allows you to fetch a list of GitHub users and their profile links. The {number} parameter is an optional query parameter that specifies the ID of the last user from the previous request. To access this endpoint, you can make a GET request to the URL "https://https://git-resourses.onrender.com/api/users?since={number}" using an HTTP client like Postman or by making requests directly in the browser.

GET - /api/users/:username/details: This endpoint allows you to fetch the details of a specific GitHub user. The :username parameter should be replaced with the username of the user you want to fetch details for. To access this endpoint, you can make a GET request to the URL "https://https://git-resourses.onrender.com/api/users/:username/details" using an HTTP client like Postman or by making requests directly in the browser.

GET - /api/users/:username/repos: This endpoint allows you to fetch a list of repositories for a specific GitHub user. The :username parameter should be replaced with the username of the user you want to fetch repositories for. To access this endpoint, you can make a GET request to the URL "https://git-resourses.onrender.com/api/users/:username/repos" using an HTTP client like Postman or by making requests directly in the browser.
