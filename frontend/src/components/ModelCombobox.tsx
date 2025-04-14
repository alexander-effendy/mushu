import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

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
    value: "celine",
    label: "Celine-v1",
    description: "Alex is Celine's driver"
  },
  {
    value: "fridge",
    label: "Fridge-v1",
    description: "Can do 2 pull ups only, bully weaker climbers"
  },
  {
    value: "samantha",
    label: "Samantha-v1",
    description: "An alien, galaxy level fingers."
  },
]

export default function ModelCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
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
            : "Select model"}
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
                  setValue(currentValue === value ? "" : currentValue)
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
