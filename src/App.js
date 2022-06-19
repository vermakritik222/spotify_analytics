import logo from "./logo.svg";
import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { accessUrl, getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useLocalStorage } from "./hooks/useStorage";
import { getMe } from "./http";
import "./App.css";

const s = new SpotifyWebApi();

function App() {
  const [token, setToken, removeToken] = useLocalStorage("token", "");
  useEffect(() => {
    const token = getTokenFromResponse();
    window.location.hash = "";
    const _token = token.access_token;
    if (_token) {
      setToken(_token);
      s.setAccessToken(_token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-link">Spotify Analytics App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="btn">
          <Button
            onClick={() => (window.location = accessUrl)}
            variant="contained"
          >
            Login to spotify
          </Button>
        </div>
        <div className="btn">
          <Button
            onClick={() => {
              s.getMe().then((user) => {
                console.log("ME ----->", user);
              });

              s.getMyTopArtists().then((response) =>
                console.log("Get My Top Artists------>", response)
              );
              s.getUserPlaylists().then((playlists) => {
                console.log("Get My playlists------>", playlists);
              });
              s.getMySavedTracks().then((tracks) => {
                console.log("Get My Saved Tracks------>", tracks);
              });
              s.getMySavedAlbums().then((albums) => {
                console.log("Get My Saved Albums------>", albums);
              });
              s.getMyRecentlyPlayedTracks().then((recentlyPlayedTracks) => {
                console.log(
                  "Get My Recently Played Tracks------>",
                  recentlyPlayedTracks
                );
              });
              s.getMySavedShows().then((savedShows) => {
                console.log("Get My Saved Shows------>", savedShows);
              });
              s.getMyDevices().then((devices) => {
                console.log("Get My Devices------>", devices);
              });
              s.getMyCurrentPlaybackState().then((currentPlaybackState) => {
                console.log(
                  "Get My Current Playback State------>",
                  currentPlaybackState
                );
              });
              s.getMyCurrentPlayingTrack().then((currentPlaybackTrack) => {
                console.log(
                  "Get My Current Playback Track------>",
                  currentPlaybackTrack
                );
              });
              s.getFeaturedPlaylists().then((featuredPlaylists) => {
                console.log("Get Featured Playlists------>", featuredPlaylists);
              });
              s.getNewReleases().then((newReleases) => {
                console.log("Get New Releases------>", newReleases);
              });
            }}
            variant="contained"
          >
            get data
          </Button>
          <Button
            onClick={() => {
              getMe().then((res) => console.log(res));
              // console.log(localStorage.getItem("token").split(`"`)[1]);
            }}
          >
            get me
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
