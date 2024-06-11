// import { useState } from "react";
import React, { useState} from "react";
const TicketForm = () => {
    const [ subject, setSubject] =
    useState('');
    const [ description, setDescription] = useState('');
    const handleSubmit = (e) => { e.preventDefault();
        console.log('Submit Ticket:',
            { subject, description }
        );
    };
    return (
        <div>
            <h2>Submit a Ticket</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Whats up?"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required />
                <textarea 
                placeholder="Describe"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default TicketForm;