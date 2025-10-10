'use client';

import Link from 'next/link';

export default function VolunteerCTA() {
  return (
    <section id="volunteercta" className="volunteer-cta7">
      <div className="volunteer-container7">
        <h2 className="volunteer-title7">Get Involved</h2>
        <p className="volunteer-description7">
          Join our mission to empower children through art. Whether you are an artist, educator, or simply 
          passionate about making a difference, we welcome you to be part of our community.
        </p>
        <Link href="/volunteer" className="volunteer-btn7">
          Sign Up to Volunteer
        </Link>
      </div>
    </section>
  );
}