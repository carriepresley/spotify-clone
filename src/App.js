import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Components/Login/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useDataLayerValue } from "./Components/DataLayer/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    console.log("I have a token", user);
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
