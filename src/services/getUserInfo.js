import parse from "parse-link-header";

  const getUserInfo = async ( userName = '' ) => {
    this.setState({ isLoading: true, activePage: '1' });

    if ( userName !== '' ){
        await Promise.all([
            fetch(`https://api.github.com/users/${ userName }`)
                .then((response) => response.json()
                    .then((result) => this.setState({
                        usersLinks: parse(response.headers.get('link')),
                        currentUser: result,
                    }))
                )
                .catch(error =>
                    this.setState({ error })
                ),
            fetch(`https://api.github.com/users/${ userName }/followers`)
                .then((response) => response.json()
                    .then((result) => this.setState({
                        followersLinks: parse(response.headers.get('link')),
                        followersList: result,
                }))
            )
            .catch(error =>
                this.setState({ error })
            ),
            fetch(`https://api.github.com/users/${ userName }/following`)
                .then((response) => response.json()
                    .then((result) => this.setState({
                        followingLinks: parse(response.headers.get('link')),
                        followingList: result,
                        isLoading: false
                    }))
                )
                .catch(error =>
                    this.setState({ error })
                )
        ]).catch(error =>
            this.setState({ error })
        );
    }
};

export default getUserInfo;


