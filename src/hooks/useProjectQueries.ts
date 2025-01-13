import { useQuery } from '@tanstack/react-query';
import { projectClient } from '@/lib/api/client';
import { ProjectStatus } from '@/common/types';
import { toast } from 'sonner';
import { projectSelectors, useProjectStore } from '@/stores/project';

export const useProjectsList = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const result = await projectClient.fetchProjects();
      if (!result.success || !result.data || result.data.length === 0) {
        toast.info('No projects found. You should create some first.');
        return [];
      }
      return result.data;
    },
  });
};

export const useProjectSearch = () => {
  const searchText = useProjectStore(projectSelectors.searchText);
  const statusFilter = useProjectStore(projectSelectors.statusFilter);

  return useQuery({
    queryKey: ['projects', 'search', statusFilter, searchText],
    queryFn: async () => {
      const response = await projectClient.searchProject(
        searchText,
        statusFilter
      );
      if (!response?.success) {
        throw new Error('Failed to find project');
      }
      return response.data;
    },
    enabled: Boolean(searchText || statusFilter !== ProjectStatus.ALL),
  });
};
