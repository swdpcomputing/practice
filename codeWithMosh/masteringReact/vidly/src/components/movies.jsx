import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Paginate from "./common/paginate";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4, 
    selectedGenre: {},
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres, // single term uses deconstruction to define local varible as state varaible of the same name
      selectedGenre: genres[0],
    });
  }

  handleDelete = (movieToRemove) => {
    this.setState({
      movies: this.state.movies.filter(
        (movie) => movie._id !== movieToRemove._id
      ),
    });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    //if a genre has been selected, and if the genre id is not blank, filter movies by genre. All Genres has blank id
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return {totalCount: filtered.length, data: movies};
  }

  render = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      genres,
    } = this.state;

    const {totalCount, data: movies} = this.getPagedData();

    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <ListGroup
              onItemSelect={this.handleGenreSelect}
              items={genres}
              selectedItem={selectedGenre}
            />
          </div>
          <div className="col-10">
            <p>Showing {totalCount} movies in the database.</p>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Paginate
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default Movies;
