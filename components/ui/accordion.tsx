"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
}

export function Accordion({
  items,
  type = "single",
  defaultValue,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(
    defaultValue
      ? Array.isArray(defaultValue)
        ? defaultValue
        : [defaultValue]
      : []
  );

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.value);
        return (
          <div
            key={item.value}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.value)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">{item.trigger}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-muted-foreground">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
