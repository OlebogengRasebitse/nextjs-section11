import { MongoClient } from "mongodb"; //allows you to create a connection to a MongoDB database

async function handler(req, res) {
    if (req.method === "POST") { //POST:used when a client wants to send data to the server to be processed or stored. 
        const { email, name, message } = req.body;

        if (
            !email ||
            !email.includes("@") ||
            !name ||
            name.trim() === "" ||
            !message ||
            message.trim() === ""
        ) {
            res.status(422).json({ message: "Invalid input." });
            return;
        }

        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.gylqhwo.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`

        try {
            client = await MongoClient.connect(connectionString);

            const db = client.db();
            let newMessage;

            try {
                const result = await db.collection("messages").insertOne({
                    email,
                    name,
                    message,
                });
                newMessage = { ...result.ops[0] };
            } catch (error) {
                res.status(500).json({ message: "Storing message failed!" });
                return;
            }

            client.close();
            res.status(201).json({ message: "Successfully stored message!", newMessage });
        } catch (error) {
            res.status(500).json({ message: "Could not connect to the database." });
            return;
        }
    }
}

export default handler;
