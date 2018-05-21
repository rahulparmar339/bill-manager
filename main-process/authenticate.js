const {ipcMain} = require('electron')
const firebase = require("firebase")

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAmmELbILcuPJMGwRSkFF8XK89_4plqPNg",
	authDomain: "bill-manager-433f8.firebaseapp.com",
	databaseURL: "https://bill-manager-433f8.firebaseio.com",
	projectId: "bill-manager-433f8",
	storageBucket: "bill-manager-433f8.appspot.com",
	messagingSenderId: "287160312260"
}
firebase.initializeApp(config)


ipcMain.on('login', (event, arg) => {
	var email = arg.email
	var password = arg.password
	firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(user){
    event.returnValue = {successfull: true, user: user};
  })
  .catch(function(error) {
    event.returnValue = {successfull: false, error: error};
  });
})

/*
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log('user '+user)
  } else {
    // No user is signed in.
    console.log('user '+user)
  }
});
*/