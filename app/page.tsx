import { Suspense } from 'react';
import { EnrollmentPage } from '@/components/EnrollmentPage';

export default function Home() {
  return (
    <Suspense>
      <EnrollmentPage />
    </Suspense>
  );
}
