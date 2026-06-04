import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, Film, Tv, Youtube } from "lucide-react";

type Metric = {
  label: string;
  value: string;
  sub?: string;
  trend?: "up" | "neutral";
};

const entries = [
  {
    period: "2026.03 — 현재",
    company: "밀스턴",
    role: "콘텐츠팀 대리 (팀장)",
    type: "인하우스",
    icon: TrendingUp,
    contribution: 80,
    description:
      "숏폼 마케팅 체계 구축 및 팀 총괄. AI 프로그램(ChatGPT, Sora, KlingAI, Runway)을 활용한 영상·음원 제작, 팀원 영상 컨펌, 오즈모 포켓3 직접 촬영 등 콘텐츠 전 과정 담당.",
    tags: ["숏폼 마케팅", "AI 영상 제작", "팀 리드", "영상 촬영"],
    highlight: "숏폼 시스템 구축 및 전사 마케팅 최적화 주도",
    metrics: [
      { label: "기획·촬영·편집", value: "100%", sub: "전 과정 1인 담당", trend: "neutral" },
      { label: "역할", value: "팀장", sub: "콘텐츠팀 총괄" },
      { label: "활용 AI 툴", value: "6종+", sub: "Sora·KlingAI·Runway 등" },
    ] as Metric[],
  },
  {
    period: "2024.12 — 2025.08",
    company: "세토리 (펫토리아)",
    role: "콘텐츠팀 대리 (팀장)",
    type: "인하우스",
    icon: TrendingUp,
    contribution: 90,
    description:
      "채널별 타깃 맞춤 숏폼 50여 개 기획·제작. 네이버·쿠팡 쇼츠 광고 운영, 매달 2회 정기 라이브 커머스(네이버, 쿠팡) 기획·송출 관리. 펫 제품 사진 촬영 및 상세페이지 콘텐츠 제작.",
    tags: ["숏폼", "라이브 커머스", "제품 촬영", "광고 운영"],
    highlight: "네이버 쇼츠 광고 · 쿠팡 쇼츠 광고 · 라이브 커머스 전담",
    metrics: [
      { label: "제작 숏폼", value: "47개", sub: "기획~업로드 1인 전담", trend: "neutral" },
      { label: "누적 시청수", value: "81,408명", sub: "전월比 +1,136%", trend: "up" },
      { label: "누적 거래액", value: "364만원", sub: "전월比 +457%", trend: "up" },
      { label: "쿠팡 최고 조회수", value: "947,155회", sub: "단일 영상 최고 기록", trend: "up" },
    ] as Metric[],
  },
  {
    period: "2023.07 — 2024.10",
    company: "이투미디어",
    role: "서브 PD (프리랜서)",
    type: "프리랜서",
    icon: Tv,
    contribution: 50,
    description:
      "JTBC '지킬박사와 가이드' 편집·종편 PD 전담. 방영분 전체 편집 및 종편 책임.",
    tags: ["JTBC", "편집·종편"],
    highlight: "JTBC '지킬박사와 가이드' 편집·종편 전담",
    metrics: [
      { label: "담당 방송사", value: "JTBC" },
      { label: "담당 역할", value: "편집·종편", sub: "방영분 전체 편집 책임" },
    ] as Metric[],
  },
  {
    period: "2022.05 — 2022.10",
    company: "링가링",
    role: "PD (정규직)",
    type: "정규직",
    icon: Youtube,
    contribution: 70,
    contributions: [
      { label: "연애법정 (담당 PD)", value: 70 },
      { label: "오마이아트·야하자 (서브 PD)", value: 30 },
    ],
    description:
      "'연애법정 시즌1·2' 담당 PD로서 기획 회의·촬영·편집·종편·자막 전담(믹싱만 감독 의뢰). '오마이아트', '야하자'는 서브 PD로 참여. OTT 바바요 플랫폼 론칭 콘텐츠 포함.",
    tags: ["기획·연출", "편집·종편·자막", "웹예능", "OTT 바바요"],
    highlight: "'연애법정 시즌1·2' 담당 PD · '오마이아트·야하자' 서브 PD",
    metrics: [
      { label: "담당 프로그램", value: "3편", sub: "연애법정·오마이아트·야하자" },
      { label: "제작 회차", value: "20회+", sub: "시즌1·2 합산" },
      { label: "단일 영상 최고 조회수", value: "6.1천회", sub: "시즌2", trend: "up" },
    ] as Metric[],
  },
  {
    period: "2021 — 2023",
    company: "유튜브·웹예능 PD (프리랜서)",
    role: "서브 PD / 전담 PD",
    type: "프리랜서",
    icon: Youtube,
    contribution: 40,
    description:
      "겜셋 'YouTube 애프터마스크' PD (연출/편집), 유라이즈 'YouTube 하쿠나마타타' 편집 PD, 아루마루미디어 '만신포차' PD 등 웹예능 기획·연출·편집·종편 전 과정 담당.",
    tags: ["YouTube PD", "기획·연출", "편집·종편", "숏츠 제작"],
    highlight: "'애프터마스크' 최고 조회 4.7만회 · '만신포차' PD 전담",
    metrics: [
      { label: "담당 프로그램", value: "3편+", sub: "전 과정 1인 제작" },
      { label: "단일 영상 최고 조회수", value: "4.7만회", sub: "애프터마스크", trend: "up" },
    ] as Metric[],
  },
  {
    period: "2019.04 — 2021.09",
    company: "공중파·케이블 방송 조연출",
    role: "조연출 (AD)",
    type: "프리랜서",
    icon: Film,
    contribution: 30,
    description:
      "tvN '그때 나는 내가 되기로 했다', JTBC '위대한 배태랑', MBC every1 '대한외국인', TV조선 '엄마의 봄날', KBS '물질은 인간에게 무엇인가', JTBC '쉘 위 치킨' 조연출. 촬영 세팅, 편집 세팅, 종편 보조, 예고 제작, 마스터 납품 담당.",
    tags: ["tvN", "JTBC", "MBC", "KBS", "TV조선"],
    highlight: "메이저 방송사 5곳, 6개 프로그램 조연출",
    metrics: [
      { label: "참여 방송사", value: "5곳", sub: "tvN·JTBC·MBC·KBS·TV조선" },
      { label: "참여 프로그램", value: "6편" },
      { label: "경력 기간", value: "2년 5개월" },
    ] as Metric[],
  },
];

const typeColors: Record<string, string> = {
  "인하우스": "text-primary border-primary/40",
  "정규직": "text-emerald-400 border-emerald-400/40",
  "방송 제작": "text-blue-400 border-blue-400/40",
  "프리랜서": "text-muted-foreground border-muted-foreground/30",
};

function ContributionBar({ value, label, inView, delay = 0.4 }: { value: number; label?: string; inView: boolean; delay?: number }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="text-muted-foreground shrink-0 w-36"
        style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em" }}
      >
        {label ?? "기여도"}
      </span>
      <div className="flex-1 h-px bg-border relative max-w-[200px]">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
          className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-primary"
        />
      </div>
      <span
        className="text-primary shrink-0"
        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 500 }}
      >
        {value}%
      </span>
    </div>
  );
}

function ContributionSection({ contributions, inView }: { contributions: { label: string; value: number }[]; inView: boolean }) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      {contributions.map((c, i) => (
        <ContributionBar key={c.label} value={c.value} label={c.label} inView={inView} delay={0.4 + i * 0.15} />
      ))}
    </div>
  );
}

function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="border border-border bg-background px-4 py-3 hover:border-primary/30 transition-colors">
      <div className="flex items-start justify-between gap-2">
        <div
          className="text-primary"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.2rem",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          {metric.value}
        </div>
        {metric.trend === "up" && (
          <TrendingUp size={11} className="text-primary mt-0.5 shrink-0" />
        )}
      </div>
      <div
        className="text-muted-foreground mt-1"
        style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.08em" }}
      >
        {metric.label}
      </div>
      {metric.sub && (
        <div
          className="text-muted-foreground/50 mt-0.5"
          style={{ fontFamily: "var(--font-mono)", fontSize: "9px" }}
        >
          {metric.sub}
        </div>
      )}
    </div>
  );
}

function CareerEntry({
  entry,
  index,
  inView,
}: {
  entry: (typeof entries)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
      className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-b border-border hover:border-border/60 transition-colors cursor-default"
    >
      {/* Left: period + type */}
      <div className="md:pt-1 space-y-2">
        <span
          className="block text-primary"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.08em" }}
        >
          {entry.period}
        </span>
        <span
          className={`inline-block px-2 py-0.5 border text-[10px] tracking-widest ${typeColors[entry.type]}`}
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {entry.type.toUpperCase()}
        </span>
      </div>

      {/* Right: content */}
      <div>
        {/* Title */}
        <div className="mb-4">
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
            className="text-foreground"
          >
            {entry.company}
          </h3>
          <p
            className="text-muted-foreground mt-0.5"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.15em" }}
          >
            {entry.role}
          </p>
        </div>

        {/* Contribution bar(s) */}
        {"contributions" in entry && entry.contributions ? (
          <ContributionSection contributions={entry.contributions} inView={inView} />
        ) : (
          <ContributionBar value={entry.contribution} inView={inView} />
        )}

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6 text-sm md:text-base max-w-2xl">
          {entry.description}
        </p>

        {/* Metric cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-6">
          {entry.metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        {/* Highlight */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-3 h-px bg-primary" />
          <span
            className="text-primary/80"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            {entry.highlight}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-secondary text-muted-foreground group-hover:text-foreground transition-colors"
              style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function CareerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="career" ref={ref} className="py-32 md:py-40 bg-secondary/30">
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
            02 /
          </span>
          <span className="w-12 h-px bg-border" />
          <span
            className="text-muted-foreground tracking-[0.3em]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            CAREER
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
          공중파 조연출부터<br />
          <span style={{ fontStyle: "italic", color: "var(--primary)" }}>인하우스 팀장</span>까지
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-muted-foreground mb-16 max-w-xl leading-relaxed"
        >
          tvN, JTBC, MBC 등 메이저 방송사부터 유튜브 웹예능 PD, 인하우스 브랜드 팀장까지 —
          다양한 플랫폼을 섭렵한 7년간의 압축 성장 기록입니다.
        </motion.p>

        <div className="border-t border-border">
          {entries.map((entry, index) => (
            <CareerEntry key={`${entry.company}-${index}`} entry={entry} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
