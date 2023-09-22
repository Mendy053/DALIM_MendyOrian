import { Button, Popover, Stack, Tooltip, Typography } from '@mui/material';
import { CSSProperties, MouseEvent, useEffect, useState } from 'react';
import { useFetchResult } from '../../../contexts/FetchResults';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { UrlsContextType, useUrls } from '../../../contexts/Urls';
import { SaveToLocalStorage } from '../../../Helpers';
import { LS_URLS_KEY } from '../../../primary-constants';

const paragraphStyle: CSSProperties = {
    backgroundColor: '#f0f0f0', // Background color
    padding: '16px', // Padding
    borderRadius: '8px', // Border radius
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Stack shadow
    boxSizing: "border-box",
    cursor: "pointer"
};

type ResultProps = {
    url: string;
};

function Result({ url }: ResultProps) {
    const { fetchResult } = useFetchResult();
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const { urls, setUrls }: UrlsContextType = useUrls();

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setIsSaved(false);
    }, [fetchResult]);

    const onSaveClick = () => {
        if (!isSaved) {
            const newUrls = [...urls, {
                id: new Date().toLocaleString("EN"),
                url: url
            }];
            setUrls(newUrls);
            SaveToLocalStorage(LS_URLS_KEY, JSON.stringify(newUrls));
            setIsSaved(isSaved ? false : true);
        }
    };

    return (
        <>
            {
                fetchResult &&
                <>
                    <Stack width="30vw" marginTop={3} style={paragraphStyle} onClick={handleClick}>
                        <Typography variant='body1'>
                            {fetchResult}
                        </Typography>
                    </Stack>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Typography>
                            <Tooltip title="Save URL" placement='top' arrow>
                                <Button onClick={onSaveClick} >
                                    {
                                        (!isSaved) ?
                                            <FavoriteBorderIcon color="secondary" />
                                            : <FavoriteIcon color="secondary" />
                                    }
                                </Button>
                            </Tooltip>
                        </Typography>
                    </Popover>
                </>
            }
        </>
    );
}

export default Result;
