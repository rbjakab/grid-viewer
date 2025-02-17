'use client'
import { useState, useMemo, useCallback, FormEvent, useEffect } from 'react'

import BuilderForm from './BuilderForm'
import { SContainer } from './Container.styles'
import Header from './Header'
import Results from './Results'

import { IndexedTile, Tile } from '../types/tiles'
import { initialData } from '../data/tiles'

function Container() {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const [data, setData] = useState<IndexedTile[]>(() => {
		if (typeof window !== 'undefined') {
			const storedTiles = localStorage.getItem('tiles')
			if (storedTiles) {
				try {
					const parsed: Tile[] = JSON.parse(storedTiles)
					if (Array.isArray(parsed)) {
						const indexedParsed = parsed.map((tile, index) => ({ index, ...tile }))
						return indexedParsed
					}
				} catch (error) {
					console.log('Error parsing localStorage data:', error)
				}
			}
		}
		return initialData as IndexedTile[]
	})

	const [newTitle, setNewTitle] = useState('')
	const [newDescription, setNewDescription] = useState('')
	const [newImagePath, setNewImagePath] = useState('')
	const [itemsPerPage, setItemsPerPage] = useState(8)
	const [searchQuery, setSearchQuery] = useState('')

	const filteredData = useMemo(() => {
		if (!searchQuery.trim()) return data
		return data.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
	}, [data, searchQuery])

	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(filteredData.length / itemsPerPage)
	const currentItems = filteredData.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	)

	useEffect(() => {
		setCurrentPage(1)
	}, [searchQuery])

	useEffect(() => {
		localStorage.setItem('tiles', JSON.stringify(data))
	}, [data])

	const handleAddTile = useCallback(
		(e: FormEvent) => {
			e.preventDefault()
			if (!newTitle || !newDescription || !newImagePath) return

			try {
				new URL(newImagePath)
			} catch (error) {
				console.error(error)
				window.alert('Invalid URL')
				return
			}

			const nextIndex = data.reduce((max, tile) => Math.max(max, tile.index), -1) + 1

			const newTile: IndexedTile = {
				title: newTitle,
				description: newDescription,
				imagePath: newImagePath,
				index: nextIndex,
			}
			setData((prev) => [newTile, ...prev])
			setNewTitle('')
			setNewDescription('')
			setNewImagePath('')
		},
		[newTitle, newDescription, newImagePath, data]
	)

	const handleDeleteTile = useCallback((tileToDelete: Tile) => {
		setData((prev) =>
			prev.filter(
				(tile) =>
					!(
						tile.title === tileToDelete.title &&
						tile.description === tileToDelete.description &&
						tile.imagePath === tileToDelete.imagePath
					)
			)
		)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<SContainer>
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<BuilderForm
				newTitle={newTitle}
				setNewTitle={setNewTitle}
				newDescription={newDescription}
				setNewDescription={setNewDescription}
				newImagePath={newImagePath}
				setNewImagePath={setNewImagePath}
				handleAddTile={handleAddTile}
			/>
			<Results
				filteredData={filteredData}
				currentItems={currentItems}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
				itemsPerPage={itemsPerPage}
				setItemsPerPage={setItemsPerPage}
				handleDeleteTile={handleDeleteTile}
			/>
		</SContainer>
	)
}

export default Container
