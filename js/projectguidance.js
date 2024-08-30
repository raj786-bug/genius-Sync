document.addEventListener("DOMContentLoaded", () => {
  // GSAP and ScrollTrigger Initialization
  gsap.registerPlugin(ScrollTrigger);

  // Helper function to trigger animations on scroll
  const createScrollAnimation = (selector, options) => {
    gsap.from(selector, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        once: true, // Ensures the animation occurs only once
        // Optional callback for debugging
        onEnter: () => console.log(`${selector} animation triggered`),
      },
      ...options,
    });
  };

  // Hero Section Animation
  createScrollAnimation(".hero-content");
  createScrollAnimation(".hero-image");

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

  // Open sidebar
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

  // Close sidebar
  closeIcon.addEventListener("click", () => {
    gsap.to(sideNavbar, {
      x: "100%",
      opacity: 0,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => sideNavbar.classList.remove("active"),
    });
    document.body.style.overflow = "auto";
  });

  // Handle dropdown toggles in the sidebar
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
        gsap.set(dropdownContent, { display: "block", height: "auto" });
        gsap.fromTo(
          dropdownContent,
          { opacity: 0, height: 0 },
          { opacity: 1, height: "auto", duration: 0.3, ease: "power1.inOut" }
        );
        currentDropdown.classList.add("active");
      }
    }
  });

  // Close sidebar if clicking outside
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
        onComplete: () => sideNavbar.classList.remove("active"),
      });
      document.body.style.overflow = "auto";
    }
  });

  // Navbar dropdown animations
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

  // Animations for other sections using ScrollTrigger
  const sections = [
    ".guidance-section",
    ".testimonials-section",
    ".how-it-works-section",
    ".intro-paragraph-section", // Ensure this selector matches your HTML
  ];

  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true, // Ensures the animation occurs only once
        onEnter: () => console.log(`${section} animation triggered`),
      },
    });
  });
});
