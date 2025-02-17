import { styled } from 'styled-components'

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 1.5rem;
	margin-top: 1rem;
`

const Card = styled.div`
	position: relative;
	background: var(--glass-bg);
	backdrop-filter: var(--glass-blur);
	border-radius: var(--border-radius);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	padding: 0.5rem;
	transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	border: 1px solid rgba(255, 255, 255, 0.3);

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}

	h3 {
		margin: 0.5rem;
		color: var(--text-color);
	}

	p {
		margin: 0 0.5rem 0.5rem 0.5rem;
		color: var(--text-color);
	}
`

const ImageWrapper = styled.div`
	width: 100%;
	max-height: 150px;
	overflow: hidden;
	display: block;

	img {
		width: 100%;
		height: auto;
		display: block;
	}
`

const Pagination = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	gap: 1rem;
`

const NoResults = styled.div`
	margin: 2rem 0;
	font-style: italic;
	text-align: center;
`

const ItemsPerPageSelect = styled.select`
	padding: 0.5rem;
	font-size: var(--font-size);
	border: 2px solid #000;
	border-radius: 4px;
	background: var(--glass-bg);
	cursor: pointer;
	outline: none;
	color: var(--text-color);
	transition: all 0.2s ease-in-out;

	&:hover {
		border-color: var(--glass-bg-hover);
	}
`

const DeleteButton = styled.button`
	background: transparent;
	border: none;
	width: 50px;
	font-size: 2rem;
	color: var(--text-color);
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	margin-bottom: 0.25rem;

	&:hover {
		color: #ff0000;
		background-color: rgba(255, 0, 0, 0.2);
		border-radius: 4px;
	}
`

export { Grid, Card, ImageWrapper, Pagination, NoResults, ItemsPerPageSelect, DeleteButton }
