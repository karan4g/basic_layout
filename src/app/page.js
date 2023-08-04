import Image from 'next/image'
import WideImageSection from "../components/WideImageSection"
import ImageAndText from "../components/ImageAndText"
import ImageCarousle from "../components/ImageCarousle"

export default function Home() {

  const CorousleImages=[
    {
      image:"/carousel/1.jpg",
      alt:"1 Image"
    },
    {
      image:"/carousel/2.jpg",
      alt:"2 Image"
    },
    {
      image:"/carousel/3.jpg",
      alt:"3 Image"
    },
    {
      image:"/carousel/4.jpg",
      alt:"4 Image"
    },
    {
      image:"/carousel/5.jpg",
      alt:"5 Image"
    },
    {
      image:"/carousel/6.jpg",
      alt:"6 Image"
    }
  ]
  
  return (
    <main>
    <WideImageSection ImageUrl={"/images/wideimage.jpg"}/> 
    <ImageAndText ImageUrl={"/images/section1.jpg"} />

    <ImageAndText ImageUrl={"/images/section1.jpg"} IsReverse={true} sectionId="section2" heading="Section 2" />
    <ImageCarousle CorousleImages={CorousleImages}/>
    </main>
  )
}


