import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Home/Components/Header";
import Home from "./Home/Home";
import { config } from "./lib/config";
import { WalletOptions } from "./Components/walletOptions";
import { Account } from "./Components/account";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (!isConnected) return <WalletOptions />;
  return <Account />;
}
function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ConnectWallet />
          <Header />
          <Home />
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

export default App;
