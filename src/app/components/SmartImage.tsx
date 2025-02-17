import Image, { ImageProps } from 'next/image'

interface SmartImageProps extends ImageProps {
	isUnsplash: boolean
}

function SmartImage({ isUnsplash, ...props }: SmartImageProps) {
	return <Image {...props} alt='Image.' unoptimized={!isUnsplash} />
}

export default SmartImage
