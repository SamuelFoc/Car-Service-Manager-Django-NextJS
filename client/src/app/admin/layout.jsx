import { NavBar, NavLink } from "@/components/admin/NavBar";

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }) {
  return (
    <>
      <NavBar>
        <NavLink href={"/admin"}>Dashboard</NavLink>
        <NavLink href={"/admin/servicebooks"}>Service Books</NavLink>
        <NavLink href={"/admin/cars"}>Cars</NavLink>
        <NavLink href={"/admin/parts"}>Parts</NavLink>
      </NavBar>
      <div className="container my-6">{children}</div>
    </>
  );
}
