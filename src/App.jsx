
import { useState } from 'react';

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', message: '', file: null });

  return (
    <div className="p-6 space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Wild Juans Junk Removal</h1>
        <p className="text-xl text-gray-600">Fast, Reliable Junk Removal in Sarasota County</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Book Online</button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            'Furniture Removal', 'Appliance Removal', 'Electronics Removal',
            'Yard Clean Up', 'Commercial', 'Storage Unit Clean Outs',
            'Hoarder Houses', 'Apartment Clean Outs', 'Construction Clean Up',
            'Garage Clean Out', 'Trash Removal', 'Dumpster Overflow Removal',
            'Attic Clean Outs'
          ].map(service => (
            <div key={service} className="p-4 border rounded shadow">
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-3xl font-semibold mb-2">Why Choose Wild Juans?</h2>
        <p>We're a locally owned and operated junk removal company serving all of Sarasota County. Whether it's a single item or a full cleanout, we make junk disappear — fast.</p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Get a Free Quote</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="border p-2 w-full" />
          <input type="email" placeholder="Email Address" className="border p-2 w-full" />
          <textarea placeholder="Tell us about your junk..." className="border p-2 w-full"></textarea>
          <input type="file" className="w-full" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Send Request</button>
        </form>
      </section>

      <section className="text-center pt-10">
        <h2 className="text-2xl font-semibold">Proudly Serving Sarasota County</h2>
        <p>From Venice to North Port to Lakewood Ranch — if you're in Sarasota County, we've got you covered.</p>
      </section>
    </div>
  );
}
