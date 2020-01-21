var mongoose = require('mongoose'),
    express  = require("express"),
    app      = express();


mongoose.connect('mongodb://localhost:27017/somatotype', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) {
  console.log('Database error: ' + err);
 } else {
  console.log('Successful database connection'); 
 }
});

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));




// var referenceSchema = new mongoose.Schema({
//     title: String,
//     authors: String,
//     date_published: Number   
// })

// var Afitpilot = mongoose.model("Reference", referenceSchema);

// var george = new Reference({
//     title: String,
//     authors: String,
//     date_published: Number   
// });
// // adding a new cat to the DB

// var research = new Afitpilot({

//     sport: String,
//     level: String,
//     nationality: String,
//     endomorphy: Number,
//     mesomorphy: Number,
//     ectomorphy: Number
// });

var somatotypeSchema = new mongoose.Schema({
    sport: String,
    level: String,
    country: String,
    endomorphy: Number,
    mesomorphy: Number,
    ectomorphy: Number
});

var Afitpilot = mongoose.model("Somatotype", somatotypeSchema);

// adding a new cat to the DB

// var research = new Afitpilot({

//     sport: "wrestling",
//     level: "elite",
//     country: "India",
//     endomorphy: 3,
//     mesomorphy: 6,
//     ectomorphy: 1
// });

// research.save(function(err, research){
//     if(err){
//         console.log("SOMETHING WENT WRONG!")
//     } else {
//         console.log("ME JUST SAVED SOMATOTYPE TO THE DB!")
//         console.log(research);
//     }
// });


// RESTFUL ROUTES

app.get("/", function(req, res){
    // Get all sports from DB
   Afitpilot.findOne({}, function(err, ha){
        if(err){
            console.log(err);
        } else {
            console.log(ha)
    res.render("index", {sport: ha});
        }
    }); 
});

app.get("/test", function(req, res){
    res.json("hello")
})
//  CONNECT TO PORTS
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
});

var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("ready on port 3000 " + port);
});