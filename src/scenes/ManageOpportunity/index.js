import React, { Component } from "react";
import Navigation from "../../components/Navigation/index.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { manageOpportunity } from '../../actions/opportunityAction';
import { connect } from "react-redux";
class ManageOpprtunity extends Component {

    componentDidMount = () => {

        this.props.getOpportunityData()

    }
    render() {
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
                                        <h1>manage opportunity</h1>
                                    </div>

                                    <div className="col-12 text-right mt-4 pr-0">
                                        <Link to="/AddOpportunity" className="btn btn-primary gray-button">Add Opportunity</Link>
                                    </div>

                                    <div className="center-content">
                                        <div className="opportunity-form col-12 p-0">
                                            <div className="row">

                                                <div className=" col-6">
                                                    <div className="result">
                                                        <ul className="list-group result-list">
                                                            {this.props.allOpportunities && this.props.allOpportunities.map(opportunity => {
                                                                return (
                                                                    <li key={opportunity._id} className="list-group-item d-flex justify-content-between align-items-center">
                                                                        <p className="list-title">{opportunity.title}</p>
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
                                                            })}

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
const mapPropsToState = (state) => {
    console.log("gettingn state", state.opportunity.opportunities)
    return {
        allOpportunities: state.opportunity.opportunities

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getOpportunityData: () => dispatch(manageOpportunity())
    }

}
export default connect(mapPropsToState, mapDispatchToProps)(ManageOpprtunity)