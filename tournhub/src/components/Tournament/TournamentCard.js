import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from "../../assets/tourn1.jpg";
import { FaBeer } from 'react-icons/fa'; // <FaBeer />
import { FaRegCalendar } from 'react-icons/fa';


function TournamentCard() {
    return (
        <Card className="border border-dark" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <hr />
                <Card.Text className=''>
                    <FaRegCalendar />
                    more text
                </Card.Text>
                <hr />
                <Button className="btn" variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer>
                Organizer's Name
            </Card.Footer>
        </Card>
    );
}

export default TournamentCard;