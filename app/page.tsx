'use client';

import React from "react";
import {
  Code2,
  Wrench,
  Brain,
  Sigma,
  Globe,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Small tag component for pill badges
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-red-900/60 bg-neutral-950/80 px-2 py-0.5 text-xs text-neutral-200">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-neutral-100">
      {/* Blood-red glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-red-700/35 blur-3xl" />
        <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-red-500/30 blur-3xl" />
        <div className="absolute bottom-[-40px] right-0 h-96 w-96 rounded-full bg-red-900/45 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-red-900/70 bg-black/70">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#summary" className="font-semibold tracking-wide text-red-100">
            Sri Lakshmi Kotha • Portfolio
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
            {[
              ["Summary", "#summary"],
              ["Education", "#education"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Skills", "#skills"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="hover:text-red-400 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 text-neutral-300">
            <a
              href="https://github.com/kothasrilakshmi"
              aria-label="GitHub"
              className="p-2 rounded-xl hover:bg-red-900/40"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/srilakshmikotha/"
              aria-label="LinkedIn"
              className="p-2 rounded-xl hover:bg-red-900/40"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:lakshmikotha77@gmail.com"
              aria-label="Email"
              className="p-2 rounded-xl hover:bg-red-900/40"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section id="summary" className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-800/70 bg-neutral-950/80 px-3 py-1 text-xs text-neutral-200">
              <Globe size={14} /> Charlotte, NC · Open to roles
            </span>
            <h1 className="mt-4 text-4xl font-bold text-red-100 drop-shadow-sm">
              Sri Lakshmi Kotha
            </h1>
            <p className="mt-3 text-neutral-300 max-w-2xl">
              Data Analyst / Data Scientist with 3+ years of experience
              transforming complex financial, marketing, and research data into
              actionable insights. Skilled in Python, SQL, Snowflake, and AWS
              with hands-on expertise in Tableau and Power BI. I love turning
              data into clear, decision-ready stories using visualization and
              statistical modeling.
            </p>
            <div className="mt-5 flex gap-3">
              <Button
                asChild
                className="rounded-2xl bg-red-600 hover:bg-red-500 text-sm font-medium"
              >
                <a href="#projects">
                  <Code2 className="h-4 w-4 mr-2" />
                  View Projects
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
  {/* Red Glow Behind Image */}
  <div className="relative flex items-center justify-center">
  {/* Soft red glow behind */}
  <div className="absolute h-60 w-60 rounded-full bg-red-600/40 blur-3xl opacity-40"></div>

  {/* Circular cropped image */}
  <img
    src="/profile.jpg"
    alt="Sri Lakshmi Kotha"
    className="
      relative z-10
      h-60 w-60
      object-cover
      rounded-full
      shadow-[0_0_25px_rgba(255,0,0,0.5)]
      border border-red-500/40
    "
    style={{ objectPosition: "center top" }} // keeps head centered
  />
</div>
</div>
</div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-red-100">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* NCSU */}
          <Card className="group relative overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <div className="pointer-events-none absolute inset-x-0 -top-20 h-36 bg-red-700/40 blur-3xl" />
            <CardContent className="relative p-6">
              <div className="flex items-center gap-2 font-semibold text-lg mb-1 text-red-100">
                <GraduationCap className="h-5 w-5 text-red-400" />
                North Carolina State University
              </div>

              <div className="text-sm text-neutral-400 mb-2">
                Raleigh, NC · Aug 2023 – May 2025
              </div>

              <div className="text-sm text-neutral-200 leading-relaxed">
                <span className="inline-flex items-center rounded-full bg-red-900/60 px-2.5 py-0.5 text-[11px] font-medium text-red-100 mr-2">
                  M.S. Computer Science
                </span>
                Data Science Track ·{" "}
                <span className="font-medium">CGPA: 3.8/4.0</span>
              </div>
            </CardContent>
          </Card>

          {/* CVR */}
          <Card className="group relative overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <div className="pointer-events-none absolute inset-x-0 -top-20 h-36 bg-red-800/35 blur-3xl" />
            <CardContent className="relative p-6">
              <div className="flex items-center gap-2 font-semibold text-lg mb-1 text-red-100">
                <GraduationCap className="h-5 w-5 text-red-400" />
                CVR College of Engineering
              </div>

              <div className="text-sm text-neutral-400 mb-2">
                Hyderabad, India · Aug 2018 – May 2022
              </div>

              <div className="text-sm text-neutral-200 leading-relaxed">
                <span className="inline-flex items-center rounded-full bg-red-900/60 px-2.5 py-0.5 text-[11px] font-medium text-red-100 mr-2">
                  B.Tech — Information Technology
                </span>
                <span className="font-medium">CGPA: 3.6/4.0</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-red-100">
          Experience
        </h2>

        {/* NCSU */}
        <Card className="group relative mb-6 overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
          <div className="pointer-events-none absolute inset-x-0 -top-20 h-36 bg-red-700/40 blur-3xl" />
          <CardContent className="relative p-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-900/70 px-3 py-1 text-xs font-medium text-red-100">
                <Briefcase className="h-3.5 w-3.5" />
                Database Developer / Data Analyst
              </div>
              <span className="text-sm text-neutral-400">
                · North Carolina State University
              </span>
              <span className="ml-auto text-xs text-neutral-400">
                Jun 2024 – Present
              </span>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-200">
              <li>
                Built a high-throughput phenotyping pipeline for Lemna using
                YOLOv8 and barcode decoding.
              </li>
              <li>
                Processed 1K+ RGB images from 8 synchronized cameras via Python,
                OpenCV, and PyTorch.
              </li>
              <li>
                Designed a PostgreSQL schema and analytics views for experiment
                metadata and results.
              </li>
              <li>
                Analyzed growth rates and produced Power BI dashboards to
                surface optimal conditions.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Northern Trust */}
        <Card className="group relative mb-6 overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
          <div className="pointer-events-none absolute inset-x-0 -top-20 h-36 bg-red-800/35 blur-3xl" />
          <CardContent className="relative p-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-900/70 px-3 py-1 text-xs font-medium text-red-100">
                <Briefcase className="h-3.5 w-3.5" />
                Data Analyst
              </div>
              <span className="text-sm text-neutral-400">
                · Northern Trust
              </span>
              <span className="ml-auto text-xs text-neutral-400">
                Jan 2025 – Present
              </span>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-200">
              <li>
              Analyzed 30M+ rows of transaction and credit data using SQL and Python 
              to identify customer spend, utilization, and repayment behavior across products and time periods.
              </li>
              <li>
              Built and evaluated classification and regression models with feature engineering 
              and ROC-AUC / precision-recall metrics to detect early churn and delinquency, improving detection accuracy by 22%.
              </li>
              <li>
              Designed Power BI dashboards with 40+ KPIs used by finance and risk leaders in weekly reviews, 
              replacing static Excel reports and reducing preparation effort by 50%+.
              </li>
              <li>
              Performed time-series forecasting on spend and payment trends to support quarterly planning, budget projections, 
              and portfolio stress-testing discussions with senior stakeholders.
              </li>
              <li>
              Automated data ingestion and transformation pipelines processing 5M+ records per run, 
              improving enterprise data freshness by 35% and reducing ad-hoc analyst requests.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Citius Tech */}
        <Card className="group relative mb-6 overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
          <div className="pointer-events-none absolute inset-x-0 -top-20 h-36 bg-red-900/40 blur-3xl" />
          <CardContent className="relative p-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-900/70 px-3 py-1 text-xs font-medium text-red-100">
                <Briefcase className="h-3.5 w-3.5" />
                Data Analyst
              </div>
              <span className="text-sm text-neutral-400">· Citius Tech</span>
              <span className="ml-auto text-xs text-neutral-400">
                Apr 2021 – July 2023
              </span>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-200">
              <li>
              Analyzed 15M+ healthcare and operational records using SQL and Python to support cost tracking, 
              utilization analysis, and performance reporting for multiple US-based healthcare clients.
              </li>
              <li>
              Built and maintained Tableau and Power BI dashboards consumed by 50+ stakeholders, 
              reducing turnaround time for recurring and executive reporting by 40%.
              </li>
              <li>
              Developed predictive models to identify high-risk claims and operational bottlenecks, 
              contributing to a 17% reduction in downstream processing delays.
              </li>
              <li>
              Conducted exploratory data analysis and data validation, 
              improving reporting accuracy by 25% and preventing incorrect interpretations during client reviews.
              </li>
              <li>
              Created reusable SQL queries and Python scripts and collaborated with engineering 
              and QA teams across 10+ Agile releases, reducing repetitive ad-hoc analysis work by ~30%.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between gap-3 mb-6">
          <h2 className="text-2xl font-semibold text-red-100">Projects</h2>
          <p className="text-sm text-neutral-400">
            A selection of work spanning AI, data, and full-stack development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* AI Career Copilot – Featured */}
          <Card className="group relative overflow-hidden rounded-2xl border border-red-900/80 bg-gradient-to-br from-black via-neutral-950 to-red-950 shadow-xl transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <div className="pointer-events-none absolute inset-x-0 -top-24 h-44 bg-red-700/45 blur-3xl" />
            <CardContent className="relative p-5">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center rounded-full bg-red-900/80 px-2.5 py-0.5 text-[11px] font-medium text-red-100">
                    Featured
                  </div>
                  <h3 className="mt-2 font-semibold text-lg text-red-100">
                    AI Career Copilot
                  </h3>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/kothasrilakshmi/ai-career-copilot"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-red-700 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-100 shadow-sm hover:bg-red-700/60 hover:border-red-500"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  <a
                    href="https://sri-resume-analyzer-ai.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white shadow-sm hover:bg-red-500"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                </div>
              </div>
              <p className="text-sm text-neutral-200">
                AI-powered resume assistant that compares resumes with job
                descriptions using LLMs, highlights missing skills, and suggests
                stronger, role-specific bullet points.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <Tag>Python</Tag>
                <Tag>Streamlit</Tag>
                <Tag>OpenAI / LLMs</Tag>
                <Tag>NLP</Tag>
              </div>
            </CardContent>
          </Card>

          {/* NBA All-Star Predictions */}
          <Card className="group relative overflow-hidden rounded-2xl border border-red-900/60 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg text-red-100">
                  NBA All-Star Predictions
                </h3>
                <a
                  href="https://github.com/kothasrilakshmi/NBA-All-Star-Predictions"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-red-700 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-100 shadow-sm hover:bg-red-700/60 hover:border-red-500"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              </div>
              <p className="mt-2 text-sm text-neutral-200">
                End-to-end ML workflow to predict All-Star selections from
                player stats: data prep, feature engineering, modeling, and
                evaluation.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <Tag>Python</Tag>
                <Tag>Pandas</Tag>
                <Tag>Scikit-learn</Tag>
              </div>
            </CardContent>
          </Card>

          {/* Wolf Events */}
          <Card className="group relative overflow-hidden rounded-2xl border border-red-900/60 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg text-red-100">
                  Wolf Events
                </h3>
                <a
                  href="https://github.com/kothasrilakshmi/Wolf_Events"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-red-700 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-100 shadow-sm hover:bg-red-700/60 hover:border-red-500"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              </div>
              <p className="mt-2 text-sm text-neutral-200">
                Campus events aggregator with a clean UI and data model for
                categories, times, and RSVPs.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <Tag>React</Tag>
                <Tag>Node</Tag>
                <Tag>SQL</Tag>
              </div>
            </CardContent>
          </Card>

          {/* Slash */}
          <Card className="group relative overflow-hidden rounded-2xl border border-red-900/60 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg text-red-100">Slash</h3>
                <a
                  href="https://github.com/kothasrilakshmi/slash"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-red-700 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-100 shadow-sm hover:bg-red-700/60 hover:border-red-500"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              </div>
              <p className="mt-2 text-sm text-neutral-200">
                College project exploring collaborative features and routing;
                served as developer and maintainer.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <Tag>JavaScript</Tag>
                <Tag>React</Tag>
                <Tag>GitHub</Tag>
              </div>
            </CardContent>
          </Card>

          {/* SimplyClip */}
          <Card className="group relative overflow-hidden rounded-2xl border border-red-900/60 bg-neutral-950/95 shadow-lg transition-all duration-200 hover:-translate-y-1.5 hover:shadow-2xl">
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg text-red-100">
                  SimplyClip
                </h3>
                <a
                  href="https://github.com/kothasrilakshmi/SimplyClip"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-red-700 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-100 shadow-sm hover:bg-red-700/60 hover:border-red-500"
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              </div>
              <p className="mt-2 text-sm text-neutral-200">
                Lightweight utility for saving and organizing snippets and notes
                with a minimal interface.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <Tag>TypeScript</Tag>
                <Tag>React</Tag>
                <Tag>LocalStorage/DB</Tag>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
<section id="skills" className="mx-auto max-w-6xl px-4 py-16">
  <div className="flex items-center justify-between gap-3 mb-6">
    <h2 className="text-2xl font-semibold text-red-100">Technical Skills</h2>
    <p className="text-sm text-neutral-400">
      A broad and growing stack across programming, analytics, cloud, and machine learning.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Programming / Scripting */}
    <Card className="group relative overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-28 bg-red-700/40 blur-3xl" />
      <CardContent className="relative p-5">
        <div className="flex items-center gap-2 mb-2">
          <Code2 className="h-4 w-4 text-red-400" />
          <div className="font-medium text-sm text-red-100">Programming / Scripting</div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-neutral-100">
          <Tag>Python</Tag>
          <Tag>SQL</Tag>
          <Tag>PySpark</Tag>
          <Tag>Java</Tag>
          <Tag>R</Tag>
          <Tag>TypeScript</Tag>
          <Tag>JavaScript</Tag>
          <Tag>Ruby</Tag>
          <Tag>React</Tag>
          <Tag>Node.js</Tag>
          <Tag>Bash</Tag>
          <Tag>HTML/CSS</Tag>
        </div>
      </CardContent>
    </Card>

    {/* Tools */}
    <Card className="group relative overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-28 bg-red-800/35 blur-3xl" />
      <CardContent className="relative p-5">
        <div className="flex items-center gap-2 mb-2">
          <Wrench className="h-4 w-4 text-red-400" />
          <div className="font-medium text-sm text-red-100">Tools</div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-neutral-100">
          <Tag>Tableau</Tag>
          <Tag>Power BI</Tag>
          <Tag>Matlab</Tag>
          <Tag>Excel</Tag>
          <Tag>Jupyter</Tag>
          <Tag>GitHub</Tag>
          <Tag>VS Code</Tag>
          <Tag>Postman</Tag>
          <Tag>Figma</Tag>
          <Tag>Snowflake</Tag>
          <Tag>Airflow</Tag>
          <Tag>Docker</Tag>
        </div>
      </CardContent>
    </Card>

    {/* Machine Learning & Statistics */}
    <Card className="group relative overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-28 bg-red-900/40 blur-3xl" />
      <CardContent className="relative p-5">
        <div className="flex items-center gap-2 mb-2">
          <Brain className="h-4 w-4 text-red-400" />
          <div className="font-medium text-sm text-red-100">Machine Learning &amp; Statistics</div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-neutral-100">
          <Tag>Regression</Tag>
          <Tag>Classification</Tag>
          <Tag>Clustering</Tag>
          <Tag>Time Series</Tag>
          <Tag>Dimensionality Reduction</Tag>
          <Tag>Feature Engineering</Tag>
          <Tag>Model Evaluation</Tag>
          <Tag>XGBoost</Tag>
          <Tag>Random Forests</Tag>
          <Tag>SVM</Tag>
          <Tag>KNN</Tag>
          <Tag>Statistical Testing</Tag>
        </div>
      </CardContent>
    </Card>

    {/* Libraries & Frameworks */}
    <Card className="group relative overflow-hidden rounded-2xl border border-red-900/70 bg-neutral-950/95 shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all">
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-28 bg-red-800/40 blur-3xl" />
      <CardContent className="relative p-5">
        <div className="flex items-center gap-2 mb-2">
          <Sigma className="h-4 w-4 text-red-400" />
          <div className="font-medium text-sm text-red-100">Libraries &amp; Frameworks</div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-neutral-100">
          <Tag>Pandas</Tag>
          <Tag>NumPy</Tag>
          <Tag>Scikit-learn</Tag>
          <Tag>TensorFlow</Tag>
          <Tag>PyTorch</Tag>
          <Tag>Keras</Tag>
          <Tag>Matplotlib</Tag>
          <Tag>Seaborn</Tag>
          <Tag>Plotly</Tag>
          <Tag>OpenCV</Tag>
          <Tag>NLTK</Tag>
          <Tag>FastAPI</Tag>
          <Tag>Streamlit</Tag>
        </div>
      </CardContent>
    </Card>

  </div>
</section>


      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-red-900/80 bg-neutral-950/95 p-8 md:p-10 text-center shadow-xl">
          <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-red-800/45 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center rounded-full bg-red-900/80 px-3 py-1 text-xs font-medium text-red-100 ring-1 ring-red-700 mb-3">
              Open to Data Science &amp; Analytics roles
            </div>
            <h2 className="text-2xl font-semibold text-red-100">
              Let’s collaborate
            </h2>
            <p className="mt-2 text-neutral-300 max-w-2xl mx-auto">
              Charlotte, NC · lakshmikotha77@gmail.com · 919-633-7921
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="rounded-2xl bg-red-600 hover:bg-red-500 text-sm font-medium"
              >
                <a href="mailto:lakshmikotha77@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button
                asChild
                className="rounded-2xl bg-red-600 hover:bg-red-500 text-sm font-medium"
              >
                <a
                  href="https://github.com/kothasrilakshmi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                className="rounded-2xl bg-red-600 hover:bg-red-500 text-sm font-medium"
              >
                <a
                  href="https://www.linkedin.com/in/srilakshmikotha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
        <footer className="text-center text-sm text-neutral-500 mt-8 pb-12">
          © {new Date().getFullYear()} Sri Lakshmi Kotha. Built with Next.js +
          Tailwind.
        </footer>
      </section>
    </div>
  );
}
