"use client"

import * as React from "react"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItemProps {
  icon: LucideIcon
  label: string
  href: string
  isActive?: boolean
  badge?: string
  onClick?: () => void
}

export const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  label,
  href,
  isActive = false,
  badge,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-lg p-2 transition-colors",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
      )}
    >
      <div className="relative">
        <Icon className="h-5 w-5" />
        {badge && (
          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {badge}
          </span>
        )}
      </div>
      <span className="text-xs">{label}</span>
    </Link>
  )
}

