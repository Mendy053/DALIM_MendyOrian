import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useUrlContext } from "../context";
import { _Url_ } from "../models";

type UrlsListProps = {
   urls: _Url_[];
};

export default function UrlsList({ urls }: UrlsListProps) {
   const [searchValue, setSearchValue] = useState<string>("");

   const { removeUrl } = useUrlContext();

   return (
      <div className="url_list_container">
         <TextField name="url" onChange={(event) => setSearchValue(event.target.value)} label="Search url"></TextField>

         <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper", marginY: 2 }}>
            {urls
               .filter((item) => item.url.toLowerCase().includes(searchValue.toLowerCase()))
               .map((item) => {
                  return (
                     <ListItem
                        key={item.id}
                        secondaryAction={
                           <IconButton edge="end" aria-label="delete" onClick={() => removeUrl && removeUrl(item.id)}>
                              <DeleteIcon />
                           </IconButton>
                        }
                     >
                        <ListItemText primary={item.url} secondary={<span>{new Date().toLocaleString()}</span>} />
                     </ListItem>
                  );
               })}
         </List>
      </div>
   );
}
