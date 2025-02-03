"use client";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Stack from "./pages/Stack";
import Teaching from "./pages/Teaching";
import Working from "./pages/Working";
import Contact from "./pages/Contact";

export default function page() {
  return (
    <>
      <Home />
      <div className="bg-cloudWhite">
        <div>
          <Project />
          <Stack />
          <Teaching />
          <Working />
          <Contact />
        </div>
      </div>
    </>
  );
}
