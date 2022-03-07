import { MongoClient } from 'mongodb';

// https:/localhost:3000/api/add

async function handler(req, res) {

	if (req.method != 'POST') return;

	const data = req.body;

	const conn = await MongoClient.connect('mongodb+srv://<user>:<pass>@cluster0.wd7lz.mongodb.net/meetups?retryWrites=true&w=majority')
	const db = conn.db();

	const meetupsCollection = db.collection('meetups');
	await meetupsCollection.insertOne(data);

	conn.close();

	res.status(200).json({ message: "added a new location to the database" })

}

export default handler;