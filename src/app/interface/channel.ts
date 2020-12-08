import { User } from './user'

export interface Channel {
	id: string | number,
	title: string,
  animal: string,
  users?: User[],
  photoUrl: string
}
