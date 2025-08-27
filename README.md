# **Express.js Beginner Tutorial**

Learn Express.js from scratch with hands-on examples. Perfect for beginners!

## **🚀 Quick Start**

1. **Install Node.js** from nodejs.org
2. **Clone and setup:**
```bash
git clone https://github.com/Ranim39/Express-Beginner-Tutorial.git
cd express-beginner-tutorial
npm install express morgan
```

## **📖 Tutorial Order**

Follow these files in order:

### **1. From HTTP to Express**
* `01-http-basics.js` - Basic Node.js HTTP server
* `02-http-app.js` - HTTP server with static files
* `03-express-basics.js` - Your first Express app

### **2. Static Files & APIs** 
* `04-express-app.js` - Serving static files
* `05-all-static.js` - Complete static server
* `06-basic-json.js` - JSON APIs
* `07-params-query.js` - URL parameters & queries

### **3. Middleware & HTTP Methods**
* `08-middleware-basic.js` - Understanding middleware
* `09-middleware-use.js` - Global middleware
* `10-middleware-options.js` - Third-party middleware
* `11-methods.js` - GET, POST, PUT, DELETE

### **4. Organization**
* `12-router-app.js` - Express Router
* `13-router-people.js` - Route definitions
* `14-router-auth.js` - Auth routes
* `15-router-controller.js` - Controllers

## **🎯 How to Run**

```bash
node filename.js
# Then visit http://localhost:5000
```

## **🧪 Testing APIs**

**Browser:** `http://localhost:5000/api/people`

**Postman/curl:**
```bash
curl -X POST http://localhost:5000/api/people \
  -H "Content-Type: application/json" \
  -d '{"name": "john"}'
```

## **🔧 Common Issues**

* **Port in use?** Kill process: `lsof -ti:5000 | xargs kill -9`
* **Module not found?** Run `npm install`
* **JSON not parsing?** Add `app.use(express.json())`

## **🎉 That's it!**

Start with `01-http-basics.js` and work through each file. Happy coding! 🚀
