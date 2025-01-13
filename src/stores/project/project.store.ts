import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createSelectors } from '@/lib/utils/zustand';

import { projectAsyncActions } from './project.async.actions';
import { ProjectState, ProjectStore } from './project.types';
import { Project, ProjectStatus } from '@/common/types';

const initialState: ProjectState = {
  projects: [],
  loading: false,
  selectedProject: null,
  searchText: null,
  statusFilter: ProjectStatus.ALL,
};

export const projectStore = create(
  subscribeWithSelector(
    immer<ProjectStore>((set, get) => ({
      ...initialState,
      setProjects: (projects: Project[]) =>
        set((state) => {
          state.projects = projects;
        }),

      setSelectedProject: (project: Project | null) =>
        set((state) => {
          state.selectedProject = project;
        }),

      setLoading: (loading: boolean) =>
        set((state) => {
          state.loading = loading;
        }),

      setStatusFilter: (status: ProjectStatus) => {
        set((state) => {
          state.statusFilter = status;
        });
      },

      setSearchText: (searchText: string | null) => {
        set((state) => {
          state.searchText = searchText;
        });
      },
      ...projectAsyncActions(get),
    }))
  )
);

export const useProjectStore = createSelectors(projectStore);
