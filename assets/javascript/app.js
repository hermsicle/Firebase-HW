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
    //console.log(database);
    
//Create a button for adding new trains
//Create a way to retreive data from firebase and implement it to the train database
//Create a way to show the current times and train arrivals

//create a function that takes the values from the forms and input it to the trains section
$('#submit').on('click', function(e){
    e.preventDefault(); 

    //grabs the user input from the form
    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrainTime').val().trim();
    var frequencyMin = $('#frequencyMin').val().trim();

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
    
    
})







})