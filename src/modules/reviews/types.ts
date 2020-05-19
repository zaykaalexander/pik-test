export enum SportsEnum {
  SWIMMING = 'swimming',
}

export type ReviewType = {
  author: {
    first_name: string,
    last_name: string,
    avatar: string,
  },
  sport: {
    name: SportsEnum,
    goal: string,
  },
  image,
  video?: string,
  short_review: string,
}
