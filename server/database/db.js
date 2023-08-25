import mongoose from 'mongoose';

export const db = async (username,password) => {
    const uri = `mongodb://${username}:${password}@ac-kcazwfz-shard-00-00.koinq6e.mongodb.net:27017,ac-kcazwfz-shard-00-01.koinq6e.mongodb.net:27017,ac-kcazwfz-shard-00-02.koinq6e.mongodb.net:27017/Flipkart-Clone?ssl=true&replicaSet=atlas-ikbtbb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            });
        console.log("Database Connected Successfully");
    }catch(err){
        console.log("Error in Database Connection");
        console.log(err);
    }
};

export default db;