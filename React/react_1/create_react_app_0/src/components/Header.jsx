import Navbar from "./Navbar";

export default function Header(props) {
   return (
      <>
         <header>
            <Navbar />
         </header>
         <h3>First App {props.name}</h3>
      </>
   );
}
