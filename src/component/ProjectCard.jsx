const ProjectCard = ({ project }) => {
  return (
    <div className="border border-gray-800 p-6 rounded-xl hover:border-white transition">
      <h4 className="text-xl font-semibold text-white mb-3">
        {project.title}
      </h4>

      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="text-xs border border-gray-700 px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.link}
        className="text-sm text-white hover:underline"
      >
        View Project →
      </a>
    </div>
  );
};

export default ProjectCard;