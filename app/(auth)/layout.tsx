import Image from "next/image";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box border">
          <div className="flex flex-row gap-3">
            <Image src="/icons/library.png" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold ">Libracore</h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.jpg"
          alt="auth illustration"
          height={1000}
          width={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default Layout;
