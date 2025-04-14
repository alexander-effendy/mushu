#!/bin/bash

URL="http://localhost:3000/chat"

messages=(
  "Hello Mushu, it’s Alex again!!!"
  "Do you miss me?"
  "Jing says hi!"
  "Can I pet you just once, please?"
  "I brought your favorite tuna."
  "Why do you always look at me like I’m the enemy?"
  "I think Sasha loves you more than anyone else."
  "You were purring last time, admit it!"
  "If I send my first V8 before Samantha, will you like me more?"
  "Wanna watch bouldering videos with me?"
  "I swear you liked me a little last time."
  "I saw Jing sleeping in your spot. You cool with that?"
  "Do you even do anything all day?"
  "I think Sasha said I’m your favorite."
  "I brought catnip. Say thank you."
  "Can we just cuddle for like… 2 seconds?"
  "I washed your bowl. You're welcome."
  "Why do you always look like you're judging me?"
  "You know Sasha talks to you in baby voice right?"
  "Would you follow me if I became your new owner?",
  "I am Sasha’s brother"
)

for msg in "${messages[@]}"; do
#   echo "Sending message: $msg"
  curl -s -X POST "$URL" \
    -H "Content-Type: application/json" \
    -d "{\"message\": \"$msg\"}"
  echo -e "\n---"
  sleep 5
done
