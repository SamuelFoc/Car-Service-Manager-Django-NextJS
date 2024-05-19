import { fetchApi } from "@/lib/fetchApi";
import { DashboardCard } from "./_components/DashboardCard";

export default async function Admin() {
  const servicebooks = await fetchApi({ path: "/servicebooks/", jwt: false });
  const cars = await fetchApi({ path: "/cars/", jwt: false });
  const parts = await fetchApi({ path: "/parts/", jwt: false });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title={"Service Books"}
        subtitle={"All service books in DB"}
        body={servicebooks.data.length}
      />
      <DashboardCard
        title={"Cars"}
        subtitle={"All cars in DB"}
        body={cars.data.length}
      />
      <DashboardCard
        title={"Car Parts"}
        subtitle={"All car parts in DB"}
        body={parts.data.length}
      />
    </main>
  );
}
