export default async function paginationClickCollaborators ( page ) {
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


