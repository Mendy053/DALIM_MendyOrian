import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { MenuItem, Menu } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { PAGES } from '../../ModelsAndConstants';

export default function Nav() {
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleOpenUserMenu}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {PAGES.map((page) => (
                            <MenuItem key={page} onClick={handleCloseUserMenu}>
                                <NavLink to={`/${page === "Home" ? "" : page}`}>{page}</NavLink>
                            </MenuItem>
                        ))}
                    </Menu>
                    {PAGES.map((page) => {
                        return <Button key={page} color="inherit">
                            <NavLink to={`/${page === "Home" ? "" : page}`}>{page}</NavLink>
                        </Button>;
                    })}
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </Box>
    );
}