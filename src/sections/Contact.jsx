import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    enquiry: "",
  });
  const [result, setResult] = React.useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "75e57396-8499-4124-a14c-86883a18a427");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your message has been sent successfully.");
      event.target.reset();
      setFormData({
        name: "",
        email: "",
        enquiry: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/shoaib7080",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shoaib-ahmad",
      label: "LinkedIn",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.link/jyp5ca",
      label: "Whatsapp",
    },
  ];
  const resumeLink = "https://example.com/your-resume.pdf"; // Replace with your actual resume link

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          Contact Me
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20 space-y-6"
        >
          <input
            type="hidden"
            name="subject"
            value="New Enquiry from Portfolio"
          />
          <div>
            <label className="block text-white mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-medium">Enquiry</label>
            <textarea
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
              placeholder="Tell me about your project or enquiry..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
        <div className="mt-6 text-center">
          <span className="text-blue-400  mt-4">{result}</span>
        </div>
        {/* Social Links & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="flex justify-center items-center gap-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 hover:border-white/40 transition-colors"
              >
                <social.icon className="w-6 h-6 text-white" />
              </motion.a>
            ))}
          </div>

          {/* <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-colors"
          >
            <FaDownload className="w-4 h-4" />
            Download Resume
          </motion.a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
