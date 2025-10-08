'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Users, Image as ImageIcon } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { getAllPrograms } from '../../../api/programs';

export default function ProgramDetailPage() {
  const params = useParams();
  const slug = params.slug;
  
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        setLoading(true);
        // Fetch programs with populated relations
        const response = await getAllPrograms();
        console.log('✅ Programs fetched:', response);
        
        // Find the program with matching slug
        const foundProgram = response.data?.find(
          p => p.slug === slug
        );
        
        if (foundProgram) {
          setProgram(foundProgram);
          console.log('✅ Program found:', foundProgram);
          console.log('📝 Program data:', foundProgram);
        } else {
          console.log('❌ No program found with slug:', slug);
          console.log('Available slugs:', response.data?.map(p => p.slug));
          setError('Program not found');
        }
      } catch (err) {
        console.error('❌ Error fetching program:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProgram();
    }
  }, [slug]);

  const handleImageError = (imageId) => {
    setImageErrors(prev => new Set(prev).add(imageId));
  };

  if (loading) {
    return (
      <>
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading program...</h2>
            <p className="text-gray-600">Please wait while we fetch the details</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !program) {
    return (
      <>
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Not Found</h2>
            <p className="text-gray-600 mb-6">The program you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/#programs">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Back to Programs
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const {
    title,
    summary,
    body,
    heroImage,
    gallery,
    tags,
    partners,
    story_impacts
  } = program;

  const heroImageUrl = heroImage?.url 
    ? (heroImage.url.startsWith('http') 
        ? heroImage.url 
        : `http://localhost:1337${heroImage.url}`)
    : 'https://res.cloudinary.com/demo/image/upload/v1632391898/artwork_sample.jpg';

  const getImageUrl = (image) => {
    if (!image?.url) return null;
    return image.url.startsWith('http') 
      ? image.url 
      : `http://localhost:1337${image.url}`;
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Back Button */}
        <div className="container mx-auto px-4 pt-8">
          <Link href="/#programs">
            <button className="flex items-center gap-2 text-green-700 hover:text-green-900 transition mb-6">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Programs</span>
            </button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Image */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
              <Image
                src={heroImageUrl}
                alt={title || 'Program'}
                fill
                className="object-cover"
                priority
                onError={() => handleImageError('hero')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
                {summary && (
                  <p className="text-xl text-gray-200 max-w-3xl">{summary}</p>
                )}
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Program Description */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-green-500 pb-3">
                    About This Program
                  </h2>
                  {body ? (
                    <div 
                      className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  ) : (
                    <p className="text-gray-700 leading-relaxed">
                      {summary || 'No detailed description available for this program yet.'}
                    </p>
                  )}
                </div>

                {/* Gallery Section */}
                {gallery && gallery.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                      <ImageIcon className="w-6 h-6 text-green-600" />
                      Program Gallery
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {gallery.filter(img => img?.url).map((image, index) => {
                        const imageUrl = getImageUrl(image);
                        if (!imageUrl || imageErrors.has(`gallery-${index}`)) return null;
                        
                        return (
                          <div key={index} className="relative h-48 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <Image
                              src={imageUrl}
                              alt={image.alternativeText || `Gallery image ${index + 1}`}
                              fill
                              className="object-cover hover:scale-110 transition duration-300"
                              onError={() => handleImageError(`gallery-${index}`)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Success Stories */}
                {story_impacts && story_impacts.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Success Stories</h2>
                    <div className="space-y-4">
                      {story_impacts.map((story, index) => (
                        <div key={story.id || index} className="border-l-4 border-green-500 pl-4 py-2">
                          <h3 className="font-bold text-gray-800">{story.title}</h3>
                          <p className="text-gray-600 text-sm">{story.excerpt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Tags */}
                {tags && tags.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5 text-green-600" />
                      Categories
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span 
                          key={tag.id || index}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Partners */}
                {partners && partners.length > 0 && (
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-green-600" />
                      Partners
                    </h3>
                    <div className="space-y-3">
                      {partners.map((partner, index) => (
                        <div key={partner.id || index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{partner.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Get Involved</h3>
                  <p className="text-green-100 mb-6">
                    Want to support this program or learn more about how you can help?
                  </p>
                  <div className="space-y-3">
                    <button className="w-full px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition">
                      Donate Now
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                      Volunteer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}