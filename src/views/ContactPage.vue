<template>
    <div class="container-fluid p-5 ">

        <div class="row">
            <div class="col-12">
                <h2 class="w-100 border-2 border-bottom">Contact Me</h2>
            </div>
        </div>

        <div
            class="pt-3 row row-cols-xx-l2 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 g-3 pt-2 project text-white">
            <div class="col-12 ">
                <div class="row">
                    <div class="col-12">
                        <h4 class="pb-2">Get a quote</h4>
                        <p>Fill up the form and i will surely get back to you within 24 hours.</p>
                        <div class="social-account">
                            <p class="mt-5 fs-bold">My other Social Accounts:</p>
                            <div class="d-flex fs-2 ">
                                <!-- Facebook Icon -->
                                <a href="https://www.facebook.com/jaysuthar597" target="_blank" class="me-2">
                                    <i class="fa-brands fa-facebook-f text-white"
                                        style="width: 50px; height: 50px; text-align: center; "></i>
                                </a>

                                <!-- Instagram Icon -->
                                <!-- <a href="#" class="me-2">
                                    <i class="fa-brands fa-instagram text-white"
                                        style="width: 50px; height: 50px; text-align: center;"></i>
                                </a> -->

                                <!-- X (Twitter) Icon -->
                                <a href="https://www.linkedin.com/in/jai-suthar/" target="_blank" class="me-2">
                                    <i class="fa-brands fa-linkedin-in text-white"
                                        style="width: 50px; height: 50px; text-align: center;"></i>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <div class="col-12 pt-1 ">
                <div class="card shadow-sm border-0 ">
                    <div class="card-body border-0">
                        <h5 class="card-title text-center mb-0"></h5>
                        <form action="your-form-handler-url" method="POST">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control border-0 text-white bg-dark" id="name"
                                    name="name" required placeholder="Enter your full name">
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control border-0 text-white bg-dark" id="email"
                                    name="email" required placeholder="Enter your email address">
                            </div>

                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control border-0 text-white bg-dark" id="message" name="message"
                                    rows="4" required placeholder="Enter your message here"></textarea>
                            </div>

                            <!-- Submit Button -->
                            <button type="submit" class="btn btn-primary w-100 contact-us-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="ExploreSection text-center p-5 ">
        <div class="ExploreContent text-center">
            <h2>Explore My Portfolio</h2>
            <p class="mb-5">
                Delve into a collection of my project, where creativity meets functionality. Let's get started on
                your next project
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
    name: 'ContactPage'
}
</script>
