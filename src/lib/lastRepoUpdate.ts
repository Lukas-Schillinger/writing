function formatDate(date: string) {
	const dateObject = new Date(date);
	return `${dateObject.toLocaleDateString('default', {
		month: 'short'
	})} ${dateObject.getFullYear()}`;
}

export default async function getLastRepoUpdate(
	author: string,
	repo: string,
	path: string
): Promise<string> {
	const baseURL = 'https://api.github.com/repos/';
	const URL = baseURL + author + '/' + repo + '/commits?path=' + path;
	const result = await fetch(URL)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw Error(`response error. code ${response.status}`);
			}
		})
		.then((responseJson) => {
			if (responseJson.length > 0) {
				const lastCommit = responseJson[0];
				const lastCommitDate = lastCommit.commit.author.date;
				return lastCommitDate;
			} else {
				throw Error(`github data error. ${responseJson}`);
			}
		})
		.catch((error) => {
			console.log(
				'failed to fetch date of last update. defaulting to Oct 2022',
				error
			);
			return '2022-10-28T20:17:26Z';
		});
	return formatDate(result);
}
