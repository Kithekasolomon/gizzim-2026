import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, X, ChevronLeft, ChevronRight, Filter, Grid3x3, Columns, LayoutGrid } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState('masonry');
    const [lightboxImage, setLightboxImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Programs', path: '/programs' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Teams', path: '/teams' },
        { name: 'Mentorship', path: '/mentorship' },
        { name: 'Contact', path: '/contact' },
    ];

    const categories = [
        { id: 'all', name: 'All Photos', count: 24 },
        { id: 'culture', name: 'Culture & People', count: 8 },
        { id: 'cities', name: 'African Cities', count: 6 },
        { id: 'wildlife', name: 'Wildlife', count: 5 },
        { id: 'landscapes', name: 'Landscapes', count: 5 }
    ];

    const galleryImages = [
        // Maasai Culture & People
        {
            id: 1,
            category: 'culture',
            src: 'https://gizzim.org/wp-content/uploads/cache/2023/05/Gizzim-Photography-1/1317600056.jpg',
            title: 'Maasai Warriors',
            description: 'Traditional Maasai warriors in ceremonial attire, Kenya',
            photographer: 'Marcus Chen',
            location: 'Maasai Mara, Kenya',
            tall: true
        },
        {
            id: 2,
            category: 'culture',
            src: 'https://gizzim.org/wp-content/uploads/cache/2023/07/Gizzim-Photography-Kenya-1/2894643572.jpg',
            title: 'Maasai Woman Portrait',
            description: 'Beautiful portrait of a Maasai woman with traditional beadwork',
            photographer: 'Amara Williams',
            location: 'Amboseli, Kenya'
        },
        {
            id: 3,
            category: 'culture',
            src: 'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/590038452_1295358349289784_5694866746889683824_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFd-kGjqNrQIMTgI9i8hoUrBr0X-xaF0asGvRf7FoXRq-L7h5glxCMNaganYIIiexw_D9GghTXkzp8J4NvG6QQ&_nc_ohc=NMYnKsEP-K8Q7kNvwHtCIt7&_nc_oc=Adlc3M3o3Rm5z1j3Xtom3Obv-KNJLX3kmGeD1oxaL98o4sFxmIwvRrw8gTMx9GFwyf8&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=9qyphn5F80CfXmKNI5N09w&oh=00_AftN-eYdC-wxtDYDrZsPPIWf599-B2M43uO3awNz18le9g&oe=69839CD3',
            title: 'Traditional Dance',
            description: 'Maasai jumping dance celebration',
            photographer: 'Sofia Rodriguez',
            location: 'Tanzania',
            wide: true
        },

        // African Cities
        {
            id: 4,
            category: 'cities',
            src: 'https://images.unsplash.com/photo-1584474028550-627ae3fac95b?w=1200&q=80',
            title: 'Nairobi Skyline',
            description: 'Modern Nairobi cityscape at golden hour',
            photographer: 'David Okonkwo',
            location: 'Nairobi, Kenya',
            tall: true
        },
        {
            id: 5,
            category: 'cities',
            src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80',
            title: 'Cape Town Harbor',
            description: 'Victoria & Alfred Waterfront with Table Mountain',
            photographer: 'Alessandro Bianchi',
            location: 'Cape Town, South Africa'
        },
      

        // Wildlife
        {
            id: 7,
            category: 'wildlife',
            src: 'https://gizzim.org/wp-content/uploads/cache/2023/05/Gizzim-Photography-10/3047732787.jpg',
            title: 'African Elephants',
            description: 'Elephant family crossing the savanna',
            photographer: 'Kenji Tanaka',
            location: 'Serengeti, Tanzania',
            tall: true
        },
       
       

        // Landscapes
        {
            id: 10,
            category: 'landscapes',
            src: 'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/587046478_1295357799289839_6386938178538473559_n.jpg?stp=c0.225.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeGHzGBSTpoBJ39YxgwVcwuqS1Dbw0MGR8lLUNvDQwZHyYnDdjkwVtBPVZuSx2KqXJGByU8-3PyBYvplnV2zi1xx&_nc_ohc=JGDJI9z6XRUQ7kNvwEyJNil&_nc_oc=Adm5QOuiR3ddJV1TweFukI3JQBHnwej9BtiTv743gFrpuxZgNN80BW_r-lCSV5tMUP8&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=olPVigar9lnyfM4mUxSpHA&oh=00_AftRqxwp9j4h-9DtP_DWJICrrLeKMa44MIsETBGwbqGkzg&oe=6983B52D',
            title: 'Kilimanjaro Summit',
            description: 'Majestic Mount Kilimanjaro at dawn',
            photographer: 'Maya Patel',
            location: 'Tanzania',
            tall: true
        },
        {
            id: 11,
            category: 'landscapes',
            src: 'https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/589997815_1295357712623181_3877196911309886154_n.jpg?stp=c0.225.1366.1366a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeF-xqtur4X8tJhtgvDLZpvyu0XnP7ReERW7Rec_tF4RFQ1SqGdVZTA-ktnNTXa2VSmy1Wihun4Z_2XAwOoVBZoy&_nc_ohc=1FCuW5qjWFEQ7kNvwGZ3XDf&_nc_oc=Adlk4769U4dqPecSJiN3aAO_24uSLL7-Lh3YGPTeTStytMv1FFFsb_KIEMJGz37LA-A&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=olPVigar9lnyfM4mUxSpHA&oh=00_AfsaCII1wy_J5kWENNYjsnyARDo2i-yErYvJ-7Pxq4tj_Q&oe=69839CC7',
            title: 'Sahara Desert Dunes',
            description: 'Golden sand dunes of the Sahara',
            photographer: 'Alessandro Bianchi',
            location: 'Morocco'
        },
        {
            id: 12,
            category: 'landscapes',
            src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80',
            title: 'Victoria Falls',
            description: 'The magnificent Victoria Falls',
            photographer: 'Amara Williams',
            location: 'Zimbabwe/Zambia',
            wide: true
        },

        // More Culture
        {
            id: 13,
            category: 'culture',
            src: 'https://gizzim.org/wp-content/uploads/cache/2022/07/Gizzim-6/1040838365.jpg',
            title: 'Himba Tribe Woman',
            description: 'Portrait of Himba woman with traditional ochre body paint',
            photographer: 'Sofia Rodriguez',
            location: 'Namibia'
        },
        {
            id: 14,
            category: 'culture',
            src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80',
            title: 'African Market',
            description: 'Colorful textiles and crafts at local market',
            photographer: 'David Okonkwo',
            location: 'Lagos, Nigeria',
            tall: true
        },
        

      
      
        {
            id: 18,
            category: 'cities',
            src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80',
            title: 'Table Mountain',
            description: 'Iconic Table Mountain overlooking Cape Town',
            photographer: 'Maya Patel',
            location: 'Cape Town, South Africa',
            tall: true
        },

        // More Wildlife
        {
            id: 19,
            category: 'wildlife',
            src: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80',
            title: 'Cheetah Hunt',
            description: 'Cheetah on the prowl in the savanna',
            photographer: 'Kenji Tanaka',
            location: 'Serengeti, Tanzania'
        },
        {
            id: 20,
            category: 'wildlife',
            src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1200&q=80',
            title: 'Zebra Herd',
            description: 'Zebras during the great migration',
            photographer: 'Marcus Chen',
            location: 'Masai Mara, Kenya',
            wide: true
        },

        // More Landscapes
        {
            id: 21,
            category: 'landscapes',
            src: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1200&q=80',
            title: 'Serengeti Plains',
            description: 'Endless plains of the Serengeti at sunrise',
            photographer: 'Kenji Tanaka',
            location: 'Serengeti, Tanzania'
        },
        {
            id: 22,
            category: 'landscapes',
            src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80',
            title: 'Baobab Avenue',
            description: 'Ancient baobab trees at sunset',
            photographer: 'Amara Williams',
            location: 'Madagascar',
            tall: true
        },

        // Additional Culture
        {
            id: 23,
            category: 'culture',
            src: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1200&q=80',
            title: 'Zulu Traditional Dress',
            description: 'Woman in traditional Zulu ceremonial attire',
            photographer: 'Sofia Rodriguez',
            location: 'KwaZulu-Natal, South Africa'
        },
        {
            id: 24,
            category: 'culture',
            src: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80',
            title: 'African Drummers',
            description: 'Traditional drumming ceremony',
            photographer: 'David Okonkwo',
            location: 'Senegal',
            wide: true
        }
    ];

    const filteredImages = selectedCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    const openLightbox = (image, index) => {
        setLightboxImage(image);
        setCurrentImageIndex(index);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % filteredImages.length;
        setCurrentImageIndex(nextIndex);
        setLightboxImage(filteredImages[nextIndex]);
    };

    const prevImage = () => {
        const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
        setCurrentImageIndex(prevIndex);
        setLightboxImage(filteredImages[prevIndex]);
    };

    const getGridClass = () => {
        switch (viewMode) {
            case 'grid':
                return 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6';
            case 'columns':
                return 'grid grid-cols-1 md:grid-cols-2 gap-6';
            default: // masonry
                return 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 overflow-hidden">
                <div
                    className="absolute inset-1"
                    style={{
                        backgroundImage: 'url(https://scontent.fnbo12-1.fna.fbcdn.net/v/t39.30808-6/588715873_1292941236198162_3601149284976232708_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzHBC5ZJ2C87n4aGV9ufcbSBUF-bgfJRlIFQX5uB8lGSLLIVt-RdpGurijdazGHc5gbCutUdPP4XqLZwT3eB13&_nc_ohc=PYkQBDTX9eEQ7kNvwGLNoVJ&_nc_oc=AdmnBlxNhy6TqoErtsDg16eYz0nnORwArf8lx3OdQW4bU3T6YZlRrgBgyPJtA4FBOf4&_nc_zt=23&_nc_ht=scontent.fnbo12-1.fna&_nc_gid=GYgPeT0zGOnUzv44l8BoBw&oh=00_AfuBVoCPRqNUHBmOXp7cPCmbIYmUkPpfXgj4S4iUvhTw6Q&oe=6983A41B)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/95 via-neutral-950/85 to-neutral-950/75"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-block mb-8 px-8 py-3 bg-amber-600/10 border border-amber-600/30 rounded-full backdrop-blur-sm">
                        <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Gallery</span>
                    </div>
                    <h2 className="text-7xl md:text-8xl font-serif font-black text-stone-100 mb-8 tracking-tight leading-none">
                        African
                        <span className="block bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent mt-3">
                            Perspectives
                        </span>
                    </h2>
                    <p className="text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
                        A curated collection showcasing the beauty, culture, and diversity of Africa through the lens
                    </p>
                </div>
            </section>

            {/* Filter & View Controls */}
            <section className="sticky top-[89px] z-40 bg-zinc-900/95 backdrop-blur-md border-b border-neutral-800 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Category Filters */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 ${selectedCategory === category.id
                                            ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                                            : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                                        }`}
                                >
                                    {category.name}
                                    <span className="ml-2 opacity-60">({category.count})</span>
                                </button>
                            ))}
                        </div>

                        {/* View Mode Toggles */}
                        <div className="flex items-center gap-2 bg-neutral-800 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('masonry')}
                                className={`p-2.5 rounded-md transition-all duration-300 ${viewMode === 'masonry' ? 'bg-amber-600 text-white' : 'text-neutral-400 hover:text-white'
                                    }`}
                                title="Masonry View"
                            >
                                <LayoutGrid className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2.5 rounded-md transition-all duration-300 ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'text-neutral-400 hover:text-white'
                                    }`}
                                title="Grid View"
                            >
                                <Grid3x3 className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('columns')}
                                className={`p-2.5 rounded-md transition-all duration-300 ${viewMode === 'columns' ? 'bg-amber-600 text-white' : 'text-neutral-400 hover:text-white'
                                    }`}
                                title="Column View"
                            >
                                <Columns className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16 px-6 bg-neutral-950">
                <div className="max-w-7xl mx-auto">
                    <div className={getGridClass()}>
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`group relative overflow-hidden cursor-pointer ${viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
                                    } ${viewMode === 'grid' && image.tall ? 'row-span-2' : ''} ${viewMode === 'grid' && image.wide ? 'col-span-2' : ''
                                    }`}
                                onClick={() => openLightbox(image, index)}
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`
                                }}
                            >
                                <div className="relative overflow-hidden bg-neutral-900">
                                    <img
                                        src={image.src}
                                        alt={image.title}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-2xl font-serif font-bold text-white mb-2">
                                                {image.title}
                                            </h3>
                                            <p className="text-neutral-300 text-sm mb-3">
                                                {image.description}
                                            </p>
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="text-amber-500 font-semibold">
                                                    📸 {image.photographer}
                                                </span>
                                                <span className="text-neutral-400">
                                                    📍 {image.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 px-6 bg-neutral-900">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-serif font-bold text-amber-600 mb-2">24</div>
                            <div className="text-neutral-400 text-sm uppercase tracking-wide">Gallery Photos</div>
                        </div>
                        <div>
                            <div className="text-5xl font-serif font-bold text-amber-600 mb-2">8</div>
                            <div className="text-neutral-400 text-sm uppercase tracking-wide">Photographers</div>
                        </div>
                        <div>
                            <div className="text-5xl font-serif font-bold text-amber-600 mb-2">10+</div>
                            <div className="text-neutral-400 text-sm uppercase tracking-wide">Countries</div>
                        </div>
                        <div>
                            <div className="text-5xl font-serif font-bold text-amber-600 mb-2">5</div>
                            <div className="text-neutral-400 text-sm uppercase tracking-wide">Categories</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 bg-neutral-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-5xl font-serif font-bold text-stone-100 mb-6">
                        Capture Your Own Story
                    </h3>
                    <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
                        Join our programs and learn to create stunning photography that tells powerful stories
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/programs"
                            className="px-12 py-5 bg-amber-600 text-white font-bold text-lg hover:bg-amber-700 transition-all duration-300 shadow-2xl shadow-amber-600/20"
                        >
                            View Programs
                        </Link>
                        <Link
                            to="/contact"
                            className="px-12 py-5 border-2 border-stone-100 text-stone-100 font-bold text-lg hover:bg-stone-100 hover:text-neutral-950 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Lightbox */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:text-amber-600 transition-colors duration-300 z-50"
                    >
                        <X className="w-10 h-10" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-600 transition-colors duration-300 z-50 bg-neutral-900/50 p-3 rounded-full"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-amber-600 transition-colors duration-300 z-50 bg-neutral-900/50 p-3 rounded-full"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image Container */}
                    <div
                        className="relative max-w-6xl max-h-[90vh] mx-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={lightboxImage.src}
                            alt={lightboxImage.title}
                            className="max-w-full max-h-[80vh] object-contain mx-auto animate-scaleIn"
                        />

                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                            <h3 className="text-3xl font-serif font-bold text-white mb-2">
                                {lightboxImage.title}
                            </h3>
                            <p className="text-neutral-300 mb-4">
                                {lightboxImage.description}
                            </p>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-amber-500 font-semibold">
                                    📸 {lightboxImage.photographer}
                                </span>
                                <span className="text-neutral-400">
                                    📍 {lightboxImage.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-neutral-900/50 px-4 py-2 rounded-full text-sm">
                        {currentImageIndex + 1} / {filteredImages.length}
                    </div>
                </div>
            )}

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=Work+Sans:wght@300;400;500;600;700&display=swap');
        
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
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
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
        </div>
    );
};

export default GalleryPage;