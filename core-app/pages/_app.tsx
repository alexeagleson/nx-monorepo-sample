import type { AppProps } from "next/app";
import "antd/dist/antd.variable.min.css";
import { theme } from "tsdx-sample-component-library";
import { ConfigProvider } from "antd";
import Navigation from "../components/layouts/Navigation";
import "./globals.css";

ConfigProvider.config({
  theme,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </ConfigProvider>
  );
}

export default MyApp;
