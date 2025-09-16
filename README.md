# 🛍️ Products CRUD App  

A simple CRUD (Create, Read, Update, Delete) application built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **EJS** templates.  
It allows you to manage a list of products — add, view, edit, and delete them easily.

---

## ✨ Features  

- ➕ **Create**: Add new products  
- 👀 **Read**: View all products or a single product  
- ✏️ **Update**: Edit product details  
- 🗑️ **Delete**: Remove products  
- ⚠️ **Error Handling**: Custom `AppError` class  
- 🧰 **Utility**: `wrapAsync` to handle async errors  
- 🎨 **Templates**: `ejs-mate` for layouts/partials support  
- 🔄 **Method Override**: Enable PUT/PATCH/DELETE in forms  

---

## 🛠️ Tech Stack  

- 🟩 **Node.js** & **Express.js** – Server framework  
- 🍃 **MongoDB** with **Mongoose** – Database  
- 📝 **EJS** & **ejs-mate** – Templating engine  
- 🛑 **Method-Override** – HTTP verbs in forms  

---

## 🚀 Installation  

1. **Clone this repository**  

   ```bash
   git clone <repository-url>
   cd <project-folder>



📂 Project Structure

project-folder/
│
├── app.js                # 🚦 Main Express app
├── models/
│   └── products.js       # 🗄️ Product Mongoose model
├── utils/
│   ├── AppError.js       # ⚠️ Custom error class
│   └── wrapAsync.js      # 🔄 Async wrapper for routes
└── views/
    ├── home.ejs          # 🏠 Home page
    ├── error.ejs         # ❌ Error page
    ├── products/
    │   ├── index.ejs     # 📃 Show all products
    │   ├── new.ejs       # ➕ Add new product form
    │   ├── edit.ejs      # ✏️ Edit product form
    │   └── show.ejs      # 👀 Show a single product
