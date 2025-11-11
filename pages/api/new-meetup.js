// Server-side code located at /api/new-meetup

import { MongoClient } from "mongodb";
import 'dotenv/config';

export default async function handler(req, res) {
	try {
        if (req.method === "POST") {
            const data = req.body;

            const client = await MongoClient.connect("mongodb+srv://alyssamonera_db_user:rUDzzREeGK2VMBEC@cluster0.los55ec.mongodb.net/?appName=Cluster0");
            const db = client.db();

            const meetupsCollection = db.collection('meetups');

            const result = await meetupsCollection.insertOne(data);

            console.log(result);

            client.close();

            res.status(201).json({message: 'Meetup inserted!'})
        }
    } catch (error) {
        
    }
}
