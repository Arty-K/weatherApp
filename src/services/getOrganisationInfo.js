import parse from "parse-link-header";

export default async function getOrganisationInfo ( orgName = '' ) {
    this.setState({ isLoading: true });
    if ( orgName !== '' ){
        await Promise.all([
            fetch(`https://api.github.com/orgs/${ orgName }`)
                .then(response => response.json()
                    .then(data => {
                        this.setState({
                            currentOrganisation: data
                        })}
                    )
                )
                .catch(error =>
                    this.setState({ error })
                ),
            fetch(`https://api.github.com/orgs/${ orgName }/members`)
                .then(response => response.json()
                    .then(data =>{
                        this.setState({
                            usersLinks: parse(response.headers.get('link')),
                            membersList: data,
                        })}
                    )
                )
                .catch(error =>
                    this.setState({ error })
                ),
            fetch(`https://api.github.com/orgs/${ orgName }/public_members`)
                .then(response => response.json()
                    .then(data =>{
                        this.setState({
                            collaboratorsLinks: parse(response.headers.get('link')),
                            collaboratorsList: data,
                            isLoading: false
                        })}
                    )
                )
        ]).catch(error =>
            this.setState({ error })
        );
    }
};



