from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import customer_service

app = FastAPI()

# CORS settings
origins = [
    "http://localhost",         
    "http://localhost:3000",    
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Include your routers
app.include_router(customer_service.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Vuma Fiber Customer Service API"}