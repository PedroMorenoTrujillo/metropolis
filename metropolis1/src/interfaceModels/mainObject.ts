import { Author } from './author';
import { Yourself } from './yourself';
import { Editor } from './editor';

export interface MainObject{
  type: string
  title: string
  journal: string
  section: string
  editor: Editor | null
  yourself: Yourself | null
  authors: Author[]
}
