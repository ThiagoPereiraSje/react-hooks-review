import { useEffect, useState } from "react";
import axios from "axios";

export default function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      .then((res) => {
        setPost(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <p>{post.title}</p>
    </div>
  );
}
