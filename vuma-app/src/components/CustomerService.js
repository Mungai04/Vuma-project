import React, { useState, useEffect } from 'react';

const CustomerService = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:8000/tickets/');
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error('Error fetching tickets:', error.message);
    }
  };

  return (
    <div>
      <h1>Customer Service</h1>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <h2>{ticket.title}</h2>
            <p>{ticket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerService;