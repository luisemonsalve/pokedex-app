import MainLayout from "@/main/components/layouts/MainLayout";
import CardsContainer from "@/main/components/modules/dasboard/CardsContainer";

import useSWR from "swr";
import { fetcher } from "@/main/lib/fetcher";
import { useState } from "react";
import useUser from "@/main/lib/useUser";
import LoadingLayout from "@/main/components/layouts/LoadingLayout";

export default function Dashboard() {
  const [page, setPage] = useState(0);
  const { user, isLoadUser } = useUser({
    redirectTo: "/",
  });

  const { data, error, isLoading } = useSWR(
    `/api/pokedex?page=${page}`,
    fetcher
  );

  if (isLoading || !isLoadUser) {
    return <LoadingLayout />;
  }

  return (
    <MainLayout
      user={user}
      meta={{
        title: "Dashboard | Pokédex",
        description: "Dashboard simple que muestra 24 pokemones",
      }}
    >
      <CardsContainer data={data} changePage={setPage}></CardsContainer>
    </MainLayout>
  );
}
