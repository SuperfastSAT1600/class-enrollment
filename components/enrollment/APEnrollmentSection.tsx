'use client';

import React from 'react';
import { BookOpen, Users, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { AP_PACKAGES, AP_SUBJECTS } from '@/lib/data/pricing';

const CARD_STYLES: Record<string, string> = {
  'ap-lite': 'from-amber-500/20 to-yellow-600/10 border-amber-500/30',
  'ap-standard': 'from-slate-400/20 to-gray-500/10 border-slate-400/30',
  'ap-booster': 'from-red-500/20 to-rose-600/10 border-red-500/30',
};

const CARD_ACCENT: Record<string, string> = {
  'ap-lite': 'text-amber-400',
  'ap-standard': 'text-slate-300',
  'ap-booster': 'text-red-400',
};

function formatPrice(price: number): string {
  return `${(price / 10000).toLocaleString()}만원`;
}

export const APEnrollmentSection = React.forwardRef<HTMLDivElement>(
  function APEnrollmentSection(_props, ref) {
    return (
      <section ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 animate-fade-in scroll-mt-20">
        {/* Package Cards */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent-glow" />
            AP 수업권 패키지
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {AP_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-card border bg-gradient-to-br ${CARD_STYLES[pkg.id]} p-5 shadow-clay`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`text-lg font-bold ${CARD_ACCENT[pkg.id]}`}>
                    {pkg.name}
                  </h4>
                  {pkg.discountRate && (
                    <Badge variant="success">{pkg.discountRate}% 할인</Badge>
                  )}
                </div>
                <p className="text-2xl font-bold text-white mb-4">
                  {formatPrice(pkg.price)}
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    {pkg.subjects}과목
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    일대일 {pkg.hours}시간
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Table */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent-glow" />
            진행 가능 과목
          </h3>
          <div className="rounded-card border border-border-strong bg-clay-solid shadow-clay overflow-hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-5">
              {AP_SUBJECTS.map((subject) => (
                <div
                  key={subject.name}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-glow" />
                  {subject.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-btn font-semibold text-base bg-accent text-white shadow-clay-button w-full sm:w-auto min-w-[280px]">
            <MessageCircle className="w-5 h-5" />
            AP 수업 상담 신청하기
          </div>
          <p className="mt-3 text-xs text-white/40">
            과목 선택과 맞춤 커리큘럼 상담을 받으실 수 있습니다
          </p>
        </div>
      </section>
    );
  }
);
