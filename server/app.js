const express = require('express'); 
const getCorrections = require('./modules/grammarCorrector');
const transcribeMP3 = require('./modules/voiceHandler');
  
const app = express(); 
const PORT = 3000;

//Consider what informations we get from or send to the backend
//Can be useful to list out first

//test endpoint
app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 

//Example use case: Record voice and fix grammar
// - Send voice recording
// -----in between------
// Process with voice handler, send response to grammar corrector, extract response
// -----in between------
// - Get back some response from GPT

//BONUS, read about REST API and generate a better design
// Think about what you want from the corrections, do you want to store them?

app.post('/grammar_corrector', (req, res)=>{ 

    //response: composed of status and body,
    //status : 2xx success, 4xx client-server error, 5xx server error
    //response: here, would the GPT response
    res.status(200); 
    res.send("Welcome to root URL of Server"); 
}); 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 