<!-- 
Copyright (c) 2024 Lyfex Africa. All rights reserved.
This website is licensed under the Lyfex Africa terms of use. Unauthorized copying or distribution is prohibited.
Author: Engineer Ibn Muzamir.
-->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>lyfex africa</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="img/Picture1.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet"> 

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>

    <!-- designed as template visit templates.js to edit  -->
    <site-nav></site-nav>

    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">Appointment</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb text-uppercase mb-0">
                    <li class="breadcrumb-item"><a class="text-white" href="index.php">Home</a></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Appointment</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- appointment-section designed as template visit templates.js to edit  -->
    <!-- <appointment-section></appointment-section> -->

    
    <!-- Appointment Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p class="d-inline-block border rounded-pill py-1 px-4"><a href="appointment.php">Appointment</a></p>
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
                            <div class="row g-3" appoitment-fields>
                                <div class="col-6 col-sm-6 control-group">
                                    <input type="text" class="form-control border-0" id="firstName"  placeholder="First name"  style="height: 55px;">
                                </div>
                                <div class="col-6 col-sm-6 control-group">
                                    <input type="text" class="form-control border-0" id="lastName"  placeholder="Last name"  style="height: 55px;">
                                </div>
                                
                                <div class="col-6 col-sm- control-group6">
                                    <input type="email" class="form-control border-0" id="email" placeholder="Email"  style="height: 55px;">
                                </div>
                                <div class="col-6 col-sm-6 control-group">
                                    <input type="text" class="form-control border-0" id="tel" placeholder="Mobile Phone No."   style="height: 55px;">                                 
                                </div>
                                <div class="col-6 col-sm-6 control-group">
                                    <input type="text" class="form-control border-0" id="address" placeholder="Address" style="height: 55px;">
                                </div>
                                <div class="col-6 col-sm-6 control-group">
                                    <input type="text" class="form-control border-0" id="wh-tel" placeholder="Whatsapp No."  style="height: 55px;">
                                </div>
                                <div class="col-6 col-sm-6 control-group">
                                    <input type="text" class="form-control border-0" id="age" placeholder="Age"  style="height: 55px;">
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
                                </div>
                                <div class="col-12 control-group">
                                    <textarea class="form-control border-0" rows="5" id="message" placeholder="Short description of your health condition!" ></textarea>
                                </div>
                                <div>
                                    <label class="text-primary" for="privacy-policies"><a href="privacy.php">Accept privacy policies </a></label>
                                    <input title="privacy-policies" type="checkbox" name="" id="privacy-policies">
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit" id="sendMessageButton" >Book Appointment</button>
                                </div>
                                <p id="status-message" class="text-center py-3 px-5 alert fade rounded" ></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Appointment End -->
    

    <!-- wa-action-btn designed as template visit templates.js to edit-->
    <wa-action-btn></wa-action-btn>
        
    <!-- designed as template visit templates.js to edit -->
    <site-footer></site-footer>

    <!-- Template Javascript -->
    <script src="js/templates.js"></script>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    <!-- appointment js file -->
    <script src="appointment/appointment.js"></script>

    <!-- main js -->
    <script src="js/main.js"></script>
</body>

</html>