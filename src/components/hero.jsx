function Hero() {
  return (
    <section className="relative">
      <img
        src="/img/myimage.jpeg"
        alt="Sania Saini"
        className="w-full h-80 md:h-[450px] object-cover"
      />
<div className="absolute bottom-0 left-0 w-full bg-black/70 py-4">
  <p className="text-center text-2xl md:text-3xl font-bold text-white">
    Hey, I'm Sania Saini
  </p>
</div>
    </section>
  )
}

export default Hero