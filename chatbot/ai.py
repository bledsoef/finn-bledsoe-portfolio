import dotenv
from pathlib import Path
import traceback
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores.pinecone import Pinecone
from langchain.memory import ConversationBufferMemory
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
from langchain.chains.question_answering import load_qa_chain
import pinecone
from makechain import makeChain

# from openai import C


from langchain.chains import ConversationalRetrievalChain
import os

# Environement variable setup
env_path = Path('.') / '.env'
dotenv.load_dotenv()

os.environ["OPENAI_API_KEY"] = os.environ["open_ai_key"]


class AI:
    def __init__(self, chat_history):
        """
        Set up of basic configurations for openai calls
        """
        self.chat_history = chat_history
        # gets the pinecone index as a reference
        pinecone.init(api_key=os.environ["PINECONE_API_KEY"], environment=os.environ["PINECONE_ENVIRONMENT"])
        vectorStore:Pinecone = Pinecone.from_existing_index(index_name=os.environ["PINECONE_INDEX_NAME"], embedding=OpenAIEmbeddings())
        self.qa = makeChain(vectorStore=vectorStore)
        # use davinci model, but TODO: use gpt-4
        self.model = 'text-davinci-003'

        # temperature governs the creativity of the responses
        self.temperature = .95

        self.max_token = 50

    def respond(self, text: str) -> str:
        """
        Takes in user input and returns AI response
        :param text: User input
        :return: AI Response
        """
        result = self.qa._call({'question':text, 'chat_history':self.chat_history or [], 'context':""})
        return result["answer"]