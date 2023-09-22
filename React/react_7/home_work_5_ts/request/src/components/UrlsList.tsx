import UrlItem from "./UrlItem";

type UrlsListProps = {
   urls: string[];
};

export default function UrlsList({ urls }: UrlsListProps) {
   return (
      <div>
         {urls.map((url: string) => {
            return <UrlItem url={url} key={url} />;
         })}
      </div>
   );
}
