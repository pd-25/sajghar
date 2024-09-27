
import "./globals.css";
import Header from "@/component/main/Header";
import Footer from "@/component/main/Footer";

import Script from "next/script";


export const metadata = {
  title: "Sajghor | Kolkata",
  description: "Sajghor is a boutique which creates the kind of clothes which makes the fusion between fashion and the bengali tradiotion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta name="keywords" content="" />
        <link rel="shortcut icon" type="image/png" href="images/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
          
       
              </head>
      <body >
        <Header />
        {children}

        <Footer />
        <Script strategy="afterInteractive" src="/js/jquery-3.3.1.slim.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/popper.min.js"></Script>
        <Script strategy="afterInteractive" src="/js/bootstrap.min.js"></Script>
        <Script strategy="afterInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></Script>
        <Script strategy="afterInteractive" src="/owl-carousel/js/owl.carousel.js"></Script>
        {/* <Script strategy="beforeInteractive" src="/js/custom.js"></Script> */}

      </body>

    </html>
  );
}
