import React, { Component } from 'react'
import { Button, Modal, Row, Col } from 'react-bootstrap'


export default class editModel extends Component {
    render() {

        return (
            <div>
                <Modal backdrop="static" centered show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Opportunity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className=' mb-2 '>
                            <Col sm="3" > <label htmlFor='title' >Title</label></Col>
                            <Col sm="9"> <input style={{ width: '100%' }} defaultValue={this.props.title} type='text' id='title' ></input> </Col>
                        </Row>
                        <Row className=' mb-2 '>
                            <Col sm="3" > <label htmlFor='description' >Description</label></Col>
                            <Col sm="9"> <input style={{ width: '100%' }} type='text' id='description' ></input> </Col>
                        </Row>
                        <Row className=' mb-2 '>
                            <Col sm="3" > <label htmlFor='numberofpeople' >People</label></Col>
                            <Col sm="9"> <input style={{ width: '100%' }} type='text' id='numberofpeople' ></input> </Col>
                        </Row>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.props.handleClose}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
