import { fetchApi } from "@/lib/fetchApi";
import { PageHeader } from "../../_components/PageHeader";
import { PageGrid } from "../../_components/PageGrid";
import { DashboardCard } from "../../_components/DashboardCard";
import { formatNumber } from "@/lib/formatters";
import Link from "next/link";

export default async function ServiceBook({ params }) {
  const servicebook = await fetchApi({
    path: `/servicebooks/${params.id}`,
    jwt: false,
  });

  return (
    <main>
      <PageHeader
        title={"📘 " + servicebook.data.name}
        subtitle={servicebook.data.description}
      />
      <PageGrid>
        {servicebook.data.cars.map((car) => (
          <Link key={car.id} href={`/admin/cars/${car.id}`}>
            <DashboardCard
              title={`${car.manufacturer} ${car.model}`}
              subtitle={[
                { key: "Engine", value: car.engine_type },
                { key: "Year", value: car.year },
                { key: "Fuel", value: car.fuel_type.toUpperCase() },
              ]}
              body={`Last Service: ${formatNumber(car.last_service)} km`}
            />
          </Link>
        ))}
      </PageGrid>
    </main>
  );
}
