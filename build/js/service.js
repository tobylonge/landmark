let swiper=new Swiper(".carousel",{centeredSlides:!0,spaceBetween:30,effect:"fade",fadeEffect:{crossFade:!0},speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0}}),swiperSlider=new Swiper(".sliders",{slidesPerView:1,spaceBetween:10,preventClicksPropagation:!0,preloadImages:!1,lazy:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{"@0.00":{slidesPerView:2,slidesPerGroup:2,spaceBetween:15},"@0.75":{slidesPerView:2,slidesPerGroup:2,spaceBetween:15},"@1.00":{slidesPerView:3,slidesPerGroup:3,spaceBetween:15},"@1.50":{slidesPerView:6,slidesPerGroup:6,spaceBetween:15}}});const businessInfo=[{id:1,bImg:"img/service/bg-1.png",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:2,bImg:"img/service/bg-2.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:3,bImg:"img/service/bg-3.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:4,bImg:"img/service/bg-4.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:5,bImg:"img/service/bg-5.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:6,bImg:"img/service/bg-6.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:7,bImg:"img/service/bg-7.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:8,bImg:"img/service/bg-8.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:9,bImg:"img/service/bg-9.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:10,bImg:"img/service/bg-10.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}];document.addEventListener("DOMContentLoaded",()=>{console.log("I got here:::"),fetchInfo(1)}),getDetails=a=>{swiperSlider.detachEvents(),console.log("Lets get details ",a.getAttribute("data-slide"),a.dataset.slide),document.querySelectorAll(".service-card").forEach(a=>{a.classList.remove("active")}),a.classList.add("active");const b=a.getAttribute("data-slide");fetchInfo(b)},fetchInfo=a=>{const b=businessInfo.filter(b=>b.id===+a);if(console.log("id ",a,"info ",b),b){const a=document.querySelector(".more-info");a.innerHTML=`<div class="details">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
        <img src=${b[0].bImg} alt="" class="swiper-lazy">
        <div class="swiper-lazy-preloader"></div>
        </div>
        <div class="background-overlay">
          <div class="container mx-auto content px-4 md:px-0">
            <div class="md:w-2/5 py-16 w-full">
              <p class="text-white content-text">${b[0].text}</p>
              <ul class="text-white">
                <li>
                  <span><i class="fa fa-phone-square mr-4 transform rotate-90 text-primary"></i>08022222232</span>
                </li>
                <li>
                  <span><i class="fa fa-envelope-square mr-4 text-primary"></i>test@test.org</span>
                </li>
                <li>
                  <span><i class="fa fa-globe mr-4 text-primary"></i>www.test.org</span>
                </li>
                <li>
                  <span><i class="fa fa-map-pin mr-4 text-primary"></i>Landmark retail boulevard</span>
                </li>
              </ul>
            </div>
          </div>
      </div>
       
    </div>
    
  </div>`;new Swiper(".details",{lazy:!0,effect:"fade",speed:1e3,fadeEffect:{crossFade:!0}})}};