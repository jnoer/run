import moment from 'moment';
import items from './marathon-novice';

class Scheduler {

    constructor(marathonDate){
        this.marathonDate = marathonDate;
        // console.log('const: ' + this.marathonDate)
    }

    create() {
        console.log('marathon date: ' + moment(this.marathonDate).format());

        // let startDate = moment(this.marathonDate).subtract(126, 'days')
        this.startDate = moment(this.marathonDate).subtract((MARATHON_WEEKS * 7), 'days')
        this.currentDate = this.startDate;
        console.log('start date: ' + this.startDate.format())

        let calendar = {marathonDate: this.marathonDate, startDate: this.startDate, eventsList:[]}

        let that = this

        console.log(items.items.length)


        items.items.forEach(function(week) {
            console.log(week.week)
            //TODO don't start the calendar with a rest day
            calendar.eventsList.push({title: week.mon.title, allDay: true, start: that.incrementDay(), end: that.currentDate})
            calendar.eventsList.push({title: week.tue.title, allDay: true, start: that.incrementDay(), end: that.currentDate})
            calendar.eventsList.push({title: week.wed.title, allDay: true, start: that.incrementDay(), end: that.currentDate})
            calendar.eventsList.push({title: week.thu.title, allDay: true, start: that.incrementDay(), end: that.currentDate})
            calendar.eventsList.push({title: week.fri.title, allDay: true, start: that.incrementDay(), end: that.currentDate})
            calendar.eventsList.push({title: week.sat.title, allDay: true, start: that.incrementDay(), end: that.currentDate})
            calendar.eventsList.push({title: week.sun.title, allDay: true, start: that.incrementDay(), end: that.currentDate})
        })

        console.log('eventsList' + JSON.stringify(calendar.eventsList))

        return calendar;
    }


    incrementDay() {
        this.currentDate = moment(this.currentDate).add(1, 'days');
        return this.currentDate;
    }
}


const MARATHON_WEEKS = 18
// const HALF_WEEKS = 12


export default Scheduler;
