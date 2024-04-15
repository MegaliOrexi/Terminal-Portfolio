import React from 'react';

function ContactMe() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form action="https://formspree.io/f/xkndpndw" method="POST">
        <div className=" bg-black rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-yellow-400">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border-gray-300 rounded-md text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-yellow-400">Email</label>
            <input type="email" id="email" name="_replyto" className="mt-1 p-2 w-full border-gray-300 rounded-md text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-yellow-400">Message</label>
            <textarea id="message" name="message" className="mt-1 p-2 w-full border-gray-300 rounded-md h-32 resize-none text-black" required></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactMe;
