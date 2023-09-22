export default function Product(props) {
   //    console.log(props);
   return (
      <div style={{ borderBottom: "1px solid black" }}>
         <p>{props.name}</p>
         <p>{props.price}</p>
      </div>
   );
}
