'use client';

export default function VolunteerCTA() {
  return (
    <section className="py-20 bg-orange-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Join our mission to empower children through art. Whether you are an artist, educator, or simply 
          passionate about making a difference, we welcome you to be part of our community.
        </p>
        <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
          Sign Up to Volunteer
        </button>
      </div>
    </section>
  );
}
