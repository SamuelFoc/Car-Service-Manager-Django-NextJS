import { fetchApi } from "@/lib/fetchApi";
import { DashboardCard } from "../_components/DashboardCard";
import Link from "next/link";
import { formatNumber } from "@/lib/formatters";
import { ControlInput } from "../_components/ControlInput";
import { PageGrid } from "../_components/PageGrid";

export default async function Parts() {
  const parts = await fetchApi({ path: "/parts/", jwt: false });

  return (
    <main className="flex flex-col gap-5">
      <ControlInput
        data={parts.data[0]}
        excluded={["id", "quantity", "services"]}
      />
      <PageGrid>
        {parts.data.map((part) => (
          <Link key={part.id} href={`/admin/parts/${part.id}`}>
            <DashboardCard
              title={part.name}
              subtitle={[{ key: "Manufacturer", value: part.manufacturer }]}
              body={`Price: ${formatNumber(part.price)} CZK`}
            />
          </Link>
        ))}
      </PageGrid>
    </main>
  );
}
