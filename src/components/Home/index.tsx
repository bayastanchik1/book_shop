import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Kategory from "../Kategory";

export default function SimpleSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="container">

    <div className="bg-goto">  
    <Slider {...settings}>
    <div className="bg-foto">
        <img src="https://s3-alpha-sig.figma.com/img/9907/f471/e098b3cca37451d978d09831db01b86d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxUYmQdgudtY99Oqvoh5~ugq7Q8~NvCMId16GpAEsV8e3sV8ZwEI-HYwDtWR6kTU1P9~Y3n1Job3qoyYzEi2qLqpoTqefUZ5WnMINcz1ZY15OfQqAgGmGv7qVqEMvofX3nkOHwNbAlxGWX3rmDuYYkT3N0wDFDtH-Vpb1QqH0oFhnseyrzoAM5sL4bwxx32Yqtk2JFjTnx-eNQduRCU3jRdWMk1qmI8EZZH2BqVLYT-MBVzcS8-ax402RLLOlHhOZgWmW5y1cXjZV5gHt7Mx-V8dn6XFyujEZSrnlHmT~qsj1vSxeJB7BJRv-AD44ElzJYALCq1wr13~aIaUSDypug__" alt="" />
    </div>
    <div className="bg-foto">
        <img src="https://s3-alpha-sig.figma.com/img/9907/f471/e098b3cca37451d978d09831db01b86d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxUYmQdgudtY99Oqvoh5~ugq7Q8~NvCMId16GpAEsV8e3sV8ZwEI-HYwDtWR6kTU1P9~Y3n1Job3qoyYzEi2qLqpoTqefUZ5WnMINcz1ZY15OfQqAgGmGv7qVqEMvofX3nkOHwNbAlxGWX3rmDuYYkT3N0wDFDtH-Vpb1QqH0oFhnseyrzoAM5sL4bwxx32Yqtk2JFjTnx-eNQduRCU3jRdWMk1qmI8EZZH2BqVLYT-MBVzcS8-ax402RLLOlHhOZgWmW5y1cXjZV5gHt7Mx-V8dn6XFyujEZSrnlHmT~qsj1vSxeJB7BJRv-AD44ElzJYALCq1wr13~aIaUSDypug__" alt="" />
    </div>
    <div className="bg-foto">
        <img src="https://s3-alpha-sig.figma.com/img/9907/f471/e098b3cca37451d978d09831db01b86d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxUYmQdgudtY99Oqvoh5~ugq7Q8~NvCMId16GpAEsV8e3sV8ZwEI-HYwDtWR6kTU1P9~Y3n1Job3qoyYzEi2qLqpoTqefUZ5WnMINcz1ZY15OfQqAgGmGv7qVqEMvofX3nkOHwNbAlxGWX3rmDuYYkT3N0wDFDtH-Vpb1QqH0oFhnseyrzoAM5sL4bwxx32Yqtk2JFjTnx-eNQduRCU3jRdWMk1qmI8EZZH2BqVLYT-MBVzcS8-ax402RLLOlHhOZgWmW5y1cXjZV5gHt7Mx-V8dn6XFyujEZSrnlHmT~qsj1vSxeJB7BJRv-AD44ElzJYALCq1wr13~aIaUSDypug__" alt="" />
    </div>
    <div className="bg-foto">
        <img src="https://s3-alpha-sig.figma.com/img/9907/f471/e098b3cca37451d978d09831db01b86d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxUYmQdgudtY99Oqvoh5~ugq7Q8~NvCMId16GpAEsV8e3sV8ZwEI-HYwDtWR6kTU1P9~Y3n1Job3qoyYzEi2qLqpoTqefUZ5WnMINcz1ZY15OfQqAgGmGv7qVqEMvofX3nkOHwNbAlxGWX3rmDuYYkT3N0wDFDtH-Vpb1QqH0oFhnseyrzoAM5sL4bwxx32Yqtk2JFjTnx-eNQduRCU3jRdWMk1qmI8EZZH2BqVLYT-MBVzcS8-ax402RLLOlHhOZgWmW5y1cXjZV5gHt7Mx-V8dn6XFyujEZSrnlHmT~qsj1vSxeJB7BJRv-AD44ElzJYALCq1wr13~aIaUSDypug__" alt="" />
    </div>
   
    </Slider>
    </div>
    <div className="">
    {/* {
      datas.map((el:IProduct) =>  <Kategory el={el}/>)
    } */}
    <Kategory/>
    </div>
    </div>
  );
}