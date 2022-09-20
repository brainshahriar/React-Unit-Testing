import Logo1 from "../assets/logo192.png";
import Logo2 from "../assets/logo512.png";
const Banner = () => {
    return(
        <section>
            <img  src={Logo1} alt='banner_img'/>
            <img  src={Logo2} alt='banner_img'/>
            <div >BJIT SMART CBT</div>
            <div>
                <span >BJIT</span> 
                <span>Unit and Intregation Testing By Jestjs</span>
            </div>
        </section>
    );
};

export default Banner;