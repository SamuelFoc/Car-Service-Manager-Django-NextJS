export function PageHeader({ title, subtitle, bold = true }) {
  return (
    <div className="py-2 border-b-4 border-primary mb-4">
      <h1 className={bold ? "text-3xl font-bold" : "text-3xl"}>{title}</h1>
      <h4 className="text-xl text-gray-400">{subtitle}</h4>
    </div>
  );
}
