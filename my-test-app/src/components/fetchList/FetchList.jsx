import axios from 'axios';
import { useEffect, useState } from 'react';

export const FetchList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      return await axios.get('https://jsonplaceholder.typicode.com/posts');
    };

    getPosts().then(
      res => {
        const preparedData = res.data.map(post => {
          return {
            id: post.id,
            title: post.title,
          }
        });
        setPosts(preparedData)
      }
    );
  }, [])

  return (
    <ul>
      {
        posts ? posts.map(post => {
          return (<li key={post.id}
                    data-testid="post-item">
                    {post.title}
                  </li>)
        }) : null
      }
    </ul>
  )
};