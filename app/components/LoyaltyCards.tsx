"use client";
import { SearchBar } from "./SearchBar";
import { LoyaltyCard } from "./LoyaltyCard";

import { useMemo, useState } from "react";

type LoyaltyCardsProps = {
  // TODO remove anys
  loyaltyCards: any;
};

export default function LoyaltyCards({ loyaltyCards }: LoyaltyCardsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCards = useMemo(
    () =>
      // TODO remove anys
      loyaltyCards?.items.filter((card: any) => {
        if (!searchTerm) return true;
        return card.fields?.companyName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }),
    [searchTerm, loyaltyCards]
  );
  console.log(loyaltyCards);

  return (
    <>
      <div className="h-10">
        <SearchBar
          handleChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="h-screen overflow-auto">
        {/* TODO remove anys */}
        {filteredCards.map((card: any) => (
          <LoyaltyCard
            key={card.fields.companyName}
            companyName={card.fields.companyName}
            image={card.fields.imageToScan.fields.file.url}
          />
        ))}
        {filteredCards.length === 0 && (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-500">No cards found 😭</p>
          </div>
        )}
      </div>
    </>
  );
}
