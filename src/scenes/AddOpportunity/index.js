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
            longitude: 73.0497,  // *east



            one: [false, false, true],
            two: [false, false, true],
            three: [false, false, true],
            four: [false, false, true],

            p1: "both", p2: "both", p3: "both", p4: "both",

            monday: [{ "morning": false, "midday": false, "evening": false }],
            tuesday: [{ "morning": false, "midday": false, "evening": false }],
            wednesday: [{ "morning": false, "midday": false, "evening": false }],
            thursday: [{ "morning": false, "midday": false, "evening": false }],
            friday: [{ "morning": false, "midday": false, "evening": false }],
            satarday: [{ "morning": false, "midday": false, "evening": false }],
            sunday: [{ "morning": false, "midday": false, "evening": false }]
        }

    }
    handleAvailablity = async (event) => {

        // console.log(event.target.checked)
        event.persist()
        const slotName = event.target.id
        const dayName = event.target.name
        console.log(slotName)
        // console.log(this.state[dayName][0][slotName])
        if (event.target.checked) {
            const update = this.state[dayName][0][slotName]
            console.log(this.state[dayName][0])
            const stateCopy = this.state[dayName]
            stateCopy[0][slotName] = true
            console.log(stateCopy[0])
            await this.setState({ [dayName]: stateCopy })
        } else {
            console.log(this.state[dayName])
            // const filterArray = await this.state[dayName] && this.state[dayName].filter((time) => {
            //     return time !== event.target.value
            // })
            // if (filterArray)
            //     await this.setState({ [dayName]: [...filterArray] })
            const stateCopy1 = this.state[dayName]
            stateCopy1[0][slotName] = false
            await this.setState({ [dayName]: stateCopy1 })
        }
        console.log(this.state[dayName])
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
    daysNames = ["monday", "tuesday", "wednesday", "thursday", "friday", "satarday", "sunday"]
    timeSlot = ["one", "two", "three", "four"]
    handleFormButton = (event) => {
        event.preventDefault()
        const days = {
            monday: this.state.monday, tuesday: this.state.tuesday, wednesday: this.state.wednesday,
            thursday: this.state.thursday, friday: this.state.friday, satarday: this.state.satarday,
            sunday: this.state.sunday
        }
        const Preferences = { one: this.state.one, two: this.state.two, three: this.state.three, four: this.state.four }
        // Preferences.one = this.state.one
        // Preferences.two = this.state.two
        // Preferences.three = this.state.three
        // Preferences.four = this.state.four
        console.log(days.monday)
        // console.log(Preferences)
        const location = [this.state.latitude, this.state.longitude]

        var fd = new FormData()
        fd.append("file", this.state.imageData)
        fd.append("title", this.state.title)
        fd.append("opportunityLevel", this.state.opportunityLevel)
        fd.append("peopleRequired", this.state.peopleRequired)
        fd.append("date", new Date())

        fd.append("days", JSON.stringify(days))
        fd.append("preferences", JSON.stringify(Preferences))

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
    handleChange = (event) => {
        event.persist()
        // Console.log(event.target)
        console.log(event.target.name)
        console.log(event.target.value)

        this.setState({ [event.target.name]: event.target.value })
        // One state.
        if (event.target.name === "p1") {
            if (event.target.id === "indoor") {
                let oneState = [...this.state.one]
                oneState[0] = true
                oneState[2] = false
                oneState[1] = false
                this.setState({ one: [...oneState] })
            }
            if (event.target.id === "outdoor") {
                let oneState = [...this.state.one]
                oneState[1] = true
                oneState[0] = false
                oneState[2] = false
                this.setState({ one: [...oneState] })
            }
            if (event.target.id === "both") {
                let oneState = [...this.state.one]
                oneState[2] = true
                oneState[0] = false
                oneState[1] = false
                this.setState({ one: [...oneState] })
            }
        }
        // Two State
        if (event.target.name === "p2") {
            if (event.target.id === "active") {
                let twoState = [...this.state.two]
                twoState[0] = true
                twoState[2] = false
                twoState[1] = false
                this.setState({ two: [...twoState] })
            }
            if (event.target.id === "mellow") {
                let twoState = [...this.state.two]
                twoState[1] = true
                twoState[0] = false
                twoState[2] = false
                this.setState({ two: [...twoState] })
            }
            if (event.target.id === "both") {
                let twoState = [...this.state.two]
                twoState[2] = true
                twoState[0] = false
                twoState[1] = false
                this.setState({ two: [...twoState] })
            }
        }
        // Three State.
        if (event.target.name === "p3") {
            if (event.target.id === "mind") {
                let threeState = [...this.state.three]
                threeState[0] = true
                threeState[2] = false
                threeState[1] = false
                this.setState({ three: [...threeState] })
            }
            if (event.target.id === "body") {
                let threeState = [...this.state.three]
                threeState[1] = true
                threeState[0] = false
                threeState[2] = false
                this.setState({ three: [...threeState] })
            }
            if (event.target.id === "both") {
                let threeState = [...this.state.three]
                threeState[2] = true
                threeState[0] = false
                threeState[1] = false
                this.setState({ three: [...threeState] })
            }
        }
        // Four State.
        if (event.target.name === "p4") {
            if (event.target.id === "independent") {
                let fourState = [...this.state.four]
                fourState[0] = true
                fourState[2] = false
                fourState[1] = false
                this.setState({ four: [...fourState] })
            }
            if (event.target.id === "social") {
                let fourState = [...this.state.four]
                fourState[1] = true
                fourState[0] = false
                fourState[2] = false
                this.setState({ four: [...fourState] })
            }
            if (event.target.id === "both") {
                let fourState = [...this.state.four]
                fourState[2] = true
                fourState[0] = false
                fourState[1] = false
                this.setState({ four: [...fourState] })
            }
        }
    }
    onChange = date => this.setState({ date })
    handleImage = (event) => {

        console.log("image upload", event.target.files[0])
        const tempUrl = URL.createObjectURL(event.target.files[0])
        this.setState({ imageData: event.target, imageUrl: tempUrl })


    }

    render() {
        // console.log(this.state.date)
        // const uploadbuttonClass = this.state.imageUrl ? "btn btn-success " : "btn btn-danger disabled "
        // console.log(this.state.four)
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
                                                {/* Preferences */}
                                                <div>
                                                    <h3 style={{ color: 'black' }}>Preferences</h3>
                                                    <div className="container row">
                                                        <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p1" value="indoor" id="indoor" checked={this.state.p1 === "indoor"} onChange={this.handleChange} />indoor
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p1" value="outdoor" id="outdoor" checked={this.state.p1 === "outdoor"} onChange={this.handleChange} />outdoor
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p1" value="both" id="both" checked={this.state.p1 === "both"} onChange={this.handleChange} />Both
                                                                </label>
                                                    </div>
                                                    <div className="container row">
                                                        <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p2" value="active" id="active" checked={this.state.p2 === "active"} onChange={this.handleChange} />Active
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p2" value="mellow" id="mellow" checked={this.state.p2 === "mellow"} onChange={this.handleChange} />Mellow
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p2" value="both" id="both" checked={this.state.p2 === "both"} onChange={this.handleChange} />Both
                                                                </label>
                                                    </div>
                                                    <div className="container row">
                                                        <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p3" value="mind" id="mind" checked={this.state.p3 === "mind"} onChange={this.handleChange} />Mind
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p3" value="body" id="body" checked={this.state.p3 === "body"} onChange={this.handleChange} />Body
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p3" value="both" id="both" checked={this.state.p3 === "both"} onChange={this.handleChange} />Both
                                                                </label>
                                                    </div>
                                                    <div className="container row">
                                                        <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                            <input type="radio" name="p4" value="independent" id="independent" checked={this.state.p4 === "independent"} onChange={this.handleChange} />Independent
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p4" value="social" id="social" checked={this.state.p4 === "social"} onChange={this.handleChange} />Social
                                                                 </label>
                                                        <label style={{ color: 'black', marginRight: 10 }} className="radio-inline">
                                                            <input type="radio" name="p4" value="both" id="both" checked={this.state.p4 === "both"} onChange={this.handleChange} />Both
                                                                </label>
                                                    </div>
                                                </div>
                                                {/* Availability */}
                                                <div>
                                                    <h3 style={{ color: 'black' }}>Availability</h3>
                                                    <div className="container row">
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u> Mon:</u></p>
                                                            <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="checkbox" name="monday" id="morning" value="mon_morning" onChange={this.handleAvailablity} />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="monday" id="midday" value="mon_midday" onChange={this.handleAvailablity} />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="monday" id="evening" value="mon_evening" onChange={this.handleAvailablity} />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Tue</u></p>
                                                            <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="checkbox" name="tuesday" id="morning" value="tue_morning" onChange={this.handleAvailablity} />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="tuesday" id="midday" value="tue_midday" onChange={this.handleAvailablity} />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="tuesday" id="evening" value="tue_evening" onChange={this.handleAvailablity} />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Wed</u></p>
                                                            <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="checkbox" name="wednesday" id="morning" value="wed_morning" onChange={this.handleAvailablity} />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="wednesday" id="midday" value="wed_midday" onChange={this.handleAvailablity} />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="wednesday" id="evening" value="wed_evening" onChange={this.handleAvailablity} />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Thurs</u></p>
                                                            <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="checkbox" name="thursday" id="morning" value="thurs_morning" onChange={this.handleAvailablity} />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="thursday" id="midday" value="thurs_midday" onChange={this.handleAvailablity} />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="thursday" id="evening" value="thurs_evening" onChange={this.handleAvailablity} />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Fri</u></p>
                                                            <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="checkbox" name="friday" id="morning" value="fri_morning" onChange={this.handleAvailablity} />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="friday" id="midday" value="fri_midday" onChange={this.handleAvailablity} />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="friday" id="evening" value="fri_evening" onChange={this.handleAvailablity} />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Sat</u></p>
                                                            <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="checkbox" name="satarday" id="morning" value='sat_morning' onChange={this.handleAvailablity} />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="satarday" id="midday" value="sat_midday" onChange={this.handleAvailablity} />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="satarday" id="evening" value="sat_evening" onChange={this.handleAvailablity} />Evening
                                                                </label>
                                                        </div>
                                                        <div className="container row">
                                                            <p style={{ color: "black", marginRight: 15 }}><u>Sun</u></p>
                                                            <label className="radio-inline" style={{ color: 'black', marginRight: 10 }}>
                                                                <input type="checkbox" name="sunday" id="morning" value="sun_morning" onChange={this.handleAvailablity} />Morning
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="sunday" id="midday" value="sun_midday" onChange={this.handleAvailablity} />Midday
                                                                 </label>
                                                            <label style={{ color: 'black', marginRight: 5 }} className="radio-inline">
                                                                <input type="checkbox" name="sunday" id="evening" value="sun_evening" onChange={this.handleAvailablity} />Evening
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