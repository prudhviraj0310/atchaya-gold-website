/* Atchaya Gold Vanilla JavaScript Logic */

document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
    initStickyHeader();
    initVideoShowcase();
    initFAQ();
    initContactForm();

    // Set current year in footer
    const yearEl = document.getElementById("copyright-year");
    if (yearEl) {
        yearEl.innerHTML = `© ${new Date().getFullYear()} Atchaya Gold Company. All rights reserved.`;
    }
});

function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const iconOpen = document.getElementById("menu-icon-open");
    const iconClose = document.getElementById("menu-icon-close");
    const links = document.querySelectorAll(".mobile-nav-link");

    if (!btn || !menu) return;

    let isOpen = false;

    const toggleMenu = () => {
        isOpen = !isOpen;
        if (isOpen) {
            menu.classList.remove("hidden");
            iconOpen.classList.add("hidden");
            iconClose.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
            iconOpen.classList.remove("hidden");
            iconClose.classList.add("hidden");
        }
    };

    btn.addEventListener("click", toggleMenu);

    links.forEach(link => {
        link.addEventListener("click", () => {
            if (isOpen) toggleMenu();
        });
    });
}

function initStickyHeader() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-white/98", "shadow-lg");
            navbar.classList.remove("bg-white/80");
        } else {
            navbar.classList.add("bg-white/80");
            navbar.classList.remove("bg-white/98", "shadow-lg");
        }
    });
}

function initVideoShowcase() {
    const containers = document.querySelectorAll(".video-container");

    containers.forEach(container => {
        container.addEventListener("click", function () {
            const src = this.getAttribute("data-src");
            const overlay = this.querySelector(".play-overlay");
            const poster = this.querySelector(".poster-image");

            // If video element already exists, just toggle play/pause
            let video = this.querySelector("video");

            if (!video) {
                // Create video element
                video = document.createElement("video");
                video.className = "w-full h-full object-cover";
                video.muted = false;
                video.playsInline = true;
                video.loop = true;

                const source = document.createElement("source");
                source.src = src;
                source.type = "video/mp4";
                video.appendChild(source);

                this.appendChild(video);

                if (poster) poster.style.display = 'none';

                video.play().catch(console.error);
                if (overlay) overlay.classList.add("opacity-0");
                overlay.classList.remove("opacity-100");

                video.addEventListener("ended", () => {
                    if (overlay) {
                        overlay.classList.remove("opacity-0");
                        overlay.classList.add("opacity-100");
                    }
                });

            } else {
                if (video.paused) {
                    video.muted = false;
                    video.play().catch(console.error);
                    if (overlay) {
                        overlay.classList.add("opacity-0");
                        overlay.classList.remove("opacity-100");
                    }
                } else {
                    video.pause();
                    video.muted = true;
                    if (overlay) {
                        overlay.classList.remove("opacity-0");
                        overlay.classList.add("opacity-100");
                    }
                }
            }
        });
    });
}

function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const btn = item.querySelector(".faq-toggle");
        const content = item.querySelector(".faq-content");
        const icon = item.querySelector(".faq-icon");

        if (!btn || !content || !icon) return;

        btn.addEventListener("click", () => {
            const isOpen = !content.classList.contains("hidden");

            // Close all others
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherContent = otherItem.querySelector(".faq-content");
                    const otherIcon = otherItem.querySelector(".faq-icon");
                    if (otherContent) otherContent.classList.add("hidden");
                    if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
                }
            });

            if (isOpen) {
                content.classList.add("hidden");
                icon.style.transform = "rotate(0deg)";
            } else {
                content.classList.remove("hidden");
                icon.style.transform = "rotate(180deg)";
            }
        });
    });
}



function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    // Remove the inline onclick alert from HTML since we are handling via JS
    const btn = form.querySelector("button");
    if (btn) btn.removeAttribute("onclick");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector("button");
        const originalText = btn.innerHTML;

        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Processing...`;
        btn.disabled = true;
        btn.classList.add("opacity-70", "cursor-not-allowed");

        // Simulate API call
        setTimeout(() => {
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Request Sent Successfully`;
            btn.classList.remove("bg-brand-red");
            btn.classList.add("bg-green-600");

            form.reset();

            // Revert after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                btn.classList.remove("opacity-70", "cursor-not-allowed", "bg-green-600");
                btn.classList.add("bg-brand-red");
            }, 3000);
        }, 1500);
    });
}
