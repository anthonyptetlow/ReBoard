#ReBoard
A scrum board view of tasks in redmine.


##Running the Application
To run the server you need to get an authentication key from redime:

- First you have to check Enable REST API in Administration -> Settings -> Authentication.
- Then you can find your API key on your account page ( /my/account ) when logged in, on the right-hand pane of the default layout.

Then to start the server navigate to the root of the project and run:

    npm install;
    key="INSERT_YOUR_API_KEY_HERE" node server


##Developing the applciaiton
The following technologies are used in the front end of the in the application:
    - AngularJs (with various plugins)
    - Bootstrap
The Back end is build with the following tools:
    - NodeJS
    - ExpressJS Web framework

When developing the application you can run the following to build the angular application:

    gulp build

This will concatinate js files, compile less files and copy there along with html partials, libraries and other assets into public for the node server to access .