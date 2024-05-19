import { fetchApi } from "@/lib/fetchApi";
import { PageHeader } from "../../_components/PageHeader";
import { PartTable } from "../_components/PartTable";

export default async function Part({ params }) {
  const part = await fetchApi({
    path: `/parts/${params.id}`,
    jwt: false,
  });

  return (
    <main>
      <PageHeader title={"🛠️ " + part.data.name} />
      <PartTable data={part.data} />
    </main>
  );
}
