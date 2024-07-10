import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import profile from '../assets/images/profile.jpg'
import '../assets/About.css';

function About() {
  return (
    <section className='About mt-3'>
      <h3 className='justify-content-center text-center text-light mt-6 header'>About Me</h3>
      <Container>
        <Row>
          <Col xs={12} md={4} className='mt-2'>
            <Card.Body>
              <Image src={profile} fluid/>
            </Card.Body>
          </Col>

          <Col xs={12} md={8} className='mt-2'>
            {['Light'].map((variant) => (
              <Card bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '35rem' }}
              className="mb-2"
              >
                <Card.Header>Introduction</Card.Header>
                <Card.Body className='cardBody'>
                  <Card.Text className='cardBody'>
                    Welcome to my Portfolio! On this site, you will able to see my projects I have accomplished independently and with my team members at UC Berkeley.
                    Through this Full Stack Development Program, I have learned many skills that I was able to apply and create a tangible product through small ideas.

                    <br></br>
                    <br></br>

                    Please use the navigation bar to examine the site and enjoy! If you have any questions or would like to contact me, please see the Contact page.
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
// function Bucket(props) {
//   const [edit, setEdit] = useState({
//     id: null,
//     value: '',
//     eagerness: '',
//   });

//   console.log(props.bucket);

//   const submitUpdate = (value) => {
//     props.editBucketItem(edit.id, value);
//     setEdit({ id: null, value: '', eagerness: '' });
//   };

//   if (edit.id) {
//     return <BucketForm edit={edit} onSubmit={submitUpdate} />;
//   }

//   return props.bucket.map((item, i) => (
//     <div
//       className={
//         item.isComplete
//           ? `bucket-row complete ${item.eagerness}`
//           : `bucket-row ${item.eagerness}`
//       }
//       key={i}
//     >
//       <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
//         {item.text}
//       </div>
//       <div className="icons">
//         {console.log(item)}
//         <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
//         <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
//       </div>
//     </div>
//   ));
// }

export default About;
