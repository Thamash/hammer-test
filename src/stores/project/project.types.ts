import { Project, ProjectStatus } from '@/common/types';

export interface ProjectState {
  projects: Project[] | [];
  selectedProject: Project | null;
  loading: boolean;
  statusFilter: ProjectStatus;
  searchText: string | null;
}

export interface ProjectActions {
  setProjects: (projects: Project[] | []) => void;
  setSelectedProject: (project: Project | null) => void;
  setStatusFilter: (status: ProjectStatus) => void;
  setSearchText: (searchText: string) => void;
  setLoading: (loading: boolean) => void;
}

export interface ProjectAsyncActions {
  fetchProject: (id: string) => Promise<void>;
  searchProject: () => void;
  updateProject: (project: Partial<Project>) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
}

export type ProjectStore = ProjectState & ProjectActions & ProjectAsyncActions;
