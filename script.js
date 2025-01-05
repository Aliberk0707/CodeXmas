document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", function () {
    // ScrollReveal Ayarları
    const sr = ScrollReveal({
        origin: 'bottom', // Efektin başladığı yer
        distance: '50px',  // Ne kadar hareket edeceği
        duration: 1000,    // Animasyon süresi
        reset: true        // Sayfayı yeniden yüklediğinizde animasyonların yeniden başlaması
    });

    // ScrollReveal animasyonlarını uygulama
    sr.reveal('.title', { delay: 200 });
    sr.reveal('.subtitle', { delay: 400 });
    sr.reveal('.service-item', { delay: 600 });
    sr.reveal('.portfolio-item', { delay: 800 });
    sr.reveal('.contact form', { delay: 1000 });
});


    // Particles background
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ff4b5c"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#fff"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 0.1
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ff4b5c",
                "opacity": 0.4,
                "width": 1
            }
        },
        "retina_detect": true
    });
});
