# MovieAPI app

This app is a final project for Reskill Americans.  The app is focused on
movie reviews.  It uses Express on the (node.js) server and implements a JSON
api for creating and modifying reviews.

# Database Schema

This project uses the mongo db database engine, and the mongoose database
access library.

Our database has a reviews collection with the following information for
each movie:

- id (text)
- Title (text)
- Rating (numeric score)
- Review (text)

# API

- Create (POST /reviews)
- Read (GET /reviews/:id)
- Update (PUT /reviews/:id)
- Delete (DELETE /reviews/:id)

# Questions

- Is this site just the work of a single reviewer?  Should there be multiple
  reviews per movie - or just one?

# Using this Repo

This repo uses Express, mongo, and Mongoose.  It was created via:

```
$ npx express-generator --no-view --git
```

Everything can be installed via npm:

```
$ npm install
```

To serve the app locally:

```
$ npm start
```
