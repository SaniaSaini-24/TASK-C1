import ArticleCard from "./articleCard"

function Projects() {
  const projects = [
    {
      title: "Universal Text Converter",
      description: "In this project, I created an interactive, user friendly program capable of performing two main operations: converting ordinary English text into its binary representation and translating text into five different languages. This project is a successful integration of C++ for graphical interface design and Python for text translation, providing a connection like bridge between user input and intelligent processing.",
      image: "/img/translation.jpg"
    },
    {
      title: "Enhancing Transaction Management with Cloud Native Architecture and Machine Learning",
      description: "In this paper, the use of a predictive model for transaction management through a combination of machine learning (ML) and cloud-based technology is discussed. This method employs ML algorithms that analyse past and current data from the system, thus predicting events like node failures and transaction conflicts. Proactive measures like scaling, traffic direction, and failure prevention are then carried out by employing cloud technology. For instance, Kubernetes and service mesh architectural concepts are applied to predict future events in the cloud computing environment. Further, dynamic protocol selection and pre-execution conflict prevention are also incorporated in the proposed design.",
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