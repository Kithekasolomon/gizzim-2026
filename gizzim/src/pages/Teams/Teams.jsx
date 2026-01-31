import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Linkedin, Instagram, Award, GraduationCap, MapPin, ExternalLink } from 'lucide-react';

const TeamsPage = () => {
    const [hoveredMember, setHoveredMember] = useState(null);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
        { name: 'Team', path: '/team' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ];

    const teamMembers = [
        {
            id: 1,
            name: "Justus Mulwa",
            role: "Founder & Lead Photography Instructor",
            specialty: "Portrait & Studio Photography",
            image: "https://gizzim.org/wp-content/uploads/2024/07/justus-Mulwa1-300x300.jpg",
            bio: "Award-winning portrait photographer with 15+ years of experience. Published in National Geographic and Vogue.",
            achievements: [ "Taught 20+ students"],
            location: "Nairobi, Kenya",
            email: "marcus.chen@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            id: 2,
            name: "Frisphactor Watuika",
            role: "Project Coordinator",
            specialty: "Photojournalism & Street Photography",
            image: "https://gizzim.org/wp-content/uploads/2024/07/Freezy-300x300.jpg",
            bio: "Pulitzer Prize nominee specializing in documentary and humanitarian photography. Works featured in TIME and Reuters.",
            achievements: [" Press Photo Award"],
            location: "Nairobi, Kenya",
            email: "frisphactor.watuika@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            id: 3,
            name: "Lydia Rugi",
            role: "Administrative Lead",
            specialty: "Outdoor & Wildlife Photography",
            image: "https://gizzim.org/wp-content/uploads/2024/08/Lydia-Rugi-Administrative-Lead-300x300.jpg",
            bio: "Nature photographer known for breathtaking landscape work. Regular contributor to Outdoor Photographer Magazine.",
            achievements: ["Nature Photographer of the Year 2024", "Published 3 photography books"],
            location: "Nairobi, Kenya",
            email: "kenji.tanaka@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            id: 4,
            name: "Stephen Mburu",
            role: "Outreach Coordinator",
            specialty: "Fashion, Editorial & Advertising",
            image: "https://gizzim.org/wp-content/uploads/2024/08/Stephen-Mburu-Outreach-Coordinator-300x300.jpg",
            bio: "High-fashion photographer working with global brands. Former Creative Director at Elle Magazine.",
            achievements: [ "Shot 2+ magazine covers"],
            location: "Nairobi, Kenya",
            email: "sofia.rodriguez@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            id: 5,
            name: "Anne Sherry",
            role: "Training Coordinator",
            specialty: "Lighting, Composition & Post-Processing",
            image: "https://gizzim.org/wp-content/uploads/2024/08/Anne-Sherry-Training-Coordinator-300x300.jpg",
            bio: "Technical wizard specializing in advanced lighting techniques and digital workflow optimization.",
            achievements: ["Adobe Certified Expert", "Developed 3 popular Lightroom presets", "TEDx Speaker"],
            location: "Nairobi, Kenya",
            email: "david.okonkwo@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            id: 6,
            name: "Larvene Nyambura",
            role: "Marketing Associate",
            specialty: "Wedding, Events & Lifestyle",
            image: "https://gizzim.org/wp-content/uploads/2024/08/Larvene-Nyambura-Marketing-Associate-300x300.jpg",
            bio: "Capturing life's most precious moments with an artistic eye. Specialized in destination weddings worldwide.",
            achievements: ["Shot 5+ weddings globally"],
            location: "Nairobi, Kenya",
            email: "ling.zhang@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            id: 7,
            name: "Jacky Husna",
            role: "Partnerships Associate",
            specialty: "Fine Art, Conceptual & Gallery Work",
            image: "https://gizzim.org/wp-content/uploads/2024/08/Jacky-Husna-Partnerships-Associate-300x300.jpg",
            bio: "Contemporary fine art photographer with works in permanent collections at MoMA and Tate Modern.",
            achievements: ["3 solo exhibitions at major museums"],
            location: "Nairobi, Kenya",
            email: "jacky.husna@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        },
        {
            id: 8,
            name: "Brigit Mogotu",
            role: "Social Media Specialist",
            specialty: "Aerial, Drone & Architecture Photography",
            image: "https://gizzim.org/wp-content/uploads/2024/08/Brigit-Mogotu-Social-Media-Specialist-300x300.jpg",
            bio: "Pioneer in drone photography and aerial cinematography. Former National Geographic aerial photographer.",
            achievements: [ "Shot for 3+ architectural firms"],
            location: "Nairobi, Kenya",
            email: "brigit.mogotu@lenscollective.com",
            social: {
                linkedin: "#",
                instagram: "#"
            }
        }
    ];

    const advisors = [
        {
            id: 9,
            name: "Dr. Sarah Mitchell",
            role: "Academic Advisor",
            specialty: "Photography History & Theory",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
            bio: "Professor Emeritus specializing in the history and evolution of photographic arts.",
            education: "PhD Art History, Oxford University"
        },
        {
            id: 10,
            name: "James Crawford",
            role: "Industry Liaison",
            specialty: "Photography Business & Marketing",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
            bio: "Business strategist helping photographers build sustainable careers and brands.",
            education: "MBA, Harvard Business School"
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-950">
            {/* Header */}
            <header className="fixed top-0 w-full z-50 bg-zinc-900/95 backdrop-blur-md border-b border-amber-700/20">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3">
                        <Camera className="w-8 h-8 text-amber-600" />
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
                                        className={`text-stone-200 hover:text-amber-600 transition-colors duration-300 font-medium tracking-wide text-sm uppercase ${link.name === 'Team' ? 'text-amber-600' : ''
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-neutral-950 to-neutral-950"></div>

                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(217, 119, 6) 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-block mb-8 px-8 py-3 bg-amber-600/10 border border-amber-600/30 rounded-full backdrop-blur-sm">
                        <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Meet Our Team</span>
                    </div>
                    <h2 className="text-7xl md:text-8xl font-serif font-black text-stone-100 mb-8 tracking-tight leading-none">
                        Masters of the
                        <span className="block bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent mt-3">
                            Craft
                        </span>
                    </h2>
                    <p className="text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
                        Learn from world-renowned photographers who have shaped the industry and mentored thousands of aspiring artists
                    </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl animate-pulse delay-700"></div>
            </section>

            {/* Main Team Grid */}
            <section className="py-20 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h3 className="text-5xl font-serif font-bold text-stone-100 mb-4">Core Instructors</h3>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-amber-600 to-amber-800"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={member.id}
                                className="group relative"
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`
                                }}
                            >
                                {/* Card Container */}
                                <div className="relative h-[500px] overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-500 group-hover:border-amber-600/50 group-hover:shadow-2xl group-hover:shadow-amber-600/20">

                                    {/* Member Image */}
                                    <div className="absolute inset-0">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${member.image})` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40 group-hover:from-neutral-950/95 group-hover:via-neutral-950/85 transition-all duration-500"></div>
                                        </div>
                                    </div>

                                    {/* Default Content (Always Visible) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 group-hover:translate-y-[-100%] group-hover:opacity-0">
                                        <div className="mb-3">
                                            <h4 className="text-2xl font-serif font-bold text-stone-100 mb-1">
                                                {member.name}
                                            </h4>
                                            <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide">
                                                {member.role}
                                            </p>
                                        </div>
                                        <p className="text-neutral-400 text-sm border-t border-neutral-700 pt-3">
                                            {member.specialty}
                                        </p>
                                    </div>

                                    {/* Hover Content (Details) */}
                                    <div className={`absolute inset-0 p-6 flex flex-col justify-between transform transition-all duration-500 ${hoveredMember === member.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                                        }`}>

                                        {/* Top Section */}
                                        <div>
                                            <div className="mb-4">
                                                <h4 className="text-2xl font-serif font-bold text-stone-100 mb-1">
                                                    {member.name}
                                                </h4>
                                                <p className="text-amber-500 font-semibold text-sm uppercase tracking-wide mb-3">
                                                    {member.role}
                                                </p>
                                                <div className="flex items-center text-neutral-400 text-xs mb-2">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    {member.location}
                                                </div>
                                            </div>

                                            <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                                                {member.bio}
                                            </p>

                                            {/* Education */}
                                            <div className="mb-4 pb-4 border-b border-neutral-700">
                                                <div className="flex items-start space-x-2">
                                                    <GraduationCap className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                                    <div>
                                                        <p className="text-xs text-neutral-500 uppercase tracking-wide mb-0.5">Education</p>
                                                        <p className="text-neutral-300 text-xs">{member.education}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div className="mb-4">
                                                <div className="flex items-start space-x-2 mb-2">
                                                    <Award className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                                                    <p className="text-xs text-neutral-500 uppercase tracking-wide">Key Achievements</p>
                                                </div>
                                                <ul className="space-y-1.5">
                                                    {member.achievements.map((achievement, idx) => (
                                                        <li key={idx} className="text-neutral-300 text-xs flex items-start">
                                                            <span className="text-amber-600 mr-2">•</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Bottom Section - Contact */}
                                        <div className="space-y-3">
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 transition-colors duration-300 group/btn"
                                            >
                                                <Mail className="w-4 h-4" />
                                                <span>Contact</span>
                                            </a>

                                            <div className="flex space-x-2">
                                                <a
                                                    href={member.social.linkedin}
                                                    className="flex-1 flex items-center justify-center px-4 py-2.5 border border-neutral-700 text-neutral-300 text-sm hover:border-amber-600 hover:text-amber-600 transition-colors duration-300"
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                </a>
                                                <a
                                                    href={member.social.instagram}
                                                    className="flex-1 flex items-center justify-center px-4 py-2.5 border border-neutral-700 text-neutral-300 text-sm hover:border-amber-600 hover:text-amber-600 transition-colors duration-300"
                                                >
                                                    <Instagram className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accent Corner */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Board Section */}
            <section className="py-20 px-6 bg-neutral-900/50">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h3 className="text-5xl font-serif font-bold text-stone-100 mb-4">Advisory Board</h3>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-amber-600 to-amber-800 mx-auto mb-6"></div>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                            Distinguished experts providing strategic guidance and industry insights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {advisors.map((advisor, index) => (
                            <div
                                key={advisor.id}
                                className="group relative h-80 overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/10"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${advisor.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/70 to-neutral-950/40"></div>
                                </div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="mb-3">
                                        <h4 className="text-3xl font-serif font-bold text-stone-100 mb-2">
                                            {advisor.name}
                                        </h4>
                                        <p className="text-amber-500 font-semibold uppercase tracking-wide text-sm mb-3">
                                            {advisor.role}
                                        </p>
                                        <p className="text-neutral-300 text-sm mb-3">
                                            {advisor.bio}
                                        </p>
                                        <div className="flex items-center text-neutral-400 text-xs">
                                            <GraduationCap className="w-4 h-4 mr-2 text-amber-600" />
                                            {advisor.education}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-neutral-950 to-neutral-950"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h3 className="text-6xl font-serif font-bold text-stone-100 mb-8">
                        Learn from the Best
                    </h3>
                    <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
                        Join our programs and get personalized mentorship from industry-leading photographers who are passionate about sharing their knowledge
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/programs"
                            className="px-12 py-5 bg-amber-600 text-white font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-2xl shadow-amber-600/20 hover:shadow-amber-600/40 group flex items-center justify-center space-x-2"
                        >
                            <span>View Programs</span>
                            <ExternalLink className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-12 py-5 border-2 border-stone-100 text-stone-100 font-bold text-lg hover:bg-stone-100 hover:text-neutral-950 transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
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
                                <li>Githurai 45, Progressive area<br />Nairobi</li>
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Work+Sans:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Work Sans', sans-serif;
        }
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
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

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
        </div>
    );
};

export default TeamsPage;