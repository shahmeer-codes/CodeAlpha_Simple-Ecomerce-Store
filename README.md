# Simple E-Commerce Store

A fully functional, responsive Simple E-Commerce Store built using HTML5, Tailwind CSS, Vanilla JavaScript, Node.js, Express, and MongoDB. 

## Features

- **User Authentication:** Registration and Login using JWT and bcrypt.
- **Product Listing & Details:** Browse products dynamically fetched from the database. View full product details including stock and category.
- **Shopping Cart:** Add, update, and remove products. Cart is synced with the backend database per user.
- **Checkout & Orders:** Place orders with shipping information. View order history and order success confirmation.
- **Admin Dashboard:** Admins can view all orders, manage products, and upload product images.
- **Image Upload:** Product image uploading powered by Multer and Cloudinary.
- **Responsive Design:** Fully responsive modern UI built with Tailwind CSS.

## Tech Stack

**Frontend:**
- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript (ES6)

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) for Authentication
- bcrypt for Password Hashing
- Multer & Cloudinary for Image Uploads

## Folder Structure

```
simple-ecommerce/
├── frontend/
│   ├── index.html            # Main Entry (Home / Product Listing)
│   ├── css/
│   │   └── style.css         # Custom animations and base styles
│   ├── js/
│   │   ├── api.js            # Fetch wrappers & Toasts
│   │   ├── auth.js           # Auth & Session handling
│   │   ├── cart.js           # Cart management
│   │   ├── main.js           # Products rendering
│   │   └── admin.js          # Admin dashboard logic
│   └── pages/
│       ├── login.html
│       ├── register.html
│       ├── product.html
│       ├── cart.html
│       ├── checkout.html
│       ├── success.html
│       └── admin.html
└── backend/
    ├── server.js             # Express entry point
    ├── config/
    │   └── db.js             # MongoDB connection
    ├── models/
    │   ├── User.js
    │   ├── Product.js
    │   ├── Order.js
    │   └── Cart.js
    ├── controllers/
    │   ├── authController.js
    │   ├── productController.js
    │   ├── cartController.js
    │   └── orderController.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── productRoutes.js
    │   ├── cartRoutes.js
    │   └── orderRoutes.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   └── uploadMiddleware.js
    ├── utils/
    │   └── generateToken.js
    ├── package.json
    └── .env
```

## Installation & Setup

1. **Navigate to the Backend directory:**
   ```bash
   cd backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Update the `.env` file in the `backend/` directory with your actual credentials:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Run the Backend Server:**
   ```bash
   npm run server
   ```

5. **Run the Frontend:**
   Use any local server (like Live Server extension in VSCode, or `npx serve frontend`) to serve the files inside the `frontend/` directory. Access it in your browser (e.g., `http://127.0.0.1:5500/frontend/index.html`).

## API Endpoints

**Authentication:**
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

**Products:**
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

**Cart:**
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update item quantity
- `DELETE /api/cart/:id` - Remove item from cart
- `DELETE /api/cart` - Clear entire cart

**Orders:**
- `POST /api/orders` - Place a new order
- `GET /api/orders` - Get orders (All if Admin, personal if User)
- `GET /api/orders/:id` - Get order details

## Screenshots Section

*(Insert screenshots of Home page, Cart, Checkout, Admin dashboard here)*

## Future Improvements

- Add pagination for the product list on the home page.
- Add product reviews and ratings.
- Integrate a real payment gateway (e.g., Stripe, PayPal).
- Advanced search and filtering (by category, price range).
- Email notifications for order confirmations.
