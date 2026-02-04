const Terms = (): JSX.Element => {
  return (
    <section className="min-h-screen bg-[#020202] text-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Terms <span className="text-blue-600">of Use</span>
        </h1>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed">
          <p>
            DriveDetect is provided as an open-source project for educational and
            research purposes only.
          </p>

          <p>
            By using this project, you agree that the authors and contributors
            are not responsible for any misuse, damages, or consequences arising
            from its use.
          </p>

          <p>
            You are free to use, modify, and distribute this project under the
            terms of its open-source license.
          </p>

          <p className="text-gray-500 pt-4">
            Continued use of DriveDetect implies acceptance of these terms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;
