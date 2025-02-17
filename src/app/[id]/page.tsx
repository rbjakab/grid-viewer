'use client'
import { useEffect, useState } from 'react'
import { notFound, useParams, useRouter } from 'next/navigation'

import { IndexedTile } from '../types/tiles'
import {
	Container,
	ContainerRow,
	Divider,
	ImageContainer,
	Center,
} from './components/ResultPage.styles'
import SmartImage from '../components/SmartImage'
import GoBackButton from './components/GoBackButton'

export default function TileDetailsPage() {
	const { id } = useParams() as { id: string }

	const [tile, setTile] = useState<IndexedTile | null>(null)
	const router = useRouter()

	useEffect(() => {
		if (!id) return

		const storedTiles = localStorage.getItem('tiles')

		if (storedTiles) {
			try {
				const parsedTiles: IndexedTile[] = JSON.parse(storedTiles)
				const index = Number(id)

				if (isNaN(index)) {
					notFound()
				}

				const foundTile = parsedTiles.filter((tile) => tile.index === index)[0]

				if (!foundTile) {
					notFound()
				}

				setTile(foundTile)
			} catch (error) {
				console.log('Error parsing tiles from localStorage', error)
				notFound()
			}
		} else {
			notFound()
		}
	}, [id, router])

	if (!tile) {
		return <Container>Loading...</Container>
	}

	return (
		<Center>
			<GoBackButton>Go Back</GoBackButton>
			<Container>
				<ContainerRow>
					<h1>{tile.title}</h1>
					<p>{tile.description}</p>
				</ContainerRow>
				<Divider />
				<ImageContainer>
					<SmartImage
						src={tile.imagePath}
						alt={tile.title}
						quality={25}
						fill
						style={{ objectFit: 'contain' }}
						priority
						isUnsplash={tile.imagePath.includes('unsplash.com')}
					/>
				</ImageContainer>
			</Container>
		</Center>
	)
}
