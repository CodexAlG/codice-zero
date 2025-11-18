export default function CategoryCard({ title, description, icon }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-all duration-200 hover:border-yellow-400 hover:shadow-lg hover:scale-[1.01] hover:shadow-2xl hover:shadow-yellow-500/20">
      <div className="text-yellow-400 drop-shadow-lg shadow-yellow-500/50">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-md shadow-yellow-500/10">
        {title}
      </h3>
      <p className="text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
}