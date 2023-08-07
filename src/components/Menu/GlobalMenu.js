"use client";

import React, { useEffect } from "react";
import Button from "@mui/material/Button";
// import { useRouter } from 'next/navigation';
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const theme = createTheme({
  // typography: {

  button: {
    // Here is where you can customise the button
    fontSize: 20,
    fontWeight: 700,
  },
  // },
});

const isLocal = process.env.NEXT_PUBLIC_IS_LOCAL || "";

export default function GlobalMenu(props) {
  const {
    MenuItems,
    parentID,
    handleClickRedirect,
    isMoble,
    openMenu,
    setOpenMenu,
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <Grid container id={parentID} className="menu-grid" spacing={0}>
        <Grid className="header-menu-grid" item xs={4} lg={2}>
          <div className="site-logo-parent" onClick={()=>handleClickRedirect("#")}>
            <Image
              className="site-logo"
              src={isLocal ? "/images/logo.svg" : "./images/logo.svg"}
              alt="Home Logo"
              height="30"
              width="30"
            />
            {/* </Grid>
        <Grid className="header-menu-grid" item xs={1}> */}
            <Typography variant="h5">My Site</Typography>
          </div>
        </Grid>
        {/* <Grid className="header-menu-grid" item xs={8}> */}
        <Box
          component={Grid}
          className="header-menu-grid"
          item
          lg={8}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          {/* display={{ xl: "none" }} */}
          {MenuItems && MenuItems.length
            ? MenuItems.map(function (obj, i) {
                return (
                  <Button
                    className="menu-buttons"
                    size="large"
                    color="info"
                    key={"menu_button"+i}
                    onClick={() => handleClickRedirect(obj.path)}
                  >
                    {obj.label}
                  </Button>
                );
              })
            : null}
        </Box>
        {/* </Grid> */}
        <Grid className="header-menu-grid" item xs={4} lg={2}>
          
            <div className="search-bar-parent">
              <TextField required id="outlined-required" label="Search" 
                  sx={{
                    // width: { xs: 160, lg: 200 },
                     height:{xs:30,lg:40},
                    "& .MuiInputBase-root": {
                        height:{xs:30,lg:40},
                    }
                }}
                 />
              {/* </Grid> *
         <Grid className="header-menu-grid" item xs={1}> */}
              <Button
                className="menu-search-button"
               
                variant="outlined"
                  sx={{
                     height:{xs:32,lg:42},
                      width:{xs:20,md:30}
                }}
              >
                <SearchIcon />
              </Button>
            </div>
        
        </Grid>

        <Box
          component={Grid}
          className="header-menu-grid"
          item
          xs={4}
          sx={{ display: { xs: "block", lg: "none" } }}
        >
        {/* {isMoble ? ( */}
            <div className="mobile-menu-bar-parent">
              <Button onClick={() => setOpenMenu(true)}>
                <MenuIcon />
              </Button>
              <SwipeableDrawer
                anchor="right"
                open={openMenu}
                onClose={() => setOpenMenu(false)}
                onOpen={() => setOpenMenu(true)}
              >
                {/* {list(MenuItems)} */}
                <SideMenuList
                  setOpenMenu={setOpenMenu}
                  MenuItems={MenuItems}
                  handleClickRedirect={handleClickRedirect}
                />
              </SwipeableDrawer>
            </div>
            </Box>
          {/* ) : ( */}
      </Grid>
    </ThemeProvider>
  );
}

const SideMenuList = (props) => {
  const { MenuItems, setOpenMenu, handleClickRedirect } = props;
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenMenu(false)}
      onKeyDown={() => setOpenMenu(false)}
    >
      <List>
        {MenuItems.map((obj, i) => (
          <div key={"parent_"+i}>
            <ListItem key={"list_item_"+i} disablePadding>
              <ListItemButton key={"list_button_"+i}  onClick={() => handleClickRedirect(obj.path)}>
                <ListItemIcon key={"list_icon"+i} >
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {obj.icon}
                </ListItemIcon>
                <ListItemText key={"list_item_text"+i}  primary={obj.label} />
              </ListItemButton>
             
            </ListItem>
            <Divider key={"divider"+i} />
           </div>
        ))}
      </List>

    </Box>
  );
};
