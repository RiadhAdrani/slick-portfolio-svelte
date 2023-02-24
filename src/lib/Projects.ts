import type { Project } from "./types"

export const Projects: Record<string, Project> = {};

export const ProjectsList: Array<Project> = Object.keys(Projects).map(
  (project) => Projects[project]
);
