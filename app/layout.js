import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "NestFind",
  description: "A modern real estate marketplace for buying and renting homes.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Provider>
         <Toaster />

         {children}
        </Provider>
       </body>
    </html>
    </ClerkProvider>
  );
}
