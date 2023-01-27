
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card() {
  return (
    <Card className="text-center">
      <Card.Header>On {eventData.date} at {eventData.venue}</Card.Header>
      <Card.Body>
        <Card.Title>{eventData.name}</Card.Title>
        <Card.Text>
          {eventData.description}
        </Card.Text>
        <Button variant="primary">Get Tickets</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Regular : {eventData.price1}, VIP : {eventData.price2}
      </Card.Footer>
    </Card>
  );
}

export default Card;