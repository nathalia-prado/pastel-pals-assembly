export interface RawCard {
  type: string;
  name_short: string;
  name: string;
  suit?: Suit
  value: string;
  value_int: number;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
}

export interface FullCard extends Card {
  type: string
  meaningUp: string
  meaningReverse: string
  description: string
}

export interface Card {
  identifier: string
  name: string
  suit: Suit
  value: string
}


export type Suit = "wands" | "cups" | "swords" | "pentacles" | "major"