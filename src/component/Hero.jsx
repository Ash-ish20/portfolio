const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Full-Stack Engineer
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          I build scalable backend systems and modern React applications
          focused on performance, clean architecture, and real-world impact.
        </p>

        <div className="mt-8 space-x-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:border-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;