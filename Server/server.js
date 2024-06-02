const express = require("express");
const bodyParser = require("body-parser");

const ExpressGql =require("express-graphql");
 const mongoose = require("mongoose");

const {
    GraphQLID, buildSchema,graphiql
}  = require("graphql");


const app = express();

app.use(bodyParser.json());

const events = [];
app.use('/graph',ExpressGql.graphqlHTTP({
    schema:buildSchema(`
    type Event {
        _id:ID!,
        title:String!,
        description:String!,
        price:Float!,
        date:String!

    }

    input EventInput{
        title:String!
        description:String!
        price:Float!
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
            return events
        },
        createEvent:(args)=>{
            console.log(args)
            const event = {
                _id:Math.random().toString(),
                title:args.eventInput.title,
                description:args.eventInput.description,
                price:+args.eventInput.price,
                date:new Date().toISOString()

            }
            events.push(event)
            return event;
            // const eventName = args.name;
            // return eventName;
        }
    },
    graphiql:true
}));


mongoose.connect("mongodb://127.0.0.1:27017/animation-managers").then(()=>{
    console.log("Mongo Client Connected")
}).catch(err=> console.log("Mongo Connection - Error", err))

app.listen(8080)