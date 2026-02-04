const Feedback = (): JSX.Element => {
  return (
    <section className="min-h-screen bg-[#020202] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Feedback & <span className="text-blue-600">Suggestions</span>
        </h1>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Your feedback helps improve DriveDetect. Whether it’s UI/UX,
          performance, documentation, or ideas — every suggestion matters.
        </p>

        <div className="space-y-6 text-gray-300 text-sm">
          <p>
            💡 Share your thoughts, feature ideas, or improvements via GitHub.
          </p>

          <a
            href="https://github.com/aayush-1709/Drive-Detect/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 hover:text-blue-400 transition"
          >
            → Start a Discussion on GitHub
          </a>

          <p className="pt-6 text-gray-500">
            Thank you for helping make DriveDetect better 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
