import { createContext, useContext, useState } from 'react';
import React from 'react';
import getResponses from '../Services/getResponses/getResponses';

const ValuesContext = createContext();

export function ValuesProvider({ children }) {
	const [linkValue, setLinkValue] = useState('');
	const [sourceCodeValue, setSourceCodeValue] = useState('');
	const [response, setResponse] = useState();
	const getResponsesHandler = (e) => {
		let newResponse = getResponses(sourceCodeValue, e);
		setResponse(newResponse);
		/* setSourceCodeValue(''); */
	};
	return (
		<ValuesContext.Provider
			value={{
				link: { linkValue, setLinkValue },
				sourceCode: { sourceCodeValue, setSourceCodeValue },
				getResponsesHandler,
				response,
			}}
		>
			{children}
		</ValuesContext.Provider>
	);
}

export function useValues() {
	const { link, sourceCode, getResponsesHandler, response } =
		useContext(ValuesContext);
	return { link, sourceCode, getResponsesHandler, response };
}
