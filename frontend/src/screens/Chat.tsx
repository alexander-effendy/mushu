import { useState, useEffect } from 'react';
import { ModelStore } from "@/store/ModelStore";
import { ChatStore } from "@/store/ChatStore";

import ModelCombobox from "@/components/ModelCombobox";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SendHorizontal, Cat, GalleryVerticalEnd } from "lucide-react";

const Chat = () => {
  const selectedModel = ModelStore((state) => state.selectedModel);
  const hasSentFirstMessage = ChatStore((state) => state.hasSentFirstMessage);
  const setHasSentFirstMessage = ChatStore((state) => state.setHasSentFirstMessage)

  const [input, setInput] = useState("");

  useEffect(() => {
  }, [selectedModel]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setHasSentFirstMessage(true);
    setInput("");
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
          Welcome to Mushu Meow
        </h1>
        <p className="text-muted-foreground max-w-md">
          Your AI-powered emotional support cat — here to listen, chat, and lift your spirits.
        </p>
      </div>
    )}

    {/* Chat Input */}
    <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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
