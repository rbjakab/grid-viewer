import styled from 'styled-components'

const SharedButton = styled.button`
	background: var(--glass-bg);
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-size: var(--font-size);
	border-radius: 4px;
	color: var(--text-color);
	transition: all 0.3s ease-in-out;

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	&:hover {
		background: var(--glass-bg-hover);
		color: #fff;
		transform: translateY(-2px);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
	}
`

export default SharedButton
