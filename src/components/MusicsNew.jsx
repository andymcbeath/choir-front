export function MusicsNew() {
  return (
    <div>
      <h1>New Score</h1>
      <form>
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