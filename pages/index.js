import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import "dotenv/config";
import Head from "next/head";

// const DUMMY_MEETUPS = [
// 	{
// 		id: "m1",
// 		title: "A First Meetup",
// 		image:
// 			"https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
// 		address: "Some Address 5, 12345 Some City",
// 		description: "This is a first meetup!",
// 	},
// 	{
// 		id: "m2",
// 		title: "A Second Meetup",
// 		image:
// 			"https://memberpress.com/wp-content/uploads/2019/10/Member-Meetup@2x.png",
// 		address: "Another One, 4938 Different City",
// 		description: "This is a second meetup...",
// 	},
// ];

// Reserved name for NextJS executed on the server after deployment
// Runs for every new request
// Can write server code here
// export async function getServerSideProps({req, res}) { // Good to get req/res for things like auth
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

// Reserved name for NextJS executed during pre-render
// Can write server code here since it's executed during pre-render
export async function getStaticProps() {
	const client = await MongoClient.connect("mongodb+srv://alyssamonera_db_user:rUDzzREeGK2VMBEC@cluster0.los55ec.mongodb.net/?appName=Cluster0");
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				...meetup,
				_id: meetup._id.toString(), // Need to convert id from object to string
			})),
		},
		revalidate: 10, // Regenerates the page on the server every 10 seconds
	};
}

export default function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups!"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}
