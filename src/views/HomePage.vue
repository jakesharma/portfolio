<template>
    <div class=" banner " style="overflow-x: hidden;">
        <div class="z-3" style="    position: absolute;
    bottom: -5%;
    left: 5%;
    top: 20%;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: rgba(100, 100, 100, 0.500);"></div>
        <div class="z-3" style="    position: absolute;
    bottom: -5%;
    right: 5%;
    bottom: 20%;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    background-color: rgba(100, 100, 100, 0.500);"></div>
        <div class="row d-flex justify-content-between align-items-center ">
            <div class="fs-4 d-flex gap-3 banner-SocialAccount" style="">
                <!-- Facebook Icon -->
                <a href="https://www.facebook.com/jaysuthar597" target="_blank" class="p-1">
                    <i class="fa-brands fa-facebook-f "></i>
                </a>

                <!-- Instagram Icon -->
                <a href="#" class="p-1" target="_blank">
                    <i class="fa-brands fa-instagram "></i>
                </a>

                <!-- X (Twitter) Icon -->
                <a href="https://x.com/Jakeboy978?t=qOJJuN3esk6M0XlZlNQd8A&s=09" target="_blank" class="p-1">
                    <i class="fa-brands fa-x-twitter "></i>
                </a>
            </div>

            <div class="fs-6 " style="">
                <a class="nav-link p-3 d-flex align-items-center"
                    style="writing-mode: vertical-lr; position: absolute; z-index: 999; right: 0; bottom: 0;">
                    <p>Scroll Down</p><i class="fa fa-arrow-down me-1" style="margin-top: -5%;"></i>
                </a>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 
                        left-side-info
                        order-xxl-first order-xl-first order-lg-first order-md-first order-sm-last order-last 
                        position-absolute z-3" style="margin-left: 5%;" data-aos="fade-left" data-aos-duration="1000">

                <div class="px-xxl-5 px-xl-5 px-lg-5 px-md-5 px-3  ">
                    <div class="text-info ">
                        <p class="CodeDesign">&lt;/head&gt;</p>
                        <p class="CodeDesign">&lt;body&gt;</p>
                        <p class="CodeDesign ps-4 ">&lt;h1&gt;</p>
                        <h1 class="ps-5 text-light MyNameInfo">
                            <p class="">Hi,</p>
                            <p>I'm <span class="text-warning">Jai,</span></p>
                            <p>web developer</p>
                        </h1>
                        <p class="CodeDesign ps-4">&lt;/h1&gt;</p>
                        <div class="fs-6 ps-4">
                            <p><span class="CodeDesign">
                                    &lt;p&gt;
                                </span>
                                <span class="text-light" style="font-family:Arial, Helvetica, sans-serif;">
                                    Front End developer / Web Design
                                </span>
                                <span class="CodeDesign">
                                    &lt;/p&gt;
                                </span>
                            </p>
                        </div>
                        <div class="ps-4 pb-5">
                            <button class="btn btn-outline-success">
                                <a href="https://api.whatsapp.com/send?phone=919784344782&text=Hello%20there!"
                                    class=" nav-link" target="_blank">Chat me on Whatsapp
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12  order-xxl-last  order-xl-last order-lg-last order-md-last order-sm-first  order-first 
            d-flex justify-content-xl-start justify-content-center position-relative z-1 image-containers p-5 "
                style="margin-left: 40%;" data-aos="fade-right" data-aos-duration="1000">
                <!-- <div class="" style="width: 600px;"> -->
                <!-- <div class="blob">

                    </div> -->
                <img class="img-fluid gradient-image" src="../assets/image/black_and_white-jai_with_blob.png" alt=""
                    loading="lazy">
                <!-- </div> -->
            </div>
        </div>
    </div>
    <section class="ExploreSection text-center p-5 ">
        <div class="ExploreContent text-center">
            <h2>Explore My Portfolio</h2>
            <p class="mb-5">
                Delve into a collection of my project, where creativity meets functionality. Let's get started on your
                next project
                together!
            </p>
            <router-link to="/projects" class="nav-link bg-white text-black mx-auto"
                style="width: 200px;border-radius: 50px;">

                <div class="d-flex justify-content-between align-items-center text-black px-3 py-2">
                    View My Portfolio
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>
