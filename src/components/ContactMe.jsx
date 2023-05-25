import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message! Please try again.");
        }
      );
  };

  return (
    <div
      id="contact-me"
      className="flex flex-col items-center justify-center bg-lightDesert  p-8 rounded-lg shadow-md"
    >
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center">Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-2 rounded w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-2 rounded w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="border border-darkDesert bg-lightDesert text-darkDesert mb-4 p-2 rounded w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-darkDesert text-lightDesert py-2 px-4 rounded w-full font-bold hover:bg-goldDesert transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}