export interface LeagueType {
  id: number;
  name: string;
  link: string;
}

export interface DivisionType {
  id: number;
  name: string;
  link: string;
}

export interface SportType {
  id: number;
  name: string;
  link: string;
}

export interface SpringLeagueType {
  id: number;
  name: string;
  link: string;
  abbreviation: string;
}

export interface VenueType {
  id: number;
  name: string;
  link: string;
}
export interface SpringVenueType {
  id: number;
  link: string;
}

export interface TeamType {
  springLeague: SpringLeagueType;
  allStarStatus: string;
  id: number;
  name: string;
  link: string;
  season: number;
  venue: VenueType;

  springVenue: SpringVenueType;
  teamCode: string;
  fileCode: string;
  abbreviation: string;
  teamName: string;
  locationName: string;
  firstYearOfPlay: string;
  league: LeagueType;
  division: DivisionType;
  sport: SportType;
  shortName: string;
  franchiseName: string;
  clubName: string;
  active: boolean;
}

export interface TeamAPIResponseType {
  copyright: string;
  teams: TeamType[];
}
