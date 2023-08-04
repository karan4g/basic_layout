"use client"

import  React,{useEffect} from 'react';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from "@mui/material";
import Image from "next/image";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

 const theme = createTheme({

  // typography: {

    button: { // Here is where you can customise the button
      fontSize: 20,
      fontWeight: 700,
    },    
  // },  
});

export default function DesktopMenu(props){
    const {MenuItems,desktopID}=props;

 const { push } = useRouter();
 const handleClick=(path)=>{
    push('/'+path);
 }


    return (
      <ThemeProvider theme={theme}>
        <Grid container id={desktopID} className="menu-grid" spacing={0}>
        <Grid className="header-menu-grid" item xs={1}>
        <Image className="site-logo" src="/images/logo.svg" alt="Home Logo" height="30" width="30" />
        </Grid>
        <Grid className="header-menu-grid" item xs={1}>
        <Typography  variant="h5">
          My Site
          </Typography>
          </Grid>
        <Grid className="header-menu-grid" item xs={8}>
        {MenuItems && MenuItems.length ?
        MenuItems.map(function(obj,i){
            return(
            <Button className="menu-buttons" size="large" color="info" key={i}
            onClick={()=>handleClick(obj.path)}>
            {obj.label}
          </Button>)

        })
    : null
}
      </Grid>
      <Grid className="header-menu-grid" item xs={1}>
      <TextField
          required
          id="outlined-required"
          label="Search"
        />
        </Grid>
        <Grid className="header-menu-grid" item xs={1}>
        <Button className="menu-search-button" size="large" variant="outlined">
          <SearchIcon/>
          </Button>
        </Grid>
      </Grid>
      </ThemeProvider>
    )
}