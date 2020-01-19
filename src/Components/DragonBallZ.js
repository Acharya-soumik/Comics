import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchDbz } from "../redux/Action";

let url = "";
function DragonBallZ(props) {
  const [planets, setPlanets] = useState("");
  const [chars, setChars] = useState("");

  useEffect(() => {
    props.getDbz("/planet");
    // props.getDbz("/character");
  }, []);
  const searchHandler = () => {
    if (planets == "") {
      url = url + "character/" + chars;
    } else if (chars == "") {
      url = url + "planet/" + planets;
    } else {
      alert("enter only 1 search");
    }

    props.getDbz(url);
    url = "";

    setChars("");
    setPlanets("");
  };

  const show = () => {
    console.log(props.showDbz);
  };

  return (
    <div>
      <h2>Dragon Ball Z</h2>
      <input
        className="form-control"
        placeholder="search for planets"
        value={planets}
        onChange={e => setPlanets(e.target.value)}
      />
      <input
        className="form-control"
        placeholder="search for characters"
        value={chars}
        onChange={e => setChars(e.target.value)}
      />

      <button onClick={searchHandler}>Show results</button>
      {props.loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          {" "}
          {props.showDbz.map(item => {
            return (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <img
                  src={`https://dragon-ball-api.herokuapp.com/api/${item.url}`}
                />
              </div>
            );
          })}
        </>
      )}
      <button onClick={show}>Show</button>
    </div>
  );
}

const mapStateToProps = state => ({
  showDbz: state.dbz.data,
  loading: state.dbz.isLoading
});

const mapDispatchToProps = dispatch => ({
  getDbz: url => dispatch(fetchDbz(url))
});

// export default DragonBallZ;
export default connect(mapStateToProps, mapDispatchToProps)(DragonBallZ);
