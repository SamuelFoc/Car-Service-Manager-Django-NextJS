import { fetchApi } from "@/lib/fetchApi";
import { PageHeader } from "../../_components/PageHeader";
import { PiEngineFill } from "react-icons/pi";
import { GiGearStick } from "react-icons/gi";
import { IconCard } from "../_components/IconCard";
import { IoCarSport } from "react-icons/io5";
import { FaBook } from "react-icons/fa6";
import { PageGrid } from "../../_components/PageGrid";
import { DashboardCard } from "../../_components/DashboardCard";
import { formatDate, formatNumber } from "@/lib/formatters";

export default async function Car({ params }) {
  const car = await fetchApi({
    path: `/cars/${params.id}`,
    jwt: false,
  });

  return (
    <main>
      <PageHeader
        title={"🚗 " + car.data.manufacturer + " " + car.data.model}
        subtitle={car.data.description}
      />
      <PageGrid>
        <IconCard title={"Evidence"} icon={<FaBook />}>
          <strong>Owner:&ensp;</strong>
          <span>{car.data.owner}</span>
          <br />
          <strong>First Evidence:&ensp;</strong>
          <span>{car.data.first_evidence}</span>
          <br />
          <strong>Evidence Number:&ensp;</strong>
          <span>{car.data.evidence_number}</span>
          <br />
          <strong>VIN:&ensp;</strong>
          <span>{car.data.vin}</span>
          <br />
        </IconCard>
        <IconCard title={"Engine"} icon={<PiEngineFill />}>
          <strong>Type:&ensp;</strong>
          <span>{car.data.engine_type}</span>
          <br />
          <strong>Type:&ensp;</strong>
          <span>{car.data.engine_power} kW</span>
          <br />
          <strong>Code:&ensp;</strong>
          <span>{car.data.engine_code}</span>
          <br />
          <strong>Fuel:&ensp;</strong>
          <span>{car.data.fuel_type.toUpperCase()}</span>
          <br />
          <strong>Oil:&ensp;</strong>
          <span>{car.data.engine_oil}</span>
          <br />
        </IconCard>
        <IconCard title={"Transmission"} icon={<GiGearStick />}>
          <strong>Type:&ensp;</strong>
          <span>{car.data.transmission_type}</span>
          <br />
          <strong>Code:&ensp;</strong>
          <span>{car.data.transmission_code}</span>
          <br />
          <strong>Oil:&ensp;</strong>
          <span>{car.data.transmission_oil}</span>
          <br />
        </IconCard>
        <IconCard
          title={"Vehicle"}
          icon={<IoCarSport style={{ color: car.data.color }} />}
        >
          <strong>Color Code:&ensp;</strong>
          <span>{car.data.color}</span>
          <br />
          <strong>Foil:&ensp;</strong>
          <span>{car.data.foil ? "Yes" : "No"}</span>
          <br />
          <strong>Weight:&ensp;</strong>
          <span>{car.data.weight} kg</span>
          <br />
          <strong>Weight:&ensp;</strong>
          <span>{car.data.weight} kg</span>
          <br />
          <strong>Seats:&ensp;</strong>
          <span>{car.data.number_of_seats}</span>
          <br />
          <strong>Hitch:&ensp;</strong>
          <span>{car.data.hitch ? "Yes" : "No"}</span>
          <br />
        </IconCard>
      </PageGrid>
      <br />
      <PageHeader
        bold={false}
        title={"🧑‍🔧 Services"}
        subtitle={car.data.description}
      />
      <div className="flex flex-col gap-5">
        {car.data.services?.map((service) => (
          <DashboardCard
            key={service.id}
            title={service.service_type}
            subtitle={formatDate(service.date)}
            body={formatNumber(service.distance) + " km"}
          />
        ))}
      </div>
    </main>
  );
}
