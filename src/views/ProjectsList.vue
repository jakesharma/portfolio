<template>
  <div class="w-100 p-5">
    <div class="row">
      <div class="col-12">
        <h2 class="w-100 border-2 border-bottom">My Projects</h2>
      </div>
    </div>

    <div class="projects-container" ref="scrollContainer">
      <div class="project-scroller">
        <div v-for="(project, index) in projects" :key="index" class="project-card" data-aos="fade-up"
          data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
          <div class="card bg-dark shadow-sm border-0 text-white">
            <a :href="project.link" target="_blank" class="w-inline-block">
              <img :src="project.image" class="img-fluid p-3" style="border-radius: 20px;" alt="project" loading="lazy">
            </a>
            <div class="card-body">
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
          </div>
        </div>
      </div>
    </div>
  </div>
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
          title: 'ZoomStudio',
          link: 'https://jakesharma.github.io/ZoomStudio/',
          image: require('@/assets/image/website-screenshot/ZoomStudio.png') // Use require
        },
        {
          title: 'Web.Resume',
          link: 'https://jakesharma.github.io/Web.Resume/',
          image: require('@/assets/image/website-screenshot/Web.Resume.png') // Use require
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
        },
        {
          title: 'Circle',
          link: 'https://jakesharma.github.io/circle/',
          image: require('@/assets/image/website-screenshot/circle.png') // Use require
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
  width: 350px;
  vertical-align: top;
  white-space: normal;
  transition: transform 0.3s ease;
}

/* Optional: Add some hover effect */
.project-card:hover {
  transform: translateY(-5px);
}

/* Responsive design */
@media (max-width: 768px) {
  .project-card {
    width: 300px;
  }
}
</style>