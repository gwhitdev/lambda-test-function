exports.handler = async (event) => {
    // TODO implement
    const data = {};
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://test2020:test2020@gwhitleyonline1.x7efb.azure.mongodb.net/mealsaver?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    MongoClient.connect(uri, function(err, client) {
       if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
       }
       console.log('Connected...');
       const collection = client.db("mealsaver").collection("ingredients");
       data = collection.Find();
       client.close();
       return data;
});
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(data),
    };
    return response;
};
