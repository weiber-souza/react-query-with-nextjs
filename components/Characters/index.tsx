import React, { useState } from "react";
import Character, { CharacterProps } from "../Character";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

export default function Characters(characteres: any) {
  return (
    <div className="characters">
      {characteres.characteres.results.map(
        (character: CharacterProps["character"], index: number) => (
          <Character key={`character-${index}`} character={character} />
        )
      )}
    </div>
  );
}
