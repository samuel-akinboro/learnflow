import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "../../PrelineScript";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn Flow",
  description: "By Blackvibes",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ToastContainer />
        </body>
        <PrelineScript />
      </html>
    </AuthProvider>
  );
}
