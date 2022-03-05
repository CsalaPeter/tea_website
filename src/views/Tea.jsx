import { useLocation } from "react-router-dom";

function Tea() {
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <span>{location.state[0]}</span>
      <br />
      <span>{location.state[1][0]}</span>, <span>{location.state[1][1]}</span>
      <br />
      <span>{location.state[2]}</span>
      <br />
      <span>{location.state[3]}</span>
    </div>
  );
}
export default Tea;
