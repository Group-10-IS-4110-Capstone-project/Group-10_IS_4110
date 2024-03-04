
const jwt =require('jsonwebtoken');
const UnderGraduateModel = require('../models/UnderGraduate');


const protectRoute = async(req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error: "Unauthorized - No Token Provided"})
        }
        const decoded = jwt.verify(token, "10");

        if(!decoded){
            return res.status(401).json({error: "Unauthorized - invalid token"})
        }

        const user = await UnderGraduateModel.findById(decoded,userId).select("-password");

        if(!user){
            return res.status(404).json({error: "User not found"})
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute middleware",error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)
  
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }
    
  
    jwt.verify(token, '10', (err, decoded) => {
      if (err) {
        console.log(err)
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
      }
      
  
      req.userId = decoded.userId;
      next();
    });
  };
  


module.exports = {protectRoute ,verifyToken};