import { RawNodeDatum } from "react-d3-tree";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Briefcase, User, Users } from "lucide-react";
import { Badge } from "../ui/badge";

const renderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}: {
  nodeDatum: RawNodeDatum;
  toggleNode: () => void;
  foreignObjectProps: Record<string, number>;
}) => (
  <g>
    <foreignObject {...foreignObjectProps}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-2 border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={toggleNode}
            >
              <div className="flex items-center gap-2">
                {nodeDatum.name === "CEO" ? (
                  <Briefcase className="h-4 w-4 text-blue-500" />
                ) : nodeDatum.name.includes("Manager") ? (
                  <Users className="h-4 w-4 text-green-500" />
                ) : (
                  <User className="h-4 w-4 text-gray-500" />
                )}
                <span className="font-medium text-sm">{nodeDatum.name}</span>
              </div>
              {nodeDatum.attributes?.department && (
                <Badge variant="secondary" className="mt-1 text-xs">
                  {nodeDatum.attributes.department}
                </Badge>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <div className="p-2">
              <p className="font-medium">
                {nodeDatum.attributes?.role || nodeDatum.name}
              </p>
              {nodeDatum.attributes?.employeeCount && (
                <p className="text-sm text-gray-500">
                  Team size: {nodeDatum.attributes.employeeCount}
                </p>
              )}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </foreignObject>
  </g>
);

export default renderForeignObjectNode;
