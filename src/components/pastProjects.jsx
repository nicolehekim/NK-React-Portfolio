import React from 'react'
import { Card } from 'react-bootstrap'


function pastProjects(props) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={props.deployedLink}>Deployed Link</Card.Link>
                <Card.Link href={props.githubLink}>Github Link</Card.Link>
            </Card.Body>
        </Card>
    )
};

export default pastProjects;