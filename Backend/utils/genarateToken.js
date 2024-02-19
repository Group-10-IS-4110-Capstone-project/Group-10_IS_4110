const jwt = require("jsonwebtoken")

const genarateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, "10",{
        expiresIn: "15d",
    });

    req.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly : true,
        sameSite: "strick",
    });
};

module.exports = genarateTokenAndSetCookie;