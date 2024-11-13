<template>
    <!-- About Section -->
    <section id="about" class="w-100 p-5">
        <div class="row">
            <div class="col-12">
                <h2 class="w-100 border-2 border-bottom">About Me</h2>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12">
                <p>Hello, I'm <strong>Jai Kishan Suthar</strong>, a passionate Web Developer and Web Designer with over
                    <strong>5 years of experience</strong> in the field. I specialize in creating responsive,
                    user-friendly websites that deliver engaging experiences. I have successfully completed over
                    <strong>15 web design projects</strong>, from initial concept and design to final launch, providing
                    clients with both creative and functional web solutions.
                </p>
            </div>
        </div>

        <!-- Skills & Expertise Section -->
        <div class="row mt-4">
            <div class="col-12 col-12">
                <h3 class=" mb-4">Skills & Expertise</h3>
                <ol class="list-unstyled skills-list">
                    <li class="ms-5 mb-3"><strong>HTML5, CSS3, and JavaScript</strong> (Basic knowledge) for creating
                        modern, responsive websites.</li>
                    <li class="ms-5 mb-3"><strong>PHP and MySQL</strong> for developing dynamic, data-driven web
                        applications.</li>
                    <li class="ms-5 mb-3"><strong>Laravel 11</strong>: Knowledge of this powerful PHP framework, with
                        experience in building robust and scalable web applications.</li>
                    <li class="ms-5 mb-3"><strong>Livewire</strong>: Basic experience with Livewire, enabling real-time
                        interaction without the need for complex JavaScript.</li>
                    <li class="ms-5 mb-3"><strong>Front-end Frameworks</strong>: Proficiency in Bootstrap, Tailwind CSS,
                        and other front-end frameworks to design responsive layouts.</li>
                    <li class="ms-5 mb-3"><strong>Basic Figma & Photoshop</strong>: I use Figma and Photoshop for
                        designing website mockups, wireframes, and optimizing images for the web.</li>
                    <li class="ms-5 mb-3"><strong>Basic Video Editing</strong>: I have basic experience in video
                        editing, enabling me to create engaging multimedia content for web applications.</li>
                </ol>
                <p class="">In addition to my development skills, I have a strong eye for design. I have worked with
                    various clients, helping them translate their brand identities into beautiful, user-centric designs.
                </p>
            </div>
        </div>




        <!-- Education Section -->
        <div class="row mt-4">
            <div class="col-12">
                <h3>Education</h3>
                <p>I hold a <strong>Bachelor's Degree in Computer Applications (BCA)</strong> and a <strong>Master's
                        Degree in Computer Applications (MCA)</strong>, which have provided me with a solid foundation
                    in computer science and software development principles. This educational background has been
                    crucial in my development as a well-rounded professional.</p>
            </div>
        </div>

        <!-- Approach Section -->
        <div class="row mt-4">
            <div class="col-12">
                <h3>My Approach</h3>
                <p>I am dedicated to continuous learning, and I'm always eager to expand my knowledge of new
                    technologies and design trends. My goal is to deliver websites that not only look great but also
                    perform excellently. Whether it’s creating a stunning website from scratch or optimizing an existing
                    one, I focus on usability, speed, and a smooth user experience.</p>
            </div>
        </div>

        <!-- Contact Section -->
        <div class="row mt-4">
            <div class="col-12 text-center">
                <h3>Let's Connect</h3>
                <p>
                    I am always open to new projects and collaborations. If you're looking for a web developer or
                    designer to bring your ideas to life, feel free to
                    <router-link to="/contact" class="underline-none">Contact me</router-link>. Let’s create something amazing together!
                </p>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>
