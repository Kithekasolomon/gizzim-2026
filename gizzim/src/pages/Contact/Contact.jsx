import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin, Clock, Send, X, User, MessageSquare, Calendar, FileText, CheckCircle } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';

const ContactPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        program: '',
        preferredDate: '',
        experience: ''
    });

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Teams', path: '/teams' },
        { name: 'Mentorship', path: '/mentorship' },
        { name: 'Contact', path: '/contact' },
    ];

    const openModal = (type) => {
        setModalType(type);
        setShowModal(true);
        setFormSubmitted(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            program: '',
            preferredDate: '',
            experience: ''
        });
    };

    const closeModal = () => {
        setShowModal(false);
        setModalType('');
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { type: modalType, data: formData });
        setFormSubmitted(true);

        setTimeout(() => {
            closeModal();
        }, 3000);
    };

    const contactMethods = [
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email Us",
            detail: " info@gizzim.org",
            description: "Get a response within 24 hours",
            link: "mailto: info@gizzim.org"
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Call Us",
            detail: "+254 748 391 403",
            description: "Mon-Fri, 9AM - 6PM EST",
            link: "tel:+254 748 391 403"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: "Visit Us",
            detail: "Githurai 45 ,progressive area near chief's camp",
            description: "Githurai 45 , Nairobi, Kenya",
            link: "#"
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Office Hours",
            detail: "Monday - Friday",
            description: "9:00 AM - 6:00 PM EST",
            link: "#"
        }
    ];

    const quickActions = [
        {
            title: "Enroll in Program",
            description: "Ready to start your photography journey? Choose from our range of programs.",
            icon: <FileText className="w-12 h-12" />,
            action: () => openModal('enrollment'),
            bgGradient: "from-amber-600 to-amber-700"
        },
        {
            title: "Schedule Consultation",
            description: "Book a free 30-minute consultation with our advisors to find the right program.",
            icon: <Calendar className="w-12 h-12" />,
            action: () => openModal('consultation'),
            bgGradient: "from-emerald-600 to-emerald-700"
        },
        {
            title: "Request Information",
            description: "Have questions about our programs, pricing, or schedule? We're here to help.",
            icon: <MessageSquare className="w-12 h-12" />,
            action: () => openModal('inquiry'),
            bgGradient: "from-blue-600 to-blue-700"
        }
    ];

    const offices = [
        {
            city: "Nairobi",
            address: "progressive, near chiefs office",
            phone: "+254 748 391 403",
            email: " info@gizzim.org"
        },
        {
            city: "Lodwar",
            address: "Lodwar town",
            phone: "+254 748 391 403",
            email: " info@gizzim.org"
        },
       
    ];

    return (
        <div className="min-h-screen bg-stone-50">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'url(https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/570412752_1268539658638320_1095351503324553463_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGaSnPlN7FQ8IdxVMVmor7x08E8mPex3GbTwTyY97HcZjBtVkhuTxSi2qcwWecWkmXsAmnf_cCrrh-Xl1t5a13d&_nc_ohc=LhTbW0sPXU4Q7kNvwG4wYkm&_nc_oc=Adn3qAoJgFJNEd2z3GlKYGZ-4EEuqkvgA5injoV9DLoGQS3r977ZJnGJpndZ_kCOwQ0&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=1QQJ46z5G-9Di9s0O98nJw&oh=00_AfseuYEHH-bZxEKd1MLZdpn4Hjqb6to-w3Owj52ynaYIOQ&oe=6983A12A)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-block mb-6 px-6 py-2 bg-amber-600/20 border border-amber-600/50 rounded-full">
                        
                        <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
                    </div>
                    <h2 className="text-6xl md:text-7xl font-serif font-black text-stone-100 mb-6 tracking-tight leading-none">
                        Let's Start Your
                        <span className="block text-amber-600 mt-2">Photography Journey</span>
                    </h2>
                    <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
                        Have questions? Want to enroll? Our team is here to help you every step of the way
                    </p>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-4">
                            How Can We Help?
                        </h3>
                        <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {quickActions.map((action, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-white border-2 border-stone-200 hover:border-amber-600 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                                onClick={action.action}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${action.bgGradient}`}></div>

                                <div className="p-8">
                                    <div className={`inline-flex p-4 bg-gradient-to-br ${action.bgGradient} text-white rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {action.icon}
                                    </div>

                                    <h4 className="text-2xl font-serif font-bold text-zinc-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                                        {action.title}
                                    </h4>

                                    <p className="text-stone-600 leading-relaxed mb-6">
                                        {action.description}
                                    </p>

                                    <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                        <span>Get Started</span>
                                        <Send className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 px-6 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-zinc-900 mb-4">
                            Reach Out to Us
                        </h3>
                        <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                            Choose your preferred way to connect with our team
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                className="group bg-white p-8 border border-stone-200 hover:border-amber-600 transition-all duration-300 hover:shadow-xl"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {method.icon}
                                </div>
                                <h4 className="text-xl font-serif font-bold text-zinc-900 mb-2">
                                    {method.title}
                                </h4>
                                <p className="text-amber-600 font-semibold mb-2">
                                    {method.detail}
                                </p>
                                <p className="text-stone-500 text-sm">
                                    {method.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <section className="py-20 px-6 bg-zinc-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-4">
                            Our Locations
                        </h3>
                        <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
                        <p className="text-xl text-stone-400 max-w-2xl mx-auto">
                            Visit us at any of our global offices
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {offices.map((office, index) => (
                            <div
                                key={index}
                                className="bg-zinc-800 p-8 border border-zinc-700 hover:border-amber-600 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-600/10"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className="flex items-center mb-6">
                                    <MapPin className="w-6 h-6 text-amber-600 mr-3" />
                                    <h4 className="text-2xl font-serif font-bold text-stone-100">
                                        {office.city}
                                    </h4>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-stone-300 leading-relaxed">
                                        {office.address}
                                    </p>

                                    <div className="pt-4 border-t border-zinc-700 space-y-2">
                                        <a href={`tel:${office.phone}`} className="flex items-center text-stone-400 hover:text-amber-600 transition-colors">
                                            <Phone className="w-4 h-4 mr-2" />
                                            {office.phone}
                                        </a>
                                        <a href={`mailto:${office.email}`} className="flex items-center text-stone-400 hover:text-amber-600 transition-colors">
                                            <Mail className="w-4 h-4 mr-2" />
                                            {office.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-stone-300">
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80)',
                        filter: 'grayscale(40%)'
                    }}
                >
                    <div className="w-full h-full bg-zinc-900/40 flex items-center justify-center">
                        <div className="text-center text-white">
                            <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                            <h4 className="text-3xl font-serif font-bold mb-2">Find Us</h4>
                            <p className="text-lg">Main Campus: Nairobi,Kenya</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
                    <div
                        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {!formSubmitted ? (
                            <>
                                {/* Modal Header */}
                                <div className="sticky top-0 bg-gradient-to-r from-amber-600 to-amber-700 text-white p-6 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold mb-1">
                                            {modalType === 'enrollment' && 'Program Enrollment'}
                                            {modalType === 'consultation' && 'Schedule Consultation'}
                                            {modalType === 'inquiry' && 'Request Information'}
                                        </h3>
                                        <p className="text-amber-100 text-sm">
                                            {modalType === 'enrollment' && 'Fill out the form below to enroll in our programs'}
                                            {modalType === 'consultation' && 'Book your free 30-minute consultation'}
                                            {modalType === 'inquiry' && 'We\'ll get back to you within 24 hours'}
                                        </p>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="text-white hover:text-amber-200 transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Modal Body */}
                                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                    </div>

                                    {/* Conditional Fields */}
                                    {modalType === 'enrollment' && (
                                        <>
                                            <div>
                                                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                                    Select Program *
                                                </label>
                                                <select
                                                    name="program"
                                                    value={formData.program}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                                                >
                                                    <option value="">Choose a program...</option>
                                                    <option value="short-term">Short-Term Training & Camps</option>
                                                    <option value="intensive">Intensive Training Programs</option>
                                                    <option value="online">Online Courses & Webinars</option>
                                                    <option value="mentorship">Mentorship Opportunities</option>
                                                    <option value="competitive">Competitive Trials</option>
                                                    <option value="exhibitions">Exhibitions & Festivals</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                                    Photography Experience Level
                                                </label>
                                                <select
                                                    name="experience"
                                                    value={formData.experience}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                                                >
                                                    <option value="">Select your level...</option>
                                                    <option value="beginner">Beginner</option>
                                                    <option value="intermediate">Intermediate</option>
                                                    <option value="advanced">Advanced</option>
                                                    <option value="professional">Professional</option>
                                                </select>
                                            </div>
                                        </>
                                    )}

                                    {modalType === 'consultation' && (
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                                Preferred Date & Time
                                            </label>
                                            <div className="relative">
                                                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400" />
                                                <input
                                                    type="datetime-local"
                                                    name="preferredDate"
                                                    value={formData.preferredDate}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {modalType === 'inquiry' && (
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors"
                                                placeholder="What can we help you with?"
                                            />
                                        </div>
                                    )}

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-zinc-900 mb-2">
                                            Message {modalType !== 'inquiry' && '(Optional)'}
                                        </label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-stone-400" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                rows="4"
                                                className="w-full pl-12 pr-4 py-3 border-2 border-stone-200 focus:border-amber-600 focus:outline-none transition-colors resize-none"
                                                placeholder="Tell us more about your photography goals..."
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex space-x-4 pt-4">
                                        <button
                                            type="submit"
                                            className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            <span>Submit</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="px-8 py-4 border-2 border-stone-300 text-stone-600 font-bold hover:bg-stone-100 transition-colors duration-300"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            /* Success Message */
                            <div className="p-12 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6 animate-bounce">
                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-zinc-900 mb-4">
                                    Thank You!
                                </h3>
                                <p className="text-lg text-stone-600 mb-2">
                                    Your {modalType === 'enrollment' ? 'enrollment' : modalType === 'consultation' ? 'consultation request' : 'inquiry'} has been received.
                                </p>
                                <p className="text-stone-500">
                                    We'll get back to you within 24 hours.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #d97706;
          border-radius: 4px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #b45309;
        }
      `}</style>
        </div>
    );
};

export default ContactPage;