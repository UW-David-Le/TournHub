import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../../assets/tourn1.jpg";
// import { FaBeer } from 'react-icons/fa'; // <FaBeer />
import { FaRegCalendar } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import eventData from './eventData';


function TournamentCard() {

    const eData = eventData.events;

    return (
        <div className='w-75'>
            <Card className="border border-dark w-25" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={eData[0].thumbnail} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {eData[0].description}
                    </Card.Text>
                    <hr />
                    <Card.Text className=''>
                        <FaRegCalendar /> {eData[0].date}  <AiOutlineClockCircle /> {eData[0].startTime} <GrLocation />{eData[0].location}
                    </Card.Text>
                    <hr />
                    {eData[0].organizer}
                    <Button className="btn float-end" variant="primary">Sign Up!</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TournamentCard;