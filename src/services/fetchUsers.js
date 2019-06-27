import parse from "parse-link-header";


export default async function fetchUsers (url) {
	await fetch(url)
		.then(response => response.json()
			.then(data =>
				this.setState({
					usersLinks: parse(response.headers.get('link')),
					membersList: data,
					isLoading: false
				})
			)
		)
		.catch(error =>
			this.setState({ error })
		);
};