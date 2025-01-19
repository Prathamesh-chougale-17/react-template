import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

interface TopCardProps {
  imageUrl: string;
  title: string;
  description: string;
  postedAt: Date;
  className?: string;
}

export function TopCard({
  imageUrl,
  title,
  description,
  postedAt,
  className,
}: TopCardProps) {
  return (
    <Card className={cn("max-w-sm overflow-hidden", className)}>
      <div className="aspect-video relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground mt-4">
          Posted {formatDistanceToNow(postedAt, { addSuffix: true })}
        </p>
      </CardContent>
    </Card>
  );
}
