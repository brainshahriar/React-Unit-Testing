import Logo1 from "../assets/logo192.png";
import Logo2 from "../assets/logo512.png";
const Contact = () => {
  return (
    <section>
      <div>
        <div></div>
        <div>Contact us</div>
        <div>
          We are always here to extend our helping hand. Please feel free to
          reach out to us anytime.
        </div>
      </div>
      <div>
        <div>
          Name
          <img src={Logo1} alt="star" />
        </div>
        <input type="text" placeholder="Enter your name" />
        <div>
          Email address
          <img src={Logo2} alt="star" />
        </div>
        <input type="text" placeholder="Enter your email address" />
        <div>
          Contact number
          <img src={Logo1} alt="star" />
        </div>
        <input type="text" placeholder="Enter your contact number" />
        <div>
          Message
          <img src={Logo2} alt="star" />
        </div>
        <textarea  id="textarea" type="text" placeholder="Type something..." />
        <button>Send</button>
      </div>

      <div>
        <div>
          <div></div>
          <div>Contact us</div>
          <div>
            We are always here to extend our helping hand. Please feel free to
            reach out to us anytime.
          </div>
        </div>
        <div>BJIT Academy Office</div>
        <div>
          <div>
            <img src={Logo1} alt="address" />
          </div>
          <div>
            H-2275, 2279, Pachkhula, Satarkul, Badda, Dhaka-1212, Bangladesh
          </div>
        </div>
        <div>
          <div>
            <img src={Logo2} alt="mail" />
          </div>
          <div>bjit@gmail.com</div>
        </div>
        <div>
          <div>
            <img src={Logo2} alt="phone" />
          </div>
          <div>+88-02-9889820, +8801755997099</div>
        </div>
        <iframe
          title="iframe"
          style={{ borderRadius: "5px" }}
          width="100%"
          height="340"
          id="gmap_canvas"        />
      </div>
    </section>
  );
};

export default Contact;
