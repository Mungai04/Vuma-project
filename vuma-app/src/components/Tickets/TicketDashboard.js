import React from "react";
const TicketDashboard = () => {
    const tickets = [
        { id: 1, subject: 'Issue with login', status: 'Open'},
        { id: 2, subject: 'Billing inquiry', status: 'Closed' },
    ];
    return (
        <div>
            <h2>Ticket Dashboard</h2>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        {ticket.subject} - {ticket.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TicketDashboard;