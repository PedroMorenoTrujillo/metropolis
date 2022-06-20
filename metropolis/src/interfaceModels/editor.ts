import { Affiliations } from './affiliations';

export interface Editor {
  id: number,
  fullName: string,
  role: string,
  publications: number,
  views: number,
  followers: number,
  pictureUrl: string,
  profileUrl: string,
  affiliations: Affiliations[],
}
