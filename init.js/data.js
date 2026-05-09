const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Trending",   
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic City",   
  },
  {
    title: "Mountain Retreat",
    description: "Peaceful mountain cabin...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountain",   
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Treehouse in nature...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",   
  },
  {
    title: "Beachfront Paradise",
    description: "Beach condo...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Amazing Pools",   
  },
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 4000,
    location: "Scotland",
    country: "United Kingdom",
    category: "Castles",   
  },
  {
    title: "Farm Stay Experience",
    description: "Live in countryside farm...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 900,
    location: "Punjab",
    country: "India",
    category: "Farms",   
  },
  {
    title: "Arctic Igloo Stay",
    description: "Stay in ice dome...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    price: 5000,
    location: "Lapland",
    country: "Finland",
    category: "Arctic",   
  },
  {
    title: "Boat House Experience",
    description: "Stay on water...",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 1800,
    location: "Kerala",
    country: "India",
    category: "Boats",   
  },
];

module.exports = { data: sampleListings };
