import { useState } from 'react';
import { 
  ExternalLink, 
  Award, 
  Sparkles, 
  Clock, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Trophy, 
  Briefcase 
} from 'lucide-react';
import Reveal from './Reveal';
import certificatesData from '../config/certificates.json';

// Icon resolver helper based on item icon or category
const getCertIcon = (iconType) => {
  switch (iconType) {
    case 'cloud':
      return <Cloud size={18} />;
    case 'ai':
      return <Sparkles size={18} />;
    case 'code':
      return <Code2 size={18} />;
    case 'shield':
      return <ShieldCheck size={18} />;
    case 'trophy':
      return <Trophy size={18} />;
    case 'briefcase':
      return <Briefcase size={18} />;
    default:
      return <Award size={18} />;
  }
};

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Predefined clean filter list matching modern portfolio standards
  const filterCategories = [
    'All',
    'Highlights',
    'AI & ML',
    'Web Development',
    'Cloud',
    'Cybersecurity',
    'Internship',
    'Competitions'
  ];

  // Filtering logic
  const filteredCertificates = certificatesData.filter(cert => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Highlights') {
      return cert.pinned || cert.tags?.includes('Highlights');
    }
    return cert.tags && cert.tags.includes(activeFilter);
  });

  // Sort: pinned first, then by date order
  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl text-left">
              <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">Certifications</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Verified Credentials
              </h2>
              <p className="text-[#94a3b8] mt-3 font-sans text-base leading-relaxed">
                A verified catalog of professional internships, industry accreditations, and technical engineering credentials.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal delay={100}>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {filterCategories.map(filter => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full font-display text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-accent text-[#020205] shadow-[0_0_16px_rgba(56,189,248,0.35)] scale-105'
                      : 'bg-[#07080f]/80 text-[#94a3b8] hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* High-Readability 3-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCertificates.map((cert, index) => {
            const isHighlighted = cert.pinned || cert.tags?.includes('Highlights');

            return (
              <Reveal key={`${cert.title}-${index}`} delay={(index % 6) * 75}>
                <div 
                  className={`group relative p-6 rounded-2xl border bg-[#07080f]/75 hover:bg-[#0a0f1d]/90 backdrop-blur-md flex flex-col justify-between h-full transition-all duration-300 text-left ${
                    isHighlighted 
                      ? 'border-accent/25 hover:border-accent/50 shadow-[0_0_20px_rgba(56,189,248,0.06)] hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]' 
                      : 'border-white/10 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                  } hover:-translate-y-1`}
                >
                  {/* Subtle top glow for highlighted cards */}
                  {isHighlighted && (
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/15 transition-all duration-300" />
                  )}

                  {/* Card Content Area */}
                  <div>
                    {/* Top Row: Icon + Badges */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      {/* Left: Category Icon Container */}
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                        {getCertIcon(cert.icon)}
                      </div>

                      {/* Right: Badges (Highlight + Date) */}
                      <div className="flex items-center gap-2">
                        {isHighlighted && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-display font-bold tracking-wider text-accent border border-accent/30 bg-accent/10 uppercase">
                            Highlight
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium text-[#94a3b8] bg-white/5 border border-white/10 shrink-0">
                          {cert.date}
                        </span>
                      </div>
                    </div>

                    {/* Issuer / Provider */}
                    <div className="text-accent font-display text-xs font-semibold tracking-wide uppercase mb-1.5">
                      {cert.issuer}
                    </div>

                    {/* Certificate Title */}
                    <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-accent transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                      {cert.title}
                    </h3>

                    {/* Informative Description */}
                    <p className="font-sans text-sm text-[#94a3b8] group-hover:text-slate-300 transition-colors duration-200 leading-relaxed line-clamp-3 mb-5">
                      {cert.description}
                    </p>
                  </div>

                  {/* Bottom Row: Metadata & View Action */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                    {/* Credential ID or Primary Tag */}
                    <div>
                      {cert.credentialId ? (
                        <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">
                          {cert.credentialId}
                        </span>
                      ) : (
                        <span className="text-[11px] font-display uppercase tracking-wider text-[#64748b]">
                          {cert.tags?.find(t => t !== 'Highlights') || 'Certified'}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Link */}
                    {cert.comingSoon ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-display font-semibold uppercase tracking-wider text-[#64748b] cursor-not-allowed select-none">
                        <Clock size={13} className="opacity-60" />
                        <span>In Progress</span>
                      </span>
                    ) : (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-white group-hover:text-accent transition-colors duration-200 hover:underline"
                      >
                        <span>View details</span>
                        <ExternalLink size={13} className="text-accent" />
                      </a>
                    )}
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
