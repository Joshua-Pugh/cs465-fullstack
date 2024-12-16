# CS-465-Full-Stack
CS-465 Full Stack Development with MEAN

# Architecture
## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Express HTML:
Usage: Express can serve HTML files as part of a full stack application, often used for rendering server-side views.
Advantages: Simple to use for rendering dynamic content from the server, integrates well with backend logic.
Disadvantages: Lacks the interactive capabilities and modern user experience provided by more advanced JavaScript frameworks.

JavaScript:
Usage: Essential for adding interactivity and dynamic features to web pages, utilized both in traditional multi-page applications and SPAs.
Advantages: Highly versatile, enables rich user interfaces, and can be used for both client-side and server-side development.
Disadvantages: Can become complex and difficult to manage for large-scale applications without proper structuring.

Single-Page Application (SPA):
Usage: SPAs load a single HTML page and dynamically update content as the user interacts with the app, often leveraging frameworks like React, Angular, or Vue.
Advantages: Provides a seamless and fast user experience with reduced page reloads, enhances performance by dynamically loading content.
Disadvantages: Initial load time can be longer, requires more complex client-side routing and state management.

## Why did the backend use a NoSQL MongoDB database?
Reason for Using NoSQL MongoDB:
Scalability: MongoDB is designed to scale horizontally, making it easier to manage large volumes of data across distributed systems.
Flexibility: The schema-less nature of MongoDB allows for flexible and dynamic data modeling, which is particularly useful for handling unstructured data or when the data structure may evolve over time.
Performance: MongoDB offers high performance for read and write operations, supporting complex queries and indexing efficiently.
Ease of Use: JSON-like documents (BSON) align well with JavaScript environments, simplifying data interchange between the backend and frontend.

# Functionality
## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON vs. JavaScript:
JSON is a data format for transmitting data, while JavaScript is a programming language used for creating interactive web content.
JSON's syntax is a subset of JavaScript, making it easy to use for data interchange between frontend and backend.

Connecting Frontend and Backend:
JSON serves as the bridge for data exchange between frontend and backend, ensuring seamless communication and integration.

## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Code Refactoring Instances:
Optimizing API Endpoints: Improved performance and readability by breaking down complex queries and optimizing database access.
Modularizing Code: Enhanced readability and maintainability by breaking down large functions into smaller, reusable modules.

Benefits of Reusable UI Components:
Consistency: Ensures a uniform look and feel across the application.
Efficiency: Saves time and reduces errors by reusing code.
Maintainability: Easier to update and maintain with changes reflecting across the application.
Scalability: Simplifies the addition of new features by composing existing components.

# Testing
## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Methods: In the context of a full stack application, methods refer to the HTTP methods used for API requests, such as GET, POST, PUT, DELETE, etc. These methods define the type of operation to be performed on the server:
GET: Retrieve data from the server.
POST: Send data to the server for creation.
PUT: Update existing data on the server.
DELETE: Remove data from the server.

Endpoints: Endpoints are specific routes defined in the API where these methods are applied. Each endpoint corresponds to a URL path and often includes parameters to specify the data being accessed or manipulated. For example, /api/users might be an endpoint to manage user data.

Security: Ensuring security in a full stack application involves several layers:
Authentication: Verifying the identity of users, typically through mechanisms like JWT (JSON Web Tokens) or OAuth.
Authorization: Determining the permissions of authenticated users, ensuring they can only access or modify resources they are allowed to.
Input Validation: Checking user inputs to prevent injection attacks.
Rate Limiting: Controlling the number of requests a user can make to prevent abuse.
Encryption: Using HTTPS to encrypt data in transit, and encrypting sensitive data stored in the database.

Testing: Including security testing as part of the API testing process to identify and fix vulnerabilities.
