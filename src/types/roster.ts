export interface PersonType {
  id: number;
  fullName: string;
  link: string;
}

export interface PositionType {
  code: string;
  name: string;
  type: string;
  abbreviation: string;
}

export interface StatusType {
  code: string;
  description: string;
}

export interface RosterType {
  person: PersonType;
  jerseyNumber: string;
  position: PositionType;
  status: StatusType;
  parentTeamId: number;
}

export interface RosterAPIResponseType {
  copyright: string;
  roster: RosterType[];
}
