\documentclass[12pt,a4paper]{article}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{parskip}

\title{\textbf{Backend MERN Development Repository}}
\author{}
\date{}

\begin{document}

\maketitle

This repository contains a comprehensive, step-by-step progression through backend development using the MERN (MongoDB, Express.js, React, Node.js) stack. It spans from fundamental Node.js concepts to building a full-stack application with a RESTful API and a React frontend.

Below is an in-depth breakdown of the contents and concepts covered in each lecture and practice set module.

\section{Course Progression and Lecture Details}

\subsection{Lecture 3, 4, 5 \& 6: Core Node.js and HTTP Basics}
These initial modules establish the foundation of backend development using standard Node.js without frameworks.
\begin{itemize}
    \item \textbf{Server Creation:} Utilizing the core \texttt{http} module to spin up a server and listen to incoming network requests.
    \item \textbf{Request and Response Lifecycle:} Understanding how to parse request headers and URLs, and how to format responses.
    \item \textbf{File System Module (\texttt{fs}):} Reading from and writing to local files (\texttt{user.txt}, \texttt{data.txt}, \texttt{user.js}) to achieve basic data persistence.
\end{itemize}

\subsection{Lecture 7: Error Handling (\texttt{lecture-7-errors})}
Focuses on the robustness of Node.js applications.
\begin{itemize}
    \item \textbf{Syntax vs. Runtime Errors:} Identifying and resolving different types of errors during execution (\texttt{syntax.js}).
    \item \textbf{Debugging:} Techniques for tracing and isolating issues in a basic server setup.
\end{itemize}

\subsection{Lecture 8 \& 9: Introduction to Express.js (\texttt{lecture-8-intoExpress}, \texttt{lecture-9})}
Transitioning from standard Node.js to the Express.js framework.
\begin{itemize}
    \item \textbf{Express Setup:} Initializing an Express application and replacing the standard \texttt{http} server boilerplates.
    \item \textbf{Middleware Integration:} Understanding the middleware pipeline, handling request parsing, and using \texttt{next()} functions.
    \item \textbf{Basic Routing:} Implementing simple HTTP methods (GET, POST) to handle client requests.
\end{itemize}

\subsection{Lecture 10: Building an Application Structure (\texttt{lecture-10-airbnb})}
Initiating a project-based approach by building an Airbnb-style application.
\begin{itemize}
    \item \textbf{Routing Separation:} Splitting routes into dedicated files (\texttt{userRouter.js}, \texttt{hostRouter.js}) for better maintainability.
    \item \textbf{Serving HTML:} Sending raw HTML files (\texttt{home.html}, \texttt{addHome.html}) as responses to the client.
    \item \textbf{Utility Modules:} Using \texttt{pathUtil.js} to reliably construct file paths across different operating systems.
\end{itemize}

\subsection{Lecture 11: Styling and Static Assets (\texttt{lecture-11-airbnb-styling})}
Enhancing the visual presentation of the application.
\begin{itemize}
    \item \textbf{Static Directories:} Utilizing \texttt{express.static()} to serve CSS (\texttt{home.css}, \texttt{input.css}) and image files directly to the browser.
    \item \textbf{Frontend Linking:} Properly linking stylesheets within the served HTML documents.
\end{itemize}

\subsection{Lecture 12: Dynamic UI Rendering (\texttt{lecture-12-DynamicUI})}
Moving from static HTML to dynamic template generation.
\begin{itemize}
    \item \textbf{View Engines:} Integrating Embedded JavaScript (EJS) to dynamically render data on the server before sending it to the client (\texttt{home.ejs}, \texttt{addHome.ejs}).
    \item \textbf{Partials:} Abstracting common UI elements (like navigation bars and \texttt{head.ejs} metadata) into reusable components.
\end{itemize}

\subsection{Lecture 13: Model-View-Controller Architecture (\texttt{lecture-13-MVC})}
Refactoring the application into the industry-standard MVC design pattern.
\begin{itemize}
    \item \textbf{Controllers:} Creating dedicated controller files (\texttt{hostController.js}, \texttt{storeController.js}) to handle business logic and isolate it from the routing layer.
    \item \textbf{Models:} Introducing class-based models (\texttt{home.js}) to encapsulate data logic and handle read/write operations to JSON files (\texttt{homes.json}).
    \item \textbf{Views:} Organizing EJS files into modular folders (\texttt{views/host}, \texttt{views/store}).
\end{itemize}

\subsection{Lecture 14: Dynamic Paths (\texttt{lecture-14-Dynamic-Paths})}
Handling dynamic URL structures and relational data.
\begin{itemize}
    \item \textbf{Route Parameters:} Extracting variables from the URL (e.g., \texttt{/homes/:homeId}) to fetch specific resources.
    \item \textbf{Query Strings:} Utilizing URL query parameters for filtering and search functionalities.
    \item \textbf{Cross-referencing Data:} Managing a favorites system (\texttt{favourite.json}, \texttt{favourite.js}) that references IDs from the main homes dataset.
\end{itemize}

\subsection{Lecture 15: Introduction to SQL (\texttt{lecture-15-Intro-SQL})}
Shifting data persistence from local JSON files to a relational database.
\begin{itemize}
    \item \textbf{Database Connection:} Establishing a connection to a SQL database (\texttt{databaseUtil.js}).
    \item \textbf{Query Execution:} Replacing file-system operations in the models with raw SQL queries to INSERT, SELECT, UPDATE, and DELETE data.
\end{itemize}

\subsection{Lecture 16: MongoDB Integration (\texttt{lecture-16-MongoDB})}
Transitioning to NoSQL data structures.
\begin{itemize}
    \item \textbf{MongoDB Driver:} Configuring the native MongoDB Node.js driver (\texttt{databaseUtil.js}).
    \item \textbf{Collections and Documents:} Refactoring the application to work with BSON documents rather than relational tables.
\end{itemize}

\subsection{Lecture 17: Mongoose ODM (\texttt{lecture-17-Mongoose})}
Streamlining MongoDB interactions using Object Data Modeling.
\begin{itemize}
    \item \textbf{Schemas and Models:} Defining strict schemas for \texttt{Home} and \texttt{Favourite} entities to enforce data integrity.
    \item \textbf{Instance Methods and Queries:} Utilizing Mongoose's built-in methods for complex querying and document manipulation.
\end{itemize}

\subsection{Lecture 18: Cookies and Sessions (\texttt{lecture-18-CookiesAndSessions})}
Implementing stateful interactions over the stateless HTTP protocol.
\begin{itemize}
    \item \textbf{Cookies:} Sending, parsing, and storing cookies on the client side.
    \item \textbf{Session Management:} Using session middleware to persist user state (like login status) across multiple page reloads.
    \item \textbf{Authentication Basics:} Creating login routes (\texttt{authRouter.js}) and corresponding views (\texttt{login.ejs}).
\end{itemize}

\subsection{Lecture 19: Authentication and Authorization (\texttt{lecture-19-Authentication and Authorisation})}
Securing the application.
\begin{itemize}
    \item \textbf{User Modeling:} Creating a \texttt{User} schema (\texttt{model/user.js}) to store account details.
    \item \textbf{Password Hashing:} Securing user credentials using hashing algorithms before saving them to the database.
    \item \textbf{Route Protection:} Implementing middleware to block unauthenticated users from accessing protected host or store routes.
    \item \textbf{Signup Flows:} Building registration interfaces (\texttt{signup.ejs}) and logic.
\end{itemize}

\subsection{Lecture 20: Image Upload and Download (\texttt{lecture-20-Image Upload And Download})}
Handling complex multipart form data.
\begin{itemize}
    \item \textbf{Multer Middleware:} Configuring Multer to intercept incoming file uploads and save them safely to the server's file system (\texttt{Uploads/} directory).
    \item \textbf{Static File Serving:} Adjusting Express configurations to serve user-uploaded assets back to the client.
\end{itemize}

\subsection{Lecture 21: REST API \& Client Separation (\texttt{lecture-21-REST API - JSON Request})}
Decoupling the frontend and backend to build a modern single-page application (SPA) architecture.
\begin{itemize}
    \item \textbf{Todo Backend:} Building a completely stateless Node/Express REST API (\texttt{todo-backend}) that communicates exclusively via JSON rather than rendering HTML.
    \item \textbf{Todo Frontend:} Utilizing a Vite-powered React application (\texttt{todo-frontend}) to consume the API, handling UI state, fetching data, and posting updates.
    \item \textbf{CORS:} Managing Cross-Origin Resource Sharing to allow the React frontend to communicate with the Node backend safely.
\end{itemize}

\section{Practice Sets}
The repository includes corresponding practice directories (\texttt{practice-set-1} through \texttt{practice-set-6}). These directories contain isolated coding challenges designed to reinforce the topics covered in the main lectures, specifically testing basic routing, Express middleware pipelines, handling 404 pages (\texttt{404.html}), and view rendering.

\section{Setup and Installation}
To run any individual module within this repository:

\begin{enumerate}
    \item Open your terminal and navigate to the specific lecture or practice set directory.
    \begin{verbatim}
cd lecture-13-MVC
    \end{verbatim}
    
    \item Install the necessary dependencies defined in the \texttt{package.json}.
    \begin{verbatim}
npm install
    \end{verbatim}
    
    \item Start the application. Most modules are configured to run via \texttt{app.js} and utilize \texttt{nodemon} for hot-reloading.
    \begin{verbatim}
npm start
    \end{verbatim}
\end{enumerate}

\textit{Note: For database-dependent lectures (Lecture 15 onwards), ensure you have a running instance of MySQL or MongoDB and update the connection strings in the respective \texttt{utils/databaseUtil.js} or \texttt{app.js} files.}

\end{document}
