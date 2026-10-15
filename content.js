/* =====================================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE'S PHOTOS, VIDEOS AND SOCIAL LINKS
   (This replaces the old WordPress dashboard.)

   After editing, upload this file to GitHub again (replace the old one).
   The website updates by itself within 1–2 minutes.
   ===================================================================== */

window.SITE_CONTENT = {

  /* ---------- SOCIAL MEDIA (contact section icons) ----------
     Paste a full link between the quotes. Leave '' to hide that icon. */
  socials: {
    youtube:   'https://www.youtube.com/@mesfat_ara_maysha',
    whatsapp:  '',   // e.g. 'https://wa.me/8801XXXXXXXXX'
    facebook:  'https://www.facebook.com/people/Law-Rights-with-Mesfat/61590376767800/',
    instagram: 'https://www.instagram.com/mesfataraa',
    linkedin:  'https://www.linkedin.com/in/mesfat-ara-maysha-6b2881367/'
  },

  /* ---------- PHOTO CATEGORIES (filter buttons above the gallery) ----------
     slug = short id with no spaces, name = what visitors see. */
  photoCategories: [
    { slug: 'legal-awareness', name: 'Legal Awareness' },
    { slug: 'debate',          name: 'Debate' },
    { slug: 'hosting',         name: 'Hosting' }
  ],

  /* ---------- PHOTOS ----------
     1. Put the photo file in the  images/gallery  folder.
     2. Add one line below, like the example (remove the // to use it).
     A category button only appears if at least one photo uses it. */
  photos: [
    // { file: 'images/gallery/seminar-1.jpg', caption: 'Legal awareness seminar', categories: ['legal-awareness'] },
  ],

  /* ---------- YOUTUBE VIDEOS ----------
     Paste any YouTube link (normal, youtu.be, Shorts or embed). */
  videos: [
    // { url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', title: 'Video title', description: 'Short description (optional)' },
  ]

  /* If there are no photos AND no videos, the "Media" section is hidden
     automatically, so the site never shows an empty gallery. */
};
