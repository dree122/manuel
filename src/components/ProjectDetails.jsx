import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-sm border shadow-sm rounded-xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-1.5 rounded-sm top-3 right-3 bg-midnight hover:bg-gray-500"
        >
          <img src="assets/close.svg" className="w-3 h-3" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-xl max-h-52 object-cover" />
        <div className="p-4">
          <h5 className="mb-2 text-xl font-bold text-white">{title}</h5>
          <p className="mb-2 text-sm text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-2 text-sm text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg w-8 h-8 hover-animation"
                />
              ))}
            </div>
            <a
              href={href}
              className="inline-flex items-center gap-1 text-sm font-medium cursor-pointer hover-animation text-white"
              target="_blank" rel="noopener noreferrer"
            >
              View Project <img src="assets/arrow-up.svg" className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
