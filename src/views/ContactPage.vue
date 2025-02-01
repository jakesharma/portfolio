<template>
    <div class="container-fluid p-3 ">

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
                                <a href="https://x.com/Jakeboy978?t=qOJJuN3esk6M0XlZlNQd8A&s=09" target="_blank" class="me-2">
                                    <i class="fa-brands fa-x-twitter text-white"
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
</template>

<script>
export default {
    name: 'ContactPage'
}
</script>
