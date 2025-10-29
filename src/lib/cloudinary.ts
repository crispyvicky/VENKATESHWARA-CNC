import { v2 as cloudinary } from "cloudinary";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_URL } = process.env;

// Support either individual vars or a single CLOUDINARY_URL
if (CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET) {
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
  });
} else if (CLOUDINARY_URL) {
  // cloudinary SDK auto-reads CLOUDINARY_URL; set secure flag only
  cloudinary.config({ secure: true });
} else {
  throw new Error("Cloudinary configuration missing. Set CLOUDINARY_URL or individual Cloudinary env vars.");
}

export default cloudinary;


