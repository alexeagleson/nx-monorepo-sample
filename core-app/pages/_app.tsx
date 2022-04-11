import type { AppProps } from "next/app";
import Navigation from "../components/layouts/Navigation";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
