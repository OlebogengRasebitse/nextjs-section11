import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
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

        try {
            client = await MongoClient.connect(
                "mongodb+srv://OlebogengRasebitse:VzZZnul43sVBFi5W@cluster0.gylqhwo.mongodb.net/my-site?retryWrites=true&w=majority"
            );

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
