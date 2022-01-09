const mongoose   = require("mongoose"),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      expressSession = require("express-session"),
      User = require("./models/userModel")
      bodyParser = require("body-parser"),
      express    = require("express"),
      app        = express();

//Routes
const indexRoutes = require("./routes/indexRoutes"),
      adminRoutes = require("./routes/adminRoutes");
      productRoutes = require("./routes/productRoutes");

//App Config
mongoose.connect("mongodb://localhost/nsshop");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//Passport Config
app.use(require("express-session")({
    secret:"guvenlik cumlesi",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Current User Info
app.use((req, res, next)=>{
    res.locals.currentUser=req.user;
    next();
});
//Routes Using
app.use(indexRoutes)
app.use(adminRoutes)
app.use(productRoutes)
const server = app.listen(3000, (err)=>{
    if(err){
        console.log(err)
    }console.log('okey started. port : %d', server.address().port);
})