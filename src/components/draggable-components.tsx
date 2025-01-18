import { ReactNode, useState } from "react";
import { motion, Reorder, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface Section {
  id: number;
  title: string;
  content: ReactNode;
}

const InteractiveSections = ({
  initialSections,
}: {
  initialSections: Section[];
}) => {
  const [sections, setSections] = useState<Section[]>(initialSections);

  return (
    <div className="w-full mx-auto p-4">
      <Reorder.Group
        axis="y"
        values={sections}
        onReorder={setSections}
        className="space-y-3"
      >
        <AnimatePresence mode="popLayout">
          {sections.map((section) => (
            <Reorder.Item
              key={section.id}
              value={section}
              className="focus:outline-none"
            >
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className={cn(
                    "relative group",
                    "transition-all duration-200",
                    "bg-background/80 backdrop-blur-sm",
                    "opacity-100",
                    "hover:shadow-lg"
                  )}
                >
                  <div className="p-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <motion.h3
                        layout="position"
                        className={cn("font-medium text-lg", "text-foreground")}
                      >
                        {section.title}
                      </motion.h3>
                      <motion.p
                        layout="position"
                        className={cn("text-sm text-muted-foreground truncate")}
                      >
                        {section.content}
                      </motion.p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>

      {sections.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center p-8 text-muted-foreground"
        >
          All sections have been removed. Refresh to reset.
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveSections;
