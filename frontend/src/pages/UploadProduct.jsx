import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';

const UploadProduct = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    stock: ''
  });
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Redirect if not logged in
  if (!user) {
    return (
      <div className="flex justify-center py-24">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Authentication Required</h2>
          <p className="text-gray-500">You need to log in to sell products.</p>
          <button onClick={() => navigate('/login')} className="px-6 py-2.5 bg-gray-900 hover:bg-black text-white rounded-lg font-medium transition-colors">Log In</button>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user.token}`,
        },
      };

      const uploadData = new FormData();
      uploadData.append('title', formData.title);
      uploadData.append('price', formData.price);
      uploadData.append('description', formData.description);
      uploadData.append('category', formData.category || 'General');
      uploadData.append('stock', formData.stock || 0);
      if (image) {
        uploadData.append('image', image);
      }

      await axios.post('http://localhost:5000/api/products', uploadData, config);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Error uploading product');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
        <div className="mb-8 border-b border-gray-100 pb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Sell a Product</h1>
          <p className="text-gray-500">Fill in the details below to list your product on Lumina.</p>
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Product Title</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="e.g. Wireless Headphones"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Price ($)</label>
              <input 
                type="number" 
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                required min="0" step="0.01"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required rows="4"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
              placeholder="Describe your product..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Category</label>
              <input 
                type="text" 
                name="category" 
                value={formData.category} 
                onChange={handleChange} 
                required
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="e.g. Electronics"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Stock Quantity</label>
              <input 
                type="number" 
                name="stock" 
                value={formData.stock} 
                onChange={handleChange} 
                required min="0"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                placeholder="10"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Product Image</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden bg-gray-50 hover:bg-gray-100 transition-colors group cursor-pointer h-64">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-contain p-2" />
              ) : (
                <ImageIcon className="text-gray-400 mb-4" size={48} />
              )}
              
              {!imagePreview && (
                <div className="relative z-10 text-center pointer-events-none">
                  <p className="text-gray-900 font-medium mb-1 flex items-center justify-center gap-2">
                    <Upload size={18} /> Click to upload image
                  </p>
                  <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-3.5 bg-gray-900 hover:bg-black text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="animate-spin" size={24} /> : 'List Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
