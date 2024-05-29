import * as React from "react";
import { useConnect } from "wagmi";

export function WalletOptions() {
  const { connectors, connect } = useConnect();
  console.log("just here");
  return connectors.map((connector) => (
    <button
      className="bg-red-900"
      key={connector.uid}
      onClick={() => connect({ connector })}
    >
      {connector.name}
    </button>
  ));
}
