require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');

const products = [
  {
    _id: "000000000000000000000005",
    title: "HP Pavilion Mechanical Keyboard RGB",
    price: 79.99,
    category: "Computer Accessories",
    stock: 40,
    description: "RGB backlit mechanical keyboard with tactile switches, durable aluminum frame, and anti-ghosting keys for gaming and productivity.",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80"
  },
  {
    _id: "000000000000000000000006",
    title: "JBL Flip 6 Portable Bluetooth Speaker",
    price: 129.99,
    category: "Audio",
    stock: 22,
    description: "Waterproof Bluetooth speaker delivering powerful bass, crystal-clear sound, and up to 12 hours of battery life.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80"
  },
  {
    _id: "000000000000000000000007",
    title: "Lenovo IdeaPad Slim 5 Laptop",
    price: 799.99,
    category: "Computers",
    stock: 10,
    description: "Slim and lightweight laptop powered by AMD Ryzen 7, 16GB RAM, 512GB SSD, and a Full HD display for work and study.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
  },
  {
    _id: "000000000000000000000008",
    title: "Canon EOS R50 Mirrorless Camera",
    price: 949.99,
    category: "Cameras",
    stock: 8,
    description: "Compact mirrorless camera with 24.2MP sensor, 4K video recording, Dual Pixel autofocus, and excellent image quality.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
  },
  {
    _id: "000000000000000000000009",
    title: "Xiaomi Smart Home Security Camera",
    price: 59.99,
    category: "Smart Home",
    stock: 35,
    description: "1080p Wi-Fi security camera with night vision, motion detection, two-way audio, and mobile app integration for home monitoring.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80"
  }
];

const seedProducts = async () => {
  try {
    await connectDB();
    
    // Check if they exist to avoid duplicate key errors
    for (let product of products) {
      const exists = await Product.findById(product._id);
      if (exists) {
        await Product.findByIdAndUpdate(product._id, product);
        console.log(`Updated ${product.title}`);
      } else {
        await Product.create(product);
        console.log(`Inserted ${product.title}`);
      }
    }
    
    console.log("Seeding complete.");
    process.exit(0);
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

seedProducts();
