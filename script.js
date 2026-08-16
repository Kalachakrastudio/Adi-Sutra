/* =========================================================
   ADI SUTRA WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.getElementById("header");

    function handleHeader() {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleHeader);

    handleHeader();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mobileMenu =
        document.getElementById("mobileMenu");


    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        mobileMenu.classList.toggle("open");

    });


    /* Close mobile menu after clicking link */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            mobileMenu.classList.remove("open");

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 180;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            const target =
                link.getAttribute("href");


            if (target === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );


    updateActiveNavigation();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header.offsetHeight;


                const targetPosition =
                    target.offsetTop -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       WHATSAPP MESSAGE
    ===================================================== */

    const whatsappNumber =
        "919999999999";


    const whatsappMessage =
        encodeURIComponent(
            "Hello Adi Sutra, I would like to consult regarding a land/property matter."
        );


    document
        .querySelectorAll(
            'a[href*="wa.me"]'
        )
        .forEach(link => {

            link.href =
                `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        });


    /* =====================================================
       SERVICE CARD STAGGER ANIMATION
    ===================================================== */

    const serviceCards =
        document.querySelectorAll(
            ".service-card"
        );


    serviceCards.forEach(
        (card, index) => {

            card.style.transitionDelay =
                `${index * 0.05}s`;

        }
    );


});
