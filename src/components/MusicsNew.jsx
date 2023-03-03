export function MusicsNew(props) {
  const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateMusic(params, () => event.target.reset());
      };
  return (
    <div>
      <h1>New Score</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Composer: <input name="composer" type="text" />
        </div>
        <div>
          File: <input name="file" type="text" />
        </div>
        <button type="submit">Create Score</button>
      </form>
    </div>
  );
}