<template>
    <header>
        <nav class="navbar navbar-expand header ">
            <div class="w-100 px-3 d-flex justify-content-between row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <a class="navbar-brand ps-2 text-dark" href="# "><img src="pngwing.com.png" class="img-fluid" width="150px" alt=""></a>
                </div>
                <ul class="navbar-nav gap-3 d-flex justify-content-end col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <li class="nav-item ">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/projects" class="nav-link">Projects</router-link>
                    </li>
                    <li class="nav-item ">
                        <router-link to="/contact" class="nav-link">Contact us</router-link>
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
