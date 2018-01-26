# lyft_assignment

##Technical Sample for Lyft
##Accepts a POST request to the route “/test” which accepts two arguments “x” and “y” and returns a JSON object {“sum”: x+y}

To run in a terminal 
1. git clone https://github.com/clockwrk/lyft_assignment.git
2. cd lyft_assignment
3. npm install
4. node app.js
5. Press command + T
5. In new terminal window, curl -X POST https://localhost:3000/test --data '{"x": 4, "y": 2}' -H 'Content-Type: application/json'

Observe you will get back an object with a key of sum and a value of 6.
