## Loan Application App

This is the front end part of a loan application web app I am creating with React.JS, and the other 2 parts to this app that come together to work as a full stack web app with React and Node are the Server which also here on my GitHub, at https://github.com/shinyuy/loan-application-app-server and socket.io chat server at https://github.com/shinyuy/loan-application-chat and to get the whole app working in your machine, create a folder with 3 sub folders, by name microfinance(for the front end react app), server(for the Node.js back end) and socketServer(for the socket.io chat server), then within microfinance folder, run the following:

### `git clone https://github.com/shinyuy/loan-application-app.git`
### `npm install`
 
Then within the server folder, run the following:
### `git clone https://github.com/shinyuy/loan-application-app-server.git`
### `npm install`

Then within the socketServer folder, run the following:
### `git clone https://github.com/shinyuy/loan-application-chat.git`
### `npm install`

Then within the root folder in which all 3 folders are found run the following:
### `npm init` and press enter all through to the end.
### `npm i concurrently` to install concurrently, which makes it possible to start and run all 3 parts of the app.
Then add the following under scripts in the root folder package.json
### `"start": "concurrently \"cd server && node server.js\" \"cd microfinance && npm start\" \"cd socketServer && node socketServer.js\"",`
Save and then run the following within the root folder:
### `npm start`
With all these done correctly, the last command should start all 3 parts of the loan application app, which will print LISTENING ON PORT 5000 and connected to database for the server, then LISTENING ON PORT 4000 and and a random socket.io chat ID for the socketServer, then compiled successfully for the front end.

I will please like to say this project is not yet complete, and I am still working on it, to improve the user interface, user experience and general functionality, as well as carry out bug fixes.

I also intend to intergrate Twilio SMS functionality on it, through which applicants can get notifications regarding their loan application, as well as other account information.

