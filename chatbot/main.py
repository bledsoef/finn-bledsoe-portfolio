from fastapi import FastAPI, Request
import uvicorn 
from ai import AI
from fastapi.middleware.cors import CORSMiddleware  # Import the CORS middleware
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import ssl

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
   try:
      smtp_server = "smtp.gmail.com"
      port = 587  # For starttls
      SUBJECT = "Someone asked you a question!"
      email = os.environ["SENDER_EMAIL"]
      msg = MIMEMultipart()

      password = os.environ["EMAIL_PASSWORD"]
      msg['From'] = email
      msg['To'] = email  # Replace with the recipient's email address
      msg['Subject'] = SUBJECT
      server = smtplib.SMTP(smtp_server, port)
      msg.attach(MIMEText(question, 'plain'))
      server.starttls()
      server.login(email, password)
      server.sendmail(email, email, msg.as_string())

   except Exception as e:
      print("Error:", e)

   finally:
      server.quit()

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