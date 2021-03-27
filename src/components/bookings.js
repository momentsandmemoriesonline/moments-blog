import React from "react"
import Step1 from "./step1"
import Step2 from "./step2"
class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bookings:[],
            currentBooking:{'summary':'Family'},
            showDetail: false,
            showSlots: true,
            showBooked: false,
        }
        this.selectSlot = this.selectSlot.bind(this);
        this.booked = this.booked.bind(this);
    }

    selectSlot(newbooking) {
        this.setState({currentBooking: newbooking});
        this.setState({showSlots: false})
        this.setState({showDetail: true})
    }

    booked() {
        this.setState({showDetail: false})
        this.setState({showBooked: true})
    }

    render(){
        return (
            <div>
                <div className="slots" style={this.state.showSlots ? {} : { display: 'none'} }>
                    <Step1 onSelectSlot={this.selectSlot}></Step1>
                </div>
                <div style={this.state.showDetail ? {} : { display: 'none'} }>
                    <Step2 currentBooking={this.state.currentBooking} onBooked={this.booked}></Step2>
                </div>
                <div>
                    <h2 style={this.state.showBooked ? {} : { display: 'none'} }>BOOKED</h2>
                </div>
            </div>
        )
    }
    
}

export default Bookings