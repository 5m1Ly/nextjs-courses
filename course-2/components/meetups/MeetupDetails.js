import classes from './MeetupDetail.module.css';

let locationDetails = props => {

	return <section className = { classes.detail }>

		<img src = { props.image } alt = { props.title } />
		<h2>{ props.title }</h2>
		<address>{ props.address }</address>
		<p>{ props.discription }</p>

	</section>

}

export default locationDetails;