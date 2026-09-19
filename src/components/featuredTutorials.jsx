import TutorialCard from "./tutorialCard"

function FeaturedTutorials() {
  const tutorials = [
    {
      title: "React Fundamentals",
      description:
        "Learn the basic concepts of React components, props and JSX.",
      image: "/img/react.jpg",
    },
    {
      title: "Introduction to Tailwind CSS",
      description:
        "Learn how to create responsive user interfaces using Tailwind CSS utility classes.",
      image: "/img/ai.jpg",
    },
    {
      title: "JavaScript Basics",
      description:
        "Understand important JavaScript concepts used when building modern web applications.",
      image: "/img/cloudcomp.jpg",
    },
  ]

  return (
    <section id="tutorials" className="max-w-5xl mx-auto px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Tutorials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <TutorialCard
            key={index}
            title={tutorial.title}
            description={tutorial.description}
            image={tutorial.image}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedTutorials