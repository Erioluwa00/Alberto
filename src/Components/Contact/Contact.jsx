import './Contact.css';
import contimg from '../../assets/img/contimg.jpg';
import { FaFacebook, FaLocationArrow } from 'react-icons/fa';
function Contact(){
    let activeFAQ = null;

function toggleFAQ(index) {
  const faqItems = document.querySelectorAll(".faq-item");
  const faq = faqItems[index];
  const icon = faq.querySelector(".faq-icon");

  if (activeFAQ && activeFAQ !== faq) {
    // Close the previously active FAQ
    activeFAQ.classList.remove("faq-active");
    activeFAQ.querySelector(".faq-icon").textContent = "+";
  }

  // Toggle the current FAQ
  if (faq.classList.contains("faq-active")) {
    faq.classList.remove("faq-active");
    icon.textContent = "+";
  } else {
    faq.classList.add("faq-active");
    icon.textContent = "×";
    activeFAQ = faq;
  }
}
    return(
        <>
      
      <div class="con">
        <h2>CONTACT</h2>
    </div>
    <div class="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(0)">
                What is the best material for a wristwatch strap? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                The best materials for a wristwatch strap are leather, stainless steel, and rubber depending on the occasion and user preference.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(1)">
                How often should I service my wristwatch? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                A wristwatch should typically be serviced every 3 to 5 years, depending on the brand and usage.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(2)">
                What is the difference between automatic and quartz watches? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                Automatic watches are powered by the motion of the wearer’s wrist, while quartz watches are battery-powered.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(3)">
                Are all wristwatches waterproof? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                No, not all wristwatches are waterproof. Some are water-resistant to certain depths, but it's important to check the specifications of your watch.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(4)">
                Can I wear my wristwatch while swimming? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                Only watches labeled as water-resistant with specific depth ratings should be worn while swimming.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(5)">
                How do I know if my wristwatch is authentic? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                Authentic wristwatches will have official documentation, serial numbers, and high-quality materials. Always buy from authorized retailers.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(6)">
                What is the best wristwatch brand for beginners? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                Some good wristwatch brands for beginners include Bulova, Citizen Eco-Drive, and Michael Kors, offering a balance of affordability and quality.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(7)">
                How do I maintain a leather strap wristwatch? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                Keep the leather strap away from water, direct sunlight, and moisture. Use leather conditioners to keep the strap supple.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(8)">
                What is the purpose of the chronograph on a watch? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                A chronograph functions as a stopwatch and can be used to measure time intervals. It’s popular in racing and aviation watches.
            </div>
        </div>
        <div class="faq-item">
            <div class="faq-question" onClick="toggleFAQ(9)">
                Why are Swiss watches considered the best? <span class="faq-icon">+</span>
            </div>
            <div class="faq-answer">
                Swiss watches are known for their precision, craftsmanship, and use of high-quality materials, making them highly regarded in the industry.
            </div>
        </div>
    </div>

    <div class="contact">
        <div class="address">
          <div class="circle">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <h3>Address: <span>198 West 21th St., PA</span></h3>
        </div>
  
        <div class="address">
          <i class="fa-solid fa-phone"></i>
          <h3>Phone: <span>+1235 2355 980</span></h3>
        </div>
  
        <div class="address">
          <i class="fa-solid fa-paper-plane"></i>
          <h3>Email: <span>Info@yoursite.com</span></h3>
        </div>
  
        <div class="address">
          <i class="fa-solid fa-globe"></i>
          <h3>Website: <span>Yoursite.com</span></h3>
        </div>
      </div>
  
      <div class="firstbody">
        <div class="cont">
           {/* <img src="https://cdn.pixabay.com/photo/2018/10/02/09/52/naviforce-waterproof-watch-3718331_1280.jpg" alt=""/> */}
           {/* <img src='https://images.pexels.com/photos/6328850/pexels-photo-6328850.jpeg?auto=compress&cs=tinysrgb&w=600'/> */}
           <img src='https://wpbingosite.com/wordpress/wrish/wp-content/uploads/2021/08/1.png'></img>
          <div class="form">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea
              name="comments"
              id="comments"
              cols="62"
              rows="8"
              placeholder="Message"
            ></textarea>
            <a href="#"><button>Send Message</button></a>
          </div>
        </div>
      </div>

      <section class="store-locator">
        <div class="container">
            <h2>Find a Store Near You</h2>

            <div class="search-box">
                <input type="text" placeholder="Enter city or ZIP code" id="location-search"/>
                <button type="submit" onClick="findLocation()">Search <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div class="location-info">
                <h3>Main Store - Alberto Company &Co.</h3>
                <p><strong>Address:</strong> MODUPE HOUSE, Oyo Rd, 200211 Mokola Rd,Ibadan, Nigeria</p>
                <p><strong>Phone:</strong> <a href="tel:+7872656370">+(787)265-6370</a></p>
                <p><strong>Email:</strong> <a href="mailto:sales@shopalbertopr.com">sales@shopalbertopr.com</a></p>
            </div>

            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.2047764758076!2d-66.98699507640612!3d18.307415934233145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c02c623cefcb15f%3A0xdfd04069a573cf78!2sPR-119%2C%20Puerto%20Rico!5e1!3m2!1sen!2sng!4v1727735438822!5m2!1sen!2sng" width="600" height="450" style={{'border':'0' }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="other-locations">
                <h3>Other Locations</h3>
                <ul>
                    <li><strong>New York City:</strong> 140 NE 39th St, Miami, FL 33137</li>
                    <li><strong>Australia:</strong> 265 Collins St, Melbourne VIC 3000, Australia</li>
                    <li><strong>Tokyo:</strong>  6 Chome-10-1 Ginza, Chuo City, Tokyo 104-0061, Japan</li>
                    <li><strong>Dubai:</strong> Dubai Mall, Financial Center Rd, Downtown Dubai, UAE</li>
                    <li><strong>Switzerland:</strong> Rue du Rhône 41, 1204 Genève, Switzerland</li>
                </ul>
            </div>
        </div>
    </section>
        </>
    )
}
export default Contact;