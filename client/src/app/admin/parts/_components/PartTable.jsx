import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function PartTable({ data }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className={"bg-slate-300"}>
          <TableHead className={"text-slate-900 font-bold rounded-tl-xl"}>
            Part Name
          </TableHead>
          <TableHead className={"text-slate-900 font-bold"}>
            Manufacturer
          </TableHead>
          <TableHead className={"text-slate-900 font-bold rounded-tr-xl"}>
            Price
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className={"hover:bg-slate-50"}>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.manufacturer}</TableCell>
          <TableCell>{data.price}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
