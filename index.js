const functions = require('firebase-functions');
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://todomylist-ccd88.firebaseio.com"
});

const graphql = require("./src/graphql");



exports.graphql = functions.https.onRequest(graphql);
