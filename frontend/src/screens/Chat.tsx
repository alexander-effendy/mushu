import { useState, useEffect, useRef } from 'react';
// import { useQuery } from "@tanstack/react-query";
import { removeLeadingReply } from '@/utils/Parser';

import { ModelStore } from "@/store/ModelStore";
import { ChatStore } from "@/store/ChatStore";

import ModelCombobox from "@/components/ModelCombobox";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { sendChatMessageAPI } from '@/api/ChatApi';

import { SendHorizontal, Cat, GalleryVerticalEnd } from "lucide-react";

const Chat = () => {
  const selectedModel = ModelStore((state) => state.selectedModel);
  const hasSentFirstMessage = ChatStore((state) => state.hasSentFirstMessage);
  const setHasSentFirstMessage = ChatStore((state) => state.setHasSentFirstMessage);

  const chatHistory = ChatStore((state) => state.chatHistory);
  const appendToChatHistory = ChatStore((state) => state.appendToChatHistory);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  }, [selectedModel]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory])

  const handleSend = async () => {
    if (input.trim() === "") return;
    setHasSentFirstMessage(true);
  
    appendToChatHistory({ from: "user", text: input});
    setInput("");
    const chl = chatHistory?.length || 0;
    const response = await sendChatMessageAPI(input, selectedModel, chl);
    const reply = removeLeadingReply(response);

    appendToChatHistory({ from: "bot", text: reply});
  };

  return (
    <section className="flex flex-col min-h-screen">
      {/* Absolute icon + combobox */}
      <Button size="sm" variant="ghost" className="rounded-md absolute right-2 top-2">
        <GalleryVerticalEnd className="text w-6 h-6 shrink-0" />
      </Button>
      <ModelCombobox />

      {/* Content Area */}
      <div className={`flex-1 flex flex-col ${hasSentFirstMessage ? 'justify-end' : 'justify-center'}`}>
        {!hasSentFirstMessage && (
          <div className="flex flex-col items-center text-center space-y-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 font-medium">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Cat className="size-4" />
              </div>
              Mushu Inc.
            </div>
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">
              Welcome to AI Impersonator Meme 101
            </h1>
            <p className="text-muted-foreground max-w-md">
              {/* Your AI-powered emotional support cat — here to listen, chat, and lift your spirits. */}
              Your AI-powered diabolical trash talker
            </p>
          </div>
        )}

        {/* CHAT HISTORY */}
        {hasSentFirstMessage && (
          <div 
            style={{ height: 'calc(100vh - 125px)' }} // adjust 250px if needed to match input + header height
            className="soft-scrollbar-right px-4 py-4 w-full"
          >
            <div className="flex flex-col space-y-2 max-w-xl mx-auto">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`text-sm px-4 py-2 rounded-lg break-words ${
                    msg.from === "user"
                      ? "max-w-2/3 bg-muted text-muted-foreground self-end"
                      : "max-w-9/10 text-muted-foreground self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
        )}

        {/* Chat Input */}
        <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* {isPending && (
            <p className="text-sm text-muted-foreground italic mt-2 px-4">
              Mushu is thinking...
            </p>
          )} */}
          <div className="relative">
            <Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="p-4 block w-full rounded-full text-xs"
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <div className="absolute top-1/2 right-2 -translate-y-1/2">
              <Button size="sm" variant="ghost" className="rounded-full" onClick={handleSend}>
                <SendHorizontal className="shrink-0 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (always visible at bottom) */}
      <footer className="py-4 max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-muted-foreground">© 2025 Mushu Inc.</p>
      </footer>
    </section>
  );
};

export default Chat;
