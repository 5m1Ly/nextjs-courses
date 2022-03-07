import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function pageContent() {

	const router = useRouter();

	async function locationHandler(location) {

		const response = await fetch('../api/add', {
			method: 'POST',
			body: JSON.stringify(location),
			headers: { 'Content-Type': 'application/json' }
		});

		const data = await response.json();
		console.log(data);

		router.push('/');

	};

	return <NewMeetupForm onAddMeetup = { locationHandler } />

}


export async function getStaticProps() {
	return { props: { title: 'Add A Pizza Place' } };
}

// https://localhost:3000/add
export default pageContent;