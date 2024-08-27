import React from 'react';
import { Menu, X, CheckSquare } from 'lucide-react';
import {  Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CheckSquare className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">Task management</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link to="/">Home</Link>
            <Link to="/habits">Habits</Link>
          </nav>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#" className="hover:text-blue-200">Sign up</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;