import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux";
import { volunteerview } from '../../actions/volunteerAction';
class ManageVolunteer extends Component {

    state = {
        imageSrc: require('../../images/user.png'),
        imageUrl: null
    }
    componentDidMount = () => {
        console.log("mount vol")
        this.props.getAllVol()
        console.log(this.props.allVol)
    }
    componentDidUpdate = () => {
        if (this.props.allVol === undefined) {
            this.props.getAllVol()
        }
    }


    handleImageUpload = (event) => {
        //temprory path to show uploaded image to user
        const path = URL.createObjectURL(event.target.files[0])
        this.setState({ imageUrl: path })
    }

    render() {
        console.log(this.props.allVol)
        const source = this.state.imageSrc
        const iurl = this.state.imageUrl
        const uploadBtnClass = iurl ? 'btn btn-success' : 'btn btn-danger disabled'
        return (
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <aside>
                            <Navigation />
                        </aside>
                        <article>
                            <div className="content">
                                <div className="dashboard">
                                    <div className="page_title">
                                        <h1>manage volunteer</h1>
                                    </div>

                                    <div className="center-content">
                                        <div className="opportunity-form col-12 p-0">
                                            <div className="row">
                                                {/* <div className="col-6">
                                                    <form className="data-form">
                                                        <div className="form-group profile-pic d-flex flex-wrap">
                                                            <label>volunteer images</label>
                                                            <span className="profilepic-outer">
                                                                <input onChange={this.handleImageUpload} type='file' name='file' accept='image/*' ></input>
                                                                {iurl ? <img src={iurl} alt="" /> : <img src={source} alt="" />}
                                                            </span>
                                                            <button className={uploadBtnClass}>upload</button>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>first name</label>
                                                            <input className="form-control" type="text" placeholder="First name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>last name</label>
                                                            <input className="form-control" type="text" placeholder="Last name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>email</label>
                                                            <input className="form-control" type="email" placeholder="email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>password</label>
                                                            <input className="form-control" type="text" placeholder="Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>descrition</label>
                                                            <textarea className="form-control" placeholder="descrition" rows="5">

                                                            </textarea>

                                                        </div>
                                                        <button className="btn btn-primary gray-button">add volunteer</button>
                                                    </form>
                                                </div> */}
                                                <div className=" col-6">
                                                    <div className="result">
                                                        <ul className="list-group result-list">
                                                            {["vol1","vol2", "vol3", "vol4"].map((vol) => {
                                                                return (
                                                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                                                        <p className="list-title">{vol}</p>
                                                                        <div className="list-button">
                                                                            <button className="btn btn-primary gray-button">
                                                                                <FontAwesomeIcon icon={faPen} />
                                                                            </button>
                                                                            <button className="btn btn-primary gray-button">
                                                                                <FontAwesomeIcon icon={faTrash} />
                                                                            </button>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            }

                                                            )}



                                                        </ul>
                                                        <nav aria-label="Page navigation example">
                                                            <ul className="pagination custom-pagination">
                                                                <li className="page-item"><Link className="page-link gray-button" to="#">Previous</Link></li>
                                                                <li className="page-item"><Link className="page-link gray-button" to="#">1</Link></li>
                                                                <li className="page-item"><Link className="page-link gray-button" to="#">2</Link></li>
                                                                <li className="page-item"><Link className="page-link gray-button" to="#">3</Link></li>
                                                                <li className="page-item"><Link className="page-link gray-button" to="#">Next</Link></li>
                                                            </ul>
                                                        </nav>
                                                        {/* <div className="nofound col-12 p-0">
                                                            <h3>No admin found</h3>
                                                        </div> */}
                                                    </div>


                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.vol)
    return {
        allVol: state.vol.allVoluntear
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAllVol: () => { dispatch(volunteerview()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageVolunteer)