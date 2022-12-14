import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/Calendar.css";

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Training",
        start: new Date(2022, 8, 12),
        end: new Date(2022, 8, 12),
    },
    {
        title: "Social",
        start: new Date(2022, 8, 14),
        end: new Date(2022, 8, 15),
    },
    {
        title: "MatchDay",
        start: new Date(2022, 8, 14),
        end: new Date(2022, 8, 14),
    },
    {
    title: "Light Training",
    start: new Date(2022, 8, 16),
    end: new Date(2022, 8, 16),
},
    {    
    title: "Training Bootcamp",
    start: new Date(2022, 8, 20),
    end: new Date(2022, 8, 23),
    },


];

function CalendarApp() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="title">
            <h1>SportsOrg LAX Calendar</h1>
            {/* <h2>Add New Event</h2>
            <div className="tab">
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div> */}
                <div className="calendar">
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
                 </div>
        </div>
    );
}

export default CalendarApp;