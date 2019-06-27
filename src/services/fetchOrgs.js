import parse from "parse-link-header";


export default async function fetchOrgs (url) {
    await fetch(url)
        .then(response => response.json()
            .then(data =>
                this.setState({
                    orgsLinks: parse(response.headers.get('link')),
                    organisationList: data,
                    isLoading: false
                })
            )
        )
        .catch(error =>
            this.setState({ error })
        );
};