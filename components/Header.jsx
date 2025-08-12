export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">  
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-indigo-600">Portfolio</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}