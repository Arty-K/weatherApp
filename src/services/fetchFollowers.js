import parse from "parse-link-header";


export default async function fetchFollowers (url) {
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