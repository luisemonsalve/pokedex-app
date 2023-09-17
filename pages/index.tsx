import AuthLayout from "@/main/components/layouts/AuthLayout";
import LoadingLayout from "@/main/components/layouts/LoadingLayout";
import SignIn from "@/main/components/modules/auth/SignIn";
import useUser from "@/main/lib/useUser";

export default function Home() {
  const { isLoadUser } = useUser({
    redirectTo: "/dashboard",
    redirectIfFound: true,
  });

  if (!isLoadUser) {
    return <LoadingLayout />;
  } else {
    return (
      <AuthLayout
        meta={{
          title: " Pokédex",
        }}
      >
        <SignIn />
      </AuthLayout>
    );
  }
}
