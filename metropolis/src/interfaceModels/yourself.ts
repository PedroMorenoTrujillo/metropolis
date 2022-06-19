import { Affiliations } from './affiliations';

export interface Yourself{
  id: number
  fullName: string
  role: string
  publications: number
  views: number
  followers: number
  pictureUrl: string
  profileUrl: string
  affiliations: Affiliations[]
  show?: boolean
}
