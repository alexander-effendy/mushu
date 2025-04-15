import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { ModelStore } from "@/store/ModelStore";
import { ChatStore } from "@/store/ChatStore";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const models = [
  {
    value: "mushu",
    label: "Mushu-v1-mini",
    description: "Sasha's orange cat, scared of Alex"
  },
  {
    value: "papa",
    label: "Papa-v1-mini",
    description: "Papa is Alex's papa"
  },
  {
    value: "celine",
    label: "Celine-2.5",
    description: "Alex is Celine's driver"
  },
  {
    value: "fridge",
    label: "Fridge-4o-ultra",
    description: "Can do 2 pull ups only, bully weaker climbers"
  },
  {
    value: "samantha",
    label: "Samantha-1",
    description: "An alien, galaxy level fingers."
  },
  {
    value: "david",
    label: "David-v1-pro",
    description: "Can climb V9, in his dreams, cooks very well."
  },
]

export default function ModelCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const setSelectedModel = ModelStore((state) => state.setSelectedModel)
  const setChatHistory = ChatStore((state) => state.setChatHistory)
  const setHasSentFirstMessage = ChatStore((state) => state.setHasSentFirstMessage)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="absolute top-2 left-2 w-[180px] h-[30px] justify-between text-[12px]"
        >
          {value
            ? models.find((framework) => framework.value === value)?.label
            : "Mushu-v1-mini"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0" side="bottom" align="start">
        <Command>
          <CommandInput placeholder="Search models..." className="h-9 text-[12px]" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
            {models.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  if (currentValue !== value) {
                    // clear chat
                    setHasSentFirstMessage(false);
                    setChatHistory([]);
                  }
                  setValue(currentValue === value ? "" : currentValue)
                  setSelectedModel(currentValue)
                  setOpen(false)
                }}
              >
                <div className="flex flex-col">
                  <span className="text-xs">{framework.label}</span>
                  <span className="text-[10px] text-muted-foreground">{framework.description}</span>
                </div>
                <Check
                  className={cn(
                    "ml-auto",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
