/**
* @license
* SPDX-License-Identifier: Apache-2.0
*/

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Mail, X, Gift, Calendar, ChevronDown } from 'lucide-react';

export default function App() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  // Configuration - EDIT THESE VALUES
  const recipientName = "Bauniii"; // EDIT: Recipient's Name
  const birthDate = "June 26th"; // EDIT: Birth Date
  const yourName = "Bauna"; // EDIT: Your Name
  const birthdayMessage = "Happy Birthday to the most amazing person in the world! I hope your day is filled with as much joy and love as you bring into my life every single day. You deserve all the happiness in the universe. Let's make this year unforgettable together!"; // EDIT: Your Message

  // Generate background elements
  const [balloons, setBalloons] = useState<{ id: number; left: string; color: string; duration: string; delay: string }[]>([]);
  const [hearts, setHearts] = useState<{ id: number; left: string; emoji: string; duration: string; delay: string }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number; top: string; left: string; duration: string; delay: string }[]>([]);
  const [bubbles, setBubbles] = useState<{ id: number; left: string; size: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const balloonColors = ['#FFB6C1', '#FFC0CB', '#E6E6FA', '#FFF0F5', '#FF69B4'];
    const heartEmojis = ['❤️', '💕', '🩷', '💖', '✨', '🌹', '💌'];

    setBalloons(Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`
    })));

    setHearts(Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      duration: `${8 + Math.random() * 7}s`,
      delay: `${Math.random() * 10}s`
    })));

    setSparkles(Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`,
      delay: `${Math.random() * 5}s`
    })));

    setBubbles(Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${10 + Math.random() * 30}px`,
      duration: `${15 + Math.random() * 10}s`,
      delay: `${Math.random() * 10}s`
    })));
  }, []);

  const BirthdayDoodles = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Cake Doodle */}
      <div className="doodle top-[15%] left-[5%] w-24 h-24" style={{ animationDelay: '0s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-pink-300">
          <path d="M20 70h60v10H20zM25 50h50v20H25zM30 35h40v15H30zM45 20h10v15H45z" />
          <circle cx="50" cy="15" r="5" fill="#FF69B4" />
        </svg>
      </div>
      {/* Party Hat Doodle */}
      <div className="doodle top-[40%] right-[8%] w-20 h-20" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-pink-200">
          <path d="M50 10 L80 80 L20 80 Z" />
          <circle cx="50" cy="10" r="6" fill="#FF1493" />
          <circle cx="35" cy="70" r="3" fill="white" />
          <circle cx="65" cy="70" r="3" fill="white" />
          <circle cx="50" cy="50" r="3" fill="white" />
        </svg>
      </div>
      {/* Gift Doodle */}
      <div className="doodle bottom-[20%] left-[10%] w-16 h-16" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-pink-300">
          <rect x="20" y="40" width="60" height="40" rx="4" />
          <rect x="45" y="40" width="10" height="40" fill="#FF69B4" />
          <path d="M50 40 C30 20 40 10 50 40 C60 10 70 20 50 40" fill="#FF1493" />
        </svg>
      </div>
      {/* Star Doodle */}
      <div className="doodle top-[60%] left-[15%] w-12 h-12" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-yellow-200">
          <path d="M50 0 L61 35 L98 35 L68 57 L79 91 L50 70 L21 91 L32 57 L2 35 L39 35 Z" />
        </svg>
      </div>
      {/* Another Heart Doodle */}
      <div className="doodle bottom-[40%] right-[15%] w-14 h-14" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-pink-400">
          <path d="M50 90 C10 60 10 20 50 40 C90 20 90 60 50 90" />
        </svg>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-pink-200">
      <BirthdayDoodles />

      {/* Background Animations */}
      {balloons.map(b => (
        <div
          key={`balloon-${b.id}`}
          className="balloon"
          style={{
            left: b.left,
            backgroundColor: b.color,
            animationDuration: b.duration,
            animationDelay: b.delay
          }}
        />
      ))}

      {bubbles.map(bubble => (
        <div
          key={`bubble-${bubble.id}`}
          className="bubble"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay
          }}
        />
      ))}

      {hearts.map(h => (
        <div
          key={`heart-${h.id}`}
          className="heart-particle"
          style={{
            left: h.left,
            animationDuration: h.duration,
            animationDelay: h.delay
          }}
        >
          {h.emoji}
        </div>
      ))}

      {sparkles.map(s => (
        <div
          key={`sparkle-${s.id}`}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDuration: s.duration,
            animationDelay: s.delay
          }}
        />
      ))}

      {/* Header Section */}
      <header className="pt-20 pb-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-dancing text-6xl md:text-8xl font-bold text-[#FF69B4] glow-text mb-4"
        >
          Happy Birthday! 🎂
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-poppins text-[#8B4567] font-light mb-2"
        >
          {recipientName}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1 bg-white/40 backdrop-blur-sm rounded-full border border-pink-200 text-[#FF69B4] font-poppins text-sm md:text-base"
        >
          <Calendar className="w-4 h-4" />
          <span>{birthDate}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 max-w-md mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
            <img
              src="/PIC4.png"
              alt="Birthday Hero"
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 flex flex-col items-center gap-1 text-[#8B4567] font-poppins text-xs uppercase tracking-widest"
        >
          <span>Scroll Down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </header>

      {/* Image Gallery Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Photo Card 1 */}
        <motion.div
          initial={{ opacity: 0, rotate: -5 }}
          whileInView={{ opacity: 1, rotate: -2 }}
          viewport={{ once: true }}
          className="polaroid bg-white p-4 pb-12 shadow-xl rounded-sm"
        >
          <div className="aspect-square overflow-hidden mb-4">
            <img
              src="/PIC1.png"
              alt="Birthday Memory 1"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-dancing text-xl text-center text-[#8B4567]">
           You look like sunshine wrapped in a saree, and I’m the luckiest to see it
          </p>
        </motion.div>

        {/* Photo Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="polaroid bg-white p-4 pb-12 shadow-xl rounded-sm md:mt-8"
        >
          <div className="aspect-square overflow-hidden mb-4">
            <img
              src="/PIC2.png"
              alt="Birthday Memory 2"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-dancing text-xl text-center text-[#8B4567]">
           You in that green outfit = me completely in love❤️❤️.
          </p>
        </motion.div>

        {/* Photo Card 3 */}
        <motion.div
          initial={{ opacity: 0, rotate: 5 }}
          whileInView={{ opacity: 1, rotate: 2 }}
          viewport={{ once: true }}
          className="polaroid bg-white p-4 pb-12 shadow-xl rounded-sm"
        >
          <div className="aspect-square overflow-hidden mb-4">
            <img
              src="/PIC3.png"
              alt="Birthday Memory 3"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-dancing text-xl text-center text-[#8B4567]">
           I could look at you forever and still not have enough.
          </p>
        </motion.div>
      </section>

      {/* Interactive Message Box Section */}
      <section className="py-20 flex flex-col items-center px-6">
        <div className="relative group">
          <Heart className="w-12 h-12 text-[#FF1493] mb-6 pulse-heart mx-auto" fill="#FF1493" />

          {!isMessageOpen && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMessageOpen(true)}
              className="bg-[#FF69B4] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#FF1493] transition-colors flex items-center gap-2 group"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              💌 Open Your Special Message
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {isMessageOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="mt-12 max-w-2xl w-full bg-[#FFF5F7] p-8 md:p-12 rounded-3xl shadow-2xl shimmer-border relative overflow-hidden"
            >
              {/* Internal Falling Hearts */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.div
                    key={`inner-heart-${i}`}
                    initial={{ y: -20, x: Math.random() * 400 }}
                    animate={{ y: 600 }}
                    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "linear" }}
                    className="absolute text-pink-400"
                  >
                    <Heart size={16} fill="currentColor" />
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10">
                <button
                  onClick={() => setIsMessageOpen(false)}
                  className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-md text-[#8B4567] hover:text-[#FF1493] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex justify-center mb-6">
                  <Gift className="w-10 h-10 text-[#FF69B4]" />
                </div>

                <p className="font-dancing text-3xl md:text-4xl text-[#8B4567] leading-relaxed mb-8 text-center">
                  {birthdayMessage}
                </p>

                <div className="text-right">
                  <p className="font-dancing text-2xl text-[#FF69B4]">
                    With all my love,
                  </p>
                  <p className="font-dancing text-3xl font-bold text-[#FF1493]">
                    {yourName} 💕
                  </p>
                </div>

                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => setIsMessageOpen(false)}
                    className="text-sm uppercase tracking-widest font-semibold text-[#8B4567] hover:text-[#FF1493] transition-colors"
                  >
                    Close Message
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer Section */}
      <footer className="py-12 text-center relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={`confetti-${i}`}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: ['#FFB6C1', '#FF69B4', '#FF1493', '#FFFFFF', '#E6E6FA'][Math.floor(Math.random() * 5)],
                animationDuration: `${3 + Math.random() * 4}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        <p className="font-poppins text-[#8B4567] opacity-70">
          Made with 💕 for Sushma
        </p>
      </footer>
    </div>
  );
}


