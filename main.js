import "dotenv/config";
import express from "express";
import {
  InteractionType,
  InteractionResponseType,
  InteractionResponseFlags,
  MessageComponentTypes,
  ButtonStyleTypes,
} from "discord-interactions";
import {
  VerifyDiscordRequest,
  DiscordRequest,
} from "./utils.js";
//import {testModal} from './modules/testModal.js';
//import {ruffleCreationModal} from './modules/ruffle.js';


// Create an express app
const app = express();

// Get port, or default to 3000
const PORT = process.env.PORT || 3000;

// Parse request body and verifies incoming requests using discord-interactions package
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

//Interactions endpoint
app.post('/interactions', async function (req, res){
  const {type, id, data} = req.body;

  if(type === InteractionType.PING){
    console.log(`Received ping interaction at ${Date()}`);
    return res.send({type: InteractionResponseType.PONG});
  }
  
  if(type === InteractionType.APPLICATION_COMMAND){
    
    const {name} = data;
    
    if(name === 'test'){
      console.log(`Received test command at ${Date()}`);
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: 'Hello world',
        },
      });
    }
    /*if(name == 'test-modal'){
      return res.send(testModal);
    }
    if(name === 'ruffle-creation'){
      return res.send(ruffleCreationModal);
    }*/
  }
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});