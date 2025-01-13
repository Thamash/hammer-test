import {
  ProjectActions,
  ProjectAsyncActions,
  ProjectState,
  ProjectStore,
} from './project.types';

const allSelector = (state: ProjectStore) => state;

const actions = (state: ProjectActions & ProjectAsyncActions) => state;

const state = (state: ProjectState) => state;

const projects = (state: ProjectState) => state.projects;

const loading = (state: ProjectState) => state.loading;

const statusFilter = (state: ProjectState) => state.statusFilter;

const searchText = (state: ProjectState) => state.searchText;

const selectedProject = (state: ProjectState) => state.selectedProject;

export const projectSelectors = {
  allSelector,
  actions,
  state,
  projects,
  loading,
  selectedProject,
  statusFilter,
  searchText,
};
