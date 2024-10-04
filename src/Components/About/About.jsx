import React from 'react'
import './About.css'
import extra1 from '../../assets/img/extra1.webp'
const About = () => {
  return (
    <div className='eri'>
<div className='about-hero_section'>
 <p> ABOUT US</p>
</div>

      
      <div className="about-us" id="about_id">
  <div className="about-us-text">
    <p className="subheader">HISTORY</p>
    <p className="header">ABOUT US</p>
    <p className="about-us-header">
     We have access to exclusive deals and packages, helping travelers save time and money
    </p>

    <p className="about-us-info">
     <span>T</span>ravel is a business that assists clients in planning and booking their trips. They provide services such as itinerary planning, flight and hotel reservations, transportation arrangements, and guided tours.
    </p>
    <button className="main-button">FIND MORE</button>
  </div>
  <div className="about-us-img-border">
    <img src={extra1} className="about-us-img" />
  </div>
</div>

<div class="members-section">
        <div class="services-section-textarea projects-section-textarea">
            <p class="services-section-text1">MEMBERS</p>
            <p class="services-section-text2">Our Dedicated Team</p>
            <p class="services-section-text3">For Your Service</p>
            <div class="about-section-span services-section-span"></div>
        </div>
        <div class="members-section-divcards">
            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src="images/member1.jpg" class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p>Engineer Whatever</p>
                    <p style={{'color': '#ff5e14'}}>Mechanical Engineer</p>
                </div>
            </div>

            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src="images/member2.jpg" class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p>Engineer Whatever</p>
                    <p style={{'color': '#ff5e14'}}>Mechanical Engineer</p>
                </div>
            </div>

            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src="images/member3.jpg" class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p >Engineer Whatever</p>
                    <p style={{'color': '#ff5e14'}}>Mechanical Engineer</p>
                </div>
            </div>

            <div class="members-section-divcard1">
                <div class="members-section-divcard1-image"><img src="images/member4.jpg" class="members-section-divcard1-image1"/></div>
                <div class="members-section-divcard1-text">
                    <p>Engineer Whatever</p>
                  <p style={{'color': '#ff5e14'}}>Mechanical Engineer</p>
                </div>
            </div>
        </div>
    </div>
    <div class="ratings-section">
        <div class="achievements">
            <div class="achievements1">
              <p class="achievements1-text1 num" data-val="860">000</p>
              <p class="achievements1-text2">Employees</p>
            </div>
      
            <div class="achievements1">
              <p class="achievements1-text3">
                <i class="fa fa-star star" aria-hidden="true"></i
                ><i class="fa fa-star star" aria-hidden="true"></i
                ><i class="fa fa-star star" aria-hidden="true"></i
                ><i class="fa fa-star star" aria-hidden="true"></i>
              </p>
              <p class="achievements1-text2 num" data-val="999">000</p>
            </div>
      
            <div class="achievements1">
              <p class="achievements1-text1 num" data-val="1021">000</p>
              <p class="achievements1-text2">Customers Served</p>
            </div>
          </div>
    </div>
    </div>

    
  )
}

export default About
