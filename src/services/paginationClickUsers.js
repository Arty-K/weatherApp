export default async function paginationClickUsers ( page ) {
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

