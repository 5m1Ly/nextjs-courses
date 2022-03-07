import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function pageContent() {

	let locationDetails = locationData => {

		console.log(locationData);

	}

	return <NewMeetupForm onAddMeetup = { locationDetails } />

}

// https://localhost:3000/add
export default pageContent;