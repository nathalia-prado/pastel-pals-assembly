
export interface FullCard extends Card {
  suit: string
  type: string
  meaningUp: string
  meaningReverse: string
}

export interface Card {
  identifier: string
  name: string
  altText: string
  value: number
}
