import Image from 'next/image'
import WideImageSection from "../components/WideImageSection"
import ImageAndText from "../components/ImageAndText"
import ImageCarousle from "../components/ImageCarousle"

export default function Home() {

  const isLocal=process.env.NEXT_PUBLIC_IS_LOCAL || "";

  const CorousleImages=[
    {
      image:(isLocal) ? "/carousel/1.jpg" :"./carousel/1.jpg",
      alt:"1 Image"
    },
    {
      image:(isLocal) ? "/carousel/2.jpg" : "./carousel/2.jpg",
      alt:"2 Image"
    },
    {
      image:(isLocal) ?"/carousel/3.jpg" : "./carousel/3.jpg",
      alt:"3 Image"
    },
    {
      image:(isLocal) ?"/carousel/4.jpg":"./carousel/4.jpg",
      alt:"4 Image"
    },
    {
      image:(isLocal) ?"/carousel/5.jpg":"./carousel/5.jpg",
      alt:"5 Image"
    },
    {
      image:(isLocal) ?"/carousel/6.jpg":"./carousel/6.jpg",
      alt:"6 Image"
    }
  ]
  
  return (
    <main>
    <WideImageSection ImageUrl={(isLocal) ?"/images/wideimage.jpg" : "./images/wideimage.jpg"} heading="Home"/> 
    <ImageAndText ImageUrl={(isLocal) ? "/images/section1.jpg" : "./images/section1.jpg"} heading="Section 1" />

    <ImageAndText ImageUrl={(isLocal) ?"/images/section1.jpg":"./images/section1.jpg"} IsReverse={true} sectionId="section2" heading="Section 2" />
    <ImageCarousle CorousleImages={CorousleImages} heading="Section 3"/>
    </main>
  )
}


