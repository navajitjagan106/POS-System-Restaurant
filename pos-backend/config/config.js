require("dotenv").config()

const config=Object.freeze({
    port:process.env.PORT||3000,
    databaseURI:process.env.MONGODB_URI||"mongodb://localhost:2701",
    nodeEnv:process.env.NODE_ENV||"development",
    accessTokenSecret:process.env.JWT_SECRET
})

module.exports=config