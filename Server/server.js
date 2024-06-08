const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()
const ExpressGql =require("express-graphql");
 const mongoose = require("mongoose");
const animEvent = require('./models/animations');
var cors = require('cors')

const {
    GraphQLID, buildSchema,graphiql
}  = require("graphql");


const app = express();
 app.use(bodyParser.json());
app.use(cors())

const events = [];
app.use('/graph',ExpressGql.graphqlHTTP({
    schema:buildSchema(`
    type Event {
        _id:ID!,
        title:String!,
        fileName:String!,
        description:String!,
        tags:String!,
        date:String!

    }

    input EventInput{
        title:String!
        description:String!
        tags:String!,
        fileName:String!,
        date:String
    }

    type RootQuery {
        events:[Event!]!
    }
    
    type RootMutation{
        createEvent(eventInput:EventInput):Event
    }
    
    schema{
        query:RootQuery,
        mutation:RootMutation
    }`),
    rootValue:{
        events:()=>{
           return animEvent.find().then(result=>{
                return result.map(event=>{
                    return {...event._doc}
                })
            }).catch(err=>{
                console.log(err)
            })
            return events
        },
        createEvent:(args)=>{
            console.log(args)
            const event = {
                _id:Math.random().toString(),
                title:args.eventInput.title,
                description:args.eventInput.description,
                tags:+args.eventInput.price,
                date:new Date().toISOString()

            }
            const Anim = new animEvent({ 
                title:args.eventInput.title,
                fileName:args.eventInput.fileName,
                description:args.eventInput.description,
                tags:args.eventInput.tags,
                date:new Date().toISOString()
            })
            Anim.save().then((result)=>{
                console.log("result")
                return {...result._doc}
            }).catch(err=>{
                console.log(err)
            })
            // events.push(event)
            // return event;
            // const eventName = args.name;
            // return eventName;
        }
    },
    graphiql:true
}));


// mongoose.connect("mongodb://127.0.0.1:27017/animation-managers").then(()=>{
//     console.log("Mongo Client Connected")
// }).catch(err=> console.log("Mongo Connection - Error", err))

console.log("MONGO_CLIENT",process.env.MONGO_CLIENT,new Date().toISOString())
mongoose.connect(process.env.MONGO_CLIENT).then(()=>{
    console.log("Mongo Client Connected")
}).catch(err=> console.log("Mongo Connection - Error", err))

app.listen(8080)