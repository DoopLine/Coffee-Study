<style>
.backdrop{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(32, 33, 36, .7);
    z-index: 19;
    transition: all .3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
}
    /* :not(:required) hides this rule from IE9 and below */
    .hexdots-loader:not(:required) {
        overflow: hidden;
        position: relative;
        text-indent: -9999px;
        display: inline-block;
        width: 7px;
        height: 7px;
        background: transparent;
        border-radius: 100%;
        -moz-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
        -moz-animation: hexdots-loader 5s infinite ease-in-out;
        -webkit-animation: hexdots-loader 5s infinite ease-in-out;
        animation: hexdots-loader 5s infinite ease-in-out;
        -moz-transform-origin: 50% 50%;
        -ms-transform-origin: 50% 50%;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    
    /* Animação*/
    @-moz-keyframes hexdots-loader {
    0% {
        -moz-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    8.33% {
        -moz-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    16.67% {
        -moz-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    25% {
        -moz-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    33.33% {
        -moz-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    41.67% {
        -moz-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    50% {
        -moz-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px;
    }
    58.33% {
        -moz-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px;
    }
    66.67% {
        -moz-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px;
        box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px;
    }
    75% {
        -moz-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
        box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
    }
    83.33% {
        -moz-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px;
        box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px;
    }
    91.67% {
        -moz-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    100% {
        -moz-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
}
@-webkit-keyframes hexdots-loader {
    0% {
        -webkit-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    8.33% {
        -webkit-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    16.67% {
        -webkit-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    25% {
        -webkit-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    33.33% {
        -webkit-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    41.67% {
        -webkit-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    50% {
        -webkit-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px;
    }
    58.33% {
        -webkit-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px;
    }
    66.67% {
        -webkit-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px;
        box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px;
    }
    75% {
        -webkit-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
        box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
    }
    83.33% {
        -webkit-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px;
        box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px;
    }
    91.67% {
        -webkit-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    100% {
        -webkit-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
}
@keyframes hexdots-loader {
    0% {
        -moz-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    8.33% {
        -moz-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    16.67% {
        -moz-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    25% {
        -moz-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    33.33% {
        -moz-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    41.67% {
        -moz-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    50% {
        -moz-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px;
    }
    58.33% {
        -moz-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px;
        box-shadow: var(--secondary-color) 26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px -15px 0 7px;
    }
    66.67% {
        -moz-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px;
        box-shadow: var(--secondary-color) 26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 26px 15px 0 7px;
    }
    75% {
        -moz-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
        box-shadow: var(--secondary-color) 0 30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) 0 30px 0 7px;
    }
    83.33% {
        -moz-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px;
        box-shadow: var(--secondary-color) -26px 15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px 15px 0 7px;
    }
    91.67% {
        -moz-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) -26px -15px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
    100% {
        -moz-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        -webkit-box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
        box-shadow: var(--secondary-color) 0 -30px 0 7px, var(--primary-color) 0 -30px 0 7px, var(--primary-color) 26px -15px 0 7px, var(--primary-color) 26px 15px 0 7px, var(--primary-color) 0 30px 0 7px, var(--primary-color) -26px 15px 0 7px, var(--primary-color) -26px -15px 0 7px;
    }
}
</style>
<div class="backdrop">
    <div class="hexdots-loader"> </div>
</div>