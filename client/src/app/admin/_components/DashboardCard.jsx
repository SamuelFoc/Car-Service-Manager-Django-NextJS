import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function DashboardCard({ title, subtitle, body }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {Array.isArray(subtitle) ? (
          subtitle.map((sub) => (
            <CardDescription key={sub.key}>
              {sub.key}:&ensp;{sub.value}
            </CardDescription>
          ))
        ) : (
          <CardDescription>{subtitle}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <strong className="text-2xl">{body}</strong>
      </CardContent>
    </Card>
  );
}
