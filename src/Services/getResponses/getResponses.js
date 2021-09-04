import { clearQuestions } from './Cleaners';
import { convertStringToDOM } from './Converters/convertStringToDOM';
import { getActivity, getMainScript, getName, getQuestions } from './Getters';
function getResponses(data, e) {
	return new Promise((resolve, reject) => {
		try {
			const geekieDOM = convertStringToDOM(data);
			const mainScript = getMainScript(geekieDOM);
			const activity = getActivity(mainScript);
			const name = getName(activity);
			const questions = getQuestions(activity);
			const cleanedQuestions = clearQuestions(questions);
			resolve({ name, questions: cleanedQuestions });
		} catch (err) {
			e.preventDefault();
			e.stopPropagation();
			alert(err.message);
			reject(err);
		}
	});
}

export default getResponses;
