const Contact = (): JSX.Element => {
  return (
    <section className="min-h-screen bg-[#020202] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Contact <span className="text-blue-600">Us</span>
        </h1>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Have questions, ideas, or want to collaborate on DriveDetect?
          We’d love to hear from you. The project is open-source and
          community-driven.
        </p>

        <div className="space-y-6 text-gray-300 text-sm">
          <p>
            📌 For bugs or feature requests, please open an issue on GitHub.
          </p>

          <a
            href="https://github.com/aayush-1709/Drive-Detect/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 hover:text-blue-400 transition"
          >
            → Report an Issue on GitHub
          </a>

          <p className="pt-6 text-gray-500">
            Maintained as part of an open-source initiative under ECWoC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
