export default function TeamSection() {
  const team = [
    {
      name: "Rick Schlimback",
      role: "Founder & CEO",
      description: "Blockchain pioneer with 8+ years building decentralized systems. Previously led engineering at major crypto exchanges.",
    },
    {
      name: "Alex Chen",
      role: "CTO & Lead Developer",
      description: "Full-stack wizard with expertise in DeFi protocols. Built scalable trading systems handling $100M+ daily volume.",
    },
    {
      name: "Sarah Martinez",
      role: "Head of Product",
      description: "UX/UI expert with 6+ years in fintech. Designed award-winning mobile banking apps used by millions.",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Security",
      description: "Cybersecurity specialist with 10+ years protecting financial institutions. Expert in smart contract auditing.",
    },
  ];

  return (
    <section id="team" className="py-32 px-4 bg-navy-dark relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-400 text-xl">
            Built by experienced professionals from leading tech companies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="card-dark rounded-3xl p-8 hover:scale-105 transition-all group text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-pink-purple mb-6 mx-auto flex items-center justify-center text-5xl font-black text-white">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-pink transition-colors">{member.name}</h3>
              <p className="text-pink font-bold mb-4 text-lg">{member.role}</p>
              <p className="text-gray-400 leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 p-12 card-gradient rounded-3xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-gray-300 text-lg mb-8">
            We're always looking for talented individuals who share our vision of making crypto accessible to everyone.
          </p>
          <button className="px-10 py-4 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-lg transition-all transform hover:scale-105 glow-effect">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}
