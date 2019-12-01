import React, {Component} from 'react';
import MovieList from './components/movie-list/movie-list';
import SearchBox from './components/search-box/search-box';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            searchField: ''
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=53342103cbc883b7a05c3e91e248a8a6&language=en-US&page=1&region=US')
            .then(res => res.json()).then(results => results.results)
            .then(movies => this.setState({ movies: movies }))
    }

    updateSearchField = (e) => {
        this.setState({searchField: e.target.value})
    }
    render() {
        const { movies,searchField } = this.state;
        const filteredMovies = movies.filter(movie => (
            movie.title.toLowerCase().includes(searchField.toLowerCase())
        ));
        return (
            <div className="App">
                <SearchBox placeholder="search..." handleChange={e => this.setState({searchField: e.target.value})} />
                <MovieList movies={filteredMovies}/>
            </div>
        )
    }
}

export default App;
