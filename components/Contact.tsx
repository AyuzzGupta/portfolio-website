
import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="space-y-8">
        <h2 className="text-5xl font-bold leading-tight">
          Let's build <br />
          something <span className="gradient-text">exceptional</span>.
        </h2>
        <p className="text-slate-400 max-w-md">
          Interested in working together or just want to say hi? My inbox is always open.
        </p>

        <div className="space-y-6 pt-8">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all">
              <Mail className="text-cyan-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase">Email</p>
              <p className="font-bold text-lg">{RESUME_DATA.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all">
              <MapPin className="text-indigo-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase">Location</p>
              <p className="font-bold text-lg">{RESUME_DATA.location}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-8">
           {[Github, Linkedin].map((Icon, i) => (
             <a key={i} href="#" className="p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all text-slate-500 hover:text-white">
               <Icon size={24} />
             </a>
           ))}
        </div>
      </div>

      <div className="glass-card p-8 lg:p-12">
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-500 uppercase">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-500 uppercase">Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-slate-500 uppercase">Message</label>
            <textarea 
              rows={4}
              placeholder="How can I help you?"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all resize-none"
            ></textarea>
          </div>
          <button className="w-full py-5 bg-white text-slate-900 font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all active:scale-95 group">
            Send Message
            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
