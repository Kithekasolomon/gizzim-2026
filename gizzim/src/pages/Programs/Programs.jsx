import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Users, Award, BookOpen, Lightbulb, Image, Clock, Calendar, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer'; 

const ProgramsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const programs = [
    {
      id: 1,
      category: 'short-term',
      icon: <Camera className="w-2 h-2" />,
      title: "Short-Term Photography Training & Pilot Camps",
      tagline: "Jumpstart Your Creative Journey",
      duration: "1-2 Weeks",
      level: "Beginner to Intermediate",
      format: "In-Person",
      description: "Intensive boot camps designed to immerse you in the fundamentals of photography. Perfect for beginners looking to build a solid foundation or intermediates wanting to refine specific skills.",
      highlights: [
        "Hands-on shooting sessions in diverse environments",
        "Real-time feedback from professional photographers",
        "Portfolio development guidance",
        "Equipment familiarization workshops",
        "Networking with fellow photography enthusiasts"
      ],
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/590085018_1299863485505937_364836644614264491_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGly278oBUCQR6JLwN0hCp0krE2_OxyNlaSsTb87HI2VuUxD2BJAHC0B8acNDLFpbCLQI1U9ExOQ-8VUeXt5fJ4&_nc_ohc=0LpDvuEdJZcQ7kNvwHHm61-&_nc_oc=Adlt2oz2XpX-XGJgF-wLRCCXK7MnTOen9j6Df01cQbqVnc32qhiHtLPwsdgPLRfyNmg&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=nygrSZGTv5bN32AIbQ5LyQ&oh=00_Afve2kR8IXUBNs7X-uJykD1hpn825VwyCxEsPSlVaLOnDQ&oe=69839F51",
      price: "From $499",
      nextDate: "March 15, 2026"
    },
    {
      id: 2,
      category: 'intensive',
      icon: <Award className="w-2 h-2" />,
      title: "Intensive Photography Training Programs",
      tagline: "Master Advanced Techniques",
      duration: "8-12 Weeks",
      level: "Intermediate to Advanced",
      format: "Hybrid (In-Person & Online)",
      description: "Comprehensive deep-dive programs covering all aspects of professional photography. From advanced composition to post-processing mastery, business strategies, and specialized genre techniques.",
      highlights: [
        "Advanced lighting and composition masterclasses",
        "Studio setup and management",
        "Professional editing workflow with Lightroom & Photoshop",
        "Business development and client management",
        "Specialized genre training (portrait, landscape, commercial, etc.)",
        "Certificate of completion"
      ],
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/549824270_1235314171960869_6288218468892180198_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFrh02x323-R8nqlBU0FWQkWxCn4rCxQjJbEKfisLFCMlTbJ0qWFw9BpKWEkX6tcggAnXJGNkhfUx6nbPnpYLBM&_nc_ohc=Y3UkUH04RPQQ7kNvwEhCGel&_nc_oc=AdnZNzexhOyuJV1_svEqJzMJBw7i7VwHK3ks4sPsxsAHkyt8qgv8U0S8DFcvZKsEiDE&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=fLNvcgXEqV6n0heS2vr73g&oh=00_Aftm1FdQHePzVlDCUVNtGCBtVhr1vZfJyYbF42yhtBX6tQ&oe=6983AE02",
      price: "From $2,499",
      nextDate: "April 1, 2026"
    },
    {
      id: 3,
      category: 'online',
      icon: <BookOpen className="w-2 h-2" />,
      title: "Online Courses & Webinars",
      tagline: "Learn at Your Own Pace",
      duration: "Self-Paced / Live Sessions",
      level: "All Levels",
      format: "100% Online",
      description: "Flexible learning options with expertly crafted online courses and interactive live webinars. Access from anywhere in the world and learn on your schedule while getting real-time support.",
      highlights: [
        "50+ on-demand video courses",
        "Weekly live webinars with industry experts",
        "Interactive Q&A sessions",
        "Downloadable resources and presets",
        "Private student community forum",
        "Lifetime access to course materials"
      ],
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/485809754_1086497040175917_1134285044860700956_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGzrRxdrwRYgSUoJv5g6maZ8yMgLoKb1Y7zIyAugpvVjmk2QCXCvLD2XVWsOrxVwbpS_4CFR0tEBsnVQZ0RIS5o&_nc_ohc=vrVpE8YYLCMQ7kNvwEkOxgD&_nc_oc=AdmnT2LdNVQ5GkJCE1Bj6C0OZ92iYc1IC56YUTX6fiRJ7BTCHjd-iGxbTNHEIcG-Nx0&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=OOMIHClgWawLhl3aCovApQ&oh=00_AfsTZgkpU6ODBeBxy7b3wlqbXEPvK3SaYqOkqsR-On9OfA&oe=6983C626",
      price: "From $99/course",
      nextDate: "Rolling Enrollment"
    },
    {
      id: 4,
      category: 'mentorship',
      icon: <Users className="w-3 h-3" />,
      title: "Mentorship Opportunities",
      tagline: "Personalized Guidance from Pros",
      duration: "3-6 Months",
      level: "All Levels",
      format: "One-on-One / Small Groups",
      description: "Connect with award-winning photographers who provide personalized guidance tailored to your unique artistic vision and career goals. Build lasting relationships with industry professionals.",
      highlights: [
        "Bi-weekly one-on-one video sessions",
        "Portfolio review and career planning",
        "Industry insights and networking opportunities",
        "Personalized assignments and critiques",
        "Access to mentor's professional network",
        "Goal-oriented development roadmap"
      ],
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/548092950_1233332215492398_1591155410604794301_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGZ7xvNbg7B7G7Bjm1rR1y2yo2dOhvkGJTKjZ06G-QYlP0DWJXsMKbGRXL4euAwIzI8Q0SngPNh_zIffaNqxqIs&_nc_ohc=zqw185wf-gQQ7kNvwGYFcF1&_nc_oc=AdlynPxYvyecRztbNEVpD4uBGyK6g3tvwqLm2L3ZFJ031Q_WeyPXVhdOPOOpfb3oSy8&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=__6D8G0x2DuIgcv_nVsOiA&oh=00_AfvrqsBWQpGX16Q1GNue0AkYKPM-Ecu5f5JeWf69-kQ2jA&oe=6983995F",
      price: "From $1,299",
      nextDate: "February 10, 2026"
    },
    {
      id: 5,
      category: 'competitive',
      icon: <Lightbulb className="w-2 h-2" />,
      title: "Photography Practical Competitive Trials",
      tagline: "Test Your Skills in Real-World Scenarios",
      duration: "1 Day - 1 Week",
      level: "Intermediate to Advanced",
      format: "In-Person Challenges",
      description: "Put your skills to the test with competitive photography challenges designed to simulate real professional scenarios. Win prizes, gain recognition, and push your creative boundaries.",
      highlights: [
        "Themed photography challenges",
        "Judging by industry professionals",
        "Cash prizes and equipment awards",
        "Publication opportunities for winners",
        "Real-time problem-solving scenarios",
        "Collaborative and solo challenges"
      ],
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/614902122_1330101422482143_3853933236456920998_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGARdH_W2jhdDmce6grOjW0WGguxqPQcNBYaC7Go9Bw0KKkc5wQUP4U1aypsOnJsOEbm7R0nsGbs-2rqhFkyvdH&_nc_ohc=vv9es_nRlq4Q7kNvwFGBog5&_nc_oc=AdnJo_OiBK8bR0XbOcrfzy_P6qGLn3RW5cjM2zceixPSu6QyRX0ZuCLc_fi3YDsLmDQ&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=mP2TX474BT1sxTrqN3GAZg&oh=00_AfsN5fG3Iw9DV4o7-G4-Ly48kaI1w9zxtTx3xv3ae_lndw&oe=6983C03D",
      price: "From $149/event",
      nextDate: "March 22, 2026"
    },
    {
      id: 6,
      category: 'exhibitions',
      icon: <Image className="w-2 h-2" />,
      title: "Exhibitions, Festivals & Conferences",
      tagline: "Showcase Your Work to the World",
      duration: "Year-Round Events",
      level: "All Levels",
      format: "In-Person & Virtual",
      description: "Participate in prestigious photography exhibitions, festivals, and industry conferences. Network with peers, showcase your portfolio, and gain exposure in the photography community.",
      highlights: [
        "Annual international photography festival",
        "Quarterly themed exhibitions",
        "Industry conference attendance and speaking opportunities",
        "Gallery representation for selected artists",
        "Networking events with curators and buyers",
        "Online portfolio showcases"
      ],
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/485294944_1083694233789531_9087067170709571553_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGTDjvAvd7DpL8jNh2xV7yeykqmrMqa347KSqasyprfjpjxP_0pr6lxKedhQSgw4TiuIW4u4DWY0L69MgxQmW0V&_nc_ohc=XjFNrYG95XQQ7kNvwHZfo58&_nc_oc=AdnSKT0zH4NmiwVyCUDaCZiWJFIm8xnJJQvLZU-2gdpl-buBBM_xrFtoSKTuxWs6qzM&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=GFIB7sXoIASONBBYiX4crA&oh=00_AfvuA2zN-eWbY5zg9Te4fPg6aUhkaHFEbc-7-1k7arvUHQ&oe=6983B6C9",
      price: "Free - $299",
      nextDate: "Ongoing"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs' },
    { id: 'short-term', name: 'Short-Term' },
    { id: 'intensive', name: 'Intensive' },
    { id: 'online', name: 'Online' },
    { id: 'mentorship', name: 'Mentorship' },
    { id: 'competitive', name: 'Competitive' },
    { id: 'exhibitions', name: 'Exhibitions' }
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Contact', path: '/contact' }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <Header />


      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/607457813_1320565466769072_2412487042534321878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEicx3GXIJZjj5tMK9P4qRTQYCk3jK3DY5BgKTeMrcNjqVM-pP6jW1cfT03aF7bS2uxBXTG8o9Ssuy52Bi0Z58F&_nc_ohc=DrM00H8fyYcQ7kNvwGlX0u4&_nc_oc=AdmkIjC7iyCd_qkpHljIwC0ezL002gFou-GWYVyaWeVIHtliQsNRjlaM5BlKOkn3Dz4&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=Oe_Wu5AFrCNuhioNSNX9TA&oh=00_AftNZGwBl1z_xG2-WFgYIbgAZr4s-ZuDG1S_j5cZ0AeNBQ&oe=6983AF9A)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/95 via-zinc-900/85 to-zinc-900/75"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-amber-600/20 border border-amber-600/50 rounded-full">
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Our Programs</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif font-black text-stone-100 mb-6 tracking-tight leading-none">
            Transform Your
            <span className="block text-amber-600 mt-2">Photography Journey</span>
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of training programs, mentorship opportunities, and creative experiences designed to elevate your craft at every level
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b border-stone-200 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-none font-semibold tracking-wide transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-stone-100 text-zinc-900 hover:bg-stone-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Program Image */}
                <div className="relative h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent"></div>
                  </div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 bg-amber-600 text-white p-4 rounded-full shadow-2xl">
                    {program.icon}
                  </div>

                  {/* Quick Info Tags */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-zinc-900 text-sm font-semibold rounded-full">
                      {program.level}
                    </span>
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-zinc-900 text-sm font-semibold rounded-full">
                      {program.format}
                    </span>
                  </div>
                </div>

                {/* Program Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-3xl font-serif font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-amber-600 font-semibold text-lg italic">
                      {program.tagline}
                    </p>
                  </div>

                  <p className="text-stone-600 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Meta Information */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-stone-200">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="text-xs text-stone-500 uppercase tracking-wide">Duration</p>
                        <p className="text-sm font-semibold text-zinc-900">{program.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="text-xs text-stone-500 uppercase tracking-wide">Next Start</p>
                        <p className="text-sm font-semibold text-zinc-900">{program.nextDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-amber-600" />
                      <div>
                        <p className="text-xs text-stone-500 uppercase tracking-wide">Investment</p>
                        <p className="text-sm font-semibold text-zinc-900">{program.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-zinc-900 mb-4 font-serif">Program Highlights</h4>
                    <ul className="space-y-3">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-600 text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 px-6 py-4 bg-amber-600 text-white font-semibold rounded-none hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group/btn">
                      <span>Enroll Now</span>
                      <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button className="flex-1 px-6 py-4 border-2 border-zinc-900 text-zinc-900 font-semibold rounded-none hover:bg-zinc-900 hover:text-white transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-serif font-bold text-stone-100 mb-6">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-stone-300 mb-10 leading-relaxed">
            Join thousands of photographers who have transformed their passion into professional expertise through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/programs"
              className="px-10 py-5 bg-amber-600 text-white font-bold text-lg rounded-none hover:bg-amber-700 transition-all duration-300 shadow-2xl"
            >
              Browse All Programs
            </Link>
            <Link
              to="/contact"
              className="px-10 py-5 border-2 border-stone-100 text-stone-100 font-bold text-lg rounded-none hover:bg-stone-100 hover:text-zinc-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
      `}</style>
    </div>
  );
};

export default ProgramsPage;