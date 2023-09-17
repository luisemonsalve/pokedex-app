import MainLayout from "@/main/components/layouts/MainLayout";
import useUser from "@/main/lib/useUser";
import LoadingLayout from "@/main/components/layouts/LoadingLayout";
import ProfileView from "@/main/components/modules/auth/ProfileView";

export default function Dashboard() {
  const { user, isLoadUser } = useUser({
    redirectTo: "/",
  });

  if (!isLoadUser) {
    return <LoadingLayout />;
  }

  return (
    <MainLayout user={user}>
      <ProfileView user={user} />
    </MainLayout>
  );
}
