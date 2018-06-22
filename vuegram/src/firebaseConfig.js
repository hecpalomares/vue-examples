import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyD71lyLWd4atYGjFCINoUnk-F94ZYnWLBA",
    authDomain: "vuegram-mx.firebaseapp.com",
    databaseURL: "https://vuegram-mx.firebaseio.com",
    projectId: "vuegram-mx",
    storageBucket: "vuegram-mx.appspot.com",
    messagingSenderId: "246098603616"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
  db,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
