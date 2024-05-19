import { fetchApi } from "@/lib/fetchApi";
import { DashboardCard } from "../_components/DashboardCard";
import Link from "next/link";
import { formatNumber } from "@/lib/formatters";

export default async function Cars() {
  const cars = await fetchApi({ path: "/cars/", jwt: false });

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cars.data.map((car) => (
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
    </main>
  );
}
