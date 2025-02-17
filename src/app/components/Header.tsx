import { styled } from 'styled-components'

import { SHeader, SearchBar } from './Header.styles'
import BaseInput from './BaseInput.styles'

const StyledInput = styled(BaseInput)`
	padding: 0.3rem;
	font-size: 0.9rem;
`

interface HeaderProps {
	searchQuery: string
	setSearchQuery: (query: string) => void
}

function Header({ searchQuery, setSearchQuery }: HeaderProps) {
	return (
		<SHeader>
			<h1>My Awesome Grid</h1>
			<SearchBar>
				<label htmlFor='search'>Search:</label>
				<StyledInput
					id='search'
					type='text'
					placeholder='Type a title...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</SearchBar>
		</SHeader>
	)
}

export default Header
