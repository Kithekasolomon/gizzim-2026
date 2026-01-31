// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera, Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Contact', path: '/contact' },
];

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-md border-b border-amber-700/20">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
                    <Camera className="w-8 h-8 text-amber-600" />
                    <h1 className="text-lg font-serif font-bold text-stone-100 tracking-wider">
                        Gizzim Initiative
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-10">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className={`text-sm uppercase font-medium tracking-wide transition-colors duration-300 ${isActive
                                                ? 'text-amber-600'
                                                : 'text-stone-200 hover:text-amber-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden text-stone-100 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-zinc-950/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${isMenuOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeMenu} // close when clicking outside
            >
                <div
                    className={`absolute right-0 top-0 h-full w-4/5 max-w-xs bg-zinc-900 border-l border-amber-700/20 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    onClick={(e) => e.stopPropagation()} // prevent close when clicking inside menu
                >
                    {/* Close button inside menu */}
                    <div className="flex justify-end p-6">
                        <button onClick={closeMenu} aria-label="Close menu">
                            <X className="w-8 h-8 text-stone-300 hover:text-amber-600" />
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <nav className="px-6">
                        <ul className="space-y-6 text-right">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className={`block text-xl font-medium tracking-wide transition-colors duration-300 ${isActive
                                                    ? 'text-amber-600'
                                                    : 'text-stone-200 hover:text-amber-600'
                                                }`}
                                            onClick={closeMenu}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Optional extra footer in mobile menu */}
                    <div className="absolute bottom-8 left-6 right-6 text-stone-500 text-sm text-center">
                        © {new Date().getFullYear()} Gizzim Initiative
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;