import { BookOpen, Users, MessageCircle, TrendingUp, Clock, Star, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { AP_PACKAGES, AP_SUBJECTS } from '@/lib/data/pricing';

const CARD_STYLES: Record<string, string> = {
  'ap-lite': 'from-amber-500/20 to-yellow-600/10 border-amber-500/30',
  'ap-standard': 'from-slate-400/20 to-gray-500/10 border-slate-400/30 ring-1 ring-accent-glow/30',
  'ap-booster': 'from-red-500/20 to-rose-600/10 border-red-500/30',
};

const CARD_ACCENT: Record<string, string> = {
  'ap-lite': 'text-amber-400',
  'ap-standard': 'text-slate-300',
  'ap-booster': 'text-red-400',
};

const SALES_BADGE: Record<string, { text: string; variant: 'warning' | 'success' | 'primary' }> = {
  entry: { text: '입문 추천', variant: 'primary' },
  popular: { text: '가장 인기', variant: 'warning' },
  bestValue: { text: '시간당 최저가', variant: 'success' },
};

function formatPrice(price: number): string {
  return `${(price / 10000).toLocaleString()}만원`;
}

const VALUE_PROPS = [
  { icon: Star, title: '과목별 전문 코치', desc: 'AP 전문 코치가 직접 수업합니다.' },
  { icon: ShieldCheck, title: '맞춤 커리큘럼', desc: '학생의 현재 수준과 목표 점수에 맞춰 설계합니다' },
  { icon: TrendingUp, title: '성과형 관리', desc: '진도 체크와 과제 피드백으로 학습 효율을 높입니다' },
];

export function APEnrollmentSection() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 animate-fade-in scroll-mt-20">
      {/* Package Cards */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-accent-glow" />
          AP 수업권 패키지
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {AP_PACKAGES.map((pkg) => {
            const badge = pkg.salesLabel ? SALES_BADGE[pkg.salesLabel] : null;
            return (
              <div
                key={pkg.id}
                className={`rounded-card border bg-gradient-to-br ${CARD_STYLES[pkg.id]} p-5 shadow-clay relative`}
              >
                <div className="h-5 mb-2">
                  {badge && <Badge variant={badge.variant}>{badge.text}</Badge>}
                </div>
                <h4 className={`text-lg font-bold ${CARD_ACCENT[pkg.id]} mb-1`}>
                  {pkg.name}
                </h4>
                <p className="text-2xl font-bold text-white mb-4">
                  {formatPrice(pkg.price)}
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-white/40" />
                    1:1수업 {pkg.hours}시간
                  </li>
                </ul>
                {pkg.discountRate && (
                  <p className="mt-3 text-sm font-bold text-rose-400">
                    -{pkg.discountRate}% 할인 적용가
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Why AP with Us */}
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {VALUE_PROPS.map((item) => (
            <div
              key={item.title}
              className="rounded-card border border-border-strong bg-clay-solid p-4 shadow-clay"
            >
              <div className="w-8 h-8 rounded-lg bg-accent-glow/15 flex items-center justify-center mb-2.5">
                <item.icon className="w-4 h-4 text-accent-glow" />
              </div>
              <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Subjects */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-accent-glow" />
          진행 가능 과목
        </h3>
        <div className="rounded-card border border-border-strong bg-clay-solid shadow-clay overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-5">
            {AP_SUBJECTS.map((name) => (
              <div key={name} className="flex items-center gap-2 text-sm text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-glow" />
                {name}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-2 text-xs text-white/30 text-center">
          위 과목 외 추가 과목은 상담 시 문의해 주세요
        </p>
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
