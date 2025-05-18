import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi"; // Icons for submit button

// Replace with your actual Google Apps Script Web App URL after deploying it
const GOOGLE_SCRIPT_URL =
  "https://docs.google.com/spreadsheets/d/1G_cYOt83i0GCy4RlrioIrLvH8_GrYb53aF2gxtrTSwk/edit?gid=0#gid=0 ";

const inputVariants = {
  focus: {
    borderColor: "var(--color-sky-500)", // Using CSS variable for dynamic color
    scale: 1.02,
    boxShadow: "0 0 0 2px var(--color-sky-500-alpha)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
  rest: {
    borderColor: "var(--color-slate-600)",
    scale: 1,
    boxShadow: "0 0 0 0px var(--color-sky-500-alpha)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 15px rgba(0, 191, 255, 0.3)", // Sky blue shadow
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    boxShadow: "0px 2px 5px rgba(0, 191, 255, 0.2)",
  },
  submitting: {
    scale: 0.98,
    opacity: 0.7,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  submitted: {
    backgroundColor: "var(--color-emerald-500)", // Green for success
    transition: { duration: 0.5 },
  },
  error: {
    backgroundColor: "var(--color-red-500)", // Red for error
    transition: { duration: 0.5 },
  },
};

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] =
    useState("idle"); // idle, submitting, success, error
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    // Define CSS custom properties for dynamic colors in Framer Motion variants
    // Ensure these Tailwind colors are available in your config or use hex codes
    document.documentElement.style.setProperty(
      "--color-sky-500",
      "#0ea5e9"
    );
    document.documentElement.style.setProperty(
      "--color-sky-500-alpha",
      "rgba(14, 165, 233, 0.3)"
    );
    document.documentElement.style.setProperty(
      "--color-slate-600",
      "#475569"
    );
    document.documentElement.style.setProperty(
      "--color-emerald-500",
      "#10b981"
    );
    document.documentElement.style.setProperty(
      "--color-red-500",
      "#ef4444"
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setSubmissionStatus("error");
      setFormMessage("Please fill in all fields.");
      setTimeout(() => {
        // Reset after a few seconds
        setSubmissionStatus("idle");
        setFormMessage("");
      }, 3000);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmissionStatus("error");
      setFormMessage("Please enter a valid email address.");
      setTimeout(() => {
        setSubmissionStatus("idle");
        setFormMessage("");
      }, 3000);
      return;
    }

    setSubmissionStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script when not returning custom JSON from doPost
        // Or use 'cors' if your Apps Script is configured to return proper CORS headers and JSON response
        headers: {
          "Content-Type":
            "application/x-www-form-urlencoded", // Or 'application/json' if Apps Script handles JSON
        },
        // body: new URLSearchParams(formData).toString(), // For x-www-form-urlencoded
        // For direct POST to Apps Script, it often expects parameters directly.
        // A common way is to send it as FormData, but Apps Script web apps
        // receive POST parameters more directly (e.g. e.parameter.name)
        // So, we construct a FormData object.
        redirect: "follow", // Optional
        body: (() => {
          const fd = new FormData();
          Object.entries(formData).forEach(
            ([key, value]) => {
              fd.append(key, value);
            }
          );
          return fd;
        })(),
      });

      // Note: With 'no-cors', you won't be able to read the response body directly.
      // The request will be made, and if it doesn't throw an error,
      // we assume it was likely successful at the network level.
      // Apps Script will handle the sheet writing.
      // For more robust error handling, you'd need to configure Apps Script for CORS
      // and return specific JSON responses (e.g., {status: 'success'} or {status: 'error', message: '...'})

      setSubmissionStatus("success");
      setFormMessage(
        "Thank you! Your message has been sent."
      );
      setFormData({ name: "", email: "", message: "" }); // Clear form

      setTimeout(() => {
        // Reset after a few seconds
        setSubmissionStatus("idle");
        setFormMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
      setFormMessage(
        "Something went wrong. Please try again."
      );
      setTimeout(() => {
        // Reset after a few seconds
        setSubmissionStatus("idle");
        setFormMessage("");
      }, 5000);
    }
  };

  return (
    <section
      className="py-16 md:py-24 bg-slate-900 text-slate-100"
      id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div
          className="text-center mb-10 md:mb-12"
          data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white relative pb-2">
            Get in Touch
            <span className="block h-1 w-1/5 bg-gradient-to-r from-green-400 to-teal-500 mt-2 mx-auto"></span>
          </h2>
          <p
            className="text-slate-300 text-base md:text-lg mt-4 max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100">
            Have a project in mind, a question, or just want
            to say hi? Fill out the form below!
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
          data-aos="zoom-in-up"
          data-aos-delay="200"
          initial="rest">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-1">
              Full Name
            </label>
            <motion.input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none placeholder-slate-500"
              placeholder="Your Name"
              variants={inputVariants}
              whileFocus="focus"
              autoComplete="name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none placeholder-slate-500"
              placeholder="you@example.com"
              variants={inputVariants}
              whileFocus="focus"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-300 mb-1">
              Message
            </label>
            <motion.textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-100 focus:outline-none placeholder-slate-500 resize-none"
              placeholder="Your message..."
              variants={inputVariants}
              whileFocus="focus"></motion.textarea>
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className={`w-full md:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500
                ${
                  submissionStatus === "success"
                    ? "bg-emerald-500"
                    : submissionStatus === "error"
                    ? "bg-red-500"
                    : "bg-sky-600 hover:bg-sky-700"
                }
              `}
              variants={buttonVariants}
              whileHover={
                submissionStatus === "idle" ||
                submissionStatus === "submitting"
                  ? "hover"
                  : ""
              }
              whileTap={
                submissionStatus === "idle" ||
                submissionStatus === "submitting"
                  ? "tap"
                  : ""
              }
              animate={submissionStatus} // 'submitting', 'submitted', 'error'
              disabled={
                submissionStatus === "submitting" ||
                submissionStatus === "success"
              }>
              {submissionStatus === "submitting" && (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              )}
              {submissionStatus === "success" && (
                <>
                  <FiCheckCircle className="mr-2" /> Message
                  Sent!
                </>
              )}
              {submissionStatus === "error" && (
                <>
                  <FiAlertCircle className="mr-2" /> Try
                  Again
                </>
              )}
              {submissionStatus === "idle" && (
                <>
                  <FiSend className="mr-2" /> Send Message
                </>
              )}
            </motion.button>
            {formMessage && (
              <p
                className={`mt-3 text-sm ${
                  submissionStatus === "error"
                    ? "text-red-400"
                    : submissionStatus === "success"
                    ? "text-green-400"
                    : "text-slate-400"
                }`}>
                {formMessage}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};
