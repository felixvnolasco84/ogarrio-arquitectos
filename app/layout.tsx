/* eslint-disable @next/next/next-script-for-ga */
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { WithContext, Organization } from "schema-dts";
import Script from "next/script";
import "./globals.css";
import { clashDisplayRegular } from "@/utils/fonts";
import { ConvexClientProvider } from "@/providers/convex-provider";
import BreadCrumb from "@/components/BreadCrumb";
import { Toaster } from "sonner";
import { ModalProvider } from "./providers/modalProvider";
import Footer from "@/components/Footer";

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grupo Amphytrion",
  url: "https://www.amphitryon.mx/",
  logo: "https://www.amphitryon.mx/images/logo.png",
  description:
    "Grupo Amphitryon ofrece espacios exclusivos para eventos privados en la Ciudad de México.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+52-55-2305-3711",
      contactType: "Contacto",
      name: "Grupo Amphytrion",
    },
  ],
  sameAs: [
    "https://www.instagram.com/amphitryon.mx",
    "https://www.facebook.com/amphitryon.mx",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de México",
    addressCountry: "MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-Mx">
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${clashDisplayRegular.className}`}>
        <ConvexClientProvider>
          <div id="root">
            {/* <BreadCrumb
              homeElement={"Home"}
              separator={<span> | </span>}
              activeClasses="text-blue-600"
              containerClasses="flex py-5"
              listClasses="hover:underline mx-2 font-bold"
              capitalizeLinks
            /> */}
            {/* <Script
              id="org-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
              }}
            /> */}

            <main>{children}</main>
            <ModalProvider />
            <Toaster />
          </div>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
