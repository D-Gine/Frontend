"use client";

import { Search } from "lucide-react";

interface SearchHiddenInputProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setShowSearch: (value: boolean) => void;
}

export default function SearchBarHidden({
  searchQuery,
  setSearchQuery,
  setShowSearch,
}: SearchHiddenInputProps) {
  return (
    <div className="relative flex items-center">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onBlur={() => setShowSearch(false)}
        autoFocus
        className="pl-10 pr-4 py-2 w-full bg-transparent rounded-full text-sm outline-none focus:shadow-md focus:shadow-primary/20"
      />
    </div>
  );
}
