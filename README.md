# Customer-Mongodb

This module lets you perform CRUD operations on a local mongoDB with csv file saved and downloaded.


#Usage
 ##Action Routes
 

# Install

  - npm install
  - MongoDB required to be installed locally.
    
# Usage
## Action Routes
- http://localhost:3001/download Downloads csv
- http://localhost:3001/customers GET all customers and saves a csv file.
- http://localhost:3001/customers POST to add a customer to the mongoDB
- http://localhost:3001/customers/:id GET One Customer
- http://localhost:3001/customers/:id Patch(updates) One Customer
- http://localhost:3001/customers/:id Delete One Customer

