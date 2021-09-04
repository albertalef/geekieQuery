import { createContext, useContext, useState } from 'react';
import React from 'react';
import getResponses from '../Services/getResponses/getResponses';
import { responseExample } from '../Utils/example';
import ReactGA from 'react-ga';

const ValuesContext = createContext();

export function ValuesProvider({ children }) {
	const [linkValue, setLinkValue] = useState('');
	const [sourceCodeValue, setSourceCodeValue] = useState('');
	const [response, setResponse] = useState(
		getLocalResponses('localResponse') || responseExample
	);
	const getResponsesHandler = (e) => {
		try {
			let newResponse = getResponses(sourceCodeValue, e);
			setResponse(newResponse);
			setLocalResponses(newResponse);
			ReactGA.event({ category: 'Responses', action: 'Queried a Response' });
			document.title = newResponse.name;
		} catch (err) {
			setResponse(responseExample);
		} finally {
			setSourceCodeValue('');
		}
	};
	function setLocalResponses(response) {
		const responseInString = JSON.stringify(response);
		localStorage.setItem('localResponse', responseInString);
	}
	function getLocalResponses(key) {
		try {
			const responseInString = localStorage.getItem(key);
			const response = JSON.parse(responseInString);
			return response;
		} catch (err) {
			return undefined;
		}
	}
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
