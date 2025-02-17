export interface Tile {
	title: string
	description: string
	imagePath: string
}

export type IndexedTile = Tile & { index: number }
