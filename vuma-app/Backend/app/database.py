import sqlite3
from contextlib import contextmanager

DATABASE_URL = "test.db"

@contextmanager
def get_db():
    conn = sqlite3.connect(DATABASE_URL)
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    with get_db() as db:
        cursor = db.cursor()
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS tickets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL
        )
        """)
        db.commit()

def create_ticket(db, title, description):
    cursor = db.cursor()
    cursor.execute("""
    INSERT INTO tickets (title, description) VALUES (?, ?)
    """, (title, description))
    db.commit()
    return cursor.lastrowid

def get_tickets(db):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM tickets")
    return cursor.fetchall()

def get_ticket(db, ticket_id):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM tickets WHERE id = ?", (ticket_id,))
    return cursor.fetchone()

def update_ticket(db, ticket_id, title, description):
    cursor = db.cursor()
    cursor.execute("""
    UPDATE tickets SET title = ?, description = ? WHERE id = ?
    """, (title, description, ticket_id))
    db.commit()
    return cursor.rowcount

def delete_ticket(db, ticket_id):
    cursor = db.cursor()
    cursor.execute("DELETE FROM tickets WHERE id = ?", (ticket_id,))
    db.commit()
    return cursor.rowcount