import AuthLayout from "@/main/components/layouts/AuthLayout";
import SignIn from "@/main/components/modules/auth/SignIn";

export default function Home() {
  return (
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  );
}
