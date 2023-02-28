export function MusicsIndex(props) {
  return (
    <div>
      <h1>All Musics</h1>
      {props.musics.map((music) => (
        <div key={music.id}>
          <h2>{music.title}</h2>
         <p>Title: {music.title}</p>
         <p>Composer: {music.composer}</p>
        </div>
     ))}
    </div>
  );
}