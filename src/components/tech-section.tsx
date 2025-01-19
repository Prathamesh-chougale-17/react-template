import TechCard from "./tech-card";

const techData = [
  { rank: 1, name: "React", count: 50, metric: "apps" },
  { rank: 2, name: "TypeScript", count: 45, metric: "projects" },
  { rank: 3, name: "Node.js", count: 30, metric: "services" },
  { rank: 4, name: "Next.js", count: 25, metric: "websites" },
  { rank: 5, name: "Python", count: 20, metric: "scripts" },
  { rank: 6, name: "Docker", count: 15, metric: "containers" },
];

const TechSection = () => {
  return (
    <section className="w-full py-12">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          {techData.map((tech) => (
            <TechCard
              key={tech.rank}
              rank={tech.rank}
              name={tech.name}
              count={tech.count}
              metric={tech.metric}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
