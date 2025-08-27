const authorize =(req,res,next) =>{
const {user}=req.query;
//http://localhost:5000/?user=john
if (user === 'john'){
    req.user = {name:'john',id:3}
    next()
}
else{
    res.status(401).send('Unauthorized')
    next()
}
}

module.exports =authorize