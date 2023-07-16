from fastapi import FastAPI, Request
import uvicorn 
from ai import AI
from fastapi.middleware.cors import CORSMiddleware  # Import the CORS middleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],  # Allow both POST and OPTIONS methods
    allow_headers=["*"],
)

@app.post("/")
async def index(request: Request):
   data = await request.json()  # Correct way to access the JSON data
   question = data.get("message")  # Assuming you are sending the message in the "message" field
   chatHistory = parseChatHistory(data.get("chatHistory"))
   responseModel = AI(chat_history=chatHistory)
   response = responseModel.respond(question)
   return {"message": response}

def parseChatHistory(chatHistory):
   botMessage = ""
   userMessage = ""
   chatHistory = []
   for chat in chatHistory:
      if chat["sender"] == "bot":
         botMessage = chat["message"]
      else:
         userMessage = chat["message"]
      if botMessage and userMessage:
         chatHistory.append((userMessage, botMessage))
   return chatHistory
         

if __name__ == "__main__":
   uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)