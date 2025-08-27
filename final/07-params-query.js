const express = require('express');
const app=express()
const {products} =require('./data')

app.get('/',(req,res)=>{

res.send('<h1>Home Page </h1><a href="/api/products">Products</a>')
})

app.get('/api/products/:productId/reviews/:reviewID',(req,res)=>{
   
   res.send('hello world')    
})


app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit}=req.query
    let sortedProducts=[...products]

if(search){
    sortedProducts=sortedProducts.filter((product)=>{
        return product.name.startsWith(search)
    })
}

if(limit){
    sortedProducts=sortedProducts.slice(0,Number(limit))
}

if(sortedProducts.length<1){
//OR
return res.status(200).json({ success: true , data:[] });
   // res.send('hello world')
}
return res.status(200).json(sortedProducts)
});
app.get('/api/products/:productId',(req,res)=>{
   // const newProducts =products.map((product)=>{
     //   const {id,name,image}=product
       // return {id,name, image}
       //console.log(req)
       //console.log(req.params)
    const {productId}=req.params;
    
    const singleProduct= products.find((product)=>product.id===Number(productId))
    //res.json(newProducts)
    if (!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    return res.json(singleProduct)
})



app.listen(5000,() =>{
    console.log('Server is listening on port 5000')
})


