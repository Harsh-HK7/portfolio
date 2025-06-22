import React from "react";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/Twitter.png";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    const serviceKey = import.meta.env.VITE_SERVICE_ID;
    const templateKey = import.meta.env.VITE_TEMPLATE_ID;

    

    emailjs.sendForm(
        serviceKey,     // ✅ Replace with your actual service ID
        templateKey,    // ✅ Replace with your actual template ID
        form.current,
        publicKey      // ✅ Replace with your actual public key
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        (err) => {
          console.error("EmailJS Error:", err.text);
          setError(true);
          setSuccess(false);
        }
      );
  };


  return (
    <div id="contact" className="min-h-screen bg-gray-950 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row gap-12">
      {/* Left Side: Contact Info */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
        <p className="text-gray-400">
          Feel free to reach out through the form or via email/socials. I'll get back to you as soon as I can.Let's connect and discuss how we can work together or just chat about tech!
        </p>
        <div className="space-y-3">
          <p className="text-gray-300">📧 kalalharsh900@gmail.com</p>
          <p className="text-gray-300">📍 Gandhinagar, Gujarat, India</p>
        </div>
        <div className="flex space-x-4 pt-4">
          <a href="https://www.linkedin.com/in/harsh-kalal-515086307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="Linkedin" className='w-6 h-6'/></a>
          <a href="https://x.com/HarshK74?t=EHEXgAMrFlc9af9iGW5CIw&s=09" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter" className='w-6 h-7'/></a>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-md">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded font-semibold transition"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 text-center">Your message was sent successfully!</p>
          )}
          {error && (
            <p className="text-red-600 text-center">Failed to send message. Please try again later.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
