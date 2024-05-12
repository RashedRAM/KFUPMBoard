import "./globals.css";
import UserProvider from './context/user';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const metadata = {
  title: "KFUPMBoard",
  description: "KFUPMBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ToastContainer />

        <UserProvider>
        {children}
        </UserProvider>
        </body>
    </html>
  );
}
