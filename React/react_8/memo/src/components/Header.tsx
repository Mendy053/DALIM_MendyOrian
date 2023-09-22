import { memo } from "react";

function Header() {
   for (let i = 0; i < 1000000000; i++) {}

   console.log("HEADER RENDER");
   return <header>Header</header>;
}

export default memo(Header);
