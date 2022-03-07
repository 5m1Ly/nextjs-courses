import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'M00001',
		title: 'Somewhere in the world 1',
		image: 'https://www.dutchcowboys.nl/uploads/headers/sex-and-the-city.jpg',
		addres: 'adress 10, 123123 pizza town',
		discription: 'This is the first meetup'
	},
	{
		id: 'M00002',
		title: 'Somewhere in the world 2',
		image: 'https://www.dutchcowboys.nl/uploads/headers/sex-and-the-city.jpg',
		addres: 'adress 10, 123123 pizza town',
		discription: 'This is the first meetup'
	},
	{
		id: 'M00003',
		title: 'Somewhere in the world 3',
		image: 'https://www.dutchcowboys.nl/uploads/headers/sex-and-the-city.jpg',
		addres: 'adress 10, 123123 pizza town',
		discription: 'This is the first meetup'
	},
	{
		id: 'M00004',
		title: 'Somewhere in the world 4',
		image: 'https://www.dutchcowboys.nl/uploads/headers/sex-and-the-city.jpg',
		addres: 'adress 10, 123123 pizza town',
		discription: 'This is the first meetup'
	}
];

function pageContent() {

	return <MeetupList meetups = { DUMMY_MEETUPS } />

}

// https://localhost:3000/
export default pageContent;