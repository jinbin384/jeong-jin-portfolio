import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone } from "lucide-react";
import profilePhoto from "../../assets/profile.jpg";

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [copied, setCopied] = useState(false);

  const email = "wjdwls44@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={ref} className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-16"
        >
          <span
            className="text-primary tracking-[0.4em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            04 /
          </span>
          <span className="w-12 h-px bg-border" />
          <span
            className="text-muted-foreground tracking-[0.3em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            CONTACT
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,24rem)_1fr] gap-12 lg:gap-20 items-center">
          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full max-w-sm"
          >
            <div className="border border-border p-2">
              <img
                src={profilePhoto}
                alt="정진 프로필 사진"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right: text + contacts */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
              className="text-foreground mb-6"
            >
              함께 좋은<br />
              <span style={{ fontStyle: "italic", color: "var(--primary)" }}>콘텐츠를 만들어요</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-muted-foreground leading-relaxed mb-10 max-w-md"
            >
              영상 기획·연출·편집, 숏폼 마케팅, 라이브 커머스, AI 콘텐츠 제작 등
              어떤 협업이든 편하게 연락주세요.
            </motion.p>

            {/* Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.95rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {email}
                </span>
                <span
                  className={`text-[10px] tracking-widest transition-all ${
                    copied ? "opacity-100 text-primary" : "opacity-0 group-hover:opacity-60"
                  }`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {copied ? "COPIED!" : "COPY"}
                </span>
              </button>
              <div className="mt-2 h-px bg-foreground/10 max-w-xs" />
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-6"
            >
              <a
                href="tel:01071309384"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem", letterSpacing: "0.05em" }}>
                  010-7130-9384
                </span>
              </a>
              <div className="mt-2 h-px bg-foreground/10 max-w-xs" />
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <span
            className="text-muted-foreground"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em" }}
          >
            © 2026 JEONG JIN. ALL RIGHTS RESERVED.
          </span>
          <span
            className="text-muted-foreground/50"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em" }}
          >
            7YR PD · CONTENT CREATOR · SUWON, KOREA
          </span>
        </motion.div>
      </div>
    </section>
  );
}
