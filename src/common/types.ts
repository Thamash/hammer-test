export interface Project {
  id: string;
  name: string;
  progress: number;
  download: boolean;
  status: ProjectStatus;
  briefingLoopMaster?: SelectOption | null;
  researcherLoopMaster?: SelectOption | null;
  strategyLoopMaster?: SelectOption | null;
  presentationLoopMaster?: SelectOption | null;
}

export enum ProjectStatus {
  NEW = 'New project',
  IN_PROGRESS = 'In progress',
  FINISHED = 'Finished',
  ALL = 'All',
}

export interface SelectOption {
  id: number;
  name: string;
  imagePath: string;
}
