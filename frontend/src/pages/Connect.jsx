import Header from "../components/shared/Header";
import ConnectSection from "../components/connect/ConnectSection";

function Connect() {
  return (
      <div
      className="min-h-screen bg-repeat bg-fixed bg-center"
      style={{
        backgroundColor: "#FDFCFB",
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
      }}
    >
      <Header />
      <ConnectSection />
    </div>
  );
}

export default Connect;
