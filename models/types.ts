export interface RawCard {
  type: string;
  name_short: string;
  name: string;
  suit?: string
  value: string;
  value_int: number;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

export interface FullCard extends Card {
  suit: string
  type: string
  meaningUp: string
  meaningReverse: string
}

export interface Card {
  identifier: string
  name: string
  suit: string
  description: string
  value: string
}
