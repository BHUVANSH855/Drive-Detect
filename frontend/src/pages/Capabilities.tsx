const Capabilities = () => {
  return (
    <div className="min-h-screen bg-[#020202] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          System Capabilities
        </h1>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">
              Model Capabilities
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Drive Detect leverages deep learning-based computer vision
              models to detect and classify traffic signs in real time.
              The system processes image inputs efficiently and delivers
              reliable classification outputs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">
              Supported Traffic Signs
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The model supports multiple categories of traffic signs
              including regulatory, warning, and mandatory signs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">
              Accuracy & Performance
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The trained model achieves strong classification accuracy
              with optimized inference speed suitable for real-time
              deployment environments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-500">
              System Performance
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The application is optimized for performance with efficient
              frontend rendering and streamlined backend processing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;