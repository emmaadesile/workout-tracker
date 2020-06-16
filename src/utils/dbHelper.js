import { MongoClient } from "mongodb";

const dbName = "workout-tracker-db";

function createClient() {
  const client = new MongoClient(
    `mongodb+srv://admin:${process.env.DB_PASSWORD}@cluster0-uwi9b.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  client.usersCollection = function () {
    return this.db(dbName).collection("users");
  };

  return client;
}

export default createClient;
