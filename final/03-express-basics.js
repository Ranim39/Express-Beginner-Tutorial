const express =require('express');
const app=express();

app.get('/',(req,res)=>{
    console.log('user hit the rrsource')
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>RESOURCE not found</h1>');
} )
app.listen(5000,()=>{
    console.log('server is litening on port 5000')
})

