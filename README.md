Hero Tracker API

Introduction

The Hero Tracker API is a Rails-based backend API designed to track heroes and their superpowers. It provides a comprehensive set of endpoints to manage heroes, powers, and their relationships. This README file provides detailed information on installation, usage, available routes, models, validations, and more.

Table of Contents
Installation
Usage
Available Routes
Models and Associations
Validations
Contributing
License
Contact
Installation
To install and set up the Hero Tracker API, follow these steps:

Clone the repository:

bash
Copy code
$ git clone https://github.com/your/repository.git
Navigate to the project directory:

bash
Copy code
$ cd hero-tracker-api
Install the required dependencies:

bash
Copy code
$ bundle install
Set up the database:

bash
Copy code
$ rails db:create
$ rails db:migrate
$ rails db:seed
Start the server:

bash
Copy code
$ rails server
Congratulations! The Hero Tracker API is now up and running on your local machine.

Usage
The Hero Tracker API provides a set of endpoints to interact with the heroes and powers. Here's how you can use the API:

Make HTTP requests to the available routes using tools like cURL, Postman, or your preferred API client.
Authenticate your requests using the provided API key or token (if required).
Send requests with the appropriate HTTP methods (GET, POST, PATCH, DELETE) and necessary parameters.
Handle the JSON responses returned by the API to process the requested data.
Enjoy utilizing the Hero Tracker API to track heroes and their superpowers!

Available Routes
The Hero Tracker API offers the following routes:

GET /heroes: Retrieve information about all heroes.
GET /heroes/:id: Retrieve information about a specific hero.
GET /powers: Retrieve information about all powers.
GET /powers/:id: Retrieve information about a specific power.
POST /heroes: Create a new hero.
POST /powers: Create a new power.
PATCH /heroes/:id: Update the details of a specific hero.
PATCH /powers/:id: Update the details of a specific power.
DELETE /heroes/:id: Delete a specific hero.
DELETE /powers/:id: Delete a specific power.
For detailed information about the request formats and responses for each route, please refer to the API documentation.

Models and Associations
The Hero Tracker API includes the following models and associations:

Hero: Represents a hero and has many powers through HeroPower.
Power: Represents a superpower and has many heroes through HeroPower.
HeroPower: Represents the join table between heroes and powers, belonging to both.
The models and their associations are set up in the respective model files. Refer to the code in the app/models directory for more details.

Validations
The Hero Tracker API applies the following validations to ensure data integrity:

HeroPower Model:

strength field must be one of the following values: 'Strong', 'Weak', 'Average'.
Power Model:

description must be present and at least 20 characters long.
These validations are implemented in the corresponding model files.