import ArticleCard from "./articleCard"

function FeaturedArticles() {
  const articles = [
    {
      title: "Universal Text Converter",
      description:
        "A tool that converts text between different formats and languages.",
      image: "/img/translation.jpg",
    },
    {
      title: "Enhancing Transaction Management",
      description:
        "A cloud-native approach using machine learning to predict transaction conflicts and system failures.",
      image: "/img/transaction.jpg",
    },
    {
      title: "Deepfake Detection System",
      description:
        "A project that uses artificial intelligence to detect whether an image is fake or real.",
      image: "/img/deepfake.jpg",
    },
  ]

  {articles.map((article, index) => (
  <ArticleCard
    key={index}
    title={article.title}
    description={article.description}
    image={article.image}
  />
))}

  return (
    <section id="articles" className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
    Featured Articles
  </h2>

  <p className="mt-3 text-gray-600">
    Explore our latest articles and projects.
  </p>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedArticles