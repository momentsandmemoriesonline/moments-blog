import React from "react"

class Bookings extends React.Component{
    bookings = [];

    componentDidMount() {
        fetch('/api/hello')
        .then(res => res.json())
        .then((data) => {
          this.bookings = data;
          console.log(this.bookings)
        })
        .catch(console.log)
    }

    render(){
        return (
            <div>
                <div>bookings</div>
                {this.bookings.map((booking, index) => (
                    <p key={index}>{booking.start} BOOK</p>
                ))}
            </div>
        )
    }
    
}

export default Bookings