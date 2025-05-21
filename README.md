# About
Mushu is a personal AI chatbot project that lets you define distinct personalities for your conversations. Think of it like having multiple characters—each with their own voice, quirks, and attitudes—living in one app. Whether it's your sassy cat, your sweet friend Celine, your chaotic friend Sasha, or that one girl you just can’t stand, Mushu brings them all to life through AI.


# Features

* Custom Personalities: Create and define how each chatbot "feels"—tone, humor, attitude, and more.

* Multiple Models: Swap between different personas with ease. For example:
  - Mushu (the cat): lazy, sarcastic, food-obsessed.
  - Siaopo: complains a lot, a bit loud, kind.
  - Sasha: energetic, chaotic, brutally honest.
  - That fridge: passive-aggressive, fake nice, toxic, arrogant, climbs bad.

* Conversational Memory: Each character remembers what you’ve talked about (in-memory data only, no db).
* Private & Personal: Built for personal use with no external tracking or analytics.


# Tech Stack
* Frontend: React, Vite, TypeScript
* Backend: Node, Express
* AI/LLM Integration: Gemini
* UI: Shadcn, TailwindCSS

# Set up

* clone the repo

```
git clone https://github.com/alexander-effendy/mushu.git
cd mushu
```

* install frontend dependencies (React + Vite)
```
cd frontend
npm install
```
* install backend dependencies (Node.js + Express)
```
cd ../backend
npm install
```

* get your Gemini API key here: https://aistudio.google.com/prompts/new_chat

* Create .env for backend (backend/.env)
```
PORT=3000
OPENAI_API_KEY=your_api_key_here
```

* Create .env for frontend (frontend/.env)
```
VITE_BACKEND_URL=http://localhost:3000
```

* You will need to fill in the personality data to give characters to the chatbot too. I have my own in local version but for privacy I am not sharing my friends' personality publicly, except for the fridge model.

* Run the app in two terminals (one backend and one frontend)

Backend
```
cd backend
node index.js
```

Frontend
```
cd frontend
npm run dev
```



