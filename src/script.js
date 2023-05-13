const images = [
  {
    imageID: "love1",
    imageType: "love",
    imageSrc: "./assets/images/love1.JPG",
  },
  {
    imageID: "love2",
    imageType: "love",
    imageSrc: "./assets/images/love2.JPG",
  },
  {
    imageID: "love3",
    imageType: "love",
    imageSrc: "./assets/images/love3.JPG",
  },
  {
    imageID: "love4",
    imageType: "love",
    imageSrc: "./assets/images/love4.JPG",
  },
  {
    imageID: "love5",
    imageType: "love",
    imageSrc: "./assets/images/love5.JPG",
  },
  {
    imageID: "old1",
    imageType: "old",
    imageSrc: "./assets/images/old1.JPG",
  },
  {
    imageID: "old2",
    imageType: "old",
    imageSrc: "./assets/images/old2.JPG",
  },
  {
    imageID: "old3",
    imageType: "old",
    imageSrc: "./assets/images/old3.JPG",
  },
  {
    imageID: "old4",
    imageType: "old",
    imageSrc: "./assets/images/old4.JPG",
  },
  {
    imageID: "old5",
    imageType: "old",
    imageSrc: "./assets/images/old5.JPG",
  },
  {
    imageID: "rock1",
    imageType: "rock",
    imageSrc: "./assets/images/rock1.JPG",
  },
  {
    imageID: "rock2",
    imageType: "rock",
    imageSrc: "./assets/images/rock2.JPG",
  },
  {
    imageID: "rock3",
    imageType: "rock",
    imageSrc: "./assets/images/rock3.JPG",
  },
  {
    imageID: "rock4",
    imageType: "rock",
    imageSrc: "./assets/images/rock4.JPG",
  },
  {
    imageID: "rock5",
    imageType: "rock",
    imageSrc: "./assets/images/rock5.JPG",
  },
];

const love = images.filter((image) => image.imageType === "love");
const old = images.filter((image) => image.imageType === "old");
const rock = images.filter((image) => image.imageType === "rock");

const types = [love, old, rock];

const musics = [
  {
    type: "love",
    artist: "Kaset",
    song: "Sevmek Güzel",
    spotifyLink:
      "https://open.spotify.com/track/4QIPCHVNY7qsmDH0gyry9j?si=1fa5038b41164e42",
  },
  {
    type: "love",
    artist: "Barış Kocatürk",
    song: "Benim Ol Dedin",
    spotifyLink:
      "https://open.spotify.com/track/0LelyplNfe4Cov062SpI0i?si=aaeca2bfa12d46f6",
  },
  {
    type: "love",
    artist: "Batuhan Korder",
    song: "Sıcak Şarap",
    spotifyLink:
      "https://open.spotify.com/track/2EbglAExnyDNFhjDa4tMAy?si=f4ea10835e13485a",
  },
  {
    type: "love",
    artist: "İkiye On Kala",
    song: "Bütün İstanbul Biliyo",
    spotifyLink:
      "https://open.spotify.com/track/0V0bWil6rS8w4Xbn6eGwCQ?si=f3f1b1655c3d466d",
  },
  {
    type: "love",
    artist: "Yaşlı Amca",
    song: "Giderdi Hoşuma",
    spotifyLink:
      "https://open.spotify.com/track/0kSXE42CihiQ74IOrXCbO6?si=7053cc817fed4059",
  },
  {
    type: "old",
    artist: "Sibel Sezal",
    song: "Bu Kalp Seni Unutur Mu",
    spotifyLink:
      "https://open.spotify.com/track/6JbMgZ9mnzrNED37mex0ag?si=6914103ad6cc4087",
  },
  {
    type: "old",
    artist: "Erkin Koray",
    song: "Öyle Bir Geçer",
    spotifyLink:
      "https://open.spotify.com/track/0YED4pCW0UsmwAmdSebTUQ?si=cc30b1eb7e954083",
  },
  {
    type: "old",
    artist: "MFÖ",
    song: "Yalnızlık Ömür Boyu",
    spotifyLink:
      "https://open.spotify.com/track/0c5GJlfdCPau2M3Usj7uz3?si=519e70d3e60a4336",
  },
  {
    type: "old",
    artist: "Alpay",
    song: "Fabrika Kızı",
    spotifyLink:
      "https://open.spotify.com/track/6rZDPH7F1KW9iOlkdMMMMw?si=c1d0dd97d4df48b1",
  },
  {
    type: "old",
    artist: "Zeki Müren",
    song: "Ah Bu Şarkıların Gözü Kör Olsun",
    spotifyLink:
      "https://open.spotify.com/track/7xi6IGgGdjEHDxRSRTjf6i?si=0f0b96bd40a9478c",
  },
  {
    type: "rock",
    artist: "Pilli Bebek",
    song: "Bak",
    spotifyLink:
      "https://open.spotify.com/track/3Ov1olWlsSXA53OVbO4BDn?si=bf3fe422caaf4549",
  },
  {
    type: "rock",
    artist: "Pentegram",
    song: "Sur",
    spotifyLink:
      "https://open.spotify.com/track/4TPaUxDnRMdB4jfGaBMUNx?si=9a8c373348044875",
  },
  {
    type: "rock",
    artist: "Sena Şener",
    song: "Affetmem",
    spotifyLink:
      "https://open.spotify.com/track/4k38Yez6CcsKyD8mJd44nq?si=a41026600bbf4386",
  },
  {
    type: "rock",
    artist: "Kurban",
    song: "Gülümse",
    spotifyLink:
      "https://open.spotify.com/track/3YcHiSf3F9BVBmPbOqrd1v?si=0cdfd78bdef54551",
  },
  {
    type: "rock",
    artist: "Duman",
    song: "Hayatı Yaşa",
    spotifyLink:
      "https://open.spotify.com/track/29YD4LfW0PZG96EyeorX2d?si=49ed980e10bf43a0",
  },
];

const loveSongs = musics.filter((music) => {
  return music.type === "love";
});
const oldSongs = musics.filter((music) => {
  return music.type === "old";
});
const rockSongs = musics.filter((music) => {
  return music.type === "rock";
});

const cards = document.querySelector(".card-body");
const musicCard = document.querySelector(".musicCard");

function renderMusic(type) {
  let songs = [];

  if (type === "love") {
    songs = [...loveSongs];
  } else if (type === "old") {
    songs = [...oldSongs];
  } else if (type === "rock") {
    songs = [...rockSongs];
  }
  const num = Math.round(Math.random() * songs.length);
  let music = document.createElement("div");
  music.classList.add("music");
  music.innerHTML = `
        <h2>I think this will suit your mood;</h2>
        <br>
        <h3>${songs[num].artist}: ${songs[num].song}</h3>
        <a href="${songs[num].spotifyLink}" target="_blank">
        <img class="logo" src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="Spotify Logo">
    </a>
    `;
  musicCard.appendChild(music);
}

const ul = document.querySelector(".imageList");

function renderImages() {
  ul.innerHTML = "";
  for (let i = 0; i < types.length; i++) {
    const li = document.createElement("li");
    const num = Math.floor(Math.random() * types[i].length);
    li.innerHTML = `
        <img src="${types[i][num].imageSrc}" alt="${types[i][num].imageID}"/>
      `;

    li.addEventListener("click", () => {
      ul.style.display = "none";
      renderMusic(types[i][num].imageType);
    });
    ul.appendChild(li);
  }
}

const newCards = document.querySelector(".nCards");

newCards.addEventListener("click", () => {
  musicCard.innerHTML = "";
  ul.style.display = "flex";
  renderImages();
});

document.addEventListener("DOMContentLoaded", function () {
  renderImages();
});
