export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 relative">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/10 to-transparent -skew-x-12 rounded-sm -z-10" />
      
      <div className="flex items-center gap-4 pl-4 py-2 border-l-4 border-yellow-400">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-black italic text-white uppercase tracking-wider drop-shadow-md">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-gray-400 font-mono mt-1 tracking-wide">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}