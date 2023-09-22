import { UrlsProvider } from "../../contexts/Urls";
import List from "./list";

export default function Favorite() {
    return (
        <>
            <UrlsProvider>
                <List />
            </UrlsProvider>
        </>
    );
}