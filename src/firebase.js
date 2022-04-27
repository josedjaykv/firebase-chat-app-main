import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAzbNMxOMybpKJbPTBvwL6MglgK8zYVTpA",
  authDomain: "firechat-44f6b.firebaseapp.com",
  projectId: "firechat-44f6b",
  storageBucket: "firechat-44f6b.appspot.com",
  messagingSenderId: "756810814726",
  appId: "1:756810814726:web:2bbc41f3619cb64de1fa87",
  measurementId: "G-DC2NVLS4K9"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }