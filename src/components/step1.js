import React from "react"

class Step1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
        this.book = this.book.bind(this);

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

    book(booking) {
        
        const newbooking = {
            'start': {
                'dateTime': new Date(booking.start).toISOString()
            },
            'end': {
                'dateTime': new Date(booking.end).toISOString(),
            }
        };
        console.log(this.props)
        this.props.onSelectSlot(newbooking);
    }

    render(){
        return (
            <div>
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
                                    <span className="slot-detail-date">
                                        {new Date(booking.start).toLocaleDateString()} 
                                    </span>
                                    <span className="slot-detail-time">
                                        {new Date(booking.start).toLocaleTimeString()} - {new Date(booking.end).toLocaleTimeString()}
                                    </span>
                                    <button className="select-btn" onClick={() => this.book(booking)}>Select</button>
                                </p>
                            )
                        })
                    }
            </div>
        )
    }
}
export default Step1