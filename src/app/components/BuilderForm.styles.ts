import { styled } from 'styled-components'

const SBuilderForm = styled.form`
	background: var(--glass-bg);
	backdrop-filter: var(--glass-blur);
	border-radius: var(--border-radius);
	padding: 1.5rem;
	margin: 1.5rem 0;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(255, 255, 255, 0.3);

	h2 {
		margin-top: 0;
		color: var(--text-color);
	}
`

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0;

	label {
		font-weight: bold;
		margin-bottom: 0.25rem;
		color: var(--text-color);
	}
`

export { SBuilderForm, FormGroup }
