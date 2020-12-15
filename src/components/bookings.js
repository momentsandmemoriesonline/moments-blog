import React from "react"

class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bookings:[],
            currentBooking:{'summary':'Family'},
            name:"",
            tel: "",
            showDetail: false,
            showSlots: true,
            showBooked: false
        }
        this.book = this.book.bind(this);
        this.bookDetails = this.bookDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTelChange = this.handleTelChange.bind(this);
    }

    componentDidMount() {
        fetch('/api/hello')
        .then(res => res.json())
        .then((data) => {
          this.setState({bookings: data})
        })
        .catch(console.log)
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleTelChange(event) {
        this.setState({tel: event.target.value});
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
        copyBooking.description = this.state.name + this.state.tel;
        copyBooking.summary = 'Family';
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
                    <h1 style={this.state.showBooked ? {} : { display: 'none'} }>BOOKED</h1>
                </div>
                <div className="bookingDetail" style={this.state.showDetail ? {} : { display: 'none'} }>
                    {this.state.currentBooking?.start?.dateTime}
                    {this.state.currentBooking?.end?.dateTime}
                    <br />
                    Name: <input value={this.state.name} onChange={this.handleChange} />
                    <br />
                    Telephone: <input value={this.state.tel} onChange={this.handleTelChange} />
                    <button className="booking-btn" onClick={() => this.bookDetails()}>Book</button>
                </div>
                <div className="slots" style={this.state.showSlots ? {} : { display: 'none'} }>
                    {this.state.bookings.map((booking, index) => {
                        return(
                            <p className="slot" key={index}> {new Date(booking.start).toLocaleDateString()} : {new Date(booking.start).toLocaleTimeString()} - {new Date(booking.end).toLocaleTimeString()}
                                <button className="booking-btn" onClick={() => this.book(booking)}>Select</button>
                            </p>
                        )
                    })}
                </div>
            </div>
        )
    }
    
}

export default Bookings