const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 border-t border-gray-800 text-center">
      <h3 className="text-3xl font-bold text-white mb-6">
        Let’s Work Together
      </h3>

      <p className="text-gray-400 mb-8">
        Open to freelance, remote roles, and full-time opportunities.
      </p>

      <a
        href="mailto:your@email.com"
        className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:opacity-80 transition"
      >
        Get In Touch
      </a>
    </section>
  );
};

export default Contact;