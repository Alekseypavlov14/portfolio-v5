import type { Nullable } from '../types/nullable'
import type { Id } from '../types/id'

export interface Project {
  id: Id,

  imageSource: Nullable<string>,
  name: string,
  description: string,
  
  link: Nullable<string>,
  repository: string,

  typeId: Id,
  technologiesIds: Id[],
  
  date: 1739187342412
}
