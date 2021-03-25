import React from "react"

class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bookings:[],
            currentBooking:{'summary':'Family'},
            name:"",
            tel: "",
            email: "",
            event: "",
            specialreqs: "",
            showDetail: false,
            showSlots: true,
            showBooked: false,
            loading: true
        }
        this.book = this.book.bind(this);
        this.bookDetails = this.bookDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTelChange = this.handleTelChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleSpecialReqsChange = this.handleSpecialReqsChange.bind(this);
    }

    componentDidMount() {
        fetch('/api/hello')
        .then(res => res.json())
        .then((data) => {
          this.setState({bookings: data})
          this.setState({loading: false})
        })
        .catch(console.log)
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

    book(booking) {
        this.setState({showSlots: false})
        this.setState({showDetail: true})
        const newbooking = {
            'start': {
                'dateTime': new Date(booking.start).toISOString()
            },
            'end': {
                'dateTime': new Date(booking.end).toISOString(),
            }
        };
        this.setState({currentBooking: newbooking});
    }

    bookDetails(){
        let copyBooking = { ...this.state.currentBooking};
        copyBooking.description = 'name:' + this.state.name + '\n';
        copyBooking.description +='tel:' + this.state.tel+ '\n';
        copyBooking.description +='email:' + this.state.email+ '\n';
        copyBooking.description +='special requirements:' + this.state.specialreqs;
        copyBooking.summary = this.state.event;
        fetch('/api/book', {
            method: 'post',
            body: JSON.stringify(copyBooking)
        })
        .then(res => {
            this.setState({showDetail: false})
            this.setState({showBooked: true})
        })
        .catch(console.log)
    }

    render(){
        return (
            <div>
                <div >
                    <h2 style={this.state.showBooked ? {} : { display: 'none'} }>BOOKED</h2>
                </div>
                <div className="bookingDetail-summary" style={this.state.showDetail ? {} : { display: 'none'} }>
                    <h3>
                        Date: {new Date(this.state.currentBooking?.start?.dateTime).toLocaleDateString()} 
                        <br />
                        Time: {new Date(this.state.currentBooking?.start?.dateTime).toLocaleTimeString()} - 
                        {new Date(this.state.currentBooking?.end?.dateTime).toLocaleTimeString()}
                    </h3>
                </div>
                <div className="bookingDetail" style={this.state.showDetail ? {} : { display: 'none'} }>
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
                <div className="slots" style={this.state.showSlots ? {} : { display: 'none'} }>
                    {this.state.loading &&
                        <h2>LOADING....</h2>
                    }
                    {!this.state.loading && this.state.bookings.length === 0 &&
                        <h2>No Bookings Slots Available</h2>
                    }
                    {!this.state.loading && this.state.bookings.length > 0 &&
                        this.state.bookings.map((booking, index) => {
                            return(
                                <p className="slot" key={index}> 
                                    <span class="slot-detail-date">
                                        {new Date(booking.start).toLocaleDateString()} 
                                    </span>
                                    <span class="slot-detail-time">
                                        {new Date(booking.start).toLocaleTimeString()} - {new Date(booking.end).toLocaleTimeString()}
                                    </span>
                                    <button className="select-btn" onClick={() => this.book(booking)}>Select</button>
                                </p>
                            )
                        })
                    }
                    

                </div>
            </div>
        )
    }
    
}

export default Bookings