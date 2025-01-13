'use client';

import React, { useEffect } from 'react';
import { AllProjectsTableContent } from './components/AllProjectsTableContent/AllProjectsTableContent';
import { projectSelectors, useProjectStore } from '@/stores/project';
import { AllProjectsStatusFilter } from './components/AllProjectsTableStatusFilter/AllProjectsTableStatusFilter';
import { AllProjectsSearchInput } from './components/AllProjectsSearchInput/AllProjectsSearchInput';
import { useProjectsList } from '@/hooks/useProjectQueries';

export const AllProjectsTable: React.FC = () => {
  const projects = useProjectStore(projectSelectors.projects);
  const { setSearchText, setStatusFilter, setProjects, setLoading } =
    useProjectStore(projectSelectors.actions);
  const { data, isLoading } = useProjectsList();

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return (
    <div className="relative max-w-content h-full m-auto ">
      <div className="absolute inset-0 bg-purple-900 rounded-2.5xl mix-blend-plus-lighter" />
      <div className="relative p-8 ">
        <div className="flex flex-row justify-between mb-6">
          <h1 className="font-poppins text-4xl font-semibold leading-relaxed -tracking-wider text-left decoration-skip-ink-none">
            All projects
          </h1>
          <div className="flex justify-between items-center gap-3">
            <AllProjectsSearchInput onChange={setSearchText} />
            <AllProjectsStatusFilter onSelect={setStatusFilter} />
          </div>
        </div>
        <AllProjectsTableContent data={projects} />
      </div>
    </div>
  );
};
