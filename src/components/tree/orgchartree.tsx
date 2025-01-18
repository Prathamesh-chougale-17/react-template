import Tree, { RawNodeDatum } from "react-d3-tree";
import { Card } from "@/components/ui/card";
import renderForeignObjectNode from "./profile-card";

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
