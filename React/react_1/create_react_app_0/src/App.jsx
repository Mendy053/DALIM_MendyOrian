import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/Product";

function App() {
   const name = "Avi";
   return (
      <div>
         <Header name={name} />
         <Main >
            <Product name="Product 1" price={5} />
            <Product name="Product 2" price={58} />
            <Product name="Product 3" price={99} />
            <Product name="Product 4" price={51} />
         </Main>
         <Footer />
      </div>
   );
}

export default App;
