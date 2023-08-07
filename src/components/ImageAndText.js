import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function ImageAndText(props) {
  const { ImageUrl, IsReverse = false, sectionId = "section1",heading="Section 1" } = props;
  return (
    <Grid
      id={sectionId}
      container
      direction={`${IsReverse ? "row-reverse" : "row"}`}
      className={`sections ${IsReverse ? "reverse-row" : ""}`}
      spacing={2}
    >
      <Grid item xs={12}
      >
<Typography className="image-and-text-heading"  variant="h2">{heading}</Typography>

      </Grid>
      <Grid item xs={12} md={6}>
        <div
          className="custombackground-image"
          style={{
            backgroundImage: `url(${ImageUrl})`,
          }}
        >
          <span></span>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography className="paragraph" paragraph={true}>
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
  );
}
