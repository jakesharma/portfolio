<template>
    <!-- About Section -->
    <section id="about" class="w-100 p-5 ">
        <div class="row">
            <div class="col-12">
                <h2 class="w-100 border-2 border-bottom">About Me</h2>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12">
                <p>Hy, I'm <strong class="text-info">Jai Suthar</strong>, I have completed a BCA (Bachelor of Computer
                    Applications) and an MCA (Master of Computer
                    Applications), and I focus on frontend development and web design. I know how to
                    build
                    websites using various frontend tools, and I also have some experience with backend development,
                    especially with Laravel 11. I enjoy making websites that are easy to use and look great, and I'm
                    always learning new things.
                </p>
            </div>
        </div>

        <!-- Skills & Expertise Section -->
        <div class="row mt-4">
            <div class="col-12">
                <h3 class=" mb-4">Skills & Expertise</h3>
                <ol class="list-unstyled skills-list">
                    <li class="ms-3 mb-3"><strong>HTML5, CSS3, and JavaScript</strong> (Basic knowledge in JS)</li>

                    <li class="ms-3 mb-3"><strong>PHP and MySQL</strong> Proficient with Laravel 11, a powerful PHP
                        framework, with experience in building
                        robust and scalable web applications.</li>

                    <li class="ms-3 mb-3"><strong>Livewire</strong>: Basic experience with Livewire for CRUD operations,
                        real-time applications in Laravel, and SPA.</li>

                    <li class="ms-3 mb-3"><strong>Front-end Frameworks</strong>: Proficiency in Bootstrap to design
                        responsive layouts and creating better
                        designs.</li>


                    <li class="ms-3 mb-3"><strong>Basic Design </strong>: Skilled in Photoshop, CorelDRAW, and Figma,
                        with experience in optimizing images,
                        creating logos, and designing web graphics.</li>

                    <li class="ms-3 mb-3"><strong>Basic Video Editing</strong>: I have basic experience in video
                        editing, enabling me to create engaging
                        multimedia content for web applications.</li>

                    <li class="ms-3 mb-3"><strong>WordPress</strong>: Knowledge of WordPress for building, customizing,
                        and maintaining websites.</li>
                </ol>
                <!-- <p class="">In addition to my development skills, I have a strong eye for design. I have worked with
                    various clients, helping them translate their brand identities into beautiful, user-centric designs.
                </p> -->
            </div>
        </div>




        <!-- Education Section -->
        <!-- <div class="row mt-4">
            <div class="col-12">
                <h3>Education</h3>
                <p>I hold a <strong>Bachelor's Degree in Computer Applications (BCA)</strong> and a <strong>Master's
                        Degree in Computer Applications (MCA)</strong>, which have provided me with a solid foundation
                    in computer science and software development principles. This educational background has been
                    crucial in my development as a well-rounded professional.</p>
            </div>
        </div> -->

        <!-- Approach Section -->
        <!-- <div class="row mt-4">
            <div class="col-12">
                <h3>My Approach</h3>
                <p>I am dedicated to continuous learning, and I'm always eager to expand my knowledge of new
                    technologies and design trends. My goal is to deliver websites that not only look great but also
                    perform excellently. Whether it’s creating a stunning website from scratch or optimizing an existing
                    one, I focus on usability, speed, and a smooth user experience.</p>
            </div>
        </div> -->

        <!-- Contact Section -->
        <div class="row mt-4">
            <div class="col-12 text-center">
                <h3>Let's Connect</h3>
                <p>
                    I am always open to new projects and collaborations. If you're looking for a web developer or
                    designer to bring your ideas to life, feel free to
                    <router-link to="/contact" class="underline-none">Contact me</router-link>. Let’s create something
                    amazing together!
                </p>

            </div>
        </div>

    </section>
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
    name: 'AboutPage',
}
</script>
