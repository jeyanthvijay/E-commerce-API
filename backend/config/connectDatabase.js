const mongoose=require('mongoose');
const dotenv=require('dotenv');
// Load environment variables
dotenv.config({ path: './config/config.env' });
const connectDatabase=() => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log('Mongo DB connection Success in :'+con.connection.host)
    })
};
module.exports=connectDatabase;