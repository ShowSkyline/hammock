export default function ContactPage() {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <p className="text-lg mb-4">
            We would love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows={4} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-md">Send Message</button>
          </form>
        </div>
      )
    }
