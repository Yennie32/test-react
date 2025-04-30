const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <div>
          <img src="/plant8.jpg" alt="Plante" className="w-[200px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transtion-all duration6300 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[350px]" />
        </div>
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text:7xl">Yennie Lake</h1>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Hero