import MainLayout from "@/main/components/layouts/MainLayout";
import CardsContainer from "@/main/components/modules/dasboard/CardsContainer";

import useSWR from "swr";
import { fetcher } from "@/main/lib/fetcher";
import Error from "next/error";
import { useState } from "react";

export default function Dashboard() {
  const [page, setPage] = useState(0);

  const { data, error, isLoading } = useSWR(
    `/api/pokedex?page=${page}`,
    fetcher
  );
  if (isLoading) {
    <div>Loading</div>;
  }

  return (
    <MainLayout>
      <CardsContainer data={data} changePage={setPage}></CardsContainer>
    </MainLayout>
  );
}
