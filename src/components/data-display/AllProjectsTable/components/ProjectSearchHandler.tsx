'use client';

import { useProjectSearch } from '@/hooks/useProjectQueries';
import { projectSelectors, useProjectStore } from '@/stores/project';
import { useEffect } from 'react';

export const ProjectSearchHandler = () => {
  const { data, isLoading } = useProjectSearch();
  const { setProjects, setLoading } = useProjectStore(projectSelectors.actions);

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
  }, [data, setProjects]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return null;
};
