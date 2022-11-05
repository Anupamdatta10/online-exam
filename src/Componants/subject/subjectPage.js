import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css'
import Navb from './navb';
import Mbody from './mbody';
export default function SubjectPage() {
  return (
    <>
      <Container fluid>
        <Row fluid><Col sm={10} ><h1 >S U B J E C T S </h1></Col>
        <div className="vr"/>
        <Col ><Button variant="outline-primary" className='mt-2'  size="lg">Add Subjects
        </Button></Col>
        </Row>
        <hr></hr>
        <Row>
          <Col xs lg="2">
            <div className='card p-1 mb-2 nav-item'>
            English
            </div>
            <div className='card p-1 mb-2 nav-item'>
            Mathematics
            </div>
            <div className='card p-1 mb-2 nav-item'>
            Physics
            </div>
            <div className='card p-1 mb-2 nav-item'>
            Chemistry
            </div>
            <div className='card p-1 mb-2 nav-item'>
            Biology
            </div>
          </Col>
          <div className="vr"/>
          <Col  >
            <div >
              
              <Mbody/>
              
              </div>
            </Col>
        </Row>
      </Container>
    </>
  )
}
