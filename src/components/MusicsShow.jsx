export function MusicsShow(props) {

  const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdateMusic(props.music.id, params, () => event.target.reset());
      };
  
  const handleClick = () => {
    props.onDestroyMusic(props.music);
  };

  return (
    <div>
      <h1>Score information</h1>
      <p>Title: {props.music.title}</p>
      <p>Composer: {props.music.composer}</p>
      <p>File: {props.music.file}</p>
      <form onSubmit={handleSubmit}>
         <div>
           Title: <input defaultValue={props.music.name} name="title" type="text" />
         </div>
         <div>
           Composer: <input defaultValue={props.music.composer} name="composer" type="text" />
         </div>
         <div>
          File: <input defaultValue={props.music.file} name="file" type="text" />
         </div>
         <button type="submit">Update Music</button>
       </form>
       <button onClick={handleClick}>Destroy music</button>
    </div>
  );
}