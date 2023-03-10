export function MusicsIndex(props) {
  return (
    <div>
      <h1>All Musics</h1>
      {/* {Array.isArray(props.musics) && props.musics.map((music) => (
        <div key={music.id}>
          <h2>{music.title}</h2>
         <p>Composer: {music.composer}</p>
         <button onClick={() => props.onShowMusic(music)}>More info</button>
        </div>
     ))} */}
    </div>
  );
}