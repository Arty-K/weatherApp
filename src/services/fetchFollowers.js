import parse from "parse-link-header";


const fetchFollowers = async (url) => {
    await fetch(url)
        .then(response => response.json()
            .then(data =>
                this.setState({
                    followersLinks: parse(response.headers.get('link')),
                    followersList: data,
                    isLoading: false
                })
            )
        )
        .catch(error =>
            this.setState({ error })
        );
};

export default fetchFollowers;