export default function CategoryCard({ title, description, icon }) {
  return (
    <div
      className="relative transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20"
      style={{ clipPath: 'polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)' }}
    >
      {/* Simulated border */}
      <div
        className="bg-[#1A1A1D] hover:bg-[#F5E02A] w-full h-full"
        style={{ clipPath: 'polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)' }}
      >
        {/* Main content */}
        <div
          className="bg-gradient-to-br from-gray-900 to-black p-6 relative overflow-hidden"
          style={{ clipPath: 'polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)' }}
        >
          {/* Halftone pattern decoration */}
          <div className="absolute top-2 right-2 w-8 h-8 opacity-30">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'radial-gradient(circle at 25% 25%, rgba(250, 204, 21, 0.2) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(250, 204, 21, 0.1) 1px, transparent 1px)',
                backgroundSize: '4px 4px'
              }}
            ></div>
          </div>

          <div className="text-yellow-400 drop-shadow-lg shadow-yellow-500/50 relative z-10">
            {icon}
          </div>
          <h3 className="text-2xl font-bold font-display text-white mt-2 drop-shadow-md shadow-yellow-500/10 relative z-10">
            {title}
          </h3>
          <p className="text-gray-400 mt-2 font-mono relative z-10">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}