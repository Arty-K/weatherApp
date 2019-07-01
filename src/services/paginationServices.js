

export const paginationClickCollaborators = async ( page ) => {
    let activePage = this.state.activePage;
    const url = this.state.collaboratorsLinks;

    if ( page === 'first' && url.first) {
        activePage = url.first.page;
        this.setState({ activePage });
        await this.fetchCollaborators(url.first.url);
    }
    if ( page === 'next' && url.next) {
        activePage = url.next.page;
        this.setState({ activePage });
        await this.fetchCollaborators(url.next.url);
    }
    if ( page === 'last' && url.last ){
        activePage = url.last.page;
        this.setState({ activePage });
        await this.fetchCollaborators(url.last.url);
    }
    if ( page === 'prev' && activePage !== '1' ) {
        activePage = url.prev.page;
        this.setState({ activePage });
        await this.fetchCollaborators(url.prev.url);
    }
};

export const paginationClickFollowers = async ( page ) => {
    let activePage = this.state.activePage;
    const url = this.state.followersLinks;

    if ( page === 'first' && url.first) {
        activePage = url.first.page;
        this.setState({ activePage });
        await this.fetchFollowers(url.first.url);
    }
    if ( page === 'next' && url.next) {
        activePage = url.next.page;
        this.setState({ activePage });
        await this.fetchFollowers(url.next.url);
    }
    if ( page === 'last' && url.last ){
        activePage = url.last.page;
        this.setState({ activePage });
        await this.fetchFollowers(url.last.url);
    }
    if ( page === 'prev' && activePage !== '1' ) {
        activePage = url.prev.page;
        this.setState({ activePage });
        await this.fetchFollowers(url.prev.url);
    }
};

export const paginationClickFollowing = async ( page ) => {
    let activePage = this.state.activePage;
    const url = this.state.followingLinks;

    if ( page === 'first' && url.first) {
        activePage = url.first.page;
        this.setState({ activePage });
        await this.fetchFollowing(url.first.url);
    }
    if ( page === 'next' && url.next) {
        activePage = url.next.page;
        this.setState({ activePage });
        await this.fetchFollowing(url.next.url);
    }
    if ( page === 'last' && url.last ){
        activePage = url.last.page;
        this.setState({ activePage });
        await this.fetchFollowing(url.last.url);
    }
    if ( page === 'prev' && activePage !== '1' ) {
        activePage = url.prev.page;
        this.setState({ activePage });
        await this.fetchFollowing(url.prev.url);
    }
};

export const paginationClickOrgs = async ( page ) => {
    let activePage = this.state.activePage;
    const url = this.state.orgsLinks;

    if ( page === 'first' && url.first ) {
        activePage = url.first.page;
        this.setState({ activePage });
        await this.fetchOrgs( url.first.url );
    }
    if ( page === 'next' && url.next) {
        activePage = url.next.page;
        this.setState({ activePage });
        await this.fetchOrgs(url.next.url);
    }
    if ( page === 'last' && url.last ){
        activePage = url.last.page;
        this.setState({ activePage });
        await this.fetchOrgs(url.last.url);
    }
    if ( page === 'prev' && activePage !== '1' ) {
        activePage = url.prev.page;
        this.setState({ activePage });
        await this.fetchOrgs(url.prev.url);
    }
};

export const paginationClickUsers = async ( page ) => {
    let activePage = this.state.activePage;
    const url = this.state.usersLinks;

    if ( page === 'first' && url.first) {
        activePage = url.first.page;
        this.setState({ activePage });
        await this.fetchUsers(url.first.url);
    }
    if ( page === 'next' && url.next) {
        activePage = url.next.page;
        this.setState({ activePage });
        await this.fetchUsers(url.next.url);
    }
    if ( page === 'last' && url.last ){
        activePage = url.last.page;
        this.setState({ activePage });
        await this.fetchUsers(url.last.url);
    }
    if ( page === 'prev' && activePage !== '1' ) {
        activePage = url.prev.page;
        this.setState({ activePage });
        await this.fetchUsers(url.prev.url);
    }
};






