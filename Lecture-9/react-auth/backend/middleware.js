const jwt = require('jsonwebtoken');


const isLoggedIn = (req,res,next) => {
    
    try {
        
        const token = req.cookies.token;

        if(!token) return res.status(401).json({errorMessage:"Unautharised User"})

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user

        next();
    }
    catch (e) {
        console.log(e);
        res.status(401).json({errorMessage:"Unautharised User"})
    }
}


module.exports={isLoggedIn}
