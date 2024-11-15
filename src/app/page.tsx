"use client";
import { useQuery } from "@/gqty";

export default function Home() {
  const query = useQuery();
  return (
    <div>
      {query.allFilms()?.films?.map((film) => (
        <div key={film?.id}>
          <p>title: {film?.title}</p>
          <p>director: {film?.director}</p>
        </div>
      ))}
    </div>
  );
}
