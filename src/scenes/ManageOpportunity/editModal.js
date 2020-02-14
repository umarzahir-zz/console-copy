import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import { updateOpportunity } from '../../actions/opportunityAction'

class EditModal extends Component {
    state = { updateTitle: '' }
    componentDidMount = () => {
        this.setState({ updateTitle: this.props.title })
    }
    handleUpdate = (id, title) => {
        this.props.updateOpp(id, title)
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
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
                            <Col sm="9"> <input style={{ width: '100%' }} defaultValue={this.props.title} type='text' name="updateTitle" id='title' onChange={this.handleChange} ></input> </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={() => this.handleUpdate(this.props.id, this.state.updateTitle)}>
                            Save Changes
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateOpp: (id, title) => { dispatch(updateOpportunity(id, title)) }
    }
}
export default connect(null, mapDispatchToProps)(EditModal)