import InteractiveSections from "./components/draggable-components";
import HeroSection from "./components/hero-carousel";
import TechSection from "./components/tech-section";
import OrgChartTree from "./components/tree/orgchartree";

const App = () => {
  return (
    <div className="mt-16">
      <InteractiveSections
        initialSections={[
          {
            id: 1,
            title: "Section 1",
            content: (
              <HeroSection
                heroImages={[
                  { src: "/hero4.jpg", title: "Hero 1" },
                  { src: "/hero2.jpg", title: "Hero 2" },
                  { src: "/hero3.jpg", title: "Hero 3" },
                ]}
              />
            ),
          },
          {
            id: 2,
            title: "Section 2",
            content: <OrgChartTree />,
          },
          {
            id: 3,
            title: "Section 3",
            content: <TechSection />,
          },
        ]}
      />
    </div>
  );
};

export default App;
