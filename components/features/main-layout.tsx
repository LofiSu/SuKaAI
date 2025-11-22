"use client"

import * as React from "react"
import { Sidebar } from "./sidebar"
import { SearchBar } from "./search-bar"
import { Library } from "./library"
import { LibraryItem } from "./library"

export interface MainLayoutProps {
  children?: React.ReactNode
  showLibrary?: boolean
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  onLibraryItemClick?: (item: LibraryItem) => void
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showLibrary = true,
  searchPlaceholder,
  onSearch,
  onLibraryItemClick,
}) => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query)
    onSearch?.(query)
  }

  const handleLibraryItemClick = (item: LibraryItem) => {
    console.log("Library item clicked:", item)
    onLibraryItemClick?.(item)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex flex-1 flex-col overflow-hidden">
        {/* Top Section with Search */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8 py-12">
          {/* Logo/Brand - Only show when no children */}
          {!children && (
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-3xl font-bold">
                Info<span className="rounded-full bg-primary/20 px-2 py-0.5 text-primary">
                  Matrix
                </span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Serverless Multi-Agent Content Intelligence Platform
              </p>
            </div>
          )}

          {/* Search Bar */}
          <SearchBar
            placeholder={searchPlaceholder}
            onSearch={handleSearch}
            className="w-full"
          />

          {/* Library Section */}
          {showLibrary && !children && (
            <div className="w-full max-w-3xl">
              <Library onItemClick={handleLibraryItemClick} />
            </div>
          )}
        </div>

        {/* Children Content (for nested routes) */}
        {children && (
          <div className="flex-1 overflow-auto border-t border-border">
            {children}
          </div>
        )}
      </main>
    </div>
  )
}

