'use client';

import { projectSelectors, useProjectStore } from '@/stores/project';

export default function LoadingOverlay() {
  const isLoading = useProjectStore(projectSelectors.loading);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-super flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <div className="text-lg font-medium text-white">Loading...</div>
      </div>
    </div>
  );
}
