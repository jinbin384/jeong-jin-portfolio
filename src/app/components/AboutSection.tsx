import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "7년+", label: "제작 경력" },
  { value: "457%", label: "거래액 상승" },
  { value: "1,136%", label: "조회수 상승" },
  { value: "15+", label: "참여 프로그램" },
];

const skills = [
  "영상 기획·연출", "Premiere Pro", "Final Cut Pro X", "DaVinci Resolve",
  "숏폼 제작", "라이브 커머스", "유튜브 운영", "AI 영상 제작",
  "Photoshop", "Illustrator", "After Effects", "브랜드 마케팅",
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-32 md:py-40">
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
            01 /
          </span>
          <span className="w-12 h-px bg-border" />
          <span
            className="text-muted-foreground tracking-[0.3em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            ABOUT
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.25,
                fontWeight: 700,
              }}
              className="text-foreground mb-8"
            >
              나무의 그늘처럼,<br />
              <span style={{ fontStyle: "italic", color: "var(--primary)" }}>
                쉼과 위로를 주는 콘텐츠
              </span>를<br />
              만들고 싶습니다.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="space-y-5 text-muted-foreground leading-relaxed"
            >
              <p>
                안녕하세요, 7년 차 영상 PD <strong className="text-foreground">정진</strong>입니다.
                KBS, MBC, tvN, JTBC 등 공중파 방송사 조연출로 기본기를 쌓은 뒤, 유튜브·OTT 웹예능 PD로 1인 제작 역량을 키웠습니다.
              </p>
              <p>
                현재는 인하우스 콘텐츠팀 팀장으로서 숏폼 마케팅 시스템을 구축하고, AI 프로그램을 적극 활용해
                <strong className="text-foreground"> 거래액 457%, 조회수 1,136% 상승</strong>이라는 실질적인 성과를 만들어냈습니다.
              </p>
              <p>
                기획부터 촬영, 편집, 종편, 유튜브 업로드까지 — 콘텐츠 제작의 모든 과정을 혼자 수행할 수 있는
                Full-Stack 크리에이터입니다.
              </p>
            </motion.div>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em" }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: image + stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative overflow-hidden bg-card"
            >
              <img
                src="https://images.unsplash.com/photo-1492619193369-af2352531443?w=800&h=560&fit=crop&auto=format"
                alt="Video editing workspace"
                className="w-full h-72 md:h-80 object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              {/* Quote overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <p
                  className="text-foreground/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "0.9rem" }}
                >
                  "공중파(tvN, JTBC) → 웹예능 PD → 인하우스 팀장"
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-px bg-border"
            >
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-background px-6 py-6 group hover:bg-card transition-colors">
                  <div
                    className="text-primary group-hover:text-foreground transition-colors mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.9rem",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
