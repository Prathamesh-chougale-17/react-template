import Tree, { RawNodeDatum } from "react-d3-tree";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Users, Briefcase, User } from "lucide-react";

const orgChart: RawNodeDatum = {
  name: "CEO",
  attributes: {
    department: "Executive",
    role: "Chief Executive Officer",
    employeeCount: 150,
  },
  children: [
    {
      name: "Manager A",
      attributes: {
        department: "Production",
        role: "Production Manager",
        employeeCount: 45,
      },
      children: [
        {
          name: "Foreman A1",
          attributes: {
            department: "Fabrication",
            role: "Fabrication Lead",
            employeeCount: 20,
          },
          children: [
            {
              name: "Worker A1-1",
              attributes: {
                role: "Production Worker",
                employeeCount: 1,
              },
            },
            {
              name: "Worker A1-2",
              attributes: {
                role: "Production Worker",
                employeeCount: 1,
              },
            },
          ],
        },
        {
          name: "Foreman A2",
          attributes: {
            department: "Assembly",
            role: "Assembly Lead",
            employeeCount: 25,
          },
          children: [
            {
              name: "Worker A2-1",
              attributes: {
                role: "Assembly Worker",
                employeeCount: 1,
              },
            },
            {
              name: "Worker A2-2",
              attributes: {
                role: "Assembly Worker",
                employeeCount: 1,
              },
            },
          ],
        },
      ],
    },
    {
      name: "Manager B",
      attributes: {
        department: "Sales",
        role: "Sales Manager",
        employeeCount: 30,
      },
      children: [
        {
          name: "Salesperson B1",
          attributes: {
            role: "Regional Sales Lead",
            region: "North",
            employeeCount: 10,
          },
        },
        {
          name: "Salesperson B2",
          attributes: {
            role: "Regional Sales Lead",
            region: "South",
            employeeCount: 12,
          },
        },
      ],
    },
    {
      name: "Manager C",
      attributes: {
        department: "Finance",
        role: "Finance Manager",
        employeeCount: 25,
      },
      children: [
        {
          name: "Analyst C1",
          attributes: {
            role: "Budget Analyst",
            employeeCount: 5,
          },
        },
        {
          name: "Analyst C2",
          attributes: {
            role: "Risk Analyst",
            employeeCount: 7,
          },
        },
      ],
    },
    {
      name: "Manager D",
      attributes: {
        department: "HR",
        role: "HR Manager",
        employeeCount: 20,
      },
      children: [
        {
          name: "Coordinator D1",
          attributes: {
            role: "Recruitment Coordinator",
            employeeCount: 4,
          },
        },
        {
          name: "Coordinator D2",
          attributes: {
            role: "Training Coordinator",
            employeeCount: 5,
          },
        },
      ],
    },
  ],
};

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

export default function OrgChartTree() {
  const nodeSize = { x: 200, y: 100 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -100,
    y: -37,
  };

  return (
    <Card className="w-full h-screen p-4">
      <div className="h-full w-full">
        <Tree
          data={orgChart}
          collapsible={true}
          translate={{ x: window.innerWidth / 2, y: 100 }}
          dimensions={{
            width: window.innerWidth,
            height: window.innerHeight,
          }}
          zoomable={false}
          pathFunc="diagonal"
          orientation="vertical"
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
          }
          pathClassFunc={() => "stroke-gray-300"}
          separation={{ siblings: 2, nonSiblings: 1.2 }}
          initialDepth={1}
        />
      </div>
    </Card>
  );
}
