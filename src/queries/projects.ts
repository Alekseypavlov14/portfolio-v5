import type { Project } from '../entities/project'
import projects from '../data/projects.json'

export function getProjects(): Project[] {
  return projects as Project[]
}
