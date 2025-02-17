import { styled } from 'styled-components'
const SHeader = styled.header`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background: var(--glass-bg);
	backdrop-filter: var(--glass-blur);
	padding: 1rem 2rem;
	border-radius: var(--border-radius);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.3);

	h1 {
		margin: 0.5rem 0;
		color: var(--text-color);
	}
`

const SearchBar = styled.div`
	display: flex;
	align-items: center;
	margin: 0.5rem 0;

	label {
		margin-right: 0.5rem;
		color: var(--text-color);
	}
`

export { SHeader, SearchBar }
