const express = require ('express')
const axios = require ('axios')
const _ = require ('lodash')

const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.listen(9999)

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());


app.get('/', (req, res) => {
    
    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]

      let ramCompliments = _.sample(compliments)

      let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]      
      
      let ramColor = _.sample(colors)
    //   res.set('Content-Type', 'application/javascript');

    res.render('index',
            { compliments : ramCompliments,
                    color : ramColor })

})

app.get('/:name', (req, res) => {
    
    let clientName = req.params.name

    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]

      let ramCompliments = _.sample(compliments)

      let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]      
      
      let ramColor = _.sample(colors)
    //   res.set('Content-Type', 'application/javascript');

    res.render('index',
            { compliments : ramCompliments,
                    color : ramColor, 
                    clientName : clientName })

})

app.get('/details', (req, res) => {
    
    let compliments = [
        "Your instructors love you",
        "High five = ^5",
        "Shut up and take my money",
        "It's almost beer o'clock",
        "The Force is strong with you"
      ]

      let ramCompliments = _.sample(compliments)

      let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]      
      
      let ramColor = _.sample(colors)
    //   res.set('Content-Type', 'application/javascript');

      let object = {
        "color" : ramColor,
        "compliments" : ramCompliments
      }

    res.json(object)

})