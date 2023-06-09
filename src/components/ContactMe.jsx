import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE;
    const templateId = import.meta.env.VITE_TEMPLATE;
    const apiKey = import.meta.env.VITE_API;

    emailjs.sendForm(serviceId, templateId, e.target, apiKey).then(
      (result) => {
        console.log("result text", result.text);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log("error", error.text);
        alert("Failed to send message! Please try again.");
      }
    );
  };

  return (
    <div
      id="contact-me"
      className="flex flex-col items-center justify-center bg-lightDesert p-8 rounded-lg shadow-md"
    >
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-darkDesert mb-6 text-center">
          Contact Me
        </h1>
        {success ? (
          <div>
            <img src="/toast.png" alt="Success" />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-3 rounded w-full shadow-md focus:border-goldDeserttransition-colors duration-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-3 rounded w-full shadow-md focus:border-goldDesert transition-colors duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-3 rounded w-full h-24 shadow-md focus:border-goldDesert transition-colors duration-200"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-darkDesert text-lightDesert py-3 px-4 rounded w-full font-bold hover:bg-goldDesert transition-colors duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
