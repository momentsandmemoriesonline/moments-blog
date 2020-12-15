import React from "react"

class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bookings:[],
            currentBooking:{'summary':'Family'},
            name:""
        }
        this.book = this.book.bind(this);
        this.bookDetails = this.bookDetails.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    book(booking) {
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
        copyBooking.description = this.state.name;
        copyBooking.summary = 'Family';
        fetch('/api/book', {
            method: 'post',
            body: JSON.stringify(copyBooking)
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({bookings: data})
        })
        .catch(console.log)
    }

    render(){
        return (
            <div>
                <div className="bookingDetail">
                    {this.state.currentBooking?.start?.dateTime}
                    {this.state.currentBooking?.end?.dateTime}
                    <br />
                    Name: <input value={this.state.name} onChange={this.handleChange} />
                    <button className="booking-btn" onClick={() => this.bookDetails()}>Book</button>
                </div>
                <div className="slots">
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