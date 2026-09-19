import ArticleCard from "./articleCard"

function Projects() {
  const projects = [
    {
      title: "Universal Text Converter",
      description: "PASTE YOUR ORIGINAL UNIVERSAL TEXT CONVERTER DESCRIPTION HERE.",
      image: "/img/translation.jpg"
    },
    {
      title: "Enhancing Transaction Management with Cloud Native Architecture and Machine Learning",
      description: "PASTE YOUR ORIGINAL TRANSACTION MANAGEMENT DESCRIPTION HERE.",
      image: "/img/transaction.jpg"
    },
    {
      title: "Deepfake Detection System",
      description: "I am currently working on this project which detects if the image is fake or real.",
      image: "/img/deepfake.jpg"
    }
  ]

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ArticleCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects