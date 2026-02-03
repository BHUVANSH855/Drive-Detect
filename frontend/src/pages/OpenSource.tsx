const OpenSource = (): JSX.Element => {
  return (
    <section className="min-h-screen bg-[#020202] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Open Source <span className="text-blue-600">License</span>
        </h1>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          <p>
            DriveDetect is an open-source project built to encourage learning,
            research, and community-driven development in the field of computer
            vision and autonomous systems.
          </p>

          <p>
            The project is licensed under an open-source license, allowing users
            to view, modify, and distribute the source code in compliance with
            the license terms.
          </p>

          <p>
            Contributions are welcome! Whether you’re fixing bugs, improving
            UI/UX, or adding new features, your involvement helps strengthen the
            project.
          </p>

          <a
            href="https://github.com/aayush-1709/Drive-Detect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-500 hover:text-blue-400 transition pt-4"
          >
            → View Repository on GitHub
          </a>

          <p className="text-gray-500 pt-6">
            This project actively supports open-source initiatives and student
            developer programs like ECWoC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
