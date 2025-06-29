import Header from "../components/shared/Header";
import VaultCard from "../components/vault/VaultCard";
import { vaultItems } from "../components/vault/Vault";

function Vault() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Header />
      {vaultItems.map((item, idx) => (
        <VaultCard
          key={idx}
          title={item.title}
          desc={item.desc}
          image={item.image}
          to={item.to}
        />
      ))}
    </div>
  );
}

export default Vault;
