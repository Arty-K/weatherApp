export default async function paginationClickFollowing ( page ) {
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


