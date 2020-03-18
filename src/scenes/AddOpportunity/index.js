import React, { Component } from "react";
import Navigation from "../../components/Navigation/index.js";
import Calendar from 'react-calendar';
import { connect } from "react-redux";
import { opportunityData } from '../../actions/opportunityAction'


class AddOpportunity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            opportunityLevel: "",
            peopleRequired: "",
            date: new Date(),
            calendar: false,
            imageSrc: require('../../images/user.png'),
            imageUrl: null,
            imageData: null,
            latitude: 33.6844,     // *north
            longitude: 73.0497     // *east
        }

    }
    handleUpload = (event) => {
        event.preventDefault()
    }

    showCalender = () => {
        this.setState({ calendar: true })
    }
    hideCalender = (data) => {
        this.setState({ date: data, calendar: false })


    }
    titleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);

    }
    handleFormButton = (event) => {
        const location = [this.state.latitude, this.state.longitude]
        event.preventDefault()
        var fd = new FormData()
        fd.append("file", this.state.imageData)
        fd.append("title", this.state.title)
        fd.append("opportunityLevel", this.state.opportunityLevel)
        fd.append("peopleRequired", this.state.peopleRequired)
        fd.append("date", new Date())
        for (var i = 0; i <= 1; i++) {
            fd.append("location", location[i])
        }



        // const data = {
        //     title: this.state.title,
        //     opportunityLevel: this.state.opportunityLevel,
        //     peopleRequired: this.state.peopleRequired,
        //     date: new Date(),
        //     location: [
        //         this.state.latitude,
        //         this.state.longitude
        //     ],
        //     fd

        // }
        this.props.sendFormData(fd)
    }
    onChange = date => this.setState({ date })
    handleImage = (event) => {

        console.log("image upload", event.target.files[0])
        const tempUrl = URL.createObjectURL(event.target.files[0])
        this.setState({ imageData: event.target, imageUrl: tempUrl })


    }

    render() {
        console.log(this.state.date)

        // const uploadbuttonClass = this.state.imageUrl ? "btn btn-success " : "btn btn-danger disabled "

        const justDate = this.state.date.toString().split(' ')[0] + " " + this.state.date.toString().split(' ')[1] + " " + this.state.date.toString().split(' ')[2] + " " + this.state.date.toString().split(' ')[3]

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

                                    <div className="center-content">


                                        <div className="opportunity-form col-12 p-0">
                                            <form className="col-7 data-form" encType="multi">
                                                <div className="form-group profile-pic d-flex flex-wrap">
                                                    <label>opportunity image</label>
                                                    <span className="profilepic-outer">
                                                        <input type="file" name='file' accept="image/*" onChange={this.handleImage} ></input>
                                                        {this.state.imageUrl ? <img src={this.state.imageUrl} alt="" /> : <img src={this.state.imageSrc} alt="" />}

                                                    </span>

                                                </div>
                                                <div className="form-group">
                                                    <label>Opportunity Name</label>
                                                    <input className="form-control"
                                                        type="text" value={this.state.title}
                                                        placeholder="Opportunity name"
                                                        name="title"
                                                        onChange={this.titleChange} />

                                                </div>
                                                <div className="form-group">
                                                    <label>Opportunity Level</label>
                                                    <select className="form-control"
                                                        name="opportunityLevel"
                                                        value={this.state.opportunityLevel}
                                                        onChange={this.titleChange}>
                                                        <option>Beginner</option>
                                                        <option>Expert</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>people required</label>
                                                    <input className="form-control"
                                                        placeholder="People required"
                                                        name="peopleRequired"
                                                        value={this.state.peopleRequired}
                                                        onChange={this.titleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Location</label>
                                                    <input className="form-control"
                                                        placeholder="Latitude"
                                                        name="latitude"
                                                        value={this.state.latitude}
                                                        onChange={this.titleChange} />
                                                    <input className="form-control"
                                                        placeholder="Longitude"
                                                        name="longitude"
                                                        value={this.state.longitude}
                                                        onChange={this.titleChange} />
                                                </div>
                                                <div className="form-group">
                                                    <label>Opportunity Start Date</label>
                                                    <input className="form-control"
                                                        placeholder="dd/mm/yyy"
                                                        name="calender"
                                                        onClick={this.showCalender}
                                                        value={justDate}
                                                        onChange={this.titleChange} />

                                                    {this.state.calendar && <Calendar
                                                        onChange={this.onChange}
                                                        value={this.state.date}
                                                        onClickDay={(data) => this.hideCalender(data)}
                                                    />}
                                                </div>
                                                <div>
                                                    <h3 style={{ color: 'black' }}>Preferences</h3>
                                                    <div className="container row">
                                                        <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p1" value="indoor" />indoor
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p1" value="outdoor" />outdoor
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p1" value="both" />Both
                                                                </label>
                                                    </div>
                                                    <div className="container row">
                                                        <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p2" value="active" />Active
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p2" value="mellow" />Mellow
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p2" value="both" />Both
                                                                </label>
                                                    </div>
                                                    <div className="container row">
                                                        <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p3" value="mind" />Mind
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p3" value="body" />Body
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p3" value="both" />Both
                                                                </label>
                                                    </div>
                                                    <div className="container row">
                                                        <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p4" value="independent" />Independent
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p4" value="social" />Social
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} class="radio-inline">
                                                            <input type="radio" name="p4" value="both" />Both
                                                                </label>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 style={{ color: 'black' }}>Availability</h3>
                                                    <div className="container row">
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u> Mon:</u></p>
                                                            <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="radio" name="p4" value="mon_morning" />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="mon_midday" />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="mon_evening" />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Tue</u></p>
                                                            <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="radio" name="p4" value="tue_morning" />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="tue_midday" />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="tue_evening" />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Wed</u></p>
                                                            <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="radio" name="p4" value="wed_morning" />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="wed_midday" />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="wed_evening" />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Thurs</u></p>
                                                            <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="radio" name="p4" value="thurs_morning" />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="thurs_midday" />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="thurs_evening" />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Fri</u></p>
                                                            <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="radio" name="p4" value="fri_morning" />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="fri_midday" />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="fri_evening" />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Sat</u></p>
                                                            <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="radio" name="p4" value='sat_morning' />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="sat_midday" />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="sat_evening" />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Sun</u></p>
                                                            <label class="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="radio" name="p4" value="sun_morning" />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="sun_midday" />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} class="radio-inline">
                                                                <input type="radio" name="p4" value="sun_evening" />Evening
                                                                </label>
                                                        </div>
                                                    </div>


                                                </div>
                                                <button onClick={this.handleFormButton} type="submit" className="btn btn-primary gray-button" >Add Opportunity</button>
                                            </form>
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
const mapDispatchToProps = (dispatch) => {
    return {
        sendFormData: (data) => dispatch(opportunityData(data))
    }
}
export default connect(null, mapDispatchToProps)(AddOpportunity)      