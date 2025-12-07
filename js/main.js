let swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

document.addEventListener('DOMContentLoaded', function () {
    const minSlider = document.getElementById('min-slider');
    const maxSlider = document.getElementById('max-slider');
    const minPrice = document.getElementById('min-price');
    const maxPrice = document.getElementById('max-price');
    const sliderTrack = document.querySelector('.slider-track');
    const filterButton = document.querySelector('.filter-button');

    updateSliderTrack();
    updatePriceDisplay();

    minSlider.addEventListener('input', function () {

        if (parseInt(minSlider.value) >= parseInt(maxSlider.value)) {
            minSlider.value = parseInt(maxSlider.value) - 1;
        }
        updateSliderTrack();
        updatePriceDisplay();
    });

    maxSlider.addEventListener('input', function () {
        if (parseInt(maxSlider.value) <= parseInt(minSlider.value)) {
            maxSlider.value = parseInt(minSlider.value) + 1;
        }
        updateSliderTrack();
        updatePriceDisplay();
    });

    function updateSliderTrack() {
        const min = parseInt(minSlider.value);
        const max = parseInt(maxSlider.value);
        const minPercent = (min / parseInt(minSlider.max)) * 100;
        const maxPercent = (max / parseInt(maxSlider.max)) * 100;

        sliderTrack.style.background = `linear-gradient(to right, 
            #e0e0e0 0%, #e0e0e0 ${minPercent}%, 
            #46A358 ${minPercent}%, #46A358 ${maxPercent}%, 
            #e0e0e0 ${maxPercent}%, #e0e0e0 100%)`;
    }

    function updatePriceDisplay() {
        minPrice.textContent = minSlider.value;
        maxPrice.textContent = maxSlider.value;
    }

    filterButton.addEventListener('click', function () {
        filterButton.style.transform = 'scale(0.98)';
        setTimeout(() => {
            filterButton.style.transform = '';
        }, 150);

        alert(`Filter applied! Price range: $${minSlider.value} - $${maxSlider.value}`);

        console.log(`Price filter: $${minSlider.value} - $${maxSlider.value}`);
    });

    minSlider.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            updateSliderTrack();
            updatePriceDisplay();
        }
    });

    maxSlider.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            updateSliderTrack();
            updatePriceDisplay();
        }
    });
});