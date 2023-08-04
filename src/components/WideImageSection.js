// "use client"

// import  React,{useEffect} from 'react';
import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function WideImageSection(props) {
  const { ImageUrl,heading="Home" } = props;
  // console.log(ImageUrl," this is image url")

  return (
    <Grid id="home" container className="sections wide-image" spacing={2}>
      <Grid item xs={12}>
      <Typography className="image-and-text-heading"  variant="h2">{heading}</Typography>
      </Grid>
      <Grid item xs={12}>
        <div style={{ width: "100%", height: "600px", position: "relative",marginTop: "15px" }}>
          <Image src={ImageUrl} alt="Home Logo" layout="fill" />
        </div>
      </Grid>
    </Grid>
  );
}
