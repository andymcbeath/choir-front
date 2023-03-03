export function MusicsShow(props) {
  return (
    <div>
      <h1>Score information</h1>
      <p>Title: {props.music.title}</p>
      <p>Composer: {props.music.composer}</p>
      <p>File: {props.music.file}</p>
    </div>
  );
}