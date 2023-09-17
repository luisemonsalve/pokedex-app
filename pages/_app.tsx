import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Open_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style jsx global>{`
        :root {
          --open-sans-font: ${opensans.style.fontFamily};
        }
      `}</style>
      <>
        <Component {...pageProps} />
        <ToastContainer />
      </>
    </div>
  );
}
