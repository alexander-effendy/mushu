import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizontal, Cat, GalleryVerticalEnd, UploadCloud } from "lucide-react";
import ModelCombobox from "@/components/ModelCombobox";

export default function Chat() {
  return (
    <section className="relative">
      {/* absolutes */}
      <Button size="sm" variant="ghost" className="rounded-md absolute right-2 top-2">
        <GalleryVerticalEnd className="text w-6 h-6 shrink-0" />
      </Button>

      <ModelCombobox />

      {/* Content */}
      <div className="min-h-screen flex flex-col pb-3">
        <div className="flex-grow py-24 lg:py-32  flex flex-col justify-center">
          <div className="mt-0 max-w-4xl w-full text-center mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex justify-center items-center">
              {/* Logo */}
              <div
                className="flex items-center gap-2 self-center font-medium"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <Cat className="size-4" />
                </div>
                Mushu Inc.
              </div>
              {/* End Logo */}
            </div>
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">
              Welcome to Mushu Meow
            </h1>
            <p className="mt-3 text-muted-foreground">
              Your AI-powered emotional support cat — here to listen, chat, and lift your spirits.
            </p>
          </div>
          {/* Search */}
          <div className="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Input
                type="text"
                className="p-4 block w-full rounded-full text-[13px]"
                placeholder="Ask me anything..."
              />
              <div className="absolute top-1/2 right-2 -translate-y-1/2">
                <Button size="sm" variant="ghost" className="rounded-full">
                  <SendHorizontal className="shrink-0 w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
          {/* End Search */}
        </div>
        <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground">© 2025 Mushu Inc.</p>
        </footer>
      </div>
      {/* End Content */}
    </section>
  );
}
