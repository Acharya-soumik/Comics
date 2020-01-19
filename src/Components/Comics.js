import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComic } from "../redux/Action";
let count = 10;

const Comics = props => {
  useEffect(() => {
    props.getComics();
  }, []);

  const clickHandler = () => {
    count++;
    props.getComics();
  };

  return (
    <div className="text-center pb-4 ">
      <nav className="my_nav bg-warning text-warning">hello</nav>
      <div>
        <h2 className="text-success display-2 animated jackInTheBox delay-1s ">
          Awesome Comics
        </h2>
        {props.loading ? (
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="container">
            <h2>{props.showComics.title}</h2>
            <p className="lead">{props.showComics.transcript}</p>
            <img className="img-fluid" src={props.showComics.img} />
          </div>
        )}
      </div>
      <hr />
      <button className="btn btn-warning" onClick={clickHandler}>
        Next
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  showComics: state.comic.comics,
  loading: state.comic.isLoading
});

const mapDispatchToProps = dispatch => ({
  getComics: () => dispatch(fetchComic(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comics);
