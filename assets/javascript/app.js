$(document).ready(function () {
    let firebaseConfig = {
        apiKey: "AIzaSyASWqpxfGdsi7mQCq-7zIfL66lXocyZsZk",
        authDomain: "train-time-database88.firebaseapp.com",
        databaseURL: "https://train-time-database88.firebaseio.com",
        projectId: "train-time-database88",
        storageBucket: "train-time-database88.appspot.com",
        messagingSenderId: "224255532992",
        appId: "1:224255532992:web:9af7d286016333c33a3225"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();
    console.log(database);
    

//create a function that takes the values from the forms and input it to the trains section

$('#submit').on('click', function () {
    let trainName = $('#trainName').val();
    trainName.append('#newTrain');
    
})








})