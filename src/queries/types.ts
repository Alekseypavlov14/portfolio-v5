import type { Type } from '../entities/type'
import types from '../data/types.json'

export function getTypes(): Type[] {
  return types as Type[]
}
