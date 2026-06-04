import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1565656531915-4947b78955c3?w=1920&h=1080&fit=crop&auto=format"
          alt="Silhouette of woman holding video camera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/20" />
        <div className="absolute inset-0 bg-background/30" />
        {/* Film grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full pb-16 md:pb-24">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-primary" />
          <span
            className="text-[11px] tracking-[0.45em] text-primary uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            7년차 PD · 콘텐츠 크리에이터 · 올라운드 플레이어
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4.5rem, 13vw, 11rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            fontWeight: 900,
          }}
          className="text-foreground mb-8"
        >
          정진
        </motion.h1>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
            className="text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed"
          >
            쉼과 위로, 그리고 힘을 주는<br />콘텐츠를 만드는 사람
          </p>

          <div className="flex gap-3">
            <button
              onClick={() =>
                document.getElementById("career")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3 bg-primary text-primary-foreground hover:bg-primary/85 transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em" }}
            >
              나의 경력 →
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3 border border-foreground/20 text-foreground hover:border-foreground/50 transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em" }}
            >
              연락하기
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-3">
        <span
          className="text-muted-foreground tracking-widest"
          style={{ fontFamily: "var(--font-mono)", fontSize: "10px", writingMode: "vertical-rl" }}
        >
          SCROLL DOWN
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
}
