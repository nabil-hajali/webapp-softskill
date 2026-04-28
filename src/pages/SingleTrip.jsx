import { useParams } from "react-router-dom";
import { useTrips } from "../context/TripsContext";
import TripPartecipants from "../components/TripPartecipants";

export default function SingleTrip() {

    const { id } = useParams();
    const { trips } = useTrips()

    const trip = trips.find((trip) => trip.id === Number(id));

    return (
        <>

            <section>
                <div className="container">
                    <div className="text-center">
                        <h1 className="fw-bold">{trip.destination}</h1>
                        <p className="text-secondary fw-medium">Ecco la lista dei partecipanti al viaggio</p>
                        <div className="row mt-4">
                            {trip.participants.map((participant) => (
                                <TripPartecipants key={participant.id} participant={participant} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


}