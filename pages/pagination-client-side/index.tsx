import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import Characters from "../../components/Characters";
import { NavBar } from "../../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [page, setPage] = useState(1);
  const [characterData, setCharacterData] = useState([]);
  const queryClient = new QueryClient();

  const fetchCharacters = async ({ queryKey }: any) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, status, isLoading, isError, isFetched } = useQuery(
    ["characters", page],
    fetchCharacters,
    {
      keepPreviousData: true,
    }
  );

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />

        <div className="container">
          <h1>Rick and Morty</h1>
          {isFetched ? <Characters characteres={data} /> : null}

          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setPage((old) => old + 1)}
            disabled={!data.info.next}
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
