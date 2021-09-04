export function removeDataImg(object) {
	const objectInString = JSON.stringify(object);
	const newObjectInString = objectInString.replaceAll(
		/src=\\"data:image.*?=\\"/g,
		''
	);
	const newObject = JSON.parse(newObjectInString);
	return newObject;
}
export function clearQuestions(questions) {
	try {
		const cleanedQuestions = questions.map((question) => {
			const baseTexts = question.base_texts[0];
			const correctChoiceId = question.correct_choice_id;
			const content = baseTexts ? baseTexts.content : '(Questão sem texto!)';
			const title = baseTexts ? baseTexts.title : '';
			const wording = question.wording || '';
			const choices = clearChoices(question.choices, correctChoiceId);
			return { title, content, wording, choices };
		});
		return cleanedQuestions;
	} catch (err) {
		throw new Error('Isso não é uma atividade válida!');
	}
}

function clearChoices(choices, correctChoiceId) {
	try {
		return choices.map(({ content, id }) => ({
			content,
			isCorrect: id === correctChoiceId,
		}));
	} catch (e) {
		throw e;
	}
}
