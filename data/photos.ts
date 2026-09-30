export interface Photo {
  id: string;
  title: string;
  subtitle: string;
  category: "Architecture" | "Monochrome" | "Street" | "Landscape" | "Atmosphere";
  aspectRatio: "tall" | "wide" | "square";
  year: string;
  location: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  src: string;
  alt: string;
  story: string;
}

export const photos: Photo[] = [
  {
    id: "photo-01",
    title: "Brutalist Geometric Echoes",
    subtitle: "High contrast concrete angles meeting the morning sky.",
    category: "Architecture",
    aspectRatio: "tall",
    year: "2025",
    location: "New Delhi, India",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "XF 23mm f/2 R WR",
      focalLength: "23mm (35mm equiv)",
      aperture: "f/5.6",
      shutter: "1/500s",
      iso: "160",
    },
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    alt: "Brutalist architectural concrete lines with sharp geometric shadows",
    story: "Studying the interplay of raw structural concrete and acute morning sunlight. Geometry in architecture mirrors the structural clarity of well-written system architectures.",
  },
  {
    id: "photo-02",
    title: "Subway Motion & Solitude",
    subtitle: "Long exposure kinetic blur in metropolitan transit.",
    category: "Street",
    aspectRatio: "wide",
    year: "2025",
    location: "Metro Station, Line 2",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "XF 35mm f/1.4 R",
      focalLength: "35mm",
      aperture: "f/8.0",
      shutter: "1/4s (Handheld)",
      iso: "200",
    },
    src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    alt: "Long exposure of train in transit with stillness in the foreground",
    story: "Captured with slow shutter to render the rush of commuters as fluid kinetic energy against the stationary structural pillars of the platform.",
  },
  {
    id: "photo-03",
    title: "Monolithic Shadows",
    subtitle: "High contrast monochrome study of window lattice grids.",
    category: "Monochrome",
    aspectRatio: "square",
    year: "2024",
    location: "Old Delhi",
    exif: {
      camera: "Sony α7 III",
      lens: "FE 50mm f/1.8",
      focalLength: "50mm",
      aperture: "f/4.0",
      shutter: "1/1000s",
      iso: "100",
    },
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "High-contrast architectural glass facade and shadow gradients",
    story: "When you eliminate chromatic information, all that remains is frequency, tone, and spatial cadence.",
  },
  {
    id: "photo-04",
    title: "Fog Over Ridge Line",
    subtitle: "Atmospheric thermal inversion across Himalayan foothills.",
    category: "Landscape",
    aspectRatio: "wide",
    year: "2024",
    location: "Himachal Pradesh",
    exif: {
      camera: "Sony α7 III",
      lens: "FE 70-200mm f/4 G",
      focalLength: "135mm",
      aperture: "f/6.3",
      shutter: "1/250s",
      iso: "200",
    },
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    alt: "Misty mountain ridges layered into morning haze",
    story: "Early morning expedition at 2,400 meters altitude. The gradient of atmospheric density mimics continuous probability distribution curves in high-dimensional space.",
  },
  {
    id: "photo-05",
    title: "Neon Rain Reflections",
    subtitle: "Wet asphalt absorbing cybernetic metropolitan luminescences.",
    category: "Atmosphere",
    aspectRatio: "tall",
    year: "2024",
    location: "Connaught Place at Midnight",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "XF 35mm f/1.4 R",
      focalLength: "35mm",
      aperture: "f/1.4",
      shutter: "1/125s",
      iso: "800",
    },
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80",
    alt: "Urban night scene with neon light reflections on wet pavement",
    story: "Reflective puddles act as organic ray-tracing buffers, refracting street lamps and neon signs into chromatic noise.",
  },
  {
    id: "photo-06",
    title: "Industrial Minimalist Stairwell",
    subtitle: "Rhythmic cadence of helical steel and natural gradient.",
    category: "Architecture",
    aspectRatio: "square",
    year: "2024",
    location: "Engineering Faculty Hall",
    exif: {
      camera: "Fujifilm X-T4",
      lens: "XF 16mm f/2.8",
      focalLength: "16mm",
      aperture: "f/4.0",
      shutter: "1/80s",
      iso: "400",
    },
    src: "https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80",
    alt: "Helical spiral steel staircase from below looking upward",
    story: "Ascending spiral steps viewed from nadir. The mathematical precision of the Fibonacci spiral translated into cold architectural steel.",
  },
];
