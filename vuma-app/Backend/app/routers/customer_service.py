from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# In-memory data store
tickets = []
ticket_id = 0

class Ticket(BaseModel):
    title: str
    description: str

@router.post("/tickets/")
def create_ticket(ticket: Ticket):
    global ticket_id
    ticket_id += 1
    new_ticket = ticket.dict()
    new_ticket["id"] = ticket_id
    tickets.append(new_ticket)
    return new_ticket

@router.get("/tickets/")
def read_tickets():
    return tickets

@router.get("/tickets/{ticket_id}")
def read_ticket(ticket_id: int):
    for ticket in tickets:
        if ticket["id"] == ticket_id:
            return ticket
    raise HTTPException(status_code=404, detail="Ticket not found")