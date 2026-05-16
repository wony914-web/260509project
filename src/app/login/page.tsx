import { redirect } from "next/navigation";
import { AuthForm } from "@/components/auth/AuthForm";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "로그인 — 둥둥실",
};

export default async function LoginPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/");
  }

  return <AuthForm mode="signin" />;
}
