import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Play } from "lucide-react";

type ProjectLink = { label: string; href: string };

type Project = {
  title: string;
  period: string;
  platform: string;
  role: string;
  genre: string;
  description: string;
  links: ProjectLink[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "연애법정 시즌 1·2",
    period: "2022.05 — 2022.10",
    platform: "OTT 바바요 · YouTube",
    role: "전담 PD",
    genre: "예능 토크쇼",
    description:
      "연애 고민을 법정 포맷으로 판결하는 웹예능. 기획 회의부터 촬영·편집·종편·자막까지 전 과정 전담.",
    links: [
      { label: "시즌1 10회", href: "https://youtu.be/VaGgg3wmpwM" },
      { label: "시즌1 13회", href: "https://youtu.be/mMQIhTpvGT4" },
      { label: "시즌1 15회", href: "https://youtu.be/gcpQKKnp9Qk" },
      { label: "시즌1 19회", href: "https://youtu.be/mwWWcGTlo4k" },
      { label: "시즌1 20회", href: "https://youtu.be/UZ_RbAihOao" },
      { label: "시즌2 1회", href: "https://youtu.be/N4N3zeztbk" },
      { label: "시즌2 3회", href: "https://youtu.be/-7JReEJjGMU" },
    ],
    featured: true,
  },
  {
    title: "세토리 펫토리아",
    period: "2024.12 — 2025.08",
    platform: "YouTube · 네이버 · 쿠팡",
    role: "콘텐츠팀 대리 (팀장)",
    genre: "숏폼 · 라이브 커머스",
    description:
      "반려동물 브랜드 채널 콘텐츠 총괄. 숏폼 47개 기획·제작으로 거래액 457%·시청수 1,136% 상승.",
    links: [
      { label: "YouTube 채널", href: "https://youtube.com/@petoriakorea7233?si=2wvBzhCKTyLuv420" },
    ],
    featured: true,
  },
  {
    title: "애프터마스크",
    period: "2023.02 — 2023.03",
    platform: "YouTube",
    role: "서브 PD",
    genre: "뷰티 예능",
    description:
      "피부 MBTI별 맞춤 뷰티 솔루션 콘텐츠. 기획 단계부터 투입, 촬영·편집·종편·썸네일·숏츠 제작, YouTube 업로드 전담.",
    links: [
      { label: "본편 1회", href: "https://youtu.be/u9TjghA2ReY" },
      { label: "본편 2회", href: "https://youtu.be/QiND2uYcnw" },
      { label: "본편 3회", href: "https://youtu.be/s-v8kfteCiA" },
    ],
  },
  {
    title: "하쿠나마타타",
    period: "2022.03 — 2022.05",
    platform: "YouTube",
    role: "편집 PD",
    genre: "웹예능",
    description:
      "YouTube 웹예능 편집 PD. 방송 1회 분량 편집 및 종편 전담.",
    links: [
      { label: "1회", href: "https://youtu.be/gNsxe3IvRDs" },
      { label: "5회", href: "https://youtu.be/Suo226sXVyl" },
    ],
  },
  {
    title: "만신포차",
    period: "2021.10 — 2022.02",
    platform: "YouTube",
    role: "입봉 PD",
    genre: "예능 토크쇼",
    description:
      "무속인이 운영하는 포차 콘셉트의 예능 토크쇼. PD 입봉작으로 기획·촬영·편집·종편 전 과정 담당.",
    links: [
      { label: "27회", href: "https://youtu.be/Le7Pjr7u-Ng" },
      { label: "28회", href: "https://youtu.be/JvWl8wk-Ai0" },
      { label: "29회", href: "https://youtu.be/0SlDK-SeyqQ" },
      { label: "30회", href: "https://youtu.be/IWS0nfBwbcE" },
    ],
  },
  {
    title: "JTBC 지킬박사와 가이드",
    period: "2023.12 — 2024.01",
    platform: "JTBC",
    role: "서브 PD",
    genre: "교양 토크쇼",
    description:
      "JTBC 교양 토크쇼. 기획·촬영 세팅, 방송 20분 분량 편집 및 종편 담당.",
    links: [],
  },
];

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.08 }}
      className={`border border-border bg-card hover:border-primary/30 transition-all duration-300 flex flex-col ${
        project.featured ? "md:col-span-1" : ""
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap gap-2">
            <span
              className="px-2 py-0.5 bg-secondary text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em" }}
            >
              {project.platform}
            </span>
            <span
              className="px-2 py-0.5 bg-secondary text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em" }}
            >
              {project.genre}
            </span>
          </div>
          {project.featured && (
            <span
              className="px-2 py-0.5 border border-primary/40 text-primary shrink-0"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em" }}
            >
              FEATURED
            </span>
          )}
        </div>

        <h3
          style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, lineHeight: 1.2 }}
          className="text-foreground mb-1"
        >
          {project.title}
        </h3>

        <div className="flex items-center gap-3">
          <span
            className="text-primary"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            {project.role}
          </span>
          <span className="w-px h-3 bg-border" />
          <span
            className="text-muted-foreground"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            {project.period}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex-1">
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Links */}
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em" }}
              >
                <Play size={9} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function ProjectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-6"
        >
          <span
            className="text-primary tracking-[0.4em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            03 /
          </span>
          <span className="w-12 h-px bg-border" />
          <span
            className="text-muted-foreground tracking-[0.3em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            PROJECTS
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
          className="text-foreground mb-4 max-w-2xl"
        >
          직접 만든<br />
          <span style={{ fontStyle: "italic", color: "var(--primary)" }}>작업물</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground mb-16 max-w-xl leading-relaxed"
        >
          기획부터 편집, 업로드까지 직접 참여한 프로젝트들입니다. 링크를 통해 실제 영상을 확인하실 수 있습니다.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} inView={inView} />
          ))}
        </div>

        {/* Portfolio link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://drive.google.com/file/d/1VVobjBgQs_DhpwkXj37iRi4k7-T1G8Ge/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
          >
            <ExternalLink size={14} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em" }}>
              전체 포트폴리오 보기 (PDF)
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
