import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from "../../components/meetups/MeetupDetails";

let locationDetails = props => {
	return <MeetupDetail 
		image = { props.location.image }
		title = { props.location.title }
		address = { props.location.address }
		description = {props.location.description}
	/>
}

export async function getStaticPaths() {

	const conn = await MongoClient.connect('mongodb+srv://<user>:<pass>@cluster0.wd7lz.mongodb.net/meetups?retryWrites=true&w=majority')
	const db = conn.db();

	const meetupsCollection = db.collection('meetups');
	const locations = await meetupsCollection.find({}, { _id: 1 }).toArray();

	conn.close();

	return {
		fallback: false,
		paths: locations.map(location => ({
			params: { id: location._id.toString() },
		})),
	}

}

export async function getStaticProps(context) {

	const id = context.params.id;

	const conn = await MongoClient.connect('mongodb+srv://<user>:<pass>@cluster0.wd7lz.mongodb.net/meetups?retryWrites=true&w=majority')
	const db = conn.db();

	const meetupsCollection = db.collection('meetups');
	const location = await meetupsCollection.findOne({ _id: ObjectId(id) });

	conn.close();

	return {
		props: {
			title: location.title,
			location: {
				id: location._id.toString(),
				title: location.title,
				image: location.image,
				address: location.address,
				description: location.description,
			}
		}
	};

}

export default locationDetails;