import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background-image.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.55)",
        }}
      />
      <Navbar />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default Layout;
