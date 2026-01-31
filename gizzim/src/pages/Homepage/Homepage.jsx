import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Users, Award, BookOpen, Lightbulb, Image } from 'lucide-react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://gizzim.org/wp-content/uploads/2022/07/giz-16.jpg',

    'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/607457813_1320565466769072_2412487042534321878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEicx3GXIJZjj5tMK9P4qRTQYCk3jK3DY5BgKTeMrcNjqVM-pP6jW1cfT03aF7bS2uxBXTG8o9Ssuy52Bi0Z58F&_nc_ohc=DrM00H8fyYcQ7kNvwGlX0u4&_nc_oc=AdmkIjC7iyCd_qkpHljIwC0ezL002gFou-GWYVyaWeVIHtliQsNRjlaM5BlKOkn3Dz4&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=jSleUQv65vsPMZ9ITInV9g&oh=00_AftknrnXihUqZwTlmq8thdMKPcbYPrBxvSUuKa04-zSv2w&oe=6983AF9A',
    'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/547956487_1233332455492374_4439549114034257281_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHlhhgYY1OJ9WchS1A3iAjLnhhwA3_-FcueGHADf_4VyycGH5TzQRnFI0vWjrLXbLYDPKY6FBe0iaW6Sfl86ei9&_nc_ohc=WMg-fkpUruMQ7kNvwHFKeST&_nc_oc=Adl-UfbWuH3i_oMjGRSC0zbfoc5R1XoGfGfg4ik_itfd_IEaK4RapqHObgw5sJtG-QA&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=nN0xIiZDQlMsTpnkSi2Rcg&oh=00_AfuKueZJjygE6n2tAtpN1rHflvHPyI_2X5a9i3ZAQE7g4g&oe=6983A551',
    'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/622133584_1344872687671683_5828954525828114340_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHj6YGS9XEW1GFAi0oMoCsf08yVuLRbq9vTzJW4tFur29EoGOyQNUEsuLrVhUQpaiDWd50-GKL3qKI682e2wORG&_nc_ohc=GyLkThBrR5sQ7kNvwHb2yKo&_nc_oc=Adl2FOWuI6vz1eOBXbk5bbn5H59JlEd86vVVeriW9R8ujC8VOHNxbJabmybQhn2VsA0&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=sBk_bv9MFiT3pkD685zQdA&oh=00_AftmT6F-EvfgJuyEENgKMpiMRByKAcJpXPjLSK09ddcwiw&oe=6983A772'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Short-Term Training & Camps",
      description: "Intensive photography boot camps designed to jumpstart your creative journey with hands-on experience.",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&q=80"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Intensive Training Programs",
      description: "Deep-dive into advanced techniques with comprehensive curriculum covering all aspects of professional photography.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Online Courses & Webinars",
      description: "Learn from anywhere with our expertly crafted online programs and live interactive sessions.",
      image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship Opportunities",
      description: "Connect with industry professionals who guide your artistic growth through personalized one-on-one mentorship.",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Competitive Trials",
      description: "Test your skills in real-world scenarios with photography practicals designed as competitive challenges.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Exhibitions & Festivals",
      description: "Showcase your work and network at prestigious photography exhibitions, festivals, and industry conferences.",
      image: "https://images.unsplash.com/photo-1578926078640-e3a3f7c0f9e6?w=800&q=80"
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Teams', path: '/teams' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-900/95 backdrop-blur-md border-b border-amber-700/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <Camera className="w-7 h-7 text-amber-600" />
            <h1 className="text-lg font-serif font-bold text-stone-100 tracking-wider">
              Gizzim Initiative
            </h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-stone-200 hover:text-amber-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Sliding Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-900/50" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl animate-fadeInUp">
            <h2 className="text-7xl md:text-8xl font-serif font-black text-stone-100 mb-6 tracking-tight leading-none">
              Master the Art of
              <span className="block text-amber-600 mt-2">Photography</span>
            </h2>
            <p className="text-xl md:text-2xl text-stone-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              Transform your passion into expertise through world-class training, mentorship, and creative opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/programs"
                className="px-10 py-4 bg-amber-600 text-white font-semibold text-lg rounded-none hover:bg-amber-700 transition-all duration-300 shadow-2xl hover:shadow-amber-600/50 tracking-wide"
              >
                Explore Programs
              </Link>
              <Link
                to="/gallery"
                className="px-10 py-4 border-2 border-stone-100 text-stone-100 font-semibold text-lg rounded-none hover:bg-stone-100 hover:text-zinc-900 transition-all duration-300 tracking-wide"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-600 w-8' : 'bg-stone-400'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-zinc-900 mb-6 tracking-tight">
              Our Programs
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive pathways designed to elevate your photography skills from beginner to professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 text-amber-600">
                    {program.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h4 className="text-2xl font-serif font-bold text-zinc-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {program.title}
                  </h4>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <Link
                    to="/programs"
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300 group/link"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-stone-300 py-16 px-6">
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
                Empowering photographers worldwide through exceptional training, mentorship, and creative opportunities. Join our community and elevate your craft.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-stone-100 mb-6 font-serif">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-stone-400 hover:text-amber-600 transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-stone-100 mb-6 font-serif">Contact</h4>
              <ul className="space-y-3 text-stone-400">
                <li> info@gizzim.org</li>
                <li>+254 748 391 403</li>
                <li>Githurai 45, Progressive area<br />Creative District</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm mb-4 md:mb-0">
              © 2026 Gizzim Initiative. All rights reserved.
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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Homepage;