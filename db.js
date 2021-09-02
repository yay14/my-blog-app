const mongoose= require('mongoose')

require('dotenv').config();

const uri= process.env.ATLAS_URI;

const connectDB = async () => {
    try{
      
        const connect= await mongoose.connect(uri,
        {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${connect.connection.host}`);
    }
    catch(error)
    {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;