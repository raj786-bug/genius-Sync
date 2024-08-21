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

  // How It Works Section Animation
  gsap.from(".how-it-works .step", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".how-it-works",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".how-it-works .step img", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".how-it-works",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".how-it-works .steps::before", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".how-it-works",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  // About Us Section Animations
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
});
var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 2000,
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
