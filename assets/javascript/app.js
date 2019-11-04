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

//Click function takes data from the form and uploads it to firebase 
$('#submit').on('click', function(e){
    e.preventDefault(); 

    //grabs the user input from the form
    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrainTime').val().trim(); //Need to work on this line of code,
    var frequencyMin = $('#frequencyMin').val().trim(); //Need to work on this line of code,

    //Create a local 'temporary' object for holding train data
    var newTrain = {
        name: trainName,
        destination: destination,
        time: firstTrainTime,
        frequency: frequencyMin
    };

    //Uploads this data to firebase database
    database.ref().push(newTrain);

    //Log everything in the console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firstTrainTime);
    console.log(newTrain.frequencyMin);

    alert('Train Successfully Added');
    
    //Clear all the input from the form 
    $('#trainName').val("")
    $('#destination').val("")
    $('#firstTrainTime').val("")
    $('#frequencyMin').val("")
});







})