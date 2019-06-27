export default async function paginationClickOrgs ( page ) {
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
