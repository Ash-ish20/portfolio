const About = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>

        <p className="text-gray-400 leading-relaxed">
          I specialize in building full-stack applications using React,
          Express, MySQL, and modern state management tools. I focus on
          scalable architecture, efficient APIs, and performance-driven design.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400">
          <div>React</div>
          <div>Express</div>
          <div>MySQL</div>
          <div>Sequelize</div>
          <div>Zustand</div>
          <div>REST APIs</div>
          <div>System Design</div>
          <div>Web Performance</div>
        </div>
      </div>
    </section>
  );
};

export default About;