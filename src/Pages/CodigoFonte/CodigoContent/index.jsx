import React from 'react';
import { ContentTemplate } from '../../../Layout';
import CodeInput from './CodeInput';
import Paragraph from './Paragraph/Paragraph';

export default function CodigoContent() {
	return (
		<ContentTemplate>
			<Paragraph />
			<CodeInput />
		</ContentTemplate>
	);
}
