from fastapi import APIRouter, HTTPException, Depends
from typing import List, Optional
from pydantic import BaseModel


tickets = [
    {"id": 1, "title": "create ticket", "description": "Description for Ticket "},
    {"id": 2, "title": "how can we help you today?", "description": "Description for Ticket "},
]

router = APIRouter()

class Ticket(BaseModel):
    id: int
    title: str
    description: str

@router.get("/tickets/", response_model=List[Ticket])
def read_tickets():
    return tickets

@router.get("/tickets/{ticket_id}", response_model=Ticket)
def read_ticket(ticket_id: int):
    for ticket in tickets:
        if ticket["id"] == ticket_id:
            return ticket
    raise HTTPException(status_code=404, detail="Ticket not found")

@router.post("/tickets/", response_model=Ticket)
def create_ticket(ticket: Ticket):
    new_ticket = dict(ticket)
    new_ticket["id"] = len(tickets) + 1
    tickets.append(new_ticket)
    return new_ticket

@router.put("/tickets/{ticket_id}", response_model=Ticket)
def update_ticket(ticket_id: int, ticket: Ticket):
    for t in tickets:
        if t["id"] == ticket_id:
            t.update(ticket.dict())
            return t
    raise HTTPException(status_code=404, detail="Ticket not found")

@router.delete("/tickets/{ticket_id}")
def delete_ticket(ticket_id: int):
    for i, t in enumerate(tickets):
        if t["id"] == ticket_id:
            del tickets[i]
            return {"message": "Ticket deleted successfully"}
    raise HTTPException(status_code=404, detail="Ticket not found")