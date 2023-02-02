const form = document.getElementById("feedback-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  const MongoClient = require("mongodb").MongoClient;
  const uri = "mongodb+srv://:@cluster0.cwnrkoe.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  await client.connect();
  
  const db = client.db("test");
  const collection = db.collection("feedback");
  await collection.insertOne({ name, email, message });
  
  alert("Feedback submitted successfully!");
});
