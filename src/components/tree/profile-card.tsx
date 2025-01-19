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
              className="flex flex-col items-center bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 
              rounded-lg shadow-lg dark:shadow-xl p-2 border border-gray-200 dark:border-gray-700/50 
              cursor-pointer hover:bg-gray-50 dark:hover:bg-gradient-to-br dark:hover:from-gray-750 dark:hover:to-gray-850 
              transition-all duration-200 ease-in-out transform hover:scale-105 
              dark:hover:shadow-blue-500/10 dark:hover:border-gray-600"
              onClick={toggleNode}
            >
              <div className="flex items-center gap-2">
                {nodeDatum.name === "CEO" ? (
                  <Briefcase className="h-4 w-4 text-blue-400 dark:text-blue-300" />
                ) : nodeDatum.name.includes("Manager") ? (
                  <Users className="h-4 w-4 text-emerald-400 dark:text-emerald-300" />
                ) : (
                  <User className="h-4 w-4 text-violet-400 dark:text-violet-300" />
                )}
                <span className="font-medium text-sm text-gray-900 dark:text-gray-50">
                  {nodeDatum.name}
                </span>
              </div>
              {nodeDatum.attributes?.department && (
                <Badge
                  variant="secondary"
                  className="mt-1 text-xs dark:bg-gray-700/50 dark:text-gray-100 dark:backdrop-blur-sm"
                >
                  {nodeDatum.attributes.department}
                </Badge>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent className="dark:bg-gray-800 dark:border-gray-700/50 dark:shadow-lg dark:shadow-black/20 backdrop-blur-sm">
            <div className="p-2">
              <p className="font-medium dark:text-gray-50">
                {nodeDatum.attributes?.role || nodeDatum.name}
              </p>
              {nodeDatum.attributes?.employeeCount && (
                <p className="text-sm text-gray-500 dark:text-gray-300">
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
