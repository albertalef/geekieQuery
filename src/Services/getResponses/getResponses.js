import { clearQuestions } from './Cleaners';
import { convertStringToDOM } from './Converters/convertStringToDOM';
import { getActivity, getMainScript, getName, getQuestions } from './Getters';
function getResponses(data, e) {
	try {
		const geekieDOM = convertStringToDOM(data);
		const mainScript = getMainScript(geekieDOM);
		const activity = getActivity(mainScript);
		const name = getName(activity);
		const questions = getQuestions(activity);
		const cleanedQuestions = clearQuestions(questions);
		return [{ name, questions: cleanedQuestions }, null];
	} catch (err) {
		e.preventDefault();
		e.stopPropagation();
		alert(err);
		return [null, err];
	}
}

export default getResponses;
