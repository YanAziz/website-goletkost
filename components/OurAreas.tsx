"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import { UnivAreas } from "@/constants/PageData";

const OurAreas = () => {
  const [selectedUniv, setSelectedUniv] = useState<string | null>(null);

  const handleUnivChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUniv(event.target.value);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-semibold">Area properti kami</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Univ</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuLabel>Areas</DropdownMenuLabel>
          <select value={selectedUniv || ""} onChange={handleUnivChange}>
            <option value="">Pilih Universitas</option>
            {UnivAreas.map((univ) => (
              <option key={univ.univ} value={univ.univ}>
                {univ.univ}
              </option>
            ))}
          </select>
          {selectedUniv && (
            <ul>
              {UnivAreas.find((u) => u.univ === selectedUniv)?.areas.map(
                (area) => (
                  <li key={area}>{area}</li>
                )
              )}
            </ul>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default OurAreas;
