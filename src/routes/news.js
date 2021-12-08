require('dotenv').config()
const express = require('express'); 
const newsRouter = express.Router();
const axios = require('axios');
const API_key = process.env.API_key;
console.log(API_key);
newsRouter.get("", async(req,res) => {
    
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${API_key}`);
        res.render("news",{articles: newsAPI.data});
    } catch (err) {
        if(err.response){
             console.log(err.response.data); 
             console.log(err.response.status);
             console.log(err.response.headers);
        }
        else if(err.requiest){
            console.log(err.requiest);
        }
        else {
             console.error("Error: ", err.message); 
        }
    }

});
newsRouter.post("", async(req,res) =>{
      try {
        const search = req.body.search;
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=eddc112fa3a04dc7b21ac4354fa91499`);
        res.render("news",{articles: newsAPI.data});
          
      } catch (error) {
        if(err.response){
            console.log(err.response.data); 
            console.log(err.response.status);
            console.log(err.response.headers);
       }
       else if(err.requiest){
           console.log(err.requiest);
       }
       else {
            console.error("Error: ", err.message); 
       }
      }
});

module.exports = newsRouter;