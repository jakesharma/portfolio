<template>
   
    <header class="">
        <nav class="navbar navbar-expand header p-0">
            <div class="w-100 p-0 px-3 d-flex justify-content-between align-items-center row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <router-link to="/" style="text-decoration: none;"><p class="logo text-light">JaiCode</p></router-link>
                </div>
                <ul class="navbar-nav gap-3 d-flex justify-content-end col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link ">Home</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/about" class="nav-link ">About</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/projects" class="nav-link ">Projects</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/contact" class="nav-link  d-flex">Contact</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'MainMenu',  // Rename this to a multi-word name
};
</script>
