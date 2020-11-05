function Datetime() {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString("en-US", options);
  const [hour, minute] = new Date().toLocaleTimeString("en-US").split(/:| /);

  // TODO: Update this when the time changes
  return (
    <div className="datetime">
      <p>{date}</p>
      <p>{`${hour}:${minute}`}</p>
    </div>
  );
}

export default Datetime;
