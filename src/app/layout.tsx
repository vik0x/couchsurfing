import type { Metadata } from "next";
import 'bulma/css/bulma.min.css';
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { appDescription, appName } from "@/settings/app";

export const metadata: Metadata = { title: "Couch Surfing" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="container is-fullhd">
          <Header title={appName} subtitle={appDescription}/>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
