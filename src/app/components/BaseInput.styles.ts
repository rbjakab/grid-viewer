import styled from 'styled-components'

const BaseInput = styled.input`
	padding: 0.5rem;
	font-size: var(--font-size);
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.4);
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: var(--glass-blur);
	color: var(--text-color);

	&:focus {
		border-color: var(--primary);
		box-shadow: 0 0 10px rgba(0, 123, 204, 0.5);
	}
`

export default BaseInput
