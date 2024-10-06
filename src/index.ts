import express from "express"

const app = express();

//password logic
app.post("/hooks/catch/:userID/:zapId", (req ,res)=>{
    const userId = req.params.userID;
    const zapId = req.params.zapId;

    // dtore db in a new trigger

    //push it on to a queue (kafka/redis)


})