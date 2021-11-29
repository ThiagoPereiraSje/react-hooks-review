import { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${idFromButton}`
      )
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButton]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleClick}>Fetch Post</button>

      <p>{post.title}</p>
    </div>
  );
}
