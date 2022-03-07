import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

let pageContent = props => {
	return <MeetupList meetups = { props.locations } />
}

export async function getStaticProps() {

	const conn = await MongoClient.connect('mongodb+srv://<user>:<pass>@cluster0.wd7lz.mongodb.net/meetups?retryWrites=true&w=majority')
	const db = conn.db();

	const meetupsCollection = db.collection('meetups');
	const locations = await meetupsCollection.find().toArray();

	conn.close();

	return {
		props: {
			title: 'Pizza Place',
			locations: locations.map(location => ({
				title: location.title,
				address: location.address,
				image: location.image,
				id: location._id.toString()
			}))
		},
		revalidate: 10
	};

}

// https://localhost:3000/
export default pageContent;