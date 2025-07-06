<template>
  <div class="w-100 p-5">
    <div class="row">
      <div class="col-12">
        <h2 class="w-100 border-2 border-bottom">My Projects</h2>
      </div>
    </div>


    <div class="projects-container" ref="scrollContainer">
      <div class="project-scroller">
        <div v-for="(project, index) in projects" :key="index" class="project-card" data-aos="fade-right"
          data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
          <div class="card bg-dark shadow-sm border-0 text-white">
            <a :href="project.link" target="_blank" class="w-inline-block">
              <img :src="project.image" class="img-fluid card-img" alt="project">

              <div class="card-body overlay">
                <div class="card-2-color px-3 pt-3">
                  <h5 class="card-title">
                    <a href="#" class="nav-link">
                      <div class="row">
                        <div class="col-10 text-start">
                          <p>{{ project.title }}</p>
                        </div>
                        <div class="col-2 text-end">
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </a>
                  </h5>
                  <div class="card-text pb-3">
                    <div class="d-flex">
                      <p>Developed by:</p>
                      <p class="ms-2">Jai suthar</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator d-flex justify-content-center  align-items-center pt-3">
      <i class="fa-solid fa-arrow-left"></i>
      <span id="ScrollByMouse">Scroll to explore</span>
      <span class="" id="MoveByFinger">Move by Finger</span>
    </div>
  </div>
  <section class="ExploreSection text-center p-5 ">
    <div class="text-center">
      <h2>Contact us</h2>
      <p class="mb-5">
        Have a project in mind or just want to say hello? Fill out the form below, and let's connect!
      </p>
      <router-link to="/contact" class="nav-link bg-white text-black mx-auto" style="width: 130px;border-radius: 50px;">

        <div class="d-flex justify-content-between align-items-center text-black px-3 py-2 w-100">
          Contact
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsList',
  data() {
    return {
      projects: [
        {
          title: 'CodingClass',
          link: 'https://jakesharma.github.io/codingclass/',
          image: require('@/assets/image/website-screenshot/codingclass.png') // Use require
        },
        {
          title: 'Web.Resume',
          link: 'https://jakesharma.github.io/Web.Resume/',
          image: require('@/assets/image/website-screenshot/Web.Resume.png') // Use require
        },
        {
          title: 'ZoomStudio',
          link: 'https://jakesharma.github.io/ZoomStudio/',
          image: require('@/assets/image/website-screenshot/ZoomStudio.png') // Use require
        },

        {
          title: 'Coding-Knowledge',
          link: 'https://jakesharma.github.io/Coding-Knowledge/',
          image: require('@/assets/image/website-screenshot/Coding-Knowledge.png') // Use require
        },
        {
          title: 'myportfolio',
          link: 'https://jakesharma.github.io/myportfolio/',
          image: require('@/assets/image/website-screenshot/myportfolio.png') // Use require
        }
      ]
    }
  },
  mounted() {
    const container = this.$refs.scrollContainer
    container.addEventListener('wheel', this.handleWheel, { passive: false })
  },
  beforeUnmount() {
    const container = this.$refs.scrollContainer
    if (container) {
      container.removeEventListener('wheel', this.handleWheel)
    }
  },
  methods: {
    handleWheel(event) {
      event.preventDefault();
      const delta = Math.sign(event.deltaY) * 200; // Increased scroll speed
      this.$refs.scrollContainer.scrollLeft += delta;

      // Add momentum effect
      const container = this.$refs.scrollContainer;
      let momentum = delta;
      const interval = setInterval(() => {
        momentum *= 0.9; // Decay factor
        container.scrollLeft += momentum;
        if (Math.abs(momentum) < 1) clearInterval(interval); // Stop when momentum is small
      }, 20);
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  /* left: -3rem; */
}

.card-img {
  transition: transform 0.5s ease-in-out;
  /* height: 500px; */
}

.card:hover .card-img {
  transform: scale(1.2);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  scale: 1rem;
  background: rgba(0, 0, 0, 0.563);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.card:hover .overlay {
  opacity: 1;
}

.card-caption {
  /* background: rgba(0, 0, 0, 0.7); */
  /* padding: 20px; */
  /* border-radius: 10px; */
  width: 100%;
}

.card-title a {
  color: white;
  text-decoration: none;
}

.card-text p {
  margin: 0;
}


.scroll-indicator {
  text-align: center;
  animation: pulse 2s infinite;
}

.scroll-indicator i {
  font-size: 24px;
  margin-right: 10px;
}

#ScrollByMouse {
  display: block;
}

#MoveByFinger {
  display: none;
}

@keyframes pulse {

  0%,
  100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }
}

.projects-container {
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 20px 0;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.projects-container::-webkit-scrollbar {
  display: none;
  /* Hide scrollbar for Chrome, Safari and Opera */
}

.project-scroller {
  display: inline-flex;
  gap: 1.5rem;
}

.project-card {
  display: inline-block;
  width: 400px;
  vertical-align: top;
  white-space: normal;
  transition: transform 0.3s ease;
  /* animation: moving 2s ; */
}

/* @keyframes moving{
  0%
   {
    left: 0%;
  }

  100% {
    right: 100%;
  }
} */

/* Optional: Add some hover effect */
.project-card:hover {
  transform: translateY(-5px);
}



/* Responsive design */
@media (max-width: 768px) {
  .project-card {
    width: 298px;
  }

  #MoveByFinger {
    display: block;
  }

  #ScrollByMouse {
    display: none;
  }
}
</style>
