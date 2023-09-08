import { useEffect, useState } from "react";
import {
  Menu,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Avatar,
  MenuItem,
  Skeleton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import beetellerLogoSVG from "../../assets/Beeteller.svg";

import { StyledButton } from "./Header.styles";
import { api } from "../../lib/axios";

const pages = ["Home", "Extrato", "Área Pix", "Cartão de crédito"];

export const Header = () => {
  const [data, setData] = useState();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    api.get("/dashboard").then((response) => setData(response.data));
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      variant="outlined"
      elevation={0}
      sx={{ backgroundColor: "#EDEDED" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
            }}
          >
            <img src={beetellerLogoSVG} alt="Beeteler nome" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#000000" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <img src={beetellerLogoSVG} alt="Beeteler nome" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              !data ? (
                <Skeleton
                  sx={{ marginRight: 3 }}
                  animation="wave"
                  width="10%"
                  key={page}
                />
              ) : (
                <StyledButton
                  color="inherit"
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  {page}
                </StyledButton>
              )
            )}
            ,
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              sx={{
                width: 56,
                height: 56,
                marginRight: 2,
                backgroundColor: "#E0E0E0",
              }}
            >
              <NotificationsNoneIcon sx={{ color: "#000000" }} />
            </IconButton>
            <IconButton
              sx={{
                width: 56,
                height: 56,
                marginRight: 2,
                backgroundColor: "#E0E0E0",
              }}
            >
              <DragHandleIcon sx={{ color: "#000000" }} />
            </IconButton>
            <IconButton>
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Foto do usuário"
                src="/avatar.jpg"
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
