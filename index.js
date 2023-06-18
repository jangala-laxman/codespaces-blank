const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user_router')
const sitesRouter = require('./routes/sites_router')
const dronesRouter = require('./routes/drone_router')
const missionRouter = require('./routes/mission_router')
const verifyToken  = require('./config/auth')
const cookieParser = require('cookie-parser')


mongoose.connect('mongodb+srv://srilaxman48:L1u9c9k9y@cluster0.zwtmwnc.mongodb.net/flytbase'
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connection successful');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', verifyToken,(req, res) => {
  res.send('hi there');
});

app.use('/user', userRouter)
app.use('/sites', sitesRouter)
app.use('/drones', dronesRouter)
app.use('/missions', missionRouter)

app.listen(4000, () => {
  console.log('listening to port 4000');
});
