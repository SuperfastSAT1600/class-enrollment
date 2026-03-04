'use client';

import type { CourseType } from '@/types/enrollment';

interface CourseTypeToggleProps {
  courseType: CourseType;
  onChange: (type: CourseType) => void;
}

const OPTIONS: { id: CourseType; label: string }[] = [
  { id: 'sat', label: 'SAT' },
  { id: 'ap', label: 'AP' },
];

export function CourseTypeToggle({ courseType, onChange }: CourseTypeToggleProps) {
  return (
    <div className="flex justify-center px-4 pt-6 sm:pt-8">
      <div className="inline-flex rounded-full border border-border-strong bg-clay-solid p-1 shadow-clay">
        {OPTIONS.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`px-8 py-2.5 rounded-full text-base font-semibold transition-all duration-200 ${
              courseType === opt.id
                ? 'bg-accent text-white shadow-clay-button'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
