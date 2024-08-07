import { headers } from "next/headers";
import { cookieToInitialState } from "@alchemy/aa-alchemy/config";
import "@rainbow-me/rainbowkit/styles.css";
import { AlchemyProvider, ScaffoldEthAppWithProviders } from "~~/components/providers";
import { config } from "~~/config/AlchemyConfig";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "ALVO",
  description: "Dream.Persevere.Achieve.",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const initialState = cookieToInitialState(config, headers().get("cookie") ?? undefined);

  return (
    <html suppressHydrationWarning>
      <body>
        <AlchemyProvider initialState={initialState}>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </AlchemyProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
