// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// OFERTAS
        const tabs = document.querySelectorAll('.tab_btn');
        const all_content = document.querySelectorAll('.content');

        tabs.forEach((tab, index)=>{
            tab.addEventListener('click', (e)=>{
                tabs.forEach(tab=>{tab.classList.remove('active')});
                tab.classList.add('active');

                var line=document.querySelector('.line');
            line.style.width = e.target.offsetWidth + "px";
            line.style.left = e.target.offsetLeft + "px";

            all_content.forEach(content=>{content.classList.remove('active')});
            all_content[index].classList.add('active');
            })
        })

    // MOBILE
    document.addEventListener('DOMContentLoaded', (event) => {
        const tabs2 = document.querySelectorAll('.tab_btn_mobile');
        const allContent = document.querySelectorAll('.content2');
        const mobileContainer = document.querySelector('.mobile');

        tabs2.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                tabs2.forEach(tab => { tab.classList.remove('active2') });
                tab.classList.add('active2');

                const line = document.querySelector('.line2');
                line.style.width = e.target.offsetWidth + "px";
                line.style.left = e.target.offsetLeft + "px";

                allContent.forEach(content => { content.classList.remove('active2') });
                allContent[index].classList.add('active2');

                const bgImage = e.target.getAttribute('data-bg');
                mobileContainer.style.backgroundImage = `url(${bgImage})`;
            });
        });

        // Establecer la imagen de fondo predeterminada al cargar la página
        const defaultBgImage = document.querySelector('.tab3.active2').getAttribute('data-bg');
        mobileContainer.style.backgroundImage = `url(${defaultBgImage})`;
    });
    
    //TV
    document.addEventListener('DOMContentLoaded', (event) => {
        const tabs4 = document.querySelectorAll('.tab_btn_tv');
        const allContent = document.querySelectorAll('.content3');
        const tvContainer = document.querySelector('.tv');

        tabs4.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                tabs4.forEach(tab => { tab.classList.remove('active3') });
                tab.classList.add('active3');

                const line = document.querySelector('.line3');
                line.style.width = e.target.offsetWidth + "px";
                line.style.left = e.target.offsetLeft + "px";

                allContent.forEach(content => { content.classList.remove('active3') });
                allContent[index].classList.add('active3');

                const bgImage = e.target.getAttribute('data-bg');
                tvContainer.style.backgroundImage = `url(${bgImage})`;
            });
        });

        // Establecer la imagen de fondo predeterminada al cargar la página
        const defaultBgImage = document.querySelector('.tab4.active3').getAttribute('data-bg');
        tvContainer.style.backgroundImage = `url(${defaultBgImage})`;
    });
    
    //LINEA BLANCA
    document.addEventListener('DOMContentLoaded', (event) => {
        const tabs5 = document.querySelectorAll('.tab_btn_lb');
        const allContent = document.querySelectorAll('.content4');
        const lbContainer = document.querySelector('.lb');

        tabs5.forEach((tab, index) => {
            tab.addEventListener('click', (e) => {
                tabs5.forEach(tab => { tab.classList.remove('active4') });
                tab.classList.add('active4');

                const line = document.querySelector('.line4');
                line.style.width = e.target.offsetWidth + "px";
                line.style.left = e.target.offsetLeft + "px";

                allContent.forEach(content => { content.classList.remove('active4') });
                allContent[index].classList.add('active4');

                const bgImage = e.target.getAttribute('data-bg');
                lbContainer.style.backgroundImage = `url(${bgImage})`;
            });
        });

        // Establecer la imagen de fondo predeterminada al cargar la página
        const defaultBgImage = document.querySelector('.tab5.active4').getAttribute('data-bg');
        lbContainer.style.backgroundImage = `url(${defaultBgImage})`;
    });

    ///////////////////////

    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = document.querySelector('.card').offsetWidth;
    let currentPosition = 0;
    
    prevBtn.addEventListener('click', () => {
      currentPosition += cardWidth + 20;
      if (currentPosition > 0) {
        currentPosition = 0;
      }
      slider.style.transform = `translateX(${currentPosition}px)`;
    });
    
    nextBtn.addEventListener('click', () => {
      currentPosition -= cardWidth + 20;
      const sliderWidth = slider.offsetWidth;
      const cardsWidth = slider.scrollWidth;
      if (sliderWidth - Math.abs(currentPosition) > cardsWidth) {
        currentPosition = -(cardsWidth - sliderWidth);
      }
      slider.style.transform = `translateX(${currentPosition}px)`;
    });
    


