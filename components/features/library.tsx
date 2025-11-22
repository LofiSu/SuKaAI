"use client"

import * as React from "react"
import { Plus, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface LibraryItem {
  id: string
  title: string
  type?: "query" | "url" | "project"
  timestamp?: Date
}

export interface LibraryProps {
  items?: LibraryItem[]
  onItemClick?: (item: LibraryItem) => void
  onAddClick?: () => void
  className?: string
}

const mockItems: LibraryItem[] = [
  { id: "1", title: "github", type: "query" },
  { id: "2", title: "nextjs最稳定的版本是哪个", type: "query" },
  { id: "3", title: "what are the standard ar", type: "query" },
  { id: "4", title: "NewsTrends MCP", type: "project" },
  { id: "5", title: "用中文解释这个issue", type: "query" },
  { id: "6", title: "推荐一些优质的AI搜索引", type: "query" },
  { id: "7", title: "帮我写一个博客页面", type: "query" },
  { id: "8", title: "给我推荐一些ai搜索的项目", type: "query" },
  { id: "9", title: "https://github.com/Fello", type: "url" },
  { id: "10", title: "给我阿迪香港三件五折活", type: "query" },
]

export const Library: React.FC<LibraryProps> = ({
  items = mockItems,
  onItemClick,
  onAddClick,
  className,
}) => {
  const getItemIcon = (item: LibraryItem) => {
    switch (item.type) {
      case "url":
        return <ExternalLink className="h-3 w-3 text-muted-foreground" />
      case "project":
        return <div className="h-3 w-3 rounded bg-primary" />
      default:
        return null
    }
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Library</h2>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onAddClick}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Items List */}
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick?.(item)}
            className="group flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {getItemIcon(item)}
            <span className="flex-1 truncate">{item.title}</span>
          </button>
        ))}
      </div>

      {/* View All Link */}
      <button className="text-left text-sm text-primary hover:underline">
        View All
      </button>
    </div>
  )
}

