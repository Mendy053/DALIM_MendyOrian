import { Box, Button, Stack, Tooltip, Typography } from "@mui/material";
import { useUrls } from "../../../contexts/Urls";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SaveToLocalStorage } from "../../../Helpers";
import { LS_URLS_KEY } from "../../../primary-constants";
import { useEffect } from "react";

export default function List() {
    const { urls, setUrls } = useUrls();

    const removeFavorite = (id: string) => {
        setUrls(urls.filter((item) => {
            return item.id !== id;
        }));
    };

    useEffect(() => {
        SaveToLocalStorage(LS_URLS_KEY, JSON.stringify(urls));
    }, [urls]);

    return (
        <Stack spacing={4} p={5}  >
            {
                urls.map(item => {
                    return <Box display="flex" key={item.id}>
                        <Tooltip title="Remove From Favorite" arrow placement="top">
                            <Button onClick={() => removeFavorite(item.id)}>
                                <FavoriteIcon style={{ display: "inline-block" }} color="secondary" />
                            </Button>
                        </Tooltip>
                        <Box >
                            <Typography variant="body1" >{item.url}</Typography>
                            <Typography variant="body1" color="gray" fontSize="small">{item.id}</Typography>
                        </Box>
                    </Box>;
                })
            }
        </Stack>
    );
};