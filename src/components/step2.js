import React from "react"
class Step2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            tel: "",
            email: "",
            event: "",
            specialreqs: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleTelChange = this.handleTelChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleSpecialReqsChange = this.handleSpecialReqsChange.bind(this);
        this.bookDetails = this.bookDetails.bind(this);  

    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleTelChange(event) {
        this.setState({tel: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleEventChange(event) {
        this.setState({event: event.target.value});
    }
    handleSpecialReqsChange(event) {
        this.setState({specialreqs: event.target.value});
    }

    bookDetails(){
        let copyBooking = { ...this.props.currentBooking};
        copyBooking.description = 'name:' + this.state.name + '\n';
        copyBooking.description +='tel:' + this.state.tel+ '\n';
        copyBooking.description +='email:' + this.state.email+ '\n';
        copyBooking.description +='special requirements:' + this.state.specialreqs;
        copyBooking.summary = this.state.event;
        copyBooking.email = this.state.email;
        copyBooking.name = this.state.name;
        copyBooking.event = this.state.event;
        copyBooking.date = new Date(this.props.currentBooking?.start?.dateTime).toLocaleDateString("en-UK", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
        copyBooking.startTime = new Date(this.props.currentBooking?.start?.dateTime).toLocaleTimeString("en-UK", { hour: '2-digit', minute: '2-digit' });
        copyBooking.endTime = new Date(this.props.currentBooking?.end?.dateTime).toLocaleTimeString("en-UK", { hour: '2-digit', minute: '2-digit' });
        copyBooking.telephone = this.state.tel;
        copyBooking.special = this.state.specialreqs;
        
        fetch('/api/book', {
            method: 'post',
            body: JSON.stringify(copyBooking)
        })
        .then(res => {
           this.props.onBooked();
        })
        .catch(console.log)
    }

    render() {
        return (
            <div>
                <div className="bookingDetail-summary">
                    <h3>

                        Date: {new Date(this.props.currentBooking?.start?.dateTime).toLocaleDateString("en-UK", {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})} 
                        <br />
                        Time: {new Date(this.props.currentBooking?.start?.dateTime).toLocaleTimeString("en-UK", { hour: '2-digit', minute: '2-digit' })} - 
                        {new Date(this.props.currentBooking?.end?.dateTime).toLocaleTimeString("en-UK", { hour: '2-digit', minute: '2-digit' })}
                    </h3>
                </div>
                <div className="bookingDetail">
                    <p>
                        <label htmlFor="name">Name:</label> 
                        <input id="name" value={this.state.name} onChange={this.handleChange} />
                    </p>
                    <p>
                        <label htmlFor="telno">Telephone:</label> 
                        <input id="telno" value={this.state.tel} onChange={this.handleTelChange} />
                    </p>
                    <p>
                        <label htmlFor="email" style={{width:"200px", display: "inline-block"}}>Email:</label> 
                        <input id="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </p>
                    <p>
                        <label htmlFor="event" style={{width:"200px", display: "inline-block"}}>Event:</label> 
                        <select id="event" value={this.state.event} onChange={this.handleEventChange}>
                            <option>Please Select...</option>
                            <option>Cakesmash</option>
                            <option>Christening</option>
                            <option>New born</option>
                            <option>Family</option>
                            <option>Maternity </option>
                            <option>Wedding</option>
                            <option>Engagement</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="specialreqs" style={{width:"200px", display: "inline-block"}}>Special Requirements:</label> 
                        <textarea id="specialreqs" value={this.state.specialreqs} onChange={this.handleSpecialReqsChange} />
                    </p>
                    <br />
                    <button className="booking-btn" onClick={() => this.bookDetails()}>Book</button>
                </div>
            </div>
        )
    }

}

export default Step2