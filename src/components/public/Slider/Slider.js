import React from 'react';
import {SliderData} from "../../Config.json";
const SlideImages = (images=SliderData.images) =>{
       return images.map((data,key)=>{
                return( 
                        <div key={key} className={`carousel-item ${key === 0 ? 'active':''}`}>
                            <img className="d-block img-fluid" src={data} alt={`slide-${key}`} />
                        </div> 
                    );
            });
}
const indicators = (images=SliderData.images) =>{
    return images.map((data,key)=>
                        <li key={key} data-target="#carouselExampleIndicators" className={ key === 0 ? 'active':''} data-slide-to={key}></li>
                     );
}
const Slider = () => {
                    return (
                    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {indicators()}
                            </ol>
                        <div className="carousel-inner" role="listbox">
                            {SlideImages()}
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    )
            };
export default Slider;