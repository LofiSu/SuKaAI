"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Compass,
  Boxes,
  TrendingUp,
  Bell,
  ChevronDown,
  ArrowUpRight,
  Plus,
  Pin,
  Briefcase,
  GraduationCap,
  Activity,
} from "lucide-react"
import { NavItem } from "./nav-item"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarSection {
  title: string
  items: Array<{
    icon: React.ComponentType<{ className?: string }>
    label: string
    href: string
  }>
}

const sidebarSections: Record<string, SidebarSection> = {
  home: {
    title: "Home",
    items: [
      { icon: Briefcase, label: "Travel", href: "/home/travel" },
      { icon: GraduationCap, label: "Academic", href: "/home/academic" },
      { icon: Activity, label: "Sports", href: "/home/sports" },
    ],
  },
  discover: {
    title: "Discover",
    items: [
      { icon: Compass, label: "For You", href: "/discover/for-you" },
      { icon: TrendingUp, label: "Top", href: "/discover/top" },
    ],
  },
}

export const Sidebar: React.FC = () => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = React.useState<string | null>(null)

  // Determine active section based on pathname
  React.useEffect(() => {
    if (pathname?.startsWith("/home")) {
      setActiveSection("home")
    } else if (pathname?.startsWith("/discover")) {
      setActiveSection("discover")
    } else if (pathname?.startsWith("/spaces")) {
      setActiveSection("spaces")
    } else if (pathname?.startsWith("/finance")) {
      setActiveSection("finance")
    } else {
      setActiveSection("home")
    }
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <aside className="flex h-screen w-20 flex-col items-center border-r border-border bg-background py-4">
      {/* Logo */}
      <div className="mb-6 flex items-center justify-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
          <div className="h-6 w-6 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Section with Pin - Only show when on home or discover */}
      {activeSection && sidebarSections[activeSection] && (
        <div className="mb-4 w-full px-2">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-xs font-semibold text-foreground">
              {sidebarSections[activeSection].title}
            </span>
            <Pin className="h-3 w-3 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            {sidebarSections[activeSection].items.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2 py-1.5 text-xs transition-colors",
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Add Button */}
      <Button
        variant="ghost"
        size="icon"
        className="mb-6 h-12 w-12 rounded-full border-2 border-dashed border-muted-foreground/30 hover:border-primary hover:bg-primary/10"
      >
        <Plus className="h-5 w-5" />
      </Button>

      {/* Main Navigation */}
      <nav className="flex flex-1 flex-col gap-2">
        <NavItem
          icon={Home}
          label="Home"
          href="/"
          isActive={isActive("/") || pathname?.startsWith("/home")}
        />
        <NavItem
          icon={Compass}
          label="Discover"
          href="/discover"
          isActive={pathname?.startsWith("/discover")}
        />
        <NavItem
          icon={Boxes}
          label="Spaces"
          href="/spaces"
          isActive={pathname?.startsWith("/spaces")}
        />
        <NavItem
          icon={TrendingUp}
          label="Finance"
          href="/finance"
          isActive={pathname?.startsWith("/finance")}
        />
      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2">
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <Bell className="h-5 w-5" />
        </Button>

        <div className="flex flex-col items-center gap-1">
          <div className="relative">
            <Button variant="ghost" size="icon" className="h-10 w-10 p-0">
              <Avatar className="h-8 w-8 border-2 border-background">
                <Badge
                  variant="default"
                  className="absolute -bottom-0.5 -right-0.5 h-4 w-8 rounded-full px-1 text-[10px]"
                >
                  pro
                </Badge>
              </Avatar>
            </Button>
            <ChevronDown className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
          </div>
          <span className="text-[10px] text-muted-foreground">Account</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10"
            title="Upgrade"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Button>
          <span className="text-[10px] text-muted-foreground">Upgrade</span>
        </div>
      </div>
    </aside>
  )
}

