import parse from "parse-link-header";


const fetchFollowing = async (url) => {
    await fetch(url)
        .then(response => response.json()
            .then(data =>
                this.setState({
                    followingLinks: parse(response.headers.get('link')),
                    followingList: data,
                    isLoading: false
                })
            )
        )
        .catch(error =>
            this.setState({ error })
        );
};

export default fetchFollowing