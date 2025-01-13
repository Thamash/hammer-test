import { sleep } from '@/lib/utils/helpers';
import { mockProjects } from '../../../mocks/projects';
import { Project, ProjectStatus } from '@/common/types';

export const projectClient = {
  fetchProjects: async (): Promise<{ success: boolean; data: Project[] }> => {
    await sleep(2);
    const projects = [...(mockProjects ?? [])];

    return { success: true, data: projects };
  },

  fetchProject: async (
    id: string
  ): Promise<{ success: boolean; data: Project | null }> => {
    await sleep(1);

    if (!id) {
      throw new Error('Id is needed to fetch a project');
    }

    const projects = [...mockProjects];
    const project = projects.find((project) => project.id === id);

    return { success: true, data: project ?? null };
  },

  searchProject: async (
    needle: string | null,
    statusFilter: ProjectStatus
  ): Promise<{ success: boolean; data: Project[] }> => {
    await sleep(1);
    const projects = [...(mockProjects ?? [])];

    const needleLower = needle?.toLowerCase() ?? '';

    const filteredProjects = projects.filter((project) => {
      if (statusFilter !== ProjectStatus.ALL) {
        return (
          (project.id.toLowerCase().includes(needleLower) ||
            project.name.toLowerCase().includes(needleLower)) &&
          project.status === statusFilter
        );
      } else {
        return (
          project.id.toLowerCase().includes(needleLower) ||
          project.name.toLowerCase().includes(needleLower)
        );
      }
    });

    return { success: true, data: filteredProjects ?? [] };
  },

  deleteProject: async (
    id: string
  ): Promise<{ success: boolean; data: Project[] | [] }> => {
    await sleep(1);

    if (!id) {
      throw new Error('Id is needed to fetch a project');
    }

    const projects = [...mockProjects];

    const filteredProjects = projects.filter((project) => project.id !== id);

    return { success: true, data: filteredProjects ?? [] };
  },

  updateProject: async (
    project: Partial<Project>
  ): Promise<{ success: boolean; data: Project }> => {
    await sleep(1);

    if (!project.id) {
      throw new Error('Id is needed to update a project');
    }

    const projects = [...mockProjects];

    const originalProject = projects.find(
      (project) => project.id === project.id
    );

    if (originalProject === undefined) {
      throw new Error('Project not found');
    }

    const updatedProject = {
      ...originalProject,
      ...project,
      id: originalProject.id,
    };

    return { success: true, data: updatedProject };
  },
};
