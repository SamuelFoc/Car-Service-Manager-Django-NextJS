import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { capitalizeFirstLetter } from "@/lib/formatters";

export function ControlInput({ data, excluded = [] }) {
  const keys = Object.keys(data).filter((key) => !excluded.includes(key));

  return (
    <div className="flex flex-col items-end">
      <Button>Add</Button>
      <div className="w-full grid grid-cols-3 gap-4 mt-3">
        {keys.map((key) => (
          <Input
            key={key}
            type="text"
            placeholder={capitalizeFirstLetter(key)}
          />
        ))}
      </div>
      <div className="w-full flex justify-center mt-5">
        <Button className="w-56">Save</Button>
      </div>
    </div>
  );
}
