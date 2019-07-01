import parse from "parse-link-header";


const fetchCollaborators = async (url) => {
    await fetch(url)
        .then(response => response.json()
            .then(data =>
                this.setState({
                    collaboratorsLinks: parse(response.headers.get('link')),
                    collaboratorsList: data,
                    isLoading: false
                })
            )
        )
        .catch(error =>
            this.setState({ error })
        );
};

export default fetchCollaborators;