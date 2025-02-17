import { styled } from 'styled-components'

const Container = styled.div`
	width: 600px;
	background: var(--glass-bg);
	backdrop-filter: var(--glass-blur);
	border-radius: var(--border-radius);
	padding: 1.5rem;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.3);
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`

const ContainerRow = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
`

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 500px;
`

const Divider = styled.div`
	width: 100%;
	border: 1px solid black;
	margin: 1rem 0;
`

const Center = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const SGoBackButton = styled.button`
	margin: 1rem;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border: none;
	background-color: rgb(8, 64, 127);
	color: white;
	border-radius: 4px;
	cursor: pointer;
	&:hover {
		background-color: #005bb5;
	}
`

export { Container, ContainerRow, ImageContainer, Divider, Center, SGoBackButton }
