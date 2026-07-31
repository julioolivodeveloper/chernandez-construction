'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import QuoteForm from '@/components/sections/QuoteForm';

function FormWithParams() {
  const params = useSearchParams();
  const service = params.get('service') || '';
  const estimate = params.get('estimate') || '';
  return <QuoteForm prefilledService={service} prefilledEstimate={estimate} />;
}

export default function ContactFormSection() {
  return (
    <Suspense fallback={<QuoteForm />}>
      <FormWithParams />
    </Suspense>
  );
}
