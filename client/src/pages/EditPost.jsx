import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePost, getCategories } from '../services/api';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPostAndCategories = async () => {
      try {
        const postRes = await getPostById(id);
        setTitle(postRes.data.title);
        setBody(postRes.data.body);
        setCategory(postRes.data.category);

        const categoryRes = await getCategories();
        setCategories(categoryRes.data);
      } catch (err) {
        setError('Failed to load post or categories');
      }
    };

    fetchPostAndCategories();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body || !category) {
      setError('All fields are required');
      return;
    }

    try {
      await updatePost(id, { title, body, category });
      navigate(`/posts/${id}`);
    } catch (err) {
      setError('Failed to update post');
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Body"
          className="w-full p-2 border rounded"
          rows="6"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <select
          className="w-full p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
