import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BigCalendar from 'react-big-calendar';
import './react-big-calendar.css';
import moment from 'moment';
import Scheduler from './scheduler'

class App extends Component {

    constructor(props) {
        super(props);

        BigCalendar.momentLocalizer(moment);
        let eventsList =  [{
            'title': 'All Day Event',
            'allDay': true,
            'start': new Date(2017, 6, 3),
            'end': new Date(2017, 6, 3)
        }];

        this.state = {eventsList: eventsList};
    }

  buildEvents() {
      let marathonDate = new Date(2017, 7, 19);
      console.log('orig marathon date: ' +marathonDate);
      var scheduler = new Scheduler(marathonDate);
      var calendar = scheduler.create()
      this.setState({eventsList: calendar.eventsList, startDate: calendar.startDate, marathonDate: calendar.marathonDate});
  }
    
  render() {

      // this.setState({eventsList: []});

      // calendar.create.bind(calendar)

      // const MyCalendar = props => (
      //     <div>
      //         <BigCalendar
      //             events={eventsList}
      //             startAccessor='startDate'
      //             endAccessor='endDate'
      //         />
      //     </div>
      // );    

    return (
        <div className="App" style={{height:"600px", width: "1024px", marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px'}}>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Running calendar</h2>
            </div>

            <p className="App-intro">
              Running calendar {this.state.startDate && this.state.startDate.toString()} {this.state.marathonDate && this.state.marathonDate.toString()}
            </p>

            <button onClick={this.buildEvents.bind(this)}>Create</button>

            <BigCalendar
              events={this.state.eventsList}
              defaultDate={new Date(2017, 6, 1)}
            />

        </div>
    );
  }
}

export default App;
