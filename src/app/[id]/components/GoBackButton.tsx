import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { SGoBackButton } from './ResultPage.styles'

interface GoBackButtonProps {
	children?: ReactNode
}

function GoBackButton({ children }: GoBackButtonProps) {
	const router = useRouter()

	return <SGoBackButton onClick={() => router.push('/')}>{children}</SGoBackButton>
}

export default GoBackButton
