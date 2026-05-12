import React from 'react';
import { Calendar, Clock, FileText, Target, CheckCircle, Users, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const OVERVIEW_KEYS = ['realExam', 'diagnosis', 'roadmap'] as const;
const OVERVIEW_ICONS = [Target, FileText, Users] as const;

const REPORT_KEYS = ['domain', 'skill', 'weakness'] as const;

export const SuperTestSection = React.forwardRef<HTMLDivElement>(
  function SuperTestSection(_props, ref) {
    const { t } = useLanguage();

    const recommendationItems = [0, 1, 2, 3].map((i) => t(`superTest.recommendation.items.${i}`));

    return (
      <section ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 animate-fade-in scroll-mt-20">
        {/* Hero */}
        <div className="rounded-card border border-border-strong bg-surface-elevated p-6 sm:p-8 shadow-clay mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {t('superTest.title')}
              </h2>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {t('superTest.subtitle')}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold text-accent-glow">
                {t('superTest.price')}
              </div>
              <div className="text-sm text-white/50">
                {t('superTest.priceLabel')}
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-accent-glow" />
            {t('superTest.overview.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OVERVIEW_KEYS.map((key, i) => {
              const IconComponent = OVERVIEW_ICONS[i];
              return (
                <div
                  key={key}
                  className="rounded-card border border-border-strong bg-clay-solid p-5 shadow-clay"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-glow/15 flex items-center justify-center mb-3">
                    <IconComponent className="w-5 h-5 text-accent-glow" />
                  </div>
                  <h4 className="font-bold text-white mb-1.5">
                    {t(`superTest.overview.${key}.title`)}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {t(`superTest.overview.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exam Structure */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent-glow" />
            {t('superTest.examStructure.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
            <div className="rounded-card border border-border-strong bg-clay-solid p-5 shadow-clay">
              <Badge variant="primary" className="mb-3">{t('superTest.examStructure.rw')}</Badge>
              <div className="text-2xl font-bold text-white">{t('superTest.examStructure.rwTime')}</div>
            </div>
            <div className="rounded-card border border-border-strong bg-clay-solid p-5 shadow-clay">
              <Badge variant="warning" className="mb-3">{t('superTest.examStructure.math')}</Badge>
              <div className="text-2xl font-bold text-white">{t('superTest.examStructure.mathTime')}</div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/50 text-center">
            {t('superTest.examStructure.note')}
          </p>
        </div>

        {/* Diagnostic Report */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent-glow" />
            {t('superTest.report.title')}
          </h3>
          <div className="rounded-card border border-border-strong bg-clay-solid p-5 sm:p-6 shadow-clay space-y-4">
            {REPORT_KEYS.map((key) => (
              <div key={key} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-accent-glow/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-glow" />
                </span>
                <div>
                  <h4 className="font-semibold text-white text-sm">{t(`superTest.report.${key}`)}</h4>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {t(`superTest.report.${key}Desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="mb-8">
          <div className="rounded-card border border-border-strong bg-clay-solid p-5 sm:p-6 shadow-clay">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-accent-glow" />
              {t('superTest.recommendation.title')}
            </h3>
            <ul className="space-y-3">
              {recommendationItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-emerald-400 text-xs">✓</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://s.tosspayments.com/BnhxdHk8xF4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-btn font-semibold text-base bg-accent text-white shadow-clay-button w-full sm:w-auto min-w-[280px]"
          >
            {t('superTest.cta.button')}
          </a>
          <a
            href="https://open.kakao.com/o/sxHGVZ4h"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-btn font-semibold text-base bg-[#FEE500] text-[#191919] shadow-clay-button w-full sm:w-auto min-w-[280px]"
          >
            <MessageCircle className="w-5 h-5" />
            {t('superTest.cta.kakao')}
          </a>
        </div>
        <p className="mt-3 text-xs text-white/40 text-center">
          {t('superTest.cta.kakaoGuide')}
        </p>
      </section>
    );
  }
);
