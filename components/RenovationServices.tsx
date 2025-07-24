import Image from "next/image";

export default function RenovationServices() {
  const services = [
    {
      title: "Kitchens",
      description:
        "Remodel your kitchen with quality, lasting materials.",
      image: "/3985CarmelSpringsWay_JoeyDunn-08-1-scaled-1-1536x1024.jpg.webp",
    },
    {
      title: "Home Remodels",
      description:
        "Remodel your home to bring your vision to life.",
      image: "/3985CarmelSpringsWay_JoeyDunn-14.jpg.webp",
    },
    {
      title: "Bathroom Remodels",
      description:
        "Build your dream bathroom with our fixtures and finishes.",
      image: "/MBK-Bathrooms-6-scaled-1-1536x1024.jpg.webp",
    },
  ];

  return (
    <div className="text-center px-4 py-12 font-[HalvarBreit-Lt,sans-serif] text-[16px]">
      <h1 className="text-4xl font-light mb-12">Our Renovation Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col h-full">
            <div className="w-full h-[400px] relative overflow-hidden rounded-md shadow">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 w-full items-center">
              <div className="text-center px-4">
                <h2 className="text-2xl font-light mt-6">{service.title}</h2>
                <p className="text-gray-600 mt-2 max-w-sm mx-auto">{service.description}</p>
              </div>
              <div className="w-full mt-4 px-4">
                <button className="w-full border border-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
