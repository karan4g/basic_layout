"use client"

import  React,{useEffect} from 'react';
import Button from '@mui/material/Button';

import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

export default function Footer(){
    return(
        <Grid container className="footer-grid" spacing={2}>
        <Grid item xs={12}>
        <Typography  paragraph={true}>
        This is sample Layout Site made using MUI components and css
        </Typography>
        <Typography className="footer-paragraph" paragraph={true}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        </Grid>
        </Grid>
    )
}