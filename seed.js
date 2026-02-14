const pool = require("./config/db");

const galleryData = [
  // Haircut category
  {
    title: "Modern Haircut",
    image_url:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    category: "haircut",
  },
  {
    title: "Classic Fade",
    image_url:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800",
    category: "haircut",
  },
  {
    title: "Trendy Cut",
    image_url:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    category: "haircut",
  },
  {
    title: "Short Cut",
    image_url:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800",
    category: "haircut",
  },
  {
    title: "Layered Cut",
    image_url:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    category: "haircut",
  },

  // Hair Coloring category
  {
    title: "Hair Color",
    image_url:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    category: "coloring",
  },
  {
    title: "Blonde Highlights",
    image_url:
      "https://images.unsplash.com/photo-1560869713-bf57afe34fe7?w=800",
    category: "coloring",
  },
  {
    title: "Red Hair Color",
    image_url:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    category: "coloring",
  },
  {
    title: "Brunette Color",
    image_url:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800",
    category: "coloring",
  },
  {
    title: "Balayage",
    image_url:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800",
    category: "coloring",
  },

  // Hair Styling category
  {
    title: "Hair Style",
    image_url:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800",
    category: "styling",
  },
  {
    title: "Wavy Hair",
    image_url:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800",
    category: "styling",
  },
  {
    title: "Curly Styling",
    image_url:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    category: "styling",
  },
  {
    title: "Straight Style",
    image_url:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    category: "styling",
  },
  {
    title: "Updo Style",
    image_url:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    category: "styling",
  },

  // Skincare/Facial category
  {
    title: "Facial Treatment",
    image_url:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    category: "skincare",
  },
  {
    title: "Deep Facial",
    image_url:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    category: "skincare",
  },
  {
    title: "Anti-Aging Facial",
    image_url:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800",
    category: "skincare",
  },
  {
    title: "Hydrating Facial",
    image_url:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800",
    category: "skincare",
  },
  {
    title: "Facial Massage",
    image_url:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
    category: "skincare",
  },

  // Nails/Manicure/Pedicure category
  {
    title: "Manicure",
    image_url:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
    category: "nails",
  },
  {
    title: "Pedicure",
    image_url:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800",
    category: "nails",
  },
  {
    title: "Nail Art",
    image_url:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800",
    category: "nails",
  },
  {
    title: "Gel Manicure",
    image_url:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
    category: "nails",
  },
  {
    title: "Nail Polish",
    image_url:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800",
    category: "nails",
  },
  {
    title: "Foot Spa",
    image_url:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800",
    category: "nails",
  },
  {
    title: "Acrylic Nails",
    image_url:
      "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800",
    category: "nails",
  },

  // Spa category
  {
    title: "Hair Spa",
    image_url:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800",
    category: "spa",
  },
  {
    title: "Hair Treatment",
    image_url:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800",
    category: "spa",
  },
  {
    title: "Scalp Treatment",
    image_url:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800",
    category: "spa",
  },
  {
    title: "Deep Conditioning",
    image_url:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800",
    category: "spa",
  },
  {
    title: "Relaxing Spa",
    image_url:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
    category: "spa",
  },

  // Grooming/Beard category
  {
    title: "Beard Trim",
    image_url:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800",
    category: "grooming",
  },
  {
    title: "Beard Styling",
    image_url:
      "https://images.unsplash.com/photo-1503951914875-452162b1f1f1?w=800",
    category: "grooming",
  },
  {
    title: "Classic Beard",
    image_url:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800",
    category: "grooming",
  },
  {
    title: "Beard Grooming",
    image_url:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800",
    category: "grooming",
  },
  {
    title: "Mustache Style",
    image_url:
      "https://images.unsplash.com/photo-1503951914875-452162b1f1f1?w=800",
    category: "grooming",
  },
];

async function seedGallery() {
  try {
    // Check if gallery table is empty
    const result = await pool.query("SELECT COUNT(*) FROM gallery");
    const count = parseInt(result.rows[0].count);

    if (count === 0) {
      console.log("Seeding gallery data...");

      // Insert gallery data
      for (const image of galleryData) {
        await pool.query(
          "INSERT INTO gallery (title, image_url, category) VALUES ($1, $2, $3)",
          [image.title, image.image_url, image.category],
        );
      }

      console.log("Gallery data seeded successfully!");
    } else {
      console.log(`Gallery already has ${count} images. Skipping seed.`);
    }
  } catch (error) {
    console.error("Error seeding gallery data:", error);
  }
}

module.exports = seedGallery;
