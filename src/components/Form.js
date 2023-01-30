import './FormStyles.css'

import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [venue, setVenue] = useState('')
    const [time, setTime] = useState('')
    const [reg, setReg] = useState('')
    const [vip, setVip] = useState('')

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
            name,
            date,
            venue,
            time,
            reg,
            vip
        }
        fetch('http://localhost:3000/eventData',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(event)
        }).then(() => {
        })

    }

    return(
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Event Name</label>
                <input type="text" required value={name} onChange = {(e) => setName(e.target.value)}/>
                
                <label>When is the Event?</label>
                <input type="text" required value={date} onChange = {(e) => setDate(e.target.value)}/>
                
                <label>What's the Venue?</label>
                <input type="text" required value={venue} onChange = {(e) => setVenue(e.target.value)}/>
               
                <label>What Time?</label>
                <input type="text" required value={time} onChange = {(e) => setTime(e.target.value)}/>
                
                <label>How much are Regular Tickets?</label>
                <input type="text" required value={reg} onChange = {(e) => setReg(e.target.value)}/>
                
                <label>VIP Tickets?</label>
                <input type="text" required value={vip} onChange = {(e) => setVip(e.target.value)}/>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}



export default Form