document.addEventListener("DOMContentLoaded", () => {
  // GSAP and ScrollTrigger Initialization
  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Animation
  gsap.from(".hero-content", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
      once: true,
    },
  });

  gsap.from(".hero-image", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
      once: true,
    },
  });

  // Sticky Navbar with background color change on scroll
  gsap.to(".navbar", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      onEnter: () => document.querySelector(".navbar").classList.add("sticky"),
      onLeaveBack: () =>
        document.querySelector(".navbar").classList.remove("sticky"),
    },
  });

  // Sidebar animations
  const hamburger = document.querySelector(".hamburger");
  const sideNavbar = document.querySelector(".side-navbar");
  const closeIcon = document.querySelector(".close-icon");
  const dropdowns = document.querySelectorAll(".side-dropdown");

  hamburger.addEventListener("click", () => {
    gsap.to(sideNavbar, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });
    sideNavbar.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeIcon.addEventListener("click", () => {
    gsap.to(sideNavbar, {
      x: "100%",
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        sideNavbar.classList.remove("active");
      },
    });
    document.body.style.overflow = "auto";
  });

  sideNavbar.addEventListener("click", (event) => {
    event.stopPropagation();

    if (event.target.classList.contains("dropdown-toggle")) {
      const currentDropdown = event.target.closest(".side-dropdown");
      const dropdownContent = currentDropdown.querySelector(
        ".side-dropdown-content"
      );

      dropdowns.forEach((dropdown) => {
        const content = dropdown.querySelector(".side-dropdown-content");
        if (dropdown !== currentDropdown) {
          gsap.to(content, {
            opacity: 0,
            height: 0,
            duration: 0.3,
            display: "none",
            ease: "power1.out",
          });
          dropdown.classList.remove("active");
        }
      });

      if (currentDropdown.classList.contains("active")) {
        gsap.to(dropdownContent, {
          opacity: 0,
          height: 0,
          duration: 0.3,
          display: "none",
          ease: "power1.out",
        });
        currentDropdown.classList.remove("active");
      } else {
        gsap.set(dropdownContent, {
          display: "block",
          height: "auto",
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

  document.addEventListener("click", (event) => {
    if (
      !sideNavbar.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      gsap.to(sideNavbar, {
        x: "100%",
        opacity: 0,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          sideNavbar.classList.remove("active");
        },
      });
      document.body.style.overflow = "auto";
    }
  });

  const navDropdowns = document.querySelectorAll(".dropdown");

  navDropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseover", () => {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      gsap.to(dropdownContent, {
        opacity: 1,
        height: "auto",
        duration: 0.3,
        display: "block",
        ease: "power1.inOut",
      });
    });

    dropdown.addEventListener("mouseleave", () => {
      const dropdownContent = dropdown.querySelector(".dropdown-content");
      gsap.to(dropdownContent, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        display: "none",
        ease: "power1.out",
      });
    });
  });
  // our website feature

  const featureItems = document.querySelectorAll(".features-section .d-flex");

  featureItems.forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // Adjust this as needed
          toggleActions: "play none none none",
        },
      }
    );
  });
  // how it works
  const steps = document.querySelectorAll(".how-it-works .step");

  steps.forEach((step, index) => {
    gsap.fromTo(
      step,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.2, // Stagger the animations slightly
        scrollTrigger: {
          trigger: step,
          start: "top 80%", // Adjust this as needed
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Optional: Animate the image on the right
  gsap.fromTo(
    ".image-card img",
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".image-card",
        start: "top 80%", // Adjust this as needed
        toggleActions: "play none none none",
      },
    }
  );
  // service code
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card, index) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.2, // Stagger the animations slightly
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Adjust this as needed
          toggleActions: "play none none none",
        },
      }
    );
  });
  // project guidance
  const guidanceItems = document.querySelectorAll(".guidance-item");

  guidanceItems.forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.2, // Stagger the animations slightly
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // Adjust this as needed
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Intro Section Animation
  gsap.from(".intro-section .h2", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".intro-section .lead", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".intro-section img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".intro-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
  // Swiper Initialization
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
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
    slidesPerView: 3, // Default for larger screens
    spaceBetween: 30, // Default space between slides
    breakpoints: {
      768: {
        // When the screen width is 768px or more
        slidesPerView: 3, // Display 2 cards
        spaceBetween: 20, // Adjust space between slides if needed
      },
      480: {
        // When the screen width is 480px or more
        slidesPerView: 1, // Display 1 card
        spaceBetween: 10, // Adjust space between slides if needed
      },
    },
  });
  // cta button
  const ctaElements = gsap.utils.toArray([
    ".cta-heading",
    ".cta-text",
    ".cta-button",
    ".cta-contact",
  ]);

  ctaElements.forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.3, // Stagger the animations
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Adjust this as needed
          toggleActions: "play none none none",
        },
      }
    );
  });
  // Animate the form container and its elements
  gsap.fromTo(
    ".contact-form",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%", // Adjust as needed
        toggleActions: "play none none none",
      },
    }
  );

  // Animate form fields with a stagger effect
  gsap.fromTo(
    ".contact-form input, .contact-form textarea",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2, // Stagger the animation for each field
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%", // Adjust as needed
        toggleActions: "play none none none",
      },
    }
  );
  // footer
});
