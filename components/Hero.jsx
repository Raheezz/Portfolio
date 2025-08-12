import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4">
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/images/rahees.jpg"                                                                                                                                                    // Place your profile.jpg in /public/images/
          alt="Profile Picture"
          fill
          className="rounded-full border-4 border-indigo-500 object-cover"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-indigo-400">Muahmmed Rahees mk</span> 👋
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-6">
        BCA Student | Aspiring Full Stack Developer
      </p>
      <a
        href="#projects"
        className="inline-block bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-full transition shadow-lg"
      >
        View My Work
      </a>
    </section>
  );
}
