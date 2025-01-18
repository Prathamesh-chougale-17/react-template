import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = ({
  heroImages,
}: {
  heroImages: { src: string; title: string }[];
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="relative h-[80vh]">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {heroImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh]">
                <img
                  src={src.src}
                  alt={`Hero image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {src.title}
                    </h1>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSection;
