import React from 'react'
import './App.css'
import img1 from './components/images/img1.jpg'

function App() {
  return (
    <div className="boat-website">
      <header>
        <h1 style={{fontWeight:'bold',fontFamily:'initial'}}>Welcome to Anugraha Group</h1>
        <span>Email : anugrahainn@gmail.com </span>
        <br />
        <span> Mobile : 9249974347, 9562868027</span>
        <br />
        <br />
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{borderRadius:'.5em'}}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Anugraha</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#gallery">Gallery</a>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link" href='#contact'>Contact Us</a> */}
                  <a class="nav-link" href="//wa.me/919249974347" target="_blank">Chat on WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      </header>

      <main>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 " alt="..." style={{ maxHeight: '30em', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." style={{ maxHeight: '30em', objectFit: 'cover' }} />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." style={{ maxHeight: '30em', objectFit: 'cover' }} />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <br /><br />


        <section id="about">
          <h2 style={{fontWeight:'bold'}}>About Anugraha Enterprises</h2>
          <p>Anugraha Enterprises Houseboat Service is a leading and trusted provider of houseboat experiences in the picturesque backwaters of Kerala, India.
            Established with a vision to offer unforgettable journeys through the tranquil waterways of the God's Own Country,
            Anugraha Enterprises brings together luxury, comfort, and the allure of nature to create an extraordinary escape.
            Our houseboats are meticulously designed and equipped with modern amenities to cater to the discerning tastes of our guests. Whether you are seeking a romantic getaway,
            a family vacation, or a serene retreat, our houseboats promise to take you on a voyage of relaxation and serenity.</p>

          <p>With a team of experienced and friendly staff, Anugraha Enterprises Houseboat Service ensures personalized attention to every guest, ensuring that your journey is nothing short of remarkable.
             Our skilled chefs prepare a delectable array of traditional Kerala delicacies and international cuisines, ensuring a delightful culinary experience amidst the breathtaking surroundings.
            At Anugraha Enterprises Houseboat Service, we take pride in providing a seamless and memorable houseboat experience. Our commitment to hospitality, comfort, and responsible tourism sets us apart, 
            making us the preferred choice for travelers seeking an immersive and authentic encounter with Kerala's captivating backwaters.</p>
        </section>

        <section id="services">
          <h2 style={{ fontWeight: 'bold' }}> Our Services</h2>
          <ul>
            <li>HouseBoats</li>
            <li>Resort</li>
           
          </ul>
        </section>

        <section id="gallery">
          <h2 style={{fontWeight:'bold'}}>Image Gallery</h2>
          <div className="image-gallery">
            <img src={img1} alt="Boat 1" />
            <img src={img1} alt="Boat 2" />
            <img src={img1} alt="Boat 3" />
            <img src={img1} alt="Boat 3" />
            <img src={img1} alt="Boat 3" />
            <img src={img1} alt="Boat 3" />
            <img src={img1} alt="Boat 3" />
            <img src={img1} alt="Boat 3" />
            <img src={img1} alt="Boat 3" />
            <img src={img1} alt="Boat 3" />
            {/* Add more images here */}
          </div>
        </section>


      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Anugraha Group. All rights reserved.</p>
      </footer>
    </div>)
}

export default App
