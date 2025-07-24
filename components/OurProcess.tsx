interface Step {
    title: string;
    desc: string;
}

export default function OurProcess() {
    const steps: Step[] = [
        { title: "Consultation", desc: "We discuss your vision, needs, and budget." },
        { title: "Design", desc: "We create a custom design tailored to your project." },
        { title: "Build", desc: "We bring your design to life with expert craftsmanship." },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-10">Our Process</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
