function ListItems({ array }) {
  return (
    <div>
      {array.map((e, i) => (
        <h2>{e.team.name}</h2>
      ))}

      <br></br>
      <br></br>
    </div>
  );
}

export default ListItems;
