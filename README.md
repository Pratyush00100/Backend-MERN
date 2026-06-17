# Backend MERN Development

This repository contains a comprehensive, step-by-step progression through backend development using the MERN (MongoDB, Express.js, React, Node.js) stack. It spans from fundamental Node.js concepts to building a full-stack application with a RESTful API and a React frontend.

Below is an in-depth breakdown of the contents and concepts covered in each lecture and practice set module.

---

## Course Progression and Lecture Details

### Lecture 3, 4, 5 & 6: Core Node.js and HTTP Basics
These initial modules establish the foundation of backend development using standard Node.js without frameworks.
* **Server Creation:** Utilizing the core `http` module to spin up a server and listen to incoming network requests.
* **Request and Response Lifecycle:** Understanding how to parse request headers and URLs, and how to format responses.
* **File System Module (`fs`):** Reading from and writing to local files (`user.txt`, `data.txt`, `user.js`) to achieve basic data persistence.

### Lecture 7: Error Handling (`lecture-7-errors`)
Focuses on the robustness of Node.js applications.
* **Syntax vs. Runtime Errors:** Identifying and resolving different types of errors during execution (`syntax.js`).
* **Debugging:** Techniques for tracing and isolating issues in a basic server setup.

### Lecture 8 & 9: Introduction to Express.js (`lecture-8-intoExpress`, `lecture-9`)
Transitioning from standard Node.js to the Express.js framework.
* **Express Setup:** Initializing an Express application and replacing the standard `http` server boilerplates.
* **Middleware Integration:** Understanding the middleware pipeline, handling request parsing, and using `next()` functions.
* **Basic Routing:** Implementing simple HTTP methods (GET, POST) to handle client requests.

### Lecture 10: Building an Application Structure (`lecture-10-airbnb`)
Initiating a project-based approach by building an Airbnb-style application.
* **Routing Separation:** Splitting routes into dedicated files (`userRouter.js`, `hostRouter.js`) for better maintainability.
* **Serving HTML:** Sending raw HTML files (`home.html`, `addHome.html`) as responses to the client.
* **Utility Modules:** Using `pathUtil.js` to reliably construct file paths across different operating systems.

### Lecture 11: Styling and Static Assets (`lecture-11-airbnb-styling`)
Enhancing the visual presentation of the application.
* **Static Directories:** Utilizing `express.static()` to serve CSS (`home.css`, `input.css`) and image files directly to the browser.
* **Frontend Linking:** Properly linking stylesheets within the served HTML documents.

### Lecture 12: Dynamic UI Rendering (`lecture-12-DynamicUI`)
Moving from static HTML to dynamic template generation.
* **View Engines:** Integrating Embedded JavaScript (EJS) to dynamically render data on the server before sending it to the client (`home.ejs`, `addHome.ejs`).
* **Partials:** Abstracting common UI elements (like navigation bars and `head.ejs` metadata) into reusable components.

### Lecture 13: Model-View-Controller Architecture (`lecture-13-MVC`)
Refactoring the application into the industry-standard MVC design pattern.
* **Controllers:** Creating dedicated controller files (`hostController.js`, `storeController.js`) to handle business logic and isolate it from the routing layer.
* **Models:** Introducing class-based models (`home.js`) to encapsulate data logic and handle read/write operations to JSON files (`homes.json`).
* **Views:** Organizing EJS files into modular folders (`views/host`, `views/store`).

### Lecture 14: Dynamic Paths (`lecture-14-Dynamic-Paths`)
Handling dynamic URL structures and relational data.
* **Route Parameters:** Extracting variables from the URL (e.g., `/homes/:homeId`) to fetch specific resources.
* **Query Strings:** Utilizing URL query parameters for filtering and search functionalities.
* **Cross-referencing Data:** Managing a favorites system (`favourite.json`, `favourite.js`) that references IDs from the main homes dataset.

### Lecture 15: Introduction to SQL (`lecture-15-Intro-SQL`)
Shifting data persistence from local JSON files to a relational database.
* **Database Connection:** Establishing a connection to a SQL database (`databaseUtil.js`).
* **Query Execution:** Replacing file-system operations in the models with raw SQL queries to INSERT, SELECT, UPDATE, and DELETE data.

### Lecture 16: MongoDB Integration (`lecture-16-MongoDB`)
Transitioning to NoSQL data structures.
* **MongoDB Driver:** Configuring the native MongoDB Node.js driver (`databaseUtil.js`).
* **Collections and Documents:** Refactoring the application to work with BSON documents rather than relational tables.

### Lecture 17: Mongoose ODM (`lecture-17-Mongoose`)
Streamlining MongoDB interactions using Object Data Modeling.
* **Schemas and Models:** Defining strict schemas for `Home` and `Favourite` entities to enforce data integrity.
* **Instance Methods and Queries:** Utilizing Mongoose's built-in methods for complex querying and document manipulation.

### Lecture 18: Cookies and Sessions (`lecture-18-CookiesAndSessions`)
Implementing stateful interactions over the stateless HTTP protocol.
* **Cookies:** Sending, parsing, and storing cookies on the client side.
* **Session Management:** Using session middleware to persist user state (like login status) across multiple page reloads.
* **Authentication Basics:** Creating login routes (`authRouter.js`) and corresponding views (`login.ejs`).

### Lecture 19: Authentication and Authorization (`lecture-19-Authentication and Authorisation`)
Securing the application.
* **User Modeling:** Creating a `User` schema (`model/user.js`) to store account details.
* **Password Hashing:** Securing user credentials using hashing algorithms before saving them to the database.
* **Route Protection:** Implementing middleware to block unauthenticated users from accessing protected host or store routes.
* **Signup Flows:** Building registration interfaces (`signup.ejs`) and logic.

### Lecture 20: Image Upload and Download (`lecture-20-Image Upload And Download`)
Handling complex multipart form data.
* **Multer Middleware:** Configuring Multer to intercept incoming file uploads and save them safely to the server's file system (`Uploads/` directory).
* **Static File Serving:** Adjusting Express configurations to serve user-uploaded assets back to the client.

### Lecture 21: REST API & Client Separation (`lecture-21-REST API - JSON Request`)
Decoupling the frontend and backend to build a modern single-page application (SPA) architecture.
* **Todo Backend:** Building a completely stateless Node/Express REST API (`todo-backend`) that communicates exclusively via JSON rather than rendering HTML.
* **Todo Frontend:** Utilizing a Vite-powered React application (`todo-frontend`) to consume the API, handling UI state, fetching data, and posting updates.
* **CORS:** Managing Cross-Origin Resource Sharing to allow the React frontend to communicate with the Node backend safely.

---

## Practice Sets

The repository includes corresponding practice directories (`practice-set-1` through `practice-set-6`). These directories contain isolated coding challenges designed to reinforce the topics covered in the main lectures, specifically testing basic routing, Express middleware pipelines, handling 404 pages (`404.html`), and view rendering.

---

## Setup and Installation

To run any individual module within this repository:

1. Open your terminal and navigate to the specific lecture or practice set directory.
```bash
   cd lecture-13-MVC
Install the necessary dependencies defined in the package.json.

Bash
   npm install
Start the application. Most modules are configured to run via app.js and utilize nodemon for hot-reloading.

Bash
   npm start
Note: For database-dependent lectures (Lecture 15 onwards), ensure you have a running instance of MySQL or MongoDB and update the connection strings in the respective utils/databaseUtil.js or app.js files.
