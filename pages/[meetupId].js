import "dotenv/config";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../components/meetups/MeetupDetails";
import Head from "next/head";

const DUMMY_MEETUP = {
	id: "m1",
	title: "A First Meetup",
	image:
		"https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
	address: "Some Address 5, 12345 Some City",
	description: "This is a first meetup!",
};

// Need this function to use getStaticProps dynamically
export async function getStaticPaths() {
	const client = await MongoClient.connect(
		process.env.DATABASE_URL
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	// First param is the filter object
	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		// false indicates that all possible paths are defined here; other values go to 404 page
		fallback: false,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps({ params }) {
	const client = await MongoClient.connect(
		process.env.DATABASE_URL
	);
	const db = client.db();
	const meetupsCollection = db.collection("meetups");
	// First param is the filter object
	const selectedMeetup = await meetupsCollection.findOne({
		_id: new ObjectId(params.meetupId),
	});

	client.close();

	return {
		props: {
			meetupData: {
				...selectedMeetup,
				_id: selectedMeetup && selectedMeetup._id ? selectedMeetup._id.toString() : null
			},
		},
	};
}

export default function MeetupDetailsPage({ meetupData }) {
	return (
		<>
			<Head>
				<title>{meetupData.title}</title>
				<meta name="description"  content={meetupData.description} />
			</Head>
			<MeetupDetails {...meetupData} />
		</>
	);
}
