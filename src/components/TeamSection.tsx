'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

export default function TeamSection() {
  const team = [
    {
      name: "Rick Schlimback",
      role: "Founder & CEO",
      description: "Blockchain pioneer with 8+ years building decentralized systems. Previously led engineering at major crypto exchanges handling $100M+ daily volume.",
      socials: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Alex Chen",
      role: "CTO & Lead Developer",
      description: "Full-stack expert with expertise in DeFi protocols. Built scalable trading systems and smart contracts audited by top security firms.",
      socials: { linkedin: "#", twitter: "#", github: "#" }
    },
    {
      name: "Sarah Martinez",
      role: "Head of Product",
      description: "UX/UI specialist with 6+ years in fintech. Designed award-winning mobile banking apps used by millions of users worldwide.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Marcus Johnson",
      role: "Head of Security",
      description: "Cybersecurity specialist with 10+ years protecting financial institutions. Expert in smart contract auditing and penetration testing.",
      socials: { linkedin: "#", github: "#" }
    },
  ];

  return (
    <section id="team" className="py-32 px-4 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-pink/5 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple/5 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <p className="text-gray-400 text-xl">
            Industry veterans from leading tech and finance companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card-dark rounded-3xl p-8 hover:scale-105 transition-all group text-center"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-pink-purple mb-6 mx-auto flex items-center justify-center text-5xl font-black text-white group-hover:scale-110 transition-transform">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-pink transition-colors">{member.name}</h3>
              <p className="text-pink font-bold mb-4 text-lg">{member.role}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{member.description}</p>
              
              <div className="flex gap-3 justify-center">
                {member.socials.linkedin && (
                  <a href={member.socials.linkedin} className="w-10 h-10 rounded-lg bg-navy-light hover:bg-gradient-pink-purple flex items-center justify-center transition-all">
                    <FiLinkedin />
                  </a>
                )}
                {member.socials.twitter && (
                  <a href={member.socials.twitter} className="w-10 h-10 rounded-lg bg-navy-light hover:bg-gradient-pink-purple flex items-center justify-center transition-all">
                    <FiTwitter />
                  </a>
                )}
                {member.socials.github && (
                  <a href={member.socials.github} className="w-10 h-10 rounded-lg bg-navy-light hover:bg-gradient-pink-purple flex items-center justify-center transition-all">
                    <FiGithub />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 card-gradient rounded-3xl max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-gray-300 text-lg mb-8">
            We're always looking for talented individuals who share our vision of making crypto accessible to everyone. Help us build the future of finance.
          </p>
          <button className="px-10 py-4 bg-gradient-pink-purple hover:opacity-90 rounded-xl font-bold text-lg transition-all transform hover:scale-105 glow-effect">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
