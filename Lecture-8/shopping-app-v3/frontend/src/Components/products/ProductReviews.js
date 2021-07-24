import { Card } from 'react-bootstrap';

function ProductReviews(props) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Rating : {props.rating}</Card.Title>
                <Card.Text>
                    <strong>Review</strong> <br/> {props.comment}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductReviews;
