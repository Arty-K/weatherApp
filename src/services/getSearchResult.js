import parse from "parse-link-header";


const getSearchResult = async (event) => {
    const input = this.state.inputValue;
    event.preventDefault();
    fetch(`https://api.github.com/search/users?q=${input}+type:org`)
        .then(response => response.json()
            .then(data =>{
                this.setState({
                    orgsLinks: parse(response.headers.get('link')),
                    organisationList: data,
                    activePage: '1',
                    isLoading: false
                })}
            )
        )
        .catch(error =>
            this.setState({ error })
        );
};


export default getSearchResult;
