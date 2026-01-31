// src/pages/Homepage.jsx  (or wherever you place your pages)
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
  import Header from '../../components/layout/Header';     
  import Footer from '../../components/layout/Footer';     
import { Camera, Users, Award, BookOpen, Lightbulb, Image as ImageIcon } from 'lucide-react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://gizzim.org/wp-content/uploads/2022/07/giz-16.jpg',
    'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/607457813_1320565466769072_2412487042534321878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEicx3GXIJZjj5tMK9P4qRTQYCk3jK3DY5BgKTeMrcNjqVM-pP6jW1cfT03aF7bS2uxBXTG8o9Ssuy52Bi0Z58F&_nc_ohc=DrM00H8fyYcQ7kNvwGlX0u4&_nc_oc=AdmkIjC7iyCd_qkpHljIwC0ezL002gFou-GWYVyaWeVIHtliQsNRjlaM5BlKOkn3Dz4&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=jSleUQv65vsPMZ9ITInV9g&oh=00_AftknrnXihUqZwTlmq8thdMKPcbYPrBxvSUuKa04-zSv2w&oe=6983AF9A',
    'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/547956487_1233332455492374_4439549114034257281_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHlhhgYY1OJ9WchS1A3iAjLnhhwA3_-FcueGHADf_4VyycGH5TzQRnFI0vWjrLXbLYDPKY6FBe0iaW6Sfl86ei9&_nc_ohc=WMg-fkpUruMQ7kNvwHFKeST&_nc_oc=Adl-UfbWuH3i_oMjGRSC0zbfoc5R1XoGfGfg4ik_itfd_IEaK4RapqHObgw5sJtG-QA&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=nN0xIiZDQlMsTpnkSi2Rcg&oh=00_AfuKueZJjygE6n2tAtpN1rHflvHPyI_2X5a9i3ZAQE7g4g&oe=6983A551',
    'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/622133584_1344872687671683_5828954525828114340_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHj6YGS9XEW1GFAi0oMoCsf08yVuLRbq9vTzJW4tFur29EoGOyQNUEsuLrVhUQpaiDWd50-GKL3qKI682e2wORG&_nc_ohc=GyLkThBrR5sQ7kNvwHb2yKo&_nc_oc=Adl2FOWuI6vz1eOBXbk5bbn5H59JlEd86vVVeriW9R8ujC8VOHNxbJabmybQhn2VsA0&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=sBk_bv9MFiT3pkD685zQdA&oh=00_AftmT6F-EvfgJuyEENgKMpiMRByKAcJpXPjLSK09ddcwiw&oe=6983A772',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const programs = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Short-Term Training & Camps",
      description: "Intensive photography boot camps designed to jumpstart your creative journey with hands-on experience.",
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/528596448_1197223015769985_7869286701339410936_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGhlnMh7Ns_6AL_ouKM8k9umj4u1N7w3DKaPi7U3vDcMtpV4g3MDyRYfVu_QUlaKjKDe70A2LCaS1JDbj1NMl2l&_nc_ohc=EAkAVt3b7kQQ7kNvwE4OaqP&_nc_oc=Adkg1YjG3qnWk7F_mVnS6pX0VaoHKB_JOwpx4-W1yufG9G9cLGKXnT4gYMCsleql7P0&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=Ko2KSubZKclniAgE2Q30HQ&oh=00_Afum-gTlyN7udpQGLZthv-fuesjuh0DkShtARgfH_lQUbg&oe=69839B25",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Intensive Training Programs",
      description: "Deep-dive into advanced techniques with comprehensive curriculum covering all aspects of professional photography.",
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/526701759_1191922592966694_3639523580879376955_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeELkwcTkH9ZrSkaFNwgyCcjiFryG_UyDXWIWvIb9TINddLKZBajVMi96TsJ9Z0q77EOcy0ATXQqiLpj_rl7z5KC&_nc_ohc=2VievV8YUrYQ7kNvwFyqq9X&_nc_oc=AdlBfi5dISXxrBHQ1-2-hyvgXjguovlEForRdZp_uPXKkSIXI_wlRgklXlRiR-5FvKI&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=zDV4woE3iqDA5Qsg7zioSw&oh=00_AfvEbZm2u3VlGyhE7PxHlkqmQPiQGO5CvIYtrwgm0KwrNQ&oe=6983C684",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Online Courses & Webinars",
      description: "Learn from anywhere with our expertly crafted online programs and live interactive sessions.",
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/502553359_1142117264613894_1618762181790188761_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH3D6EtCgOQDnISsx-10f7hsbaryAVwRp2xtqvIBXBGnSNIsIwl25YTyaEP08wgzsQznoeUp3iQM2KtUBHZM5P4&_nc_ohc=kW2t0VjjB0gQ7kNvwFydqSh&_nc_oc=Adlp4Scnl1IWhgvFqkHNODD8xcPMLyqletjsrwA4vAbRc4_QiSRLhfkke5ZQqA92yto&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=Qf-unlr4f8_pixyMqXQHmw&oh=00_Afsmv3vQbZhwBfI8O8n3NKhftR8brhFsw-8gVtxwWQDGzQ&oe=69839C63",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentorship Opportunities",
      description: "Connect with industry professionals who guide your artistic growth through personalized one-on-one mentorship.",
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/590085018_1299863485505937_364836644614264491_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGly278oBUCQR6JLwN0hCp0krE2_OxyNlaSsTb87HI2VuUxD2BJAHC0B8acNDLFpbCLQI1U9ExOQ-8VUeXt5fJ4&_nc_ohc=0LpDvuEdJZcQ7kNvwHHm61-&_nc_oc=Adlt2oz2XpX-XGJgF-wLRCCXK7MnTOen9j6Df01cQbqVnc32qhiHtLPwsdgPLRfyNmg&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=DgIv6Gs-3UteDdhPKDukPQ&oh=00_AfuTUHXTOQX1VYnxQHVHlzdRa7KiInUrzu9Qmj69i804xw&oe=69839F51",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Competitive Trials",
      description: "Test your skills in real-world scenarios with photography practicals designed as competitive challenges.",
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/519671731_1180246550800965_5288420683852047548_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGYzw3M1BqIX6d9axeIAdqTX-8NjnhmRmpf7w2OeGZGajB5cOLmiFED3V117iXF8mXjfioiPKT-nCkfmpMQI95V&_nc_ohc=VmFUPxGSlUgQ7kNvwHzRXaX&_nc_oc=AdkkvsiE5h6D-WtXn4ODJnD1rvvbDM9gRQNLP2MFGvX2_mM6czfj3jn4Xis2AiZ5Ry4&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=ZisavhtT-Z_yGm_PRf35Wg&oh=00_AftlhDFOrrwJazqtmHZZAjcDgjNU_9Yo7ygPUhRJ01Oryw&oe=6983C441",
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Exhibitions & Festivals",
      description: "Showcase your work and network at prestigious photography exhibitions, festivals, and industry conferences.",
      image: "https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/485321162_1083751350450486_3204104549662916293_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGbCxzmJdQSQF0gsReYk6Zftebo4TWSEUa15ujhNZIRRpkyebyvE7SdOhQFCM526zTosfGQLLVgHozddhbGcLZy&_nc_ohc=yFYPQ08Wej0Q7kNvwELDJGn&_nc_oc=AdlONBsjrWXqq90IShYePHW3_FdPy26yIz3QXjJ_pSS9vb2hOJ9l8_rbu4JFpvDQCCc&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=AHgjsenFhFEngorefLSlTw&oh=00_Aft6U0vUBgu-uCNdoMTsaSP4X_LP3egH4ZXbdDVdma-jsA&oe=6983BE53",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative h-[90vh] md:h-screen overflow-hidden">
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-2000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/85 via-zinc-900/65 to-zinc-900/45" />
              </div>
            ))}
          </div>

          <div className="relative z-10 h-full flex items-center justify-center px-5 sm:px-6">
            <div className="text-center max-w-4xl">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-stone-100 mb-5 md:mb-8 tracking-tight leading-tight">
                Master the Art of
                <span className="block text-amber-600 mt-2 md:mt-4">Photography</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-stone-300 mb-8 md:mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                Transform your passion into expertise through world-class training, mentorship, and creative opportunities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Link
                  to="/programs"
                  className="px-8 py-4 bg-amber-600 text-white font-semibold text-base sm:text-lg rounded hover:bg-amber-700 transition-all duration-300 shadow-xl hover:shadow-amber-600/40 min-w-[180px]"
                >
                  Explore Programs
                </Link>
                <Link
                  to="/gallery"
                  className="px-8 py-4 border-2 border-stone-100 text-stone-100 font-semibold text-base sm:text-lg rounded hover:bg-stone-100 hover:text-zinc-900 transition-all duration-300 min-w-[180px]"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-600 w-6 sm:w-8' : 'bg-stone-400'
                  }`}
              />
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16 lg:mb-20">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 mb-4 md:mb-6 tracking-tight">
                Our Programs
              </h3>
              <div className="w-20 sm:w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                Comprehensive pathways designed to elevate your photography skills from beginner to professional
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ animation: `fadeInUp 0.7s ease-out ${index * 0.08}s both` }}
                >
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${program.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/55 to-transparent" />
                    </div>
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-amber-600">
                      {program.icon}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 md:p-8">
                    <h4 className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 mb-3 md:mb-4 group-hover:text-amber-600 transition-colors duration-300">
                      {program.title}
                    </h4>
                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5 md:mb-6">
                      {program.description}
                    </p>
                    <Link
                      to="/programs"
                      className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300 group/link text-sm sm:text-base"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300"
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
      </main>

      <Footer />

      <style jsx global>{`
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

export default Homepage;