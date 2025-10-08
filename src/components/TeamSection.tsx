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
    <section id="team" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="card-gradient rounded-2xl p-6 hover:scale-105 transition-transform">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-4 mx-auto"></div>
              <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
              <p className="text-purple-400 text-center mb-4 font-semibold">{member.role}</p>
              <p className="text-gray-400 text-sm text-center leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our vision of making crypto accessible to everyone.
          </p>
        </div>
      </div>
    </section>
  );
}

