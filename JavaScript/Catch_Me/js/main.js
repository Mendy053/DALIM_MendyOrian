const Elements = {
    score: {
        element: document.querySelector("#score .value"),
        value: 0
    },
    p_t_n_l: {
        element: document.querySelector("#ptnl .value"),
        value: 10
    },
    level: {
        element: document.querySelector("#level .value"),
        value: 1
    },
    missed: {
        element: document.querySelector("#missed .value"),
        value: 0
    },
    timer: {
        element: document.querySelector("#timer .value"),
        value: 60
    },
    spinner: {
        element: document.querySelector("#cm"),
        runSpeed: 300
    },
    ClickToStart_Button: {
        button: document.querySelector("#cts-area h1"),
        text_hover: "Click me to start..",
        text_notHover: "Catch Me If You Can!",
    },
    blackArea: {
        element: document.querySelector(".bad-click-area")
    }
};

(function () {
    Elements.ClickToStart_Button.button.innerText = Elements.ClickToStart_Button.text_notHover;
    Elements.ClickToStart_Button.button.addEventListener("mouseover", () => Elements.ClickToStart_Button.button.innerText = Elements.ClickToStart_Button.text_hover);
    Elements.ClickToStart_Button.button.addEventListener("mouseout", () => Elements.ClickToStart_Button.button.innerText = Elements.ClickToStart_Button.text_notHover);

    //// First details showing
    //
    // Timer
    Elements.timer.element.innerText = Elements.timer.value;
    // Missed clicks
    Elements.missed.element.innerText = Elements.missed.value;
    // Level
    Elements.level.element.innerText = Elements.level.value;
    // Points to next level
    Elements.p_t_n_l.element.innerText = Elements.p_t_n_l.value;
    // Score
    Elements.score.element.innerText = Elements.score.value;

    Elements.ClickToStart_Button.button.addEventListener("click", () => {
        Elements.spinner.element.className = "spinning";
        Elements.spinner.element.style.display = "inline-block";
        startTimer();
        whenHover();

        // blackArea
        Elements.blackArea.element.addEventListener("click", () => {
            badClick();
        });

        Elements.spinner.element.addEventListener("mouseover", whenHover);
        Elements.spinner.element.addEventListener("click", () => {
            goodClick();
        });
    });
})();

function goodClick() {
    addScore();
    minusP_T_N_L();

    if (!Elements.p_t_n_l.value) {
        if (Elements.level.value === 5) {
            // Finish The game
            stopTimer();
            Elements.spinner.element.removeEventListener("click", goodClick);
            Elements.spinner.element.removeEventListener("mouseover", whenHover);
            Elements.blackArea.element.removeEventListener("click", badClick);
            Elements.spinner.element.style.display = "none";
            startConfetti();
        }
        else {
            // next level
            addLevel();
            addSpinnerSpeed();
            minusRunSpeed();
            resetP_T_N_L();
            addToTimer();
        }
    }
}

function addToTimer() {
    Elements.timer.value += 10;
    Elements.timer.element.innerText = Elements.timer.value;
}

function minusRunSpeed() {
    Elements.spinner.runSpeed -= 50;
}

function addSpinnerSpeed() {
    const currentSpeed = parseFloat(getComputedStyle(Elements.spinner.element).getPropertyValue('animation-duration'));
    Elements.spinner.element.style.animationDuration = (currentSpeed - 0.25) + "s";
}

function addLevel() {
    Elements.level.value++;
    Elements.level.element.innerText = Elements.level.value;
}
function whenHover() {
    setTimeout(() => {
        Elements.spinner.element.style.top = getRandomNumber(
            (Elements.spinner.element.clientWidth / 2),
            Elements.blackArea.element.clientHeight - Elements.spinner.element.clientWidth
        ) + "px";
        Elements.spinner.element.style.left = getRandomNumber(
            0,
            Elements.blackArea.element.clientWidth - Elements.spinner.element.clientWidth
        ) + "px";
    }, Elements.spinner.runSpeed);
}

function badClick() {
    minusScore();
    missed();
}

function stopTimer() {
    clearInterval(Elements.timer.interval);
}

function minusP_T_N_L() {
    Elements.p_t_n_l.value--;
    Elements.p_t_n_l.element.innerText = Elements.p_t_n_l.value;
}

function resetP_T_N_L() {
    Elements.p_t_n_l.value = 10;
    Elements.p_t_n_l.element.innerText = Elements.p_t_n_l.value;
}

function addScore() {
    Elements.score.value += (Elements.level.value * 10);
    Elements.score.element.innerText = Elements.score.value;
}

function missed() {
    Elements.missed.value++;
    Elements.missed.element.innerText = Elements.missed.value;
}

function minusScore() {
    Elements.score.value -= Elements.level.value;
    Elements.score.element.innerText = Elements.score.value;
}

function startTimer() {
    Elements.timer.interval = setInterval(() => {
        Elements.timer.value--;
        Elements.timer.element.innerText = Elements.timer.value;

        if(!Elements.timer.value){
            stopTimer();
            Elements.spinner.element.removeEventListener("click", goodClick);
            Elements.spinner.element.removeEventListener("mouseover", whenHover);
            Elements.blackArea.element.removeEventListener("click", badClick);
            Elements.spinner.element.style.display = "none";

            alert("GAME OVER!\n" + `You have ${Elements.score.value} Score.`)
        }
    }, 1000);
}



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}




//////////////////////////////////////////
////////////     CONFETTI     ////////////
//////////////////////////////////////////


let animationId; // Variable to hold the requestAnimationFrame ID

function startConfetti() {
    const canvas = document.getElementById('confetti');
    const context = canvas.getContext('2d');
    const colors = ['#FFC107', '#03A9F4', '#4CAF50', '#FFEB3B', '#E91E63'];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function randomRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function ConfettiParticle() {
        this.x = randomRange(0, canvas.width);
        this.y = randomRange(-canvas.height, -10);
        this.velocityX = randomRange(-2, 2);
        this.velocityY = randomRange(5, 15);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = randomRange(10, 20);
    }

    ConfettiParticle.prototype.update = function () {
        this.x += this.velocityX;
        this.y += this.velocityY;

        if (this.y >= canvas.height) {
            this.y = randomRange(-canvas.height, -10);
        }
    };

    ConfettiParticle.prototype.draw = function () {
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
        context.closePath();
    };

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new ConfettiParticle());
    }

    // Animation loop
    function animateConfetti() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        const text = 'You won! You caught me';
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        const font = 'bold 60px "Pacifico", cursive';
        const haloWidth = 15;
        const borderWidth = 4;

        context.font = font;
        context.lineWidth = borderWidth;
        context.textAlign = 'center';
        context.textBaseline = 'middle';

        // Rainbow gradient for the text
        const gradient = context.createLinearGradient(centerX - 200, centerY - 100, centerX + 200, centerY + 100);
        gradient.addColorStop(0, '#FFC107');
        gradient.addColorStop(0.2, '#03A9F4');
        gradient.addColorStop(0.4, '#4CAF50');
        gradient.addColorStop(0.6, '#FFEB3B');
        gradient.addColorStop(0.8, '#E91E63');
        gradient.addColorStop(1, '#03A9F4');
        context.fillStyle = gradient;

        // Add cool animation effect to the text
        const textOffsetX = Math.sin(Date.now() / 200) * 15;
        const textOffsetY = Math.cos(Date.now() / 200) * 15;

        context.fillText(text, centerX + textOffsetX, centerY + textOffsetY);

        animationId = requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}

function stopConfetti() {
    cancelAnimationFrame(animationId);
    const canvas = document.getElementById('confetti');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}
