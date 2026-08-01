"use client";

import { useState } from "react";
import { SERVICE_CATEGORIES } from "@/lib/services";
import { cn } from "@/lib/utils";

export function PriceList() {
  const [active, setActive] = useState(SERVICE_CATEGORIES[0]!.id);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === active)!;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {SERVICE_CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors",
              active === category.id
                ? "border-gold bg-gold text-cream"
                : "border-blush-dark text-ink/70 hover:border-gold hover:text-gold-dark"
            )}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {activeCategory.items.map((item) => (
          <div
            key={item.name}
            className="flex items-start justify-between gap-4 rounded-2xl border border-blush/70 bg-white/60 px-5 py-4"
          >
            <div>
              <p className="text-sm leading-relaxed text-ink/85 sm:text-base">
                {item.name}
              </p>
              <p className="mt-1 text-xs text-ink/50">{item.duration}</p>
            </div>
            <p className="shrink-0 text-sm font-semibold whitespace-nowrap text-gold-dark sm:text-base">
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
