import { memo } from "react";

type HeaderProps = {
   names?: string[];
   count?: number;
   fn: () => void;
};

function Header({ fn }: HeaderProps) {
   // for (let i = 0; i < 1000000000; i++) {}

   console.log("HEADER RENDER");
   fn();
   return <header>Header</header>;
}

export default memo(Header);
