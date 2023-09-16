import MainLayout from "@/main/components/layouts/MainLayout";
import CardsContainer from "@/main/components/modules/dasboard/CardsContainer";

import useSWR from "swr";
import { fetcher } from "@/main/lib/fetcher";
import Error from "next/error";

export default function Home() {
  const { data, error, isLoading } = useSWR(`/api/pokedex`, fetcher);
  if (isLoading) {
    <div>Loading</div>;
  }

  console.log(data);
  return (
    <MainLayout>
      <CardsContainer data={data}></CardsContainer>
    </MainLayout>
  );
}
