export default function BlazeLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <div className="absolute inset-0 bg-gradient-pink-purple rounded-xl blur-lg opacity-75"></div>
      <div className="relative bg-gradient-pink-purple rounded-xl flex items-center justify-center text-white font-black text-3xl shadow-2xl">
        B
      </div>
    </div>
  );
}

