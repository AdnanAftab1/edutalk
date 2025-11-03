import  Link from "next/link";


const Navbar = () => {
  
  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Edutalk
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
         

          {/* CTA Button */}
          <div className="hidden md:block invisible">
            <Link
              href="https://codescandy.com/"
              target="_blank"
              className="btn-primary w-full"
            >
              Get Template
            </Link>
          </div>

          
        </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
