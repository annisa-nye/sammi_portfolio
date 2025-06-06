declare module '@/components/LightboxModal' {
	import { FunctionComponent } from 'react';

	interface LightboxModalProps {
		isOpen: boolean;
		onClose: () => void;
		images: { src: string; alt: string }[];
		initialIndex?: number;
	}

	const LightboxModal: FunctionComponent<LightboxModalProps>;

	export default LightboxModal;
}
