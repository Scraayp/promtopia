import "@/styles/globals.css";
import { Children } from "react";

export const metedata = {
  title: "Promptopatia",
  description: "Discover & share AI Prompts",
};
const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
