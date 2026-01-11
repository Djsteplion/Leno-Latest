/** Begininng Of script for menu **/

/* Item 10  --  All the targeted mobile-menu links will each have the slideInLeft & slideInRight aniamtion */
const observer10 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This applies the class ONLY to the div that just appeared
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });


function openNav(){
	document.getElementById("sidenav").style.opacity="1";
    document.getElementById("sidenav").style.width="100%";
	document.getElementById("sidenav").style.display="flex";
	const targetElements10 = document.querySelectorAll('.positionLinkLeft, .positionLinkRight');

	const observer10 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This applies the class ONLY to the div that just appeared
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
	}, { threshold: 1});

	targetElements10.forEach(div => observer10.observe(div));
}


function closeNav(){
    document.getElementById("sidenav").style.width="0";
	const targetElements10 = document.querySelectorAll('.positionLinkLeft, .positionLinkRight');
	
	const observer10 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This applies the class ONLY to the div that just appeared
            entry.target.classList.remove('is-visible');
            observer.unobserve(entry.target);
        }
    });
	}, { threshold: 1});

	targetElements10.forEach(div => observer10.observe(div));
	document.getElementById("sidenav").style.opacity="0";
}

/** End Of script for menu */

/* ----------------------------------------------------- */


// Close mobile menu when clicking on links
document.querySelectorAll('.mySidenav a').forEach(function(link) {
    link.addEventListener('click', function() {
        document.getElementById("sidenav").style.width="0";
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Update active menu item based on scroll
function updateActiveMenuItem() {
    const divs = document.querySelectorAll('div[id]');
    const scrollY = window.pageYOffset;

    divs.forEach(div => {
        const divHeight = div.offsetHeight;
        const divTop = div.offsetTop - 200;
        const divId = div.getAttribute('id');
        const menuItem = document.querySelector(`.head-links a[href="#${divId}"]`);
        const mobileMenuItem = document.querySelector(`.mySidenav a[href="#${divId}"]`);

        if (scrollY > divTop && scrollY <= divTop + divHeight) {
            // Remove active class from all menu items
            document.querySelectorAll('.head-links a').forEach(item => item.classList.remove('active'));
            document.querySelectorAll('.mySidenav a').forEach(item => item.classList.remove('active'));
            
            // Add active class to current menu item
            if (menuItem) menuItem.classList.add('active');
            if (mobileMenuItem) mobileMenuItem.classList.add('active');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveMenuItem);

// Set initial active state
updateActiveMenuItem();

/* -------------------------------------------------- */

// script for testimonials

//Card Slider - Swiper 

var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 70,
	breakpoints: {
		// when window is <= 767px
		767: {
			slidesPerView: 1
		},
		// when window is <= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});


   // End Of Script For Testimnials (( card slider ))


   //Beginning of Script For The ".Latch" Hover Effect...


   const latch1 = document.getElementById("latch1").innerHTML;
   const latch2 = document.getElementById("latch2").innerHTML;
   const latch3 = document.getElementById("latch3").innerHTML;


 
   const latchA = document.querySelector(".latch1");
   const latchB = document.querySelector(".latch2");
   const latchC = document.querySelector(".latch3");


   latchB.addEventListener("click", function() {
	  latch1.style.borderBottom = "4px solid white;"
	  latch3.style.borderBottom = "4px solid white;"

   } );



   
   function color1(){
	document.getElementById('latch1').style.color = '#00C9DB';
	document.getElementById('latch1').style.borderBottomColor = '#00C9DB';

	document.getElementById('latch2').style.color = 'white';
	document.getElementById('latch2').style.borderBottomColor = 'white';
   
	document.getElementById('latch3').style.color = 'white';
	document.getElementById('latch3').style.borderBottomColor = 'white';

	document.getElementById('tracking').style.display = 'none';
	document.getElementById('monitoring').style.display = 'none';
	document.getElementById('configuring').style.display = 'block';

	document.getElementById('latch1').style.transition = '0.3s';
	document.getElementById('configuring').style.transition = '0.9s';
}

   function color2(){
	   document.getElementById('latch1').style.color = 'white';
	   document.getElementById('latch1').style.borderBottomColor = 'white';

	   document.getElementById('latch2').style.color = '#00C9DB';
	   document.getElementById('latch2').style.borderBottomColor = '#00C9DB';

	   document.getElementById('latch3').style.color = 'white';
	   document.getElementById('latch3').style.borderBottomColor = 'white';

	   document.getElementById('tracking').style.display = 'block';
	   document.getElementById('tracking').style.display = 'flex';
	   document.getElementById('configuring').style.display = 'none';
	   document.getElementById('monitoring').style.display = 'none';

	   document.getElementById('latch1').style.transition = '0.3s';
	   document.getElementById('tracking').style.transition = '0.9s';
	
      
   }


   function color3(){
	document.getElementById('latch1').style.color = 'white';
	document.getElementById('latch1').style.borderBottomColor = 'white';

	document.getElementById('latch3').style.color = '#00C9DB';
	document.getElementById('latch3').style.borderBottomColor = '#00C9DB';

	document.getElementById('latch2').style.color = 'white';
	document.getElementById('latch2').style.borderBottomColor = 'white';

	
	document.getElementById('monitoring').style.display = 'block';
	document.getElementById('monitoring').style.display = 'flex';
	document.getElementById('tracking').style.display = 'none';
	document.getElementById('configuring').style.display = 'none';

	document.getElementById('latch1').style.transition = '0.3s';
	document.getElementById('monitoring').style.transition = '  0.9s';
	
 
   
}



/** screenshots **/
/* Image Slider - Swiper */
var imageSlider = new Swiper('.image-slider', {
	autoplay: {
		delay: 2000,
		disableOnInteraction: false
	},
	loop: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	spaceBetween: 30,
	slidesPerView: 5,
	breakpoints: {
		// when window is <= 516px
		516: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		// when window is <= 767px
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		// when window is <= 991px
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		// when window is <= 1199px
		1199: {
			slidesPerView: 4,
			spaceBetween: 30
		},
	}
});


  /* Item 1 */
         // This is the target element
         const targetElementItem1 = document.querySelector('.div1');

         // setup the intersection observer
         const observer1 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem1.classList.add('is-visible');
                    
                    // stop observing once the animation is triggered
                    observer6.unobserve(entry.target);
                }
            });
         }, { threshold: 0.2}); // adjust the threshhold as needed
         
         // start observing the target element
         observer1.observe(targetElementItem1);

/* Item 2 */
         // This is the target element
         const targetElementItem2 = document.querySelector('.button-container');

         // setup the intersection observer
         const observer2 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem2.classList.add('is-visible');
                    
                    // stop observing once the animation is triggered
                    observer2.unobserve(entry.target);
                }
            });
         }, { threshold: 0.2}); // adjust the threshhold as needed
         
         // start observing the target element
         observer2.observe(targetElementItem2);


/* Item 3 */
         // This is the target element
         const targetElementItem3 = document.querySelector('.div2');

         // setup the intersection observer
         const observer3 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem3.classList.add('is-visible');
                    
                    // stop observing once the animation is triggered
                    observer3.unobserve(entry.target);
                }
            });
         }, { threshold: 0.2}); // adjust the threshhold as needed
         
         // start observing the target element
         observer3.observe(targetElementItem2);


/* Item 4 */
         // This is the target element
         const targetElementItem4 = document.querySelector('.third-inner');

         // setup the intersection observer
         const observer4 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem4.classList.add('is-visible');
                    
                    // stop observing once the animation is triggered
                    observer4.unobserve(entry.target);
                }
            });
         }, { threshold: 0.2}); // adjust the threshhold as needed
         
         // start observing the target element
         observer4.observe(targetElementItem4); 


         
/* Item 5  --  All the configure1a divs  & other targeted divs will each have the slideInLeft aniamtion */
const observer5 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This applies the class ONLY to the div that just appeared
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const targetElements5 = document.querySelectorAll('.configure1a, .trackingImg, .positionLeft');
targetElements5.forEach(div => observer5.observe(div));


        
/* Item 6  --  All the configure3a divs will each have the slideInRight aniamtion */
const observer6 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This applies the class ONLY to the div that just appeared
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const targetElements6 = document.querySelectorAll('.configure3a');
targetElements6.forEach(div => observer6.observe(div));


/* Item 7 */
         // This is the target element
         const targetElementItem7 = document.querySelector('.trackingImg');

         // setup the intersection observer
         const observer7 = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // add the css class that triggers the animation
                    targetElementItem7.classList.add('is-visible');
                    
                    // stop observing once the animation is triggered
                    observer7.unobserve(entry.target);
                }
            });
         }, { threshold: 0.2}); // adjust the threshhold as needed
         
         // start observing the target element
         observer7.observe(targetElementItem7); 


       
/* Item 8  --  All the configure3a divs will each have the slideInRight aniamtion */
const observer8 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This applies the class ONLY to the div that just appeared
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

const targetElements8 = document.querySelectorAll(
'.trackingHeaderText, .trackingOtherText1, .trackingOtherText2, .positionRight');
targetElements8.forEach(div => observer8.observe(div)); 


      
/* Item 9  --  All these targeted divs will each have the slideInUp animation */
const observer9 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // This applies the class ONLY to the div that just appeared
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const targetElements9 = document.querySelectorAll('.monitoringImg, .monitoringFooterText, .previewText, .previewVideo, .SEVENTH-inner, .EIGHT-INNER');
targetElements9.forEach(div => observer9.observe(div)); 