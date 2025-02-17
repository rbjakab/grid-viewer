'use client'
import GoBackButton from './components/GoBackButton'
import { Center } from './components/ResultPage.styles'

function NotFound() {
	return (
		<Center>
			<GoBackButton>Let&apos;s go home</GoBackButton>
			<h1>This Image Is Not Found</h1>
		</Center>
	)
}

export default NotFound
