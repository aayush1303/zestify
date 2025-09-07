# Gusto - E-Commerce Web Application

A full-stack e-commerce web application built with React and Node.js, featuring user authentication, product management, and shopping cart functionality.

## 🚀 Features

### Backend
- **JWT Authentication** - Secure user registration and login
- **Product CRUD Operations** - Create, read, update, and delete products
- **Advanced Filtering** - Filter products by category and price range
- **Shopping Cart Management** - Add, remove, and manage cart items
- **Persistent Cart** - Cart data persists after user logout
- **MongoDB Integration** - Robust data storage with Mongoose

### Frontend
- **Responsive Design** - Mobile-first design with TailwindCSS
- **User Authentication** - Login/signup modal system
- **Product Listing** - Grid layout with category filters
- **Shopping Cart** - Full cart management with quantity controls
- **Modern UI/UX** - Clean and intuitive user interface

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - JavaScript library for UI
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd gusto
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file and add the following variables:
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key

# Start the backend server
npm run server
```

The backend server will run on `http://localhost:4000`

### 3. Frontend Setup
```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend application will run on `http://localhost:5173`

## 📁 Project Structure

```
gusto/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/
│   │   ├── cartController.js   # Cart management logic
│   │   ├── productController.js # Product CRUD operations
│   │   └── userController.js   # Authentication logic
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   ├── productModel.js    # Product schema
│   │   └── userModel.js       # User schema
│   ├── routes/
│   │   ├── cartRoute.js       # Cart API routes
│   │   ├── productRoute.js    # Product API routes
│   │   └── userRoute.js       # Authentication routes
│   ├── uploads/               # File upload directory
│   ├── package.json
│   ├── server.js              # Main server file
│   └── vercel.json            # Deployment configuration
├── frontend/
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── assets/            # Images and icons
│   │   ├── components/        # Reusable components
│   │   │   ├── AppDownload/
│   │   │   ├── Categories/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── LoginPopup/
│   │   │   ├── Navbar/
│   │   │   ├── ProductItem/
│   │   │   └── ProductListing/
│   │   ├── context/
│   │   │   └── StoreContext.jsx # Global state management
│   │   ├── pages/
│   │   │   ├── Cart/
│   │   │   └── Home/
│   │   ├── App.jsx            # Main application component
│   │   ├── index.css          # Global styles
│   │   └── main.jsx           # Application entry point
│   ├── package.json
│   ├── tailwind.config.js     # TailwindCSS configuration
│   └── vite.config.js         # Vite configuration
└── README.md
```

## 🔗 API Endpoints

### Authentication
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user

### Products
- `GET /api/product/list` - Get all products
- `GET /api/product/list?category=<category>` - Filter by category
- `GET /api/product/list?minPrice=<min>&maxPrice=<max>` - Filter by price
- `POST /api/product/add` - Add new product (admin)
- `POST /api/product/remove` - Remove product (admin)

### Cart (Authentication Required)
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user's cart

## 🎨 UI Components

- **Navbar** - Navigation with cart and user menu
- **Header** - Hero section with banner
- **Categories** - Product category filters
- **ProductListing** - Product grid with filters
- **ProductItem** - Individual product card
- **LoginPopup** - Authentication modal
- **Cart** - Shopping cart page
- **Footer** - Site footer with links

## 🚀 Deployment

### Backend Deployment (Vercel)
The backend is configured for Vercel deployment with `vercel.json`.

### Frontend Deployment
```bash
cd frontend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Aayush**

---

⭐ If you found this project helpful, please give it a star!
