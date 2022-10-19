const express = require('express');
const connectDB = require('./server/config/db');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();
const Client = require('./server/models/user/client')
var session = require('express-session');
const MongoStore = require('connect-mongo');
const  http= require('http').Server(app);

 console.log(process.env.MONGOLAB_URL)

// Connect Database
connectDB();
//
// const httpServer = require('http').createServer();
// httpServer.timeout = 25 * 1000;
// httpServer.keepAliveTimeout = 70 * 1000;
// httpServer.headersTimeout = 120 * 1000;
// Init Middleware
//app.use(express.json({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, './server/public/images')))
app.use('/static', express.static(path.join(__dirname, './server/public/videos')))
//app.use('/static', express.static(path.join(__dirname, './server/public/images/postImages')))

// firebase


//session
app.use(session({
  secret: 'keyboard nexus',
  saveUninitialized: false,
  cookie :{maxAge:360000000000000},
  store: MongoStore.create({ mongoUrl: process.env.MONGOLAB_URL })
}))

//


// middleware
const auth = require("./server/middlewares/isAuth");

// use Routes
//const userRoutes = require('./server/routes/api/user.js')
const clientRoute = require('./server/routes/web/client.js')
const resetPasswordRoutes = require('./server/routes/web/resetPassword.js');
//const loginRoutes = require('./server/routes/web/login.js')
const addSales = require('./server/routes/web/sales')
const clientSaleById = require('./server/routes/web/clientSaleById')
const clientRole = require('./server/routes/web/currentUserRole')

// web routes  otpVerification


//app.use('/api/user', userRoutes)
app.use('/web/client', clientRoute)
app.use('/web/reset-password', resetPasswordRoutes)
//app.use('/web/login', loginRoutes)
app.use('/web/sales', addSales)
app.use('/web/client/sale', clientSaleById)
app.use('/web/get-role', clientRole)






//web

app.get("/api/welcome",auth, (req, res) => {
    console.log(req.session)
    res.status(200).send("Welcome 🙌 ");
  });

//

app.post('/web/login',  async function (req, res){  
  const {password,phone_number} = req.body;
  console.log( req.body)
  try {
      console.log(req.sessionID)
      const client = await Client.findOne({phone_number:phone_number});
      if(client)  {
          console.log(client.password)
          if(client.password ==  password){
           console.log(client.client_id)
              req.session.authenticated = true;
              req.session.user = {
                  client_id : client.client_id,
                  first_name : client.first_name
              }
              req.session.isAuth = true;
              console.log(req.session)
              res.send(client)
          }else{
              res.send("invalid password or phone number")
          }
      }else{
          res.send("not a client") 
      }
  } catch (error) { 
      res.send(error)   
  }
})

app.post("/web/logout",(req, res) => {
    console.log("this is logout")
    req.session.destroy((err)=>{
         if(err) throw err;
        res.send("session destroy")
       
    })
  });



const port = process.env.PORT || 4000;

http.listen(port, () => console.log(`Server running on port ${port}`));