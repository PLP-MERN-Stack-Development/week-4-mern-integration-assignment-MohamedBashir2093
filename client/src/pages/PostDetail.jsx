import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostById, deletePost } from '../services/api';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getPostById(id);
        setPost(res.data);
      } catch (err) {
        setError('Failed to load post');
      } finally {
        setLoading(false); // ✅ stop loading
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (!confirmDelete) return;

    try {
      await deletePost(id);
      navigate('/');
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  if (loading) return <p className="text-gray-500 text-center">Loading post...</p>; // ✅ loader
  if (error) return <p className="text-red-600">{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
      <p className="text-sm text-blue-600 mb-6">Category: {post.category?.name}</p>
      <p className="text-gray-800 leading-relaxed mb-8">{post.body}</p>

      <Link
        to={`/posts/${post._id}/edit`}
        className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition-colors"
      >
        Edit Post
      </Link>

      <button
        onClick={handleDelete}
        className="ml-4 inline-block bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors"
      >
        Delete Post
      </button>
    </div>
  );
}

export default PostDetail;
