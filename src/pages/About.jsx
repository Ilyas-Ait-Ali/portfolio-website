import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import about from "../i18n/about";
import { Link } from "react-router-dom";

export default function About() {
  const { lang } = useLang();
  const t = about[lang];

  return (
    <motion.section
      className="min-h-screen px-6 pt-24 pb-16 bg-slate-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="relative">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[980px] h-[980px] rounded-full bg-blue-500/12 blur-3xl dark:bg-blue-400/10" />
        <div className="pointer-events-none absolute top-40 left-10 w-[520px] h-[520px] rounded-full bg-indigo-500/8 blur-3xl dark:bg-indigo-400/10" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.35)_1px,transparent_1px)] [background-size:18px_18px]" />

        <Content t={t} />
      </div>
    </motion.section>
  );
}

function Content({ t }) {
  const { lang } = useLang();
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);

  const handleActivate = (idx) => setActiveIndex(idx);
  const handleDeactivate = () => setActiveIndex(null);

  const handleFocusCard = (idx) => {
    setActiveIndex(idx);
    const el = cardRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`about-hero-${lang}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {t.heading}
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.intro}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mb-10">
        <CareerTimelineMap
          t={t}
          items={t.experience}
          activeIndex={activeIndex}
          onActivate={handleActivate}
          onDeactivate={handleDeactivate}
          onFocusCard={handleFocusCard}
        />
      </div>

      <div className="flex items-center gap-3 mb-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.h2
            key={`exp-title-${lang}`}
            className="text-2xl md:text-3xl font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {t.experienceTitle}
          </motion.h2>
        </AnimatePresence>
        <div className="flex-1 h-px bg-slate-200 dark:bg-gray-700" />
      </div>

      <ExperienceTimeline
        items={t.experience}
        activeIndex={activeIndex}
        onActivate={handleActivate}
        onDeactivate={handleDeactivate}
        cardRefs={cardRefs}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`cta-${lang}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-14 flex justify-center"
        >
          <Link
            to="/projects"
            className="
              inline-flex items-center justify-center
              px-6 py-3 rounded-xl
              bg-blue-600 text-white hover:bg-blue-700
              shadow-[0_14px_28px_rgba(37,99,235,0.18)]
              hover:shadow-[0_16px_34px_rgba(37,99,235,0.22)]
              dark:shadow-none
              transition
              whitespace-nowrap
            "
          >
            {t.viewProjects}
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function getCompanyLogo(company) {
  if (!company) return null;
  const c = company.toLowerCase();

  if (c.includes("deloitte")) return "/logos/deloitte.jpg";
  if (
    c.includes("transportation safety board") ||
    c.includes("sécurité des transports")
  ) {
    return "/logos/tsb.jpg";
  }
  if (
    c.includes("university of ottawa") ||
    c.includes("université d’ottawa") ||
    c.includes("université d'ottawa")
  ) {
    return "/logos/uottawa.jpg";
  }

  return null;
}

function getCompanyInitials(company) {
  if (!company) return "";
  return company
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 3)
    .join("")
    .toUpperCase();
}

function monthIndex(year, month) {
  return year * 12 + (month - 1);
}

function buildMonthRange(startYear, startMonth, endYear, endMonth) {
  const months = [];
  let y = startYear;
  let m = startMonth;

  while (y < endYear || (y === endYear && m <= endMonth)) {
    months.push({ year: y, month: m });
    m += 1;
    if (m === 13) {
      m = 1;
      y += 1;
    }
  }

  return months;
}

function getMonthLabel(month, lang) {
  const en = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const fr = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  return lang === "fr" ? fr[month - 1] : en[month - 1];
}

function getRoleShortLabel(job, lang) {
  const company = job.company;
  const role = job.role;

  if (company.includes("Deloitte")) {
    return "Deloitte";
  }

  if (
    company.includes("Transportation Safety Board") ||
    company.includes("Bureau de la sécurité des transports")
  ) {
    return lang === "fr" ? "BST" : "TSB";
  }

  if (
    role.includes("Teaching Assistant") ||
    role.includes("Assistant d’enseignement")
  ) {
    return "TA Python";
  }

  if (
    role.includes("Software Developer") ||
    role.includes("Développeur logiciel")
  ) {
    return lang === "fr" ? "Dev UO" : "UO Dev";
  }

  return company;
}

function getTimelineEnd(job) {
  const now = new Date();

  if (job.timeline.end === "present") {
    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
    };
  }

  return job.timeline.end;
}

function getDurationInMonths(job) {
  const start = job.timeline.start;
  const end = getTimelineEnd(job);

  return (end.year - start.year) * 12 + (end.month - start.month) + 1;
}

function formatDurationLength(months, lang) {
  if (lang === "fr") {
    return months === 1 ? "1 mois" : `${months} mois`;
  }

  return months === 1 ? "1 month" : `${months} months`;
}

function CareerTimelineMap({
  t,
  items,
  activeIndex,
  onActivate,
  onDeactivate,
  onFocusCard,
}) {
  const { lang } = useLang();

  const now = new Date();
  const endYear = now.getFullYear();
  const endMonth = now.getMonth() + 1;
  const currentMonthIdx = monthIndex(endYear, endMonth);

  const months = useMemo(
    () => buildMonthRange(2024, 1, endYear, endMonth),
    [endYear, endMonth]
  );

  const years = months.reduce((acc, month) => {
    const existing = acc.find((y) => y.year === month.year);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ year: month.year, count: 1 });
    }
    return acc;
  }, []);

  const currentCol = months.findIndex(
    (m) => monthIndex(m.year, m.month) === currentMonthIdx
  );

  return (
    <div
      className="
        rounded-2xl overflow-hidden
        border border-slate-200/80 dark:border-gray-700/70
        bg-white/70 dark:bg-gray-900/60
        supports-[backdrop-filter]:backdrop-blur
        shadow-[0_16px_40px_rgba(0,0,0,0.08)]
        dark:shadow-none
      "
    >
      <div className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />

      <div className="p-5">
        <div className="mb-5 flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t.timelineTitle}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {t.timelineSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200">
                {t.timelineLegendActive}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 dark:bg-gray-800 dark:text-gray-300">
                {t.timelineLegendInactive}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">
                {lang === "fr" ? "Mois actuel" : "Current month"}
              </span>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-full relative">
            <div
              className="grid gap-x-1.5 gap-y-2 items-center relative z-10"
              style={{
                gridTemplateColumns: `140px repeat(${months.length}, minmax(0, 1fr))`,
              }}
            >
              <div />

              {years.map((year) => (
                <div
                  key={year.year}
                  className="text-center text-xs font-semibold text-gray-600 dark:text-gray-400"
                  style={{ gridColumn: `span ${year.count} / span ${year.count}` }}
                >
                  {year.year}
                </div>
              ))}

              <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {t.monthsLabel}
              </div>

              {months.map((month) => {
                const isCurrent =
                  month.year === now.getFullYear() &&
                  month.month === now.getMonth() + 1;

                return (
                  <div
                    key={`${month.year}-${month.month}`}
                    className={`
                      text-center text-[10px] font-medium
                      ${isCurrent
                        ? "text-blue-700 dark:text-blue-300"
                        : "text-gray-400 dark:text-gray-500"}
                    `}
                  >
                    {getMonthLabel(month.month, lang)}
                  </div>
                );
              })}

              {items.map((job, idx) => {
                const start = monthIndex(job.timeline.start.year, job.timeline.start.month);
                const end =
                  job.timeline.end === "present"
                    ? monthIndex(endYear, endMonth)
                    : monthIndex(job.timeline.end.year, job.timeline.end.month);

                return (
                  <FragmentRow
                    key={`${job.role}-${idx}`}
                    job={job}
                    idx={idx}
                    months={months}
                    start={start}
                    end={end}
                    lang={lang}
                    isActive={activeIndex === idx}
                    onActivate={() => onActivate(idx)}
                    onDeactivate={onDeactivate}
                    onClick={() => onFocusCard(idx)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FragmentRow({
  job,
  idx,
  months,
  start,
  end,
  lang,
  isActive,
  onActivate,
  onDeactivate,
  onClick,
}) {
  const colors = [
    "bg-blue-500/85 dark:bg-blue-500/80",
    "bg-indigo-500/85 dark:bg-indigo-500/80",
    "bg-cyan-500/85 dark:bg-cyan-500/80",
    "bg-sky-500/85 dark:bg-sky-500/80",
    "bg-violet-500/85 dark:bg-violet-500/80",
    "bg-emerald-500/85 dark:bg-emerald-500/80",
  ];

  const color = colors[idx % colors.length];

  return (
    <>
      <button
        type="button"
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        onClick={onClick}
        className={`
          pr-3 text-left text-xs font-semibold truncate transition
          ${isActive
            ? "text-blue-700 dark:text-blue-300"
            : "text-gray-700 dark:text-gray-300"}
        `}
      >
        {getRoleShortLabel(job, lang)}
      </button>

      {months.map((month) => {
        const current = monthIndex(month.year, month.month);
        const active = current >= start && current <= end;
        const isStart = current === start;
        const isEnd = current === end;

        return (
          <button
            type="button"
            key={`${job.role}-${month.year}-${month.month}`}
            onMouseEnter={onActivate}
            onMouseLeave={onDeactivate}
            onFocus={onActivate}
            onBlur={onDeactivate}
            onClick={onClick}
            className={`
              relative h-8 border transition-all duration-200
              border-slate-200/60 dark:border-gray-700/60
              ${active ? color : "bg-slate-100 dark:bg-gray-800/70"}
              ${isStart ? "rounded-l-xl" : ""}
              ${isEnd ? "rounded-r-xl" : ""}
              ${!isStart && !isEnd ? "rounded-none" : ""}
              ${isActive ? "scale-y-110 shadow-md ring-2 ring-blue-400/30" : ""}
            `}
            title={`${job.role} • ${job.duration}`}
          >
            {active && isEnd && (
              <div className="absolute right-1 top-1/2 -translate-y-1/2 hidden lg:block">
                <span
                  className="
                    text-[10px] font-bold
                    text-white
                    bg-black/15
                    px-1.5 py-0.5 rounded-full
                    backdrop-blur-sm
                  "
                >
                  {getRoleShortLabel(job, lang)}
                </span>
              </div>
            )}
          </button>
        );
      })}
    </>
  );
}

function ExperienceTimeline({
  items,
  activeIndex,
  onActivate,
  onDeactivate,
  cardRefs,
}) {
  const { lang } = useLang();

  return (
    <div className="relative">
      <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/70 via-indigo-400/50 to-slate-300/60 dark:from-blue-400/70 dark:via-indigo-400/50 dark:to-gray-700" />

      <div className="space-y-14">
        {items.map((job, idx) => {
          const isActive = activeIndex === idx;

          return (
            <motion.div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="relative pl-24"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
              onMouseEnter={() => onActivate(idx)}
              onMouseLeave={onDeactivate}
            >
              <div className="absolute left-0 top-0 flex flex-col items-center w-16 md:w-[72px]">
                <div
                  className={`
                    mb-3 px-2.5 py-1 rounded-full
                    text-[11px] md:text-xs font-bold tracking-wide
                    border shadow-sm transition
                    ${isActive
                      ? "text-blue-800 bg-blue-100 border-blue-200 dark:text-blue-200 dark:bg-blue-900/40 dark:border-blue-700/50"
                      : "text-blue-700 dark:text-blue-300 bg-blue-50 border-blue-100 dark:bg-blue-900/30 dark:border-blue-700/40"}
                  `}
                >
                  {job.timeline.start.year}
                </div>

                <div
                  className={`
                    w-16 h-16 md:w-[72px] md:h-[72px] rounded-full
                    bg-white dark:bg-gray-900
                    ring-[5px] overflow-hidden
                    shadow-[0_14px_28px_rgba(0,0,0,0.10)]
                    dark:shadow-sm transition
                    ${isActive
                      ? "ring-blue-200 dark:ring-blue-500/30 scale-105"
                      : "ring-slate-50 dark:ring-gray-900"}
                  `}
                  title={job.company}
                >
                  {getCompanyLogo(job.company) ? (
                    <img
                      src={getCompanyLogo(job.company)}
                      alt={`${job.company} logo`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-base font-bold text-blue-600 dark:text-blue-400">
                        {getCompanyInitials(job.company)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`
                  group rounded-2xl overflow-hidden
                  transform-gpu will-change-transform
                  border bg-white dark:bg-gray-900/60
                  supports-[backdrop-filter]:bg-white/70
                  supports-[backdrop-filter]:dark:bg-gray-900/60
                  supports-[backdrop-filter]:backdrop-blur
                  transition-all duration-200
                  ${isActive
                    ? "border-blue-300/80 dark:border-blue-500/40 shadow-[0_20px_55px_rgba(37,99,235,0.12)]"
                    : "border-slate-200/80 dark:border-gray-700/70 shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:shadow-none hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)] dark:hover:shadow-lg"}
                `}
              >
                <div
                  className={`
                    h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-opacity
                    ${isActive ? "opacity-100" : "opacity-90 group-hover:opacity-100"}
                  `}
                />

                <div className="px-6 md:px-7 py-6">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`exp-content-${lang}-${idx}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="transform-gpu will-change-transform"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                            {job.role}
                          </h3>

                          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                            {job.company}
                          </p>

                          {job.type && (
                            <span
                              className="
                                inline-block mt-2
                                text-xs md:text-sm font-semibold
                                text-blue-700 dark:text-blue-300
                                bg-blue-50 border border-blue-100
                                dark:bg-blue-900/30 dark:border-blue-700/40
                                px-3 py-1 rounded-full
                              "
                            >
                              {job.type}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                          <span
                            className="
                              text-sm font-semibold
                              text-gray-800 dark:text-gray-200
                              bg-gray-100 dark:bg-gray-800
                              px-3 py-1.5 rounded-full
                            "
                          >
                            {job.duration}
                          </span>

                          <span
                            className="
                              text-xs md:text-sm font-medium
                              text-slate-600 dark:text-slate-300
                              bg-slate-100 dark:bg-slate-800
                              px-3 py-1 rounded-full
                              w-fit
                            "
                          >
                            {formatDurationLength(getDurationInMonths(job), lang)}
                          </span>

                          {job.terms?.length > 0 && (
                            <div className="flex flex-col items-start md:items-end gap-2 mt-2">
                              {job.terms.map((term, i) => (
                                <span
                                  key={i}
                                  className="
                                    text-sm font-semibold
                                    text-gray-800 dark:text-gray-200
                                    bg-gray-100 dark:bg-gray-800
                                    px-3 py-1.5 rounded-full
                                    w-fit
                                  "
                                >
                                  {term}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {job.tech?.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {job.tech.map((tech, i) => (
                            <span
                              key={i}
                              className={`
                                px-3 py-1 rounded-full text-xs md:text-sm font-medium
                                border transition
                                ${isActive
                                  ? "bg-blue-100 text-blue-900 border-blue-200 dark:bg-blue-500/90 dark:text-white dark:border-blue-400/40"
                                  : "bg-blue-50 text-blue-900 border-blue-100/80 dark:bg-blue-600/80 dark:text-white dark:border-blue-500/30"}
                              `}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}