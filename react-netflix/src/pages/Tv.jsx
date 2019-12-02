import React from "react";
import Preview from "../components/Preview";
import MovieContainer from "../components/MovieContainer";
import withLayout from "../components/withLayout";
import axios from "axios";

class Tv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies_popular: [],
      movies_week: []
    };
  }
  componentDidMount() {
    const response = axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
      )
      .then(response => {
        console.log(response);
        this.setState({ movies_popular: response.data.results });
      })
      .catch(err => {
        console.log("error", err);
      });

    console.log(response);

    const response2 = axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=a36305ddf529faa0c37acbf47e633d08&language=ko-kr"
      )
      .then(response2 => {
        console.log(response2);
        this.setState({ movies_week: response2.data.results });
      })
      .catch(err => {
        console.log("error", err);
      });

    console.log(response2);
  }
  render() {
    return (
      <div style={{ marginTop: "43%", overflowX: "hidden" }}>
        <Preview />
        <MovieContainer title="인기 영화" movies={this.state.movies_popular} />
        <MovieContainer
          title="이번 주의 영화"
          movies={this.state.movies_week}
        />
      </div>
    );
  }
}
export default withLayout(Tv);
