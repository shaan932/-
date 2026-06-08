document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger Core System
    gsap.registerPlugin(ScrollTrigger);

    // Global Object Pointers
    const audio = document.getElementById("bg-music");
    const welcomeScreen = document.getElementById("welcome-screen");
    const enterStoryBtn = document.getElementById("enter-story-btn");
    const audioWidget = document.getElementById("audio-widget");
    const musicToggleBtn = document.getElementById("music-toggle-btn");
    const volumeSlider = document.getElementById("volume-slider");
    const appContent = document.getElementById("app-content");

    // Live Timing Target Date configuration (Adjust year/month/day as your history defines)
    const friendshipStartDate = new Date("2021-06-01T00:00:00");

    // Launch Particle Environment Setup
    initAmbientParticleEngine();

    // ==========================================================================
    // SECTION 1: WELCOME SCREEN TYPEWRITER SYSTEM (Corrected Direction)
    // ==========================================================================
    const targetMessage = "For The Best Friend Who Made Life More Beautiful ❤️";
    const typewriterElement = document.getElementById("typewriter-text");
    let characterIndex = 0;

    function executeTypewriter() {
        if (characterIndex < targetMessage.length) {
            typewriterElement.innerHTML += targetMessage.charAt(characterIndex);
            characterIndex++;
            setTimeout(executeTypewriter, 55);
        }
    }
    // Launch Typewriter String Stream
    setTimeout(executeTypewriter, 400);

    // ==========================================================================
    // ENTRY STORY UNLOCK MACHINE (AUTOPLAY HEURISTIC COMPLIANCE)
    // ==========================================================================
    enterStoryBtn.addEventListener("click", () => {
        // Safe context audio validation sequence
        audio.play().then(() => {
            audio.volume = volumeSlider.value;
        }).catch(error => {
            console.warn("Context standard blocked initial track execution, standard stream fallback ready.", error);
        });

        // Clear view of overlay curtain layout
        welcomeScreen.style.opacity = "0";
        
        setTimeout(() => {
            welcomeScreen.style.display = "none";
            // Structural unlock animation sequences
            appContent.classList.remove("app-locked-state");
            audioWidget.classList.remove("hidden-widget");
            
            // Re-render and bind ScrollTrigger logic paths
            ScrollTrigger.refresh();
            initScrollTriggerSequencing();
            initCalculatedClockLoop();
        }, 1200);
    });

    // ==========================================================================
    // INTERACTIVE SYSTEM AUDIO LOGIC PLATFORM
    // ==========================================================================
    musicToggleBtn.addEventListener("click", () => {
        const discIcon = musicToggleBtn.querySelector("i");
        if (audio.paused) {
            audio.play();
            discIcon.classList.add("fa-spin-slow");
            discIcon.style.color = "var(--pink-blossom)";
        } else {
            audio.pause();
            discIcon.classList.remove("fa-spin-slow");
            discIcon.style.color = "var(--text-muted)";
        }
    });

    volumeSlider.addEventListener("input", (event) => {
        audio.volume = event.target.value;
    });

    // ==========================================================================
    // SYSTEM DYNAMIC FRIENDSHIP DURATION TIMING ENGINE
    // ==========================================================================
    function initCalculatedClockLoop() {
        const daySlot = document.getElementById("count-days");
        const hourSlot = document.getElementById("count-hours");
        const minuteSlot = document.getElementById("count-minutes");
        const secondSlot = document.getElementById("count-seconds");

        function recalculateTickingInterval() {
            const currentMoment = new Date();
            const timeDifferenceMs = currentMoment - friendshipStartDate;

            if (timeDifferenceMs < 0) return;

            const calcDays = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
            const calcHours = Math.floor((timeDifferenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const calcMinutes = Math.floor((timeDifferenceMs % (1000 * 60 * 60)) / (1000 * 60));
            const calcSeconds = Math.floor((timeDifferenceMs % (1000 * 60)) / 1000);

            daySlot.textContent = String(calcDays).padStart(3, '0');
            hourSlot.textContent = String(calcHours).padStart(2, '0');
            minuteSlot.textContent = String(calcMinutes).padStart(2, '0');
            secondSlot.textContent = String(calcSeconds).padStart(2, '0');
        }

        recalculateTickingInterval();
        setInterval(recalculateTickingInterval, 1000);
    }

    // ==========================================================================
    // LIGHTBOX INTERACTION CONTROLLER LAYER
    // ==========================================================================
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImg = document.getElementById("lightbox-enlarged-img");
    const lightboxClose = document.querySelector(".lightbox-close-trigger");
    const imageCards = document.querySelectorAll(".click-preview-target");

    imageCards.forEach(card => {
        card.addEventListener("click", () => {
            const localSource = card.getAttribute("data-img");
            lightboxImg.src = localSource;
            lightboxOverlay.classList.remove("hidden-lightbox");
        });
    });

    lightboxClose.addEventListener("click", () => {
        lightboxOverlay.classList.add("hidden-lightbox");
    });

    lightboxOverlay.addEventListener("click", (e) => {
        if (e.target !== lightboxImg && e.target !== lightboxClose) {
            lightboxOverlay.classList.add("hidden-lightbox");
        }
    });

    // ==========================================================================
    // GSAP SCROLLANIMATION MATRIX IMPLEMENTATION
    // ==========================================================================
    function initScrollTriggerSequencing() {
        // General scroll element interceptor matching layout
        const scrolls = document.querySelectorAll(".reveal-on-scroll");
        
        scrolls.forEach(item => {
            gsap.fromTo(item, 
                { opacity: 0, y: 35 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 88%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

        // Trigger Finale Particle Blast when bottom view target breaches focus
        ScrollTrigger.create({
            trigger: "#finale-grand-view",
            start: "top 60%",
            onEnter: () => {
                executeMagicalFinaleExplosion();
            }
        });
    }

    // ==========================================================================
    // VISUAL EFFECT ARCHITECTURE: FINALE CONFETTI BLAST
    // ==========================================================================
    function executeMagicalFinaleExplosion() {
        const explosionDuration = 4 * 1000;
        const completeAnimationEnd = Date.now() + explosionDuration;

        (function frameTrack() {
            // Heart shapes and circle matrix vectors loaded through Canvas engine
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.8 },
                colors: ['#ff6ca1', '#a370f7', '#ffd3e8']
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.8 },
                colors: ['#ff6ca1', '#a370f7', '#ffd3e8']
            });

            if (Date.now() < completeAnimationEnd) {
                requestAnimationFrame(frameTrack);
            }
        }());
    }

    // ==========================================================================
    // LIGHTWEIGHT HIGH-PERFORMANCE AMBIENT BACKGROUND SYSTEM
    // ==========================================================================
    function initAmbientParticleEngine() {
        const canvas = document.getElementById("ambient-canvas");
        const ctx = canvas.getContext("2d");
        let activeParticles = [];

        function updateCanvasMetrics() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        updateCanvasMetrics();
        window.addEventListener("resize", updateCanvasMetrics);

        class EnvironmentalFloatingParticle {
            constructor() {
                this.resetProperties();
            }
            resetProperties() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + (Math.random() * 40);
                this.radius = Math.random() * 2.2 + 0.6;
                this.velocityDeltaY = Math.random() * -0.5 - 0.2; // Slow vertical drift
                this.velocityDeltaX = Math.random() * 0.4 - 0.2;
                this.opacityValue = Math.random() * 0.5 + 0.2;
                this.particleColor = Math.random() > 0.5 ? "255, 108, 161" : "163, 112, 247"; // Pink vs Purple
            }
            processTrackingUpdate() {
                this.y += this.velocityDeltaY;
                this.x += this.velocityDeltaX;
                
                if (this.y < -10) {
                    this.resetProperties();
                }
            }
            renderDrawingBuffer() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.particleColor}, ${this.opacityValue})`;
                ctx.fill();
            }
        }

        // Keep density conservative to limit load constraints on baseline mobile CPU designs
        const densityCap = 35;
        for (let idx = 0; idx < densityCap; idx++) {
            activeParticles.push(new EnvironmentalFloatingParticle());
        }

        function clearAndDrawLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let idx = 0; idx < activeParticles.length; idx++) {
                activeParticles[idx].processTrackingUpdate();
                activeParticles[idx].renderDrawingBuffer();
            }
            requestAnimationFrame(clearAndDrawLoop);
        }
        clearAndDrawLoop();
    }
});
