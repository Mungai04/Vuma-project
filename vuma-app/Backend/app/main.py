from fastapi import FastAPI
from app.routers import customer_service

app = FastAPI()

app.include_router(customer_service.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Vuma Fiber Customer Service API"}