import { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

export default function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <h1>
        User context value {user}, channel context value{" "}
        {channel}
      </h1>
    </div>
  );
}
