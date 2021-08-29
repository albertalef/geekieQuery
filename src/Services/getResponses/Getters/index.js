import { removeDataImg } from '../Cleaners';

export function getMainScript(DOM) {
	try {
		const mainScript = DOM.getElementById('state-data').innerHTML;
		return mainScript;
	} catch (err) {
		console.log(
			`\n\nNão consegui achar o Script State-Data! (Código Fonte inválido!)\n\n`
		);
		alert('Código Fonte inválido!');
		throw err;
	}
}

export function getActivity(string) {
	try {
		const mainObject = JSON.parse(string);
		const activity = mainObject.activity;
		const activityTrated = removeDataImg(activity);
		return activityTrated;
	} catch (err) {
		console.log('\n\nIsso não é um código fonte de uma atividade!!\n\n');
		alert('Isso não é um código fonte de uma atividade!!');
		throw err;
	}
}
export function getName(activity) {
	return activity.display_name;
}

export function getQuestions(activity) {
	return activity.steps[0].items;
}
