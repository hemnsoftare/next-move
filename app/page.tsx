import REsult, { Movie } from "@/components/REsult";
import React from "react";

const apiKey = process.env.API_KEY;

type SearchParamsType = { [key: string]: string | string[] | undefined };

const Home = async ({ searchParams }: { searchParams: SearchParamsType }) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${apiKey}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results: Movie[] = data.results;
  console.log(results);
  return (
    <div>
      <REsult a={results} />
    </div>
  );
};

//   const { data, error, isLoading } = useQuery({
//     queryKey: ["fetchData", param],
//     queryFn: () => getData(param),
//   });

//   if (error) {
//     console.error("Error fetching data:", error);
//   }

//   return (
//     <div className="text-3xl font-extrabold text-red-600">
//       Home hi bye
//       {isLoading && <p>Loading...</p>}
//       {error && <p>Error loading data</p>}
//       {data ? <p>Data loaded successfully</p> : <p>No data available</p>}
//     </div>
//   );
// };

export default Home;

// const getData = async (param: string) => {
//   const res = await fetch(
//     `https://api.themoviedb.org/3${
//       param === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
//     }?api_key=${apiKey}&language=en-US&page=1`,
//     { next: { revalidate: 10000 } }
//   );
//   const data = await res.json();
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   const resl = data.results;
//   return resl;
// };
