// components/PhotoGrid.tsx
export default function PhotoGrid() {
  // Sample data for posts
  const posts = [
    { id: 1, src: "https://via.placeholder.com/300?text=Post+1" },
    { id: 2, src: "https://via.placeholder.com/300?text=Post+2" },
    { id: 3, src: "https://via.placeholder.com/300?text=Post+3" },
    { id: 4, src: "https://via.placeholder.com/300?text=Post+4" },
    { id: 5, src: "https://via.placeholder.com/300?text=Post+5" },
    { id: 6, src: "https://via.placeholder.com/300?text=Post+6" },
    { id: 7, src: "https://via.placeholder.com/300?text=Post+7" },
    { id: 8, src: "https://via.placeholder.com/300?text=Post+8" },
    { id: 9, src: "https://via.placeholder.com/300?text=Post+9" },
    // Add more posts as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts.map((post) => (
        <div key={post.id} className="relative">
          <img
            src={post.src}
            alt={`Post ${post.id}`}
            className="w-full h-auto object-cover"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">View</span>
          </div>
        </div>
      ))}
    </div>
  );
}
