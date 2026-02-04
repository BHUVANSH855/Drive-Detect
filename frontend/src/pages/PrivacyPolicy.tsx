const PrivacyPolicy = (): JSX.Element => {
  return (
    <section className="min-h-screen bg-[#020202] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Privacy <span className="text-blue-600">Policy</span>
        </h1>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          <p>
            DriveDetect is an open-source project focused on computer vision
            research and driver monitoring systems. We respect your privacy and
            are committed to transparency.
          </p>

          <p>
            This project does not knowingly collect, store, or process personal
            user data. Any data processed during demos or experiments remains
            local to the user’s environment.
          </p>

          <p>
            External services such as GitHub may have their own privacy
            practices. Please review their policies independently.
          </p>

          <p className="text-gray-500 pt-4">
            This policy may be updated as the project evolves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
