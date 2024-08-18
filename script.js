document.addEventListener("DOMContentLoaded", () => {
  // GSAP and ScrollTrigger Initialization
  gsap.registerPlugin(ScrollTrigger);

  // Sticky Navbar with background color change on scroll
  gsap.to(".navbar", {
    backgroundColor: "#000", // Background color when sticky
    duration: 0.5, // Duration of the color transition
    scrollTrigger: {
      trigger: ".hero", // Trigger when the hero section scrolls out of view
      start: "top top", // Start when the top of the hero section hits the top of the viewport
      end: "bottom top", // End when the bottom of the hero section hits the top of the viewport
      scrub: true, // Smoothly animate the background color
      onEnter: () => document.querySelector(".navbar").classList.add("sticky"),
      onLeaveBack: () =>
        document.querySelector(".navbar").classList.remove("sticky"),
    },
  });

  const hamburger = document.querySelector(".hamburger");
  const sideNavbar = document.querySelector(".side-navbar");
  const closeIcon = document.querySelector(".close-icon");
  const dropdowns = document.querySelectorAll(".side-dropdown");

  // Open sidebar with smooth transition (left to right)
  hamburger.addEventListener("click", () => {
    gsap.to(sideNavbar, {
      x: 0, // Slide in from the left
      opacity: 1, // Ensure full visibility
      duration: 0.8, // Increased duration for slower animation
      ease: "power2.out", // Easing function for smooth animation
    });
    sideNavbar.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent body scroll when sidebar is open
  });

  // Close sidebar with smooth transition (right to left)
  closeIcon.addEventListener("click", () => {
    gsap.to(sideNavbar, {
      x: "100%", // Slide out to the right
      opacity: 0, // Fade out
      duration: 0.8, // Increased duration for slower animation
      ease: "power2.in", // Easing function for smooth animation
      onComplete: () => {
        sideNavbar.classList.remove("active");
      },
    });
    document.body.style.overflow = "auto"; // Restore body scroll when sidebar is closed
  });

  // Handle clicks inside the sidebar to prevent closing it
  sideNavbar.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent clicks inside the sidebar from closing it

    if (event.target.classList.contains("dropdown-toggle")) {
      const currentDropdown = event.target.closest(".side-dropdown");
      const dropdownContent = currentDropdown.querySelector(
        ".side-dropdown-content"
      );

      // Close all dropdowns except the one clicked
      dropdowns.forEach((dropdown) => {
        const content = dropdown.querySelector(".side-dropdown-content");
        if (dropdown !== currentDropdown) {
          gsap.to(content, {
            opacity: 0,
            height: 0,
            duration: 0.3,
            display: "none", // Ensure content is hidden
            ease: "power1.out",
          });
          dropdown.classList.remove("active");
        }
      });

      // Toggle the visibility of the clicked dropdown with animation
      if (currentDropdown.classList.contains("active")) {
        gsap.to(dropdownContent, {
          opacity: 0,
          height: 0,
          duration: 0.3,
          display: "none", // Ensure content is hidden
          ease: "power1.out",
        });
        currentDropdown.classList.remove("active");
      } else {
        gsap.set(dropdownContent, {
          display: "block", // Ensure content is visible before animating
          height: "auto", // Auto height to fit content
        });
        gsap.fromTo(
          dropdownContent,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.3, ease: "power1.inOut" }
        );
        currentDropdown.classList.add("active");
      }
    }
  });

  // Close sidebar when clicking outside of it
  document.addEventListener("click", (event) => {
    if (
      !sideNavbar.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      gsap.to(sideNavbar, {
        x: "100%", // Slide out to the right
        opacity: 0, // Fade out
        duration: 0.8, // Increased duration for slower animation
        ease: "power2.in", // Easing function for smooth animation
        onComplete: () => {
          sideNavbar.classList.remove("active");
        },
      });
      document.body.style.overflow = "auto"; // Restore body scroll
    }
  });

  // Add hover effect for Services and Project Guidance dropdowns
  const navDropdowns = document.querySelectorAll(".dropdown");

  navDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", () => {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      gsap.to(dropdownContent, {
        opacity: 1,
        height: "auto",
        duration: 0.3,
        display: "block", // Ensure content is visible
        ease: "power1.inOut",
      });
    });

    dropdown.addEventListener("mouseleave", () => {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      gsap.to(dropdownContent, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        display: "none", // Hide content
        ease: "power1.out",
      });
    });
  });

  // Animate feature cards when they come into view
  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 80%",
      end: "bottom top",
      scrub: false,
      once: true,
    },
    opacity: 0,
    y: 30,
    scale: 0.95,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
  });

  // Animate feature icons
  gsap.from(".icon", {
    scrollTrigger: {
      trigger: ".features-section",
      start: "top 80%",
      end: "bottom top",
      scrub: false,
      once: true,
    },
    opacity: 0,
    x: -50, // Icons slide in from the left
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
  });

  // How it works section
  gsap.utils.toArray(".timeline-item").forEach((item) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      x: -50,
      duration: 0.5,
      stagger: 0.3,
    });
  });

  // About us section animations
  gsap.fromTo(
    ".text-content",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".intro-paragraph-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".image-content",
    { opacity: 0, x: 50 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".intro-paragraph-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
  // Initialize Swiper for testimonials with autoplay and custom settings
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 1000, // Delay between transitions in ms
      disableOnInteraction: false,
    },
  });

  // GSAP ScrollTrigger for testimonials section heading
  gsap.from(".testimonials-heading", {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: ".testimonials-section",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  // GSAP ScrollTrigger for testimonial slides
  gsap.from(".swiper-slide", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".swiper-container",
      start: "top 75%",
      toggleActions: "play none none reverse",
    },
  });

  // Shuffle testimonials on each page load
  const testimonials = document.querySelectorAll(".swiper-slide");
  for (let i = testimonials.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    testimonials[i].parentNode.insertBefore(
      testimonials[j],
      testimonials[i].nextSibling
    );
  }
});
document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    // Here you can add your AJAX request or any other handling logic
    console.log(`Newsletter subscription requested for: ${email}`);
    alert("Thank you for subscribing!");
  });
