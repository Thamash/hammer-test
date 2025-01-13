import { ProjectAsyncActions, ProjectStore } from './project.types';
import { projectClient } from '@/lib/api/client';
import { toast } from 'sonner';
import { Project } from '@/common/types';

export const projectAsyncActions = (
  currState: () => ProjectStore
): ProjectAsyncActions => ({
  fetchProject: async (id: string) => {
    const { setSelectedProject, setLoading } = currState();

    setLoading(true);
    try {
      const response = await projectClient.fetchProject(id);
      if (!response?.success) {
        toast.error('Failed to fetch project');
        setLoading(false);
        return;
      }

      if (!response?.data || !Object.keys(response?.data).length) {
        toast.error('Failed to fetch project');
        setLoading(false);
        return;
      }

      setSelectedProject(response.data);
      setLoading(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast.error('Failed to fetch project');
      if (error?.message) {
        console.error(`Failed to fetch project: ${error.message}`);
      }
    }
  },

  updateProject: async (project: Partial<Project>) => {
    const { setLoading } = currState();

    setLoading(true);
    try {
      const response = await projectClient.updateProject(project);
      if (!response?.success) {
        toast.error('Failed to fetch project');
        setLoading(false);
        return;
      }

      toast.info('Project updated successfully');
      setLoading(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast.error('Failed to update project');
      if (error?.message) {
        console.error(`Failed to update project: ${error.message}`);
      }
    }
  },

  deleteProject: async (id: string) => {
    const { setProjects, setLoading } = currState();

    setLoading(true);
    try {
      const response = await projectClient.deleteProject(id);
      if (!response?.success) {
        toast.error('Failed to delete project');
        setLoading(false);
        return;
      }

      setProjects(response.data);
      setLoading(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast.error('Failed to delete project');
      if (error?.message) {
        console.error(`Failed to delete project: ${error.message}`);
      }
    }
  },

  searchProject: async () => {
    const { setProjects, setLoading, statusFilter, searchText } = currState();

    setLoading(true);
    try {
      const response = await projectClient.searchProject(
        searchText,
        statusFilter
      );
      if (!response?.success) {
        toast.error('Failed to find project');
        setLoading(false);
        return;
      }

      setProjects(response.data);
      setLoading(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setLoading(false);
      toast.error('Failed to find project');
      if (error?.message) {
        console.error(`Failed to find project: ${error.message}`);
      }
    }
  },
});
