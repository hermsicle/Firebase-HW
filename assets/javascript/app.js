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
    $('#submit').on('click', function (e) {
        e.preventDefault();

        //grabs the user input from the form
        var trainName = $('#trainName').val().trim();
        var destination = $('#destination').val().trim();
        var firstTrainTime = moment($('#firstTrainTime').val().trim(), 'h:mm:ss a').format('X');
        var frequencyMin = moment($('#frequencyMin').val().trim(), 'minutes').format('X');

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

    //Create a firebase event that adds train to the database and create a row in the HTML for new trains
    database.ref().on('child_added', function (childSnapshot) {
        console.log(childSnapshot.val());//This logs all the data that was uploaded earlier

        //Store everything into a variable.
        var trainName = childSnapshot.val().name;
        var destination = childSnapshot.val().destination;
        var firstTrainTime = childSnapshot.val().time;
        var frequencyMin = childSnapshot.val().frequency;

        //Train Name
        console.log(trainName);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(frequencyMin);

        //Calculate the arrival of the next train


        //Create a new row in the html
        var newRow = $('<tr>').append(
            $('<td>').text(trainName),
            $('<td>').text(destination),
            $('<td>').text(firstTrainTime),
            $('<td>').text(frequencyMin),
            // $('<td>').text(trainArrival),
        );

        //Append thw new row to the table
        $('#train-table > tbody').append(newRow);
    });

    
})