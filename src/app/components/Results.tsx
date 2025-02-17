import Link from 'next/link'

import {
	Card,
	Grid,
	ImageWrapper,
	NoResults,
	Pagination,
	ItemsPerPageSelect,
	DeleteButton,
} from './Results.styles'
import SharedButton from './Button.styles'
import SmartImage from './SmartImage'

import { IndexedTile } from '../types/tiles'

interface ResultsProps {
	filteredData: IndexedTile[]
	currentItems: IndexedTile[]
	currentPage: number
	setCurrentPage: (page: number) => void
	totalPages: number
	itemsPerPage: number
	setItemsPerPage: (items: number) => void
	handleDeleteTile: (tile: IndexedTile) => void
}

function Results({
	filteredData,
	currentItems,
	currentPage,
	setCurrentPage,
	totalPages,
	itemsPerPage,
	setItemsPerPage,
	handleDeleteTile,
}: ResultsProps) {
	return (
		<>
			{filteredData.length === 0 ? (
				<NoResults>No results found.</NoResults>
			) : (
				<>
					<Pagination>
						<SharedButton
							onClick={() => setCurrentPage(currentPage - 1)}
							disabled={currentPage === 1}
							aria-label='Previous Page'
						>
							Previous
						</SharedButton>
						<span>
							Page {currentPage} of {totalPages}
						</span>
						<SharedButton
							onClick={() => setCurrentPage(currentPage + 1)}
							disabled={currentPage === totalPages || totalPages === 0}
							aria-label='Next Page'
						>
							Next
						</SharedButton>

						<ItemsPerPageSelect
							id='itemsPerPage'
							value={itemsPerPage}
							onChange={(e) => {
								setItemsPerPage(Number(e.target.value))
								setCurrentPage(1)
							}}
						>
							<option value={4}>4</option>
							<option value={8}>8</option>
							<option value={12}>12</option>
							<option value={24}>24</option>
						</ItemsPerPageSelect>
					</Pagination>

					<Grid aria-label='Tiles Grid'>
						{currentItems.map((tile) => {
							return (
								<Link key={tile.index} href={`/${tile.index}`}>
									<Card>
										<DeleteButton
											onClick={(e) => {
												e.stopPropagation()
												e.preventDefault()
												handleDeleteTile(tile)
											}}
										>
											&times;
										</DeleteButton>
										<ImageWrapper>
											<SmartImage
												src={tile.imagePath}
												alt={tile.title}
												quality={20}
												width={300}
												height={200}
												isUnsplash={tile.imagePath.includes('unsplash.com')}
											/>
										</ImageWrapper>
										<h3>{tile.title}</h3>
										<p>{tile.description}</p>
									</Card>
								</Link>
							)
						})}
					</Grid>
				</>
			)}
		</>
	)
}

export default Results
