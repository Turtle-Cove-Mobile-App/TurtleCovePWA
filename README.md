# Turtle Cove Mobile App Documentation

Computer Science 411 (Zac and Jeremiah)

## Description

The Turtle Cove Mobile App is a companion app for the Turtle Cove Environmental Research Station. It is built as a Progressive Web App that is to be hosted on a web server and accessed via a URL like a traditional website. It is intended to be used to help people learn about the facility and the surrounding area as well as improve their experience while they are visitors there. It will provide any important information about the research station and the surrounding area, guide them on the boardwalk tour at the facility, and provide an informational tour along the Manchac Greenway.

## Technologies Used

-	Ionic 4
-	Angular 8
-	TypeScript
-	Node.JS
-	HTML
-	Sass

## Maintenance Guide
### *This is what a terminal command in the guide looks like. -> `terminal command`
#### Setting up the development environment
1.  Pull the repo to a project directory of your choosing.
2.  If not already installed, install the latest LTS release of Node.JS from https://nodejs.org/en/.
3.  Open a terminal and run `npm install -g ionic`.
4.  In the terminal, navigate to the newly pulled project directory.
5.  Run `npm install`.
#### Testing and Building the project 
1.  To test a live development version of the app locally, run `ionic serve`.
2.  To test a live production version of the app locally, run `ionic serve`.
3.  To build a development build of the app, run `ionic build`.
4.  To build a production build of the app for release, run `ionic build –prod`.
5.  If the app will be hosted in a directory other than the root directory of the web server, then an extra build parameter should be added like so. `ionic build --prod -- --base-href=/path/to/app/root/www/`

    The `scope` and `start_url` values should also be updated to the directory at which the app will be hosted at. E.g. `"start_url": "/path/to/app/root/www/”`
  ##### Note: Builds will go into the `/www` directory within the project folder
