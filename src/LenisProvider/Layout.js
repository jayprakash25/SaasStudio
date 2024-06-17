import React from "react";
import { ReactLenis } from "lenis/react";
// useLenis
function Layout({ children }) {
  // const lenis = useLenis(({ scroll }) => {
  //   // You can add any global scroll handling here
  // });

  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default Layout;
