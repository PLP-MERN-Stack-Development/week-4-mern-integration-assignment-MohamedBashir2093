import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/api';

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getPosts();
        setPosts(res.data);
      } catch (err) {
        setError('Failed to load posts');
      } finally {
        setLoading(false); // ✅ end loading
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-gray-500 text-center">Loading posts...</p>; // ✅ loader

  return (
    <div className="max-w-4xl mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">All Blog Posts</h1>
      {error && <p className="text-red-600">{error}</p>}

      {posts.map((post) => (
        <Link
          key={post._id}
          to={`/posts/${post._id}`}
          className="block border border-gray-200 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-5 mb-4"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">{post.title}</h2>
          <p className="text-sm text-blue-600 font-medium mb-2">
            Category: {post.category?.name}
          </p>
          <p className="text-gray-600 line-clamp-3">{post.body}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;
