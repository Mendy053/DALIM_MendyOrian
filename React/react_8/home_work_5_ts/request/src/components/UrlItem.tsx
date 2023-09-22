type UrlItemProps = {
   url: string;
};

export default function UrlItem({ url }: UrlItemProps) {
   return <div>{url}</div>;
}
