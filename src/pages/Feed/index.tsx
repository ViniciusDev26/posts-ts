
import { useEffect, useState } from "react";
import { api } from "../../apis/api";
import { useAuth } from "../../hooks/useAuth";

type TOwner = {
  name: string
  email: string
}
type TPosts = {
  id: string
  name: string
  description: string
  owner: TOwner
  created_at: Date
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<TPosts[]>([]);

  const { userData } = useAuth()

  async function getPosts() {
    // const { data: posts } = await api.get("/posts");
    // setPosts(posts);
  }

  useEffect(() => {
    getPosts();

    return;
  }, [])
  
  return (
    <>
      <h2>Olá {userData.name}</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.owner.name} - {post.name}</li>
        ))}
      </ul>
    </>
  )
}

export {Feed};