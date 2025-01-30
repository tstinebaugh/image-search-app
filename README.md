Fullstack Web Prototype

I chose to use the Pixabay API to fetch images, which is available to view in /src/services/imageApi.ts.

I assumed the standard Pixbay API response of 20 images was good enough for this demo.
If I were to improve the website, I would include pagination and a user-selectible number of images to return.

The styling is pretty basic, but flexible enough to support both mobile and desktop sized browsers.

The images provided in the app are small urls associated with images, but the ZIP download option contains
the full-resolution images via the largeImageURL field.

I decided to break up the components into the search page, image gallery, and selection bar.
This seemed like a logical balance between having too many small files, and files being too big.
If the code got more complicated, I would probably separate the individual images from the gallery.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
