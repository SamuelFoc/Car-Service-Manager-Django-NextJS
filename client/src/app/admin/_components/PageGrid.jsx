export function PageGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-4">
      {children}
    </div>
  );
}
