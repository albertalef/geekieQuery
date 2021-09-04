import { useState } from 'react';

function useQuestion(response) {
	const [question, setQuestion] = useState(0);
	const hasQuestions = response ? true : false;

	function previousQuestion(e) {
		if (question > 0) {
			setQuestion(question - 1);
		}
	}
	function nextQuestion(e) {
		if (question < (response ? response.questions.length - 1 : 0))
			setQuestion(question + 1);
	}

	function hasPreviousQuestion() {
		return hasQuestions ? question !== 0 : false;
	}
	function hasNextQuestion() {
		return hasQuestions ? question !== response.questions.length - 1 : false;
	}
	return {
		question,
		functions: { previousQuestion, nextQuestion },
		booleans: { hasPreviousQuestion, hasNextQuestion },
	};
}

export default useQuestion;
