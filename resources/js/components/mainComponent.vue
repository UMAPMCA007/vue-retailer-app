<template>
    <div class="container">
                <div class="navbar navbar-expand-lg navbar-light bg-light">
                   <h1><a class="navbar-brand" href="#">Retalier App</a></h1> 
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav text-center">
                            <a class="nav-item nav-link active"><router-link to="/home">Home</router-link></a>
                            <a class="nav-item nav-link"><router-link to="/about">About</router-link></a>
                            <a class="nav-item nav-link"><router-link to="/contact">Contact</router-link></a>
                        </div>
                        
                    </div>
                </div>
                <router-view></router-view>
                
            </div>
</template>
