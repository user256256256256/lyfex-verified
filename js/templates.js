// html templates 

// nav template
class SiteNav extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->
    
    
        <!-- Topbar Start -->
        <div class="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-map-marker-alt text-primary me-2"></small>
                        <small>Kampala, Uganda</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center py-3">
                        <small class="far fa-clock text-primary me-2"></small>
                        <small>Mon - Fri : 09.00 AM - 5.00 PM</small>
                    </div>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                        <small class="fa fa-phone-alt text-primary me-2"></small>
                        <small>+256 779185563</small>
                    </div>
                    <div class="h-100 d-inline-flex align-items-center">
                        <a target="_blank" class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://www.facebook.com/profile.php?id=61555213810038"><i class="fab fa-facebook-f"></i></a>
                        <a target="_blank" class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://www.linkedin.com/company/lyfex-africa/"><i class="fab fa-linkedin-in"></i></a>
                        <a target="_blank" class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://x.com/LyfexAfrica?t=5q9aZXUY3sdUq9WHDfNHzA&s=09"><i class="fab fa-twitter"></i></a>
                        <a target="_blank" class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="https://www.instagram.com/p/C8d67UloajH/?igsh=dWpmZDJmeG1sZng="><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Topbar End -->
    
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <img class="site-logo " src="img/Picture1.png" alt="">
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" class="nav-item nav-link">Home</a>
                    <a href="about.html" class="nav-item nav-link ">About</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Offerings</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                            <a href="service-one.html" class="dropdown-item">Nuturer Nuturer's Program (NNP)</a>
                            <a href="service-two.html" class="dropdown-item">Parents's Joy Program (PJP)</a>
                            <a href="service-three.html" class="dropdown-item">NutriFinTrancy</a>
                            <a href="service-four.html" class="dropdown-item">NCD Management</a>
                            <a href="service-five.html" class="dropdown-item">Tele Nutrition</a>

                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Resources</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                            <a href="faqs.html" class="dropdown-item">FAQs</a>
                           <!--   <a href="blogs.html" class="dropdown-item">Blogs</a> -->
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                </div>
                <a href="appointment.html" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
        <!-- Navbar End -->
        `
    }
}
customElements.define('site-nav', SiteNav)

// about us

class AboutUs extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
        <!-- About Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="d-flex flex-column">
                            <img class="img-fluid rounded w-75 align-self-end" src="img/children-wellness-2.JPG" alt="">
                            <img class="img-fluid rounded w-50 bg-white pt-3 pe-3" src="img/familiy-fin-lit-2.JPG" alt="" style="margin-top: -25%;">
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <p class="d-inline-block border rounded-pill py-1 px-4"><a href="about.html">About Us</a></p>
                        <h1 class="mb-4">Get To Know Us!</h1>
                        <p>At Lyfex Africa, we are dedicated to empowering individuals and families across Africa to achieve optimal nutrition health and wellness through comprehensive nutrition therapy and nutrifintrancy services.</p>
                        <p class="mb-4">Our mission is to provide accessible, personalized, and sustainable solutions that promote long-term health and well-being. <a href="about.html"> Read more...</a></p>
                        <p><i class="far fa-check-circle text-primary me-3"></i>Experienced and Caring Team</p>
                        <p><i class="far fa-check-circle text-primary me-3"></i>Commitment to Your Family's Health</p>
                        <p><i class="far fa-check-circle text-primary me-3"></i>Holistic Wellness Focus</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
        `
    }
}
customElements.define('about-us', AboutUs)

// why-us-secction

class WhyUsSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Feature Start -->
    <div class="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="p-lg-5 ps-lg-0">
                        <p class="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
                        <h1 class="text-white mb-4">Why Choose Us</h1>
                        <p class="text-white mb-4 pb-2">Our integrated Approach to support individuals and families our their journey to live a healthier and happy life we employ a number of prepositions to be the best.</p>
                        <div class="row g-4">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                                        <i class="fa fa-user-md text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="text-white mb-2">Experienced</p>
                                        <h5 class="text-white mb-0">Caring Team</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                                        <i class="fa fa-check text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="text-white mb-2">Commitment to </p>
                                        <h5 class="text-white mb-0">Your Family's Health</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                                        <i class="fa fa-comment-medical text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="text-white mb-2">Holistic</p>
                                        <h5 class="text-white mb-0">Wellness Focus</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                                        <i class="fa fa-headphones text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="text-white mb-2">24 Hours</p>
                                        <h5 class="text-white mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/children-wellness-4.JPG" style="object-fit: cover;" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Feature End -->
        `
    }
}
customElements.define('why-us-section', WhyUsSection)

// our team

class OurTeam extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
        <!-- Team Start -->
        <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                        <p class="d-inline-block border rounded-pill py-1 px-4">Team</p>
                        <h1>Our Team</h1>
                    </div>
                    <div class="row g-4 team-cards">
                        <div class="col-lg-3 col-md-6 wow fadeInUp border border-secondary m-2" data-wow-delay="0.1s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-1.jpg" alt="">
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Mrs. Nanteza Nadia Malker</h5>
                                    <p role="button" class="text-primary">Founder & Team Lead.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp border border-secondary m-2" data-wow-delay="0.3s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-2.jpg" alt="">
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Mr. Alawi Mutebi</h5>
                                    <p role="button" class="text-primary">Business Development Consultant.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp border border-secondary m-2" data-wow-delay="0.5s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-3.jpg" alt="">
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Mrs. Aisha</h5>
                                    <p role="button" class="text-primary">Pediatrics Nurse.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp border border-secondary m-2" data-wow-delay="0.5s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-4.jpg" alt="">
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Mrs. Zalwango Hafsa</h5>
                                    <p role="button" class="text-primary">Nutrition Associate.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp border border-secondary m-2" data-wow-delay="0.5s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-5.jpg" alt="">
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Mrs. Nanteza Shakira</h5>
                                    <p role="button" class="text-primary">Professional Nutritionist & Senior Projects Associate.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp border border-secondary m-2" data-wow-delay="0.5s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-6.jpg" alt="">
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Mr. Yusuf Jabar </h5>
                                    <p role="button" class="text-primary">Professional Fitness Trainer. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Team End -->
        `
    }
}
customElements.define('our-team', OurTeam)

// appointment-section

class AppointmentSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
        <!-- Appointment Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p class="d-inline-block border rounded-pill py-1 px-4"><a href="appointment.html">Appointment</a></p>
                        <h1 class="mb-4">Make An Appointment To Visit Our Specialist</h1>
                        <p class="mb-4">Fill in the information and you will recieve a confimation email if your appointment is confirmed. You can also contact us through our email or call us.</p>
                        <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style="width: 55px; height: 55px;">
                                <i class="fa fa-phone-alt text-primary"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Call Us Now</p>
                                <h5 class="mb-0">+256 779185563</h5>
                            </div>
                        </div>
                        <div class="bg-light rounded d-flex align-items-center p-5">
                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style="width: 55px; height: 55px;">
                                <i class="fa fa-envelope-open text-primary"></i>
                            </div>
                            <div class="ms-4">
                                <p class="mb-2">Mail Us Now</p>
                                <h5 class="mb-0">info@lyfexafrica.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                            <form name="sentMessage" id="contactForm" >
                                <div class="row g-3">
                                    <div class="col-6 col-sm-6 control-group">
                                        <input type="text" class="form-control border-0" id="name" placeholder="Name"  style="height: 55px;">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-6 col-sm- control-group6">
                                        <input type="email" class="form-control border-0" id="email" placeholder="Email"  style="height: 55px;">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-6 col-sm-6 control-group">
                                        <input type="text" class="form-control border-0" id="subject" placeholder="Mobile Phone No."   style="height: 55px;">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-6 col-sm-6 control-group">
                                        <input type="text" class="form-control border-0" id="address" placeholder="Address" style="height: 55px;">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-6 col-sm-6 control-group">
                                        <input type="text" class="form-control border-0" id="wh-contact" placeholder="Whatsapp No."  style="height: 55px;">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-6 col-sm-6 control-group">
                                        <input type="text" class="form-control border-0" id="age" placeholder="Age"  style="height: 55px;">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-6 col-sm-6 control-group">
                                        <label for="Schedule">Choose Prefered Schedule:</label>
                                        <select title="schedule" class="form-control border-0" name="Schedule" id="schedule" style="height: 55px;">
                                            <option value=""></option> 
                                            <option value="Monday, 9:00am-11am">Monday, 9:00am-11:00am</option>
                                            <option value="Monday, 2:00pm-4:00pm">Monday, 2:00pm-4:00pm</option>
                                            <option value="Tuesday, 9:00am-11am">Tuesday, 9:00am-11:00am</option>
                                            <option value="Tuesday, 2:00pm-4:00pm">Tuesday, 2:00pm-4:00pm</option>                                               
                                        </select>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-6 col-sm-6 control-group">
                                        <label for="leads">Where did you hear about us:</label>
                                        <select title="leads" class="form-control border-0" name="Schedule" id="lead-location" style="height: 55px;">
                                            <option value=""></option> 
                                            <option value="facebook">Facebook</option> 
                                            <option value="twitter/X">Twitter/X</option>                                          
                                            <option value="whatsapp-group">Whatsapp-group</option>                                          
                                            <option value="friend">Friend</option>                                          
                                            <option value="website">Our website</option>                                          
                                        </select>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-12 control-group">
                                        <textarea class="form-control border-0" rows="5" id="message" placeholder="Short description of your health condition!" ></textarea>
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div>
                                        <label class="text-primary" for="privacy-policies"><a href="privacy.html">Accept privacy policies </a></label>
                                        <input title="privacy-policies" type="checkbox" name="" id="privacy-policies">
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit" id="sendMessageButton" >Book Appointment</button>
                                    </div>
                                <p id="status-message" class="text-center py-3 px-5"></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Appointment End -->
        `
    }
}
customElements.define('appointment-section', AppointmentSection)

// testimonial-section

// class TestimonialSection extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML= `
//         <!-- Testimonial Start -->
//         <div class="container-xxl py-5">
//             <div class="container">
//                 <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
//                     <p class="d-inline-block border rounded-pill py-1 px-4">Testimonials</p>
//                     <h1>What Our Clients Say!</h1>
//                 </div>
//                 <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
//                     <div class="testimonial-item text-center">
//                         <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style="width: 100px; height: 100px;">
//                         <div class="testimonial-text rounded text-center p-4">
//                             <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
//                             <h5 class="mb-1">Patient Name</h5>
//                             <span class="fst-italic">Profession</span>
//                         </div>
//                     </div>
//                     <div class="testimonial-item text-center">
//                         <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style="width: 100px; height: 100px;">
//                         <div class="testimonial-text rounded text-center p-4">
//                             <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
//                             <h5 class="mb-1">Patient Name</h5>
//                             <span class="fst-italic">Profession</span>
//                         </div>
//                     </div>
//                     <div class="testimonial-item text-center">
//                         <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style="width: 100px; height: 100px;">
//                         <div class="testimonial-text rounded text-center p-4">
//                             <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
//                             <h5 class="mb-1">Patient Name</h5>
//                             <span class="fst-italic">Profession</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <!-- Testimonial End -->
//         `
//     }
// }
// customElements.define('testimonial-section', TestimonialSection)

// site footer
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Address</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Eurosat House, Ssembeguya Rd Kampala</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+256 779185563</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@lyfexafrica.com</p>
                        <div class="d-flex pt-2">
                            <a target="_blank" class="btn btn-outline-light btn-social rounded-circle" href="https://www.facebook.com/profile.html?id=61555213810038"><i class="fab fa-facebook-f"></i></a>
                            <a target="_blank" class="btn btn-outline-light btn-social rounded-circle" href="https://www.linkedin.com/company/lyfex-africa/"><i class="fab fa-linkedin-in"></i></a>
                            <a target="_blank" class="btn btn-outline-light btn-social rounded-circle" href="https://x.com/LyfexAfrica?t=5q9aZXUY3sdUq9WHDfNHzA&s=09"><i class="fab fa-twitter"></i></a>
                            <a target="_blank" class="btn btn-outline-light btn-social rounded-circle" href="https://www.instagram.com/p/C8d67UloajH/?igsh=dWpmZDJmeG1sZng="><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Services</h5>
                        <a class="btn btn-link" href="service-one.html">Nuturer Nuturer's Program (NNP)</a>
                        <a class="btn btn-link" href="service-two.html">Parents's Joy Program (PJP)</a>
                        <a class="btn btn-link" href="service-three.html">NutriFinTrancy</a>
                        <a class="btn btn-link" href="service-four.html">NCD Management</a>
                        <a class="btn btn-link" href="service-five.html">Tele Nutrition</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Quick Links</h5>
                        <a class="btn btn-link" href="appointment.html">Appointment</a>
                        <a class="btn btn-link" href="about.html">About Us</a>
                        <a class="btn btn-link" href="privacy.html">privacy</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Lyfex-Africa</h5>
                        <p>Empowering Families and Nourishing Lives</p>
                        <a href="index.html">
                            <img class="site-logo " src="img/Picture2.png" alt="site-logo">
                        </a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="index.html">Lyfex Africa</a>, All Right Reserved.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            Powered By <a class="border-bottom" href="https://eurosatgroup.com/">Eurosat Group</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
        `
    }
}
customElements.define('site-footer', SiteFooter)

