import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { services } from "./Services"

export function ServiceCarousel() {
  return (
    <section id="services" className="w-full px-4 sm:px-6 lg:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-7xl mx-auto py-4"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service) => (
            <CarouselItem key={service.id} className=" pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <div className="h-full">
                <Card className="h-full border-white bg-transparent flex flex-col items-center justify-center text-center">
                  <CardHeader className=" flex flex-col items-center justify-center">
                    <span className="flex items-center justify-center bg-orange-100 dark:bg-orange-900 rounded-md p-2 sm:p-3 mb-3">
                      {service.icon && (
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 flex-shrink-0" />
                      )}
                    </span>
                    <CardTitle className="text-lg sm:text-xl leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation buttons with responsive positioning */}
        <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-6" />
        <CarouselNext className="hidden sm:flex -right-4 lg:-right-6" />

        {/* Mobile navigation indicators */}
        <div className="flex sm:hidden justify-center mt-4 space-x-2">
          {services.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-gray-600" />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
