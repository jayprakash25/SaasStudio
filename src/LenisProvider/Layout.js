import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
function Layout({ children }) {
  const lenis = useLenis(({ scroll }) => {
    // You can add any global scroll handling here
  });

  return (
    <ReactLenis root options={{ duration: 3, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default Layout;
