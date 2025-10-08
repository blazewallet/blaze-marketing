export default function BlazeLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg blur-md opacity-75"></div>
      <div className="relative bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-lg">
        B
      </div>
    </div>
  );
}

