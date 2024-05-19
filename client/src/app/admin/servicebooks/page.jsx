import { fetchApi } from "@/lib/fetchApi";
import { DashboardCard } from "../_components/DashboardCard";
import Link from "next/link";

export default async function Servicebooks() {
  const servicebooks = await fetchApi({ path: "/servicebooks/", jwt: false });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicebooks.data.map((book) => (
        <Link key={book.id} href={`/admin/servicebooks/${book.id}`}>
          <DashboardCard
            title={book.name}
            subtitle={book.description}
            body={`#${book.cars.length} Car${book.cars.length > 1 ? "s" : ""}`}
          />
        </Link>
      ))}
    </main>
  );
}
