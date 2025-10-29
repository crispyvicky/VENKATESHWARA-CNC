## Venkateshwara CNC - Next.js App

Modern, secure admin platform for managing customers, jobs, balances, payments, invoices, and gallery with Cloudinary.

### Quick Start

1) Install deps
```sh
npm i
```

2) Create `.env.local` in `VENKATESHWARA-CNC/` with:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=replace_with_strong_secret

ADMIN_EMAIL=admin@example.com
# bcrypt hash generated via: node -e "console.log(require('bcryptjs').hashSync('yourpassword',10))"
ADMIN_PASSWORD_HASH=$2a$10$your_bcrypt_hash

MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/venkateshwara
MONGODB_DB=venkateshwara

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=venkateshwara/uploads
```

3) Run
```sh
npm run dev
```

### Notes
- Only authenticated admin can access admin UI and APIs.
- Cloudinary is used for media uploads; images are displayed from `res.cloudinary.com`.
- MongoDB is used via Mongoose models for customers, jobs, payments, invoices, media.
