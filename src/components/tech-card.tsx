import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TechCardProps {
  rank: number;
  name: string;
  count: number;
  metric: string;
  className?: string;
}

const TechCard = ({ rank, name, count, metric, className }: TechCardProps) => {
  return (
    <Card
      className={cn(
        "w-full transition-all hover:scale-105 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="flex flex-col justify-center h-full gap-3 p-4">
        <span className="text-lg font-bold text-muted-foreground/80 transition-colors group-hover:text-muted-foreground">
          {rank}
          {rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th"}
        </span>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold">{count}</span>
          <span className="text-sm text-muted-foreground">{metric}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechCard;
