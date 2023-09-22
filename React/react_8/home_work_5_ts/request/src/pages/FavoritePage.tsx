import { useUrlContext } from "../context";
import UrlsList from "../components/UrlsList";

export default function FavoritePage() {
   const { urls } = useUrlContext();

   return (
      <div>
         <UrlsList urls={urls} />
      </div>
   );
}
