// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Contact', path: '/contact' },
];

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-stone-300 py-16 px-6 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <Camera className="w-10 h-10 text-amber-600" />
                            <h3 className="text-lg font-serif font-bold text-stone-100 tracking-wider">
                                Gizzim Initiative
                            </h3>
                        </div>
                        <p className="text-stone-400 leading-relaxed max-w-md">
                            Empowering photographers worldwide through exceptional training, mentorship,
                            and creative opportunities. Join our community and elevate your craft.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-stone-100 mb-6 font-serif">Quick Links</h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-stone-400 hover:text-amber-600 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold text-stone-100 mb-6 font-serif">Contact</h4>
                        <ul className="space-y-3 text-stone-400">
                            <li>info@gizzim.org</li>
                            <li>+254 748 391 403</li>
                            <li>
                                Githurai 45, Progressive area<br />
                                Nairobi, Kenya
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-stone-500 mb-4 md:mb-0">
                        © {new Date().getFullYear()} Gizzim Initiative. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-stone-500 hover:text-amber-600 transition-colors duration-300"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;