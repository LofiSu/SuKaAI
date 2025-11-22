"use client"

import * as React from "react"
import {
  Search,
  Grid3x3,
  HelpCircle,
  Globe,
  Grid,
  Paperclip,
  Mic,
  Volume2,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Ask anything. Type @ for mentions and / for shortcuts.",
  onSearch,
  className,
}) => {
  const [query, setQuery] = React.useState("")
  const [isFocused, setIsFocused] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim() && onSearch) {
      onSearch(query.trim())
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative flex w-full max-w-3xl items-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 shadow-sm transition-all",
        isFocused && "ring-2 ring-ring ring-offset-2",
        className
      )}
    >
      {/* Left Icons Group */}
      <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-muted/30 px-2 py-1">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Grid3x3 className="h-4 w-4 text-muted-foreground" />
        <HelpCircle className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Input Field */}
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="flex-1 border-0 bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      {/* Right Icons */}
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          title="Language"
        >
          <Globe className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          title="Grid"
        >
          <Grid className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          title="Attach"
        >
          <Paperclip className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn(
            "h-8 w-8",
            isFocused && "bg-primary text-primary-foreground"
          )}
          title="Voice Input"
        >
          <Mic className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}

