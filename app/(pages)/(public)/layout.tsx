import React from "react";
import Header from "@/components/header/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* added paddinf top 16 becasue header is fixed */}
      <div className="flex-1 container mx-auto px-4 pt-16">{children}</div>
      <footer className="flex justify-center items-center px-4 h-16 bg-gray-800 text-white">
        footer
      </footer>
    </div>
  );
};

export default layout;
