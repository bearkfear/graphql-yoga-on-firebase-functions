const functions = require('firebase-functions');
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");
// this code is find on console.firebase.google.com/yourproject on settings
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "your-database-url"
});

const graphql = require("./src/graphql");



exports.graphql = functions.https.onRequest(graphql);
