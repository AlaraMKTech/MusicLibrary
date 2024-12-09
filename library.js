const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


printTracks: function() {
       for (const trackId in this.tracks) {
         const track = this.tracks[trackId];
         const trackName = track.name;
         const trackArtist = track.artist;
         const trackAlbum = track.album;
         console.log(`${trackId}: ${trackName} by ${trackArtist} from ${trackAlbum}`);
       }
     },

printPlaylist: function(playlistId) {
       const playlist = this.playlists[playlistId];
       if (playlist) {
         const playlistName = playlist.name;
         const numberOfTracks = playlist.tracks.length;
         console.log(`${playlistId}: ${playlistName} - ${numberOfTracks} tracks`);
         for (const trackId of playlist.tracks) {
           const track = this.tracks[trackId];
           const trackName = track.name;
           const trackArtist = track.artist;
           const trackAlbum = track.album;
           console.log(`${trackId}: ${trackName} by ${trackArtist} from ${trackAlbum}`);
         }
       } else {
         console.log("Playlist not found.");
       }
},

addTrackToPlaylist: function(trackId, playlistId) {
       if (this.tracks[trackId] && this.playlists[playlistId]) {
         const playlist = this.playlists[playlistId];
         if (!playlist.tracks.includes(trackId)) {
           playlist.tracks.push(trackId);
           console.log(`Track ${trackId} added to playlist ${playlistId}.`);
         } else {
           console.log(`Track ${trackId} already exists in playlist ${playlistId}.`);
         }
       } else {
         console.log("Track or playlist not found.");
       }
},

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},

addTrack: function(name, artist, album) {
       let tracksObject = this.tracks;
       let trackId = "t" + generateUid();
       const allTrackIds = Object.keys(tracksObject);
       if (allTrackIds.includes(trackId)) {
           console.log("This track already exists.");
       } else {
           tracksObject[trackId] = {
               id: trackId,
               name: name,
               artist: artist,
               album: album,
           };
           console.log(`Track ${trackId} added to library.`);
       }
}, 

addPlaylist: function(name) {
       let newPlaylist = "p" + generateUid();
       this.playlists[newPlaylist] = {
         id: newPlaylist,
         name: name,
         tracks: []
       };

       console.log(`Playlist "${name}" added to the library.`);
     },

};

printPlaylist('p01');
printTracks();
addPlaylist("Music for Dogs");
addPlaylist("Music for Cats");
addTrackToPlaylist('t03', 'p01');
addTrack("Cody the Corgi", "Cody", "Dog Music"),
addTrack("Coding Lowfi", "Aoife", "Coding Lowfi Classics");





