import { useState } from 'react';
import { ExternalLink, Award, Sparkles } from 'lucide-react';
import Reveal from './Reveal';
import certificatesData from '../config/certificates.json';

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract unique filters based on tags
  const allTags = new Set(['All']);
  certificatesData.forEach(cert => {
    if (cert.tags) {
      cert.tags.forEach(tag => allTags.add(tag));
    }
  });
  const filters = Array.from(allTags);

  // Sort and filter logic
  const filteredCertificates = certificatesData.filter(cert => {
    if (activeFilter === 'All') return true;
    return cert.tags && cert.tags.includes(activeFilter);
  });

  const sortedCertificates = [...filteredCertificates].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date) - new Date(a.date);
  });

  // Format date helper: "2025-08-11" -> "Aug 2025"
  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.05] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl text-left">
              <div className="text-accent font-display text-xs font-semibold tracking-widest uppercase mb-3">Certifications</div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
                Verified Credentials
              </h2>
              <p className="text-[#64748b] mt-4 font-sans text-base">
                A dynamically managed catalog of academic certificates, corporate achievements, and technical course completions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-display text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-[#020205] shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                  : 'bg-white/5 text-[#94a3b8] hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Certificate Card Horizontal Scroll Container */}
        <Reveal delay={200}>
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory">
            {sortedCertificates.map((cert, index) => (
              <div 
                key={index}
                className={`min-w-[280px] md:min-w-[320px] snap-center shrink-0 p-6 rounded-2xl border bg-[#07080f]/50 backdrop-blur-sm flex flex-col justify-between h-64 transition-all duration-300 relative group overflow-hidden ${
                  cert.pinned 
                    ? 'border-accent/20 hover:border-accent/40 shadow-[0_0_15px_rgba(56,189,248,0.05)]' 
                    : 'border-white/5 hover:border-accent/20'
                }`}
              >
                {/* Star background for pinned certificates */}
                {cert.pinned && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Header indicators */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-accent">
                      <Award size={18} />
                    </div>
                    {cert.pinned && (
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-accent/10 border border-accent/20 text-accent font-display text-[9px] font-semibold uppercase tracking-wider">
                        <Sparkles size={8} />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Title and Issuer */}
                  <h3 className="font-display font-semibold text-base text-white line-clamp-2 mb-2 group-hover:text-accent transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#94a3b8] font-sans line-clamp-1 mb-2">
                    {cert.issuer}
                  </p>
                </div>

                {/* Date and CTA link */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-4">
                  <span className="text-[10px] text-[#64748b] font-display uppercase tracking-widest">
                    {formatDate(cert.date)}
                  </span>
                  
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-display font-semibold uppercase tracking-wider text-white hover:text-accent transition-colors duration-200"
                  >
                    <span>View Cert</span>
                    <ExternalLink size={12} className="opacity-80" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
