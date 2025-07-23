import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "./Services"; 

export function ServiceCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-6xl"
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/4 h-full">
            <div className="p-1 h-full">
              <Card className="border-none h-full">
                <CardHeader>
                    {service.icon && (
                      <service.icon className="w-8 h-8 mb-2 text-primary" />
                    )}
                    <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent >
                <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
