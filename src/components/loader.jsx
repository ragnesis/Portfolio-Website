export default function Loader() {
  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
      <img
        src="/assets/images/preloader.gif"
        alt="Loading..."
        className="w-32 h-32"
        draggable="false"
      />
    </div>
  );
}
