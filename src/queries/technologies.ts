import type { Technology } from '../entities/technology'
import technologies from '../data/technologies.json'

export function getTechnologies(): Technology[] {
  return technologies as Technology[]
} 
