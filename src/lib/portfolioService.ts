import {
  staticProjects,
  staticCertificates,
  staticTechStacks,
} from '@/lib/staticData'

export const fetchProjects = async () => staticProjects

export const fetchCertificates = async () => staticCertificates

export const fetchTechStacks = async () => staticTechStacks
