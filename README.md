# Starter redux assessment: Doggiegram

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available scripts

In the project directory, you can run the following commands:

### `npm install`

Installs the project dependencies, including Redux packages such as @reduxjs/toolkit and react-redux.

### `npm run dev`

Runs the React app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Runs an Express API at `http://localhost:3004` that exposes a single endpoint, `GET /api/suggestion`, which returns a dog suggestion at random.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Runs the test suites.

###

![ui requirement](doggiegram.png)

# Create React App Starter Code

## Existing Files

The starter code uses a typical Create React App folder structure. The component files have been set up for you. You can follow along with the lesson to complete the rest of the implementation.

### File Path

| File Path        | Description                                                                          |
| ---------------- | ------------------------------------------------------------------------------------ |
| src/app/store.js | Creates the Redux store, which is connected to several slice reducers.               |
| src/app/index.js | Contains the entry point to the React application.                                   |
| src/App.js       | Contains the App component which wraps the other components.                         |
| src/features     | Contains the application components for the photos, search, and suggestion features. |
| src/server       | Contains a server that the React app can use to get data through HTTP requests.      |

Go ahead and spend some time familiarizing yourself with the provided files.

## Add a New Photo

A user should be able to add a photo to their collection. In the Add a dog section, when a user enters an image URL and a caption for the photo, the photo should appear in the list of photos displayed below.

In the `src/features/photos/photos.slice.js` file, complete the following task:

- Task 1: Create an addPhoto() case reducer that adds a photo to the state.

In the `src/features/photos/create/index.js` file, complete the following tasks:

- Task 2: Import the useDispatch() method from the appropriate package.
- Task 3: Import the addPhoto() action creator from the photos slice.
- Task 4: Store a reference to the Redux store's dispatch method in a variable called dispatch.
- Task 5: Dispatch the addPhoto()action creator, passing in the form data.
