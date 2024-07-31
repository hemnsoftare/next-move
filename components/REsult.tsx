"use client";
import React from "react";
import Card from "./card";

export type Movie = {
  first_air_date: string;
  backdrop_path: string;
  id: number;
  title: string;
  name: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const REsult = ({ a }: Movie[]) => {
  console.log(a);
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {a.map((result: Movie) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default REsult;
