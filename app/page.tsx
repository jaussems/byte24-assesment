import {redirect} from "next/navigation";

export default function Home() {
  redirect('/dashboard');
  return (
    <main className="flex min-h-screen flex-col p-6">
   
    </main>
  );
}
