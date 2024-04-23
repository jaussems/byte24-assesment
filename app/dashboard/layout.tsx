import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex-col h-screen flex-col md:flex-row ">
        <Link className="flex px-20 py-6" href={"/dashboard"}>Go back</Link>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }