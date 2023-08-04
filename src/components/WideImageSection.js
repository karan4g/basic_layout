// "use client"

// import  React,{useEffect} from 'react';
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function WideImageSection(props) {
  const { ImageUrl } = props;
  // console.log(ImageUrl," this is image url")

  return (
    <Grid id="home" container className="sections wide-image" spacing={2}>
      <Grid item xs={12}>
        <div style={{ width: "100%", height: "600px", position: "relative",marginTop: "15px" }}>
          <Image src={ImageUrl} alt="Home Logo" layout="fill" />
        </div>
      </Grid>
    </Grid>
  );
}
