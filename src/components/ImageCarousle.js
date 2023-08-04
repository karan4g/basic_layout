"use client"
import React,{useEffect} from "react";
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from "@mui/material";

export default function ImageCarousle(props) {
  const { CorousleImages,heading="Section 3" } = props;
  

  useEffect(()=>{
    const carouselFrames = Array.from(document.querySelectorAll('.carousel-frame'));
    carouselFrames.forEach(frame => makeCarousel(frame));
  },[])

function makeCarousel(frame) {
  const carouselSlide = frame.querySelector('.carousel-slide');
  const carouselImages = getImagesPlusClones();
  const prevBtn = frame.querySelector('.carousel-prev');
  const nextBtn = frame.querySelector('.carousel-next');
  const navDots = Array.from(frame.querySelectorAll('.carousel-dots li'));

  let imageCounter = 1;

  function getImagesPlusClones() {
    let images = frame.querySelectorAll('.carousel-slide img');

    const firstClone = images[0].cloneNode();
    const lastClone = images[images.length - 1].cloneNode();

    firstClone.className = 'first-clone';
    lastClone.className = 'last-clone';

    // we need clones to make an infinite loop effect
    carouselSlide.append(firstClone);
    carouselSlide.prepend(lastClone);

    // must reassign images to include the newly cloned images
    images = frame.querySelectorAll('.carousel-slide img');

    return images;
  }

  function initializeNavDots() {
    if (navDots.length) navDots[0].classList.add('active-dot');
  }

  function initializeCarousel() {
    carouselSlide.style.transform = 'translateX(-100%)';
  }

  function slideForward() {
    // first limit counter to prevent fast-change bugs
    if (imageCounter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 400ms';
    imageCounter++;
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  }

  function slideBack() {
    // first limit counter to prevent fast-change bugs
    if (imageCounter <= 0) return;
    carouselSlide.style.transition = 'transform 400ms';
    imageCounter--;
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  }

  function makeLoop() {
    // instantly move from clones to originals to produce 'infinite-loop' effect
    if (carouselImages[imageCounter].classList.contains('last-clone')) {
      carouselSlide.style.transition = 'none';
      imageCounter = carouselImages.length - 2;
      carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
    }

    if (carouselImages[imageCounter].classList.contains('first-clone')) {
      carouselSlide.style.transition = 'none';
      imageCounter = carouselImages.length - imageCounter;
      carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
    }
  }

  function goToImage(e) {
    carouselSlide.style.transition = 'transform 400ms';
    imageCounter = 1 + navDots.indexOf(e.target);
    carouselSlide.style.transform = `translateX(-${100 * imageCounter}%)`;
  }

  function highlightCurrentDot() {
    navDots.forEach((dot) => {
      if (navDots.indexOf(dot) === imageCounter - 1) {
        dot.classList.add('active-dot');
      } else {
        dot.classList.remove('active-dot');
      }
    });
  }

  function addBtnListeners() {
    nextBtn.addEventListener('click', slideForward);
    prevBtn.addEventListener('click', slideBack);
  }

  function addNavDotListeners() {
    navDots.forEach((dot) => {
      dot.addEventListener('click', goToImage);
    });
  }

  function addTransitionListener() {
    carouselSlide.addEventListener('transitionend', () => {
      makeLoop();
      highlightCurrentDot();
    });
  }

  function autoAdvance() {
    let play = setInterval(slideForward, 5000);

    frame.addEventListener('mouseover', () => {
      clearInterval(play); // pause when mouse enters carousel
    });

    frame.addEventListener('mouseout', () => {
      play = setInterval(slideForward, 5000); // resume when mouse leaves carousel
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        clearInterval(play); // pause when user leaves page
      } else {
        play = setInterval(slideForward, 5000); // resume when user returns to page
      }
    });
  }

  function buildCarousel() {
    initializeCarousel();
    initializeNavDots();
    addNavDotListeners();
    addBtnListeners();
    addTransitionListener();
    autoAdvance();
  }

  buildCarousel();
}



  return (
    <Grid id="section3" container className={`sections`} spacing={2}>
      <Grid item xs={12}>
      <Typography className="image-and-text-heading"  variant="h2">{heading}</Typography>
      </Grid>
      <Grid item xs={12}>
      <div className="carousel-frame">
          <div className="carousel-slide">
            {CorousleImages && CorousleImages.length
              ? CorousleImages.map((obj, i) => {
                  return <img key={i} src={obj.image} alt={obj.alt} />;
                })
              : ""}
          </div>
          <ArrowBackIosIcon className="carousel-prev" />
          <ArrowForwardIosIcon className="carousel-next" />
          <ol className="carousel-dots">
            {CorousleImages && CorousleImages.length
              ? CorousleImages.map((obj, i) => {
                  return (<li key={i}></li>);
                })
              : ""}
          </ol>
        </div>
      </Grid>
    </Grid>
  );
}


