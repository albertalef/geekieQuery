export function convertStringToDOM(string) {
	const parser = new DOMParser();
	return parser.parseFromString(string, 'text/html');
}
