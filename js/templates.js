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
                        <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn btn-sm-square rounded-circle bg-white text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
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
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="about.html" class="nav-item nav-link">About</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                            <a href="service-one.html" class="dropdown-item">Nutrition Therapy for Moms</a>
                            <a href="service-two.html" class="dropdown-item">Children's Wellness Programs</a>
                            <a href="service-three.html" class="dropdown-item">Financial Literacy</a>
                        </div>
                    </div>
                    <a href="resources.html" class="nav-item nav-link">Resources</a>
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
                            <img class="img-fluid rounded w-75 align-self-end" src="img/about-1.jpg" alt="">
                            <img class="img-fluid rounded w-50 bg-white pt-3 pe-3" src="img/about-2.jpg" alt="" style="margin-top: -25%;">
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <p class="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                        <h1 class="mb-4">Why You Should Trust Us? Get To Know About Us!</h1>
                        <p>We are a dedicated venture that integrates nutrition education for children and expectant mothers with essential financial literacy programs for families. Our goal is to create a harmonious approach to overall well-being by addressing both physical health and financial stability.</p>
                        <p class="mb-4">Through our Integrated Approach to support individuals and families our their journey to live a healthier and happy life we employ a number of prepositions to be the best.</p>
                        <p><i class="far fa-check-circle text-primary me-3"></i>Experienced and Caring Team</p>
                        <p><i class="far fa-check-circle text-primary me-3"></i>Commitment to Your Family's Health</p>
                        <p><i class="far fa-check-circle text-primary me-3"></i>Holistic Wellness Focus</p>
                        <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
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
                                        <p class="text-white mb-2">Experience</p>
                                        <h5 class="text-white mb-0">Doctors</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                                        <i class="fa fa-check text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="text-white mb-2">Quality</p>
                                        <h5 class="text-white mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style="width: 55px; height: 55px;">
                                        <i class="fa fa-comment-medical text-primary"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="text-white mb-2">Positive</p>
                                        <h5 class="text-white mb-0">Consultation</h5>
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
                        <img class="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style="object-fit: cover;" alt="">
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
                    <p class="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                    <h1>Our Experience Doctors</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item position-relative rounded overflow-hidden">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="img/team-1.jpg" alt="">
                            </div>
                            <div class="team-text bg-light text-center p-4">
                                <h5>Doctor Name</h5>
                                <p class="text-primary">Department</p>
                                <div class="team-social text-center">
                                    <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item position-relative rounded overflow-hidden">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="img/team-2.jpg" alt="">
                            </div>
                            <div class="team-text bg-light text-center p-4">
                                <h5>Doctor Name</h5>
                                <p class="text-primary">Department</p>
                                <div class="team-social text-center">
                                    <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item position-relative rounded overflow-hidden">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="img/team-3.jpg" alt="">
                            </div>
                            <div class="team-text bg-light text-center p-4">
                                <h5>Doctor Name</h5>
                                <p class="text-primary">Department</p>
                                <div class="team-social text-center">
                                    <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div class="team-item position-relative rounded overflow-hidden">
                            <div class="overflow-hidden">
                                <img class="img-fluid" src="img/team-4.jpg" alt="">
                            </div>
                            <div class="team-text bg-light text-center p-4">
                                <h5>Doctor Name</h5>
                                <p class="text-primary">Department</p>
                                <div class="team-social text-center">
                                    <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                </div>
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
                        <p class="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
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
                                <h5 class="mb-0">lyfexafrica@gmail.com</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                            <form>
                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control border-0" placeholder="Your Name" style="height: 55px;">
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="email" class="form-control border-0" placeholder="Your Email" style="height: 55px;">
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control border-0" placeholder="Your Mobile" style="height: 55px;">
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <select class="form-select border-0" style="height: 55px;">
                                            <option selected>Choose Doctor</option>
                                            <option value="1">Doctor 1</option>
                                            <option value="2">Doctor 2</option>
                                            <option value="3">Doctor 3</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="date" id="date" data-target-input="nearest">
                                            <input type="text"
                                                class="form-control border-0 datetimepicker-input"
                                                placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style="height: 55px;">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="time" id="time" data-target-input="nearest">
                                            <input type="text"
                                                class="form-control border-0 datetimepicker-input"
                                                placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style="height: 55px;">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <textarea class="form-control border-0" rows="5" placeholder="Describe your problem"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                    </div>
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

class TestimonialSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML= `
        <!-- Testimonial Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <p class="d-inline-block border rounded-pill py-1 px-4">Testimonials</p>
                    <h1>What Our Clients Say!</h1>
                </div>
                <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div class="testimonial-item text-center">
                        <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style="width: 100px; height: 100px;">
                        <div class="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 class="mb-1">Patient Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div class="testimonial-item text-center">
                        <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style="width: 100px; height: 100px;">
                        <div class="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 class="mb-1">Patient Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div class="testimonial-item text-center">
                        <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style="width: 100px; height: 100px;">
                        <div class="testimonial-text rounded text-center p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 class="mb-1">Patient Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->
        `
    }
}
customElements.define('testimonial-section', TestimonialSection)

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
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Kampala, Uganda</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+256 779185563</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>lyfexafrica@gmail.com</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-skype"></i></a>
                            <a class="btn btn-outline-light btn-social rounded-circle" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Services</h5>
                        <a class="btn btn-link" href="">Nutrition Therapy for Moms</a>
                        <a class="btn btn-link" href="">Children's Wellness Programs</a>
                        <a class="btn btn-link" href="">Financial Literacy</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Quick Links</h5>
                        <a class="btn btn-link" href="">About Us</a>
                        <a class="btn btn-link" href="">Resources</a>
                        <a class="btn btn-link" href="">Contact Us</a>
                        <a class="btn btn-link" href="">Appointment</a>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h5 class="text-light mb-4">Newsletter</h5>
                        <p>Subcribe to our newsletter to recieve news concerning our company.</p>
                        <div class="position-relative mx-auto" style="max-width: 400px;">
                            <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="name@email.com">
                            <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Lyfex Africa</a>, All Right Reserved.
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            Designed By <a class="border-bottom" href="https://eurosatgroup.com/" target="_blank">Eurosat Group Of Companies</a>
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