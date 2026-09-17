function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        <img
          src="/img/my_image_2.jpeg"
          alt="Sania Saini"
          className="w-48 h-48 object-cover rounded-full shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sania Saini
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Hii, I am currently pursuing Bachelor of Engineering in
            Artificial Intelligence and Machine Learning.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About