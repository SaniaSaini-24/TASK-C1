import ArticleCard from "./articleCard"

function FeaturedArticles() {
  const articles = [
    {
      title: "Getting Started with React",
      description:
        "Learn how React components, JSX and props are used to build modern web applications.",
      image: "/img/react.png"
    },
    {
      title: "Understanding Artificial Intelligence",
      description:
        "An introduction to artificial intelligence and how it is used for learning and decision making.",
      image: "/img/tailwind.jpg"
    },
    {
      title: "Introduction to Cloud Computing",
      description:
        "Learn how cloud computing provides access to computing resources and applications over the internet.",
      image: "/img/js_basic.jpg"
    }
  ]

  return (
    <section
      id="articles"
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            image={article.image}
          />
        ))}
      </div>

            <div className="text-center mt-8">
        <button
          type="button"
          className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          See All Articles
        </button>
      </div>
    </section>
  )
}

export default FeaturedArticles