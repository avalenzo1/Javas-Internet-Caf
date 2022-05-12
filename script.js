let Java = (function() {
    let ripple = (e) => {
        const button = e.currentTarget;
        button.dim = button.getBoundingClientRect();
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        let x = `${e.clientX - button.dim.left - radius}px`;
        let y = `${e.clientY - button.dim.top - radius}px`;

        if (e.clientX === 0 && e.clientY === 0) {
            x = `${button.dim.width / 2 - radius}px`;
            y = `${button.dim.height / 2 - radius}px`;
        }

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = x;
        circle.style.top = y;
        circle.classList.add("_ripple");

        const _ripple = button.getElementsByClassName("_ripple")[0];

        if (_ripple) {
            _ripple.remove();
        }

        button.appendChild(circle);
    };

    let buttons = document.querySelectorAll(".ripple");
    buttons.forEach((button) => {
        button.addEventListener("click", ripple);
    });

    let navigationTool = (e) => {
        this.active_el = e.querySelector("ul li a.active");
        this.links = e.querySelectorAll("ul li a");
        this.links.forEach((link) => {
            link.onclick = (el) => {
                this.links.forEach((links) => {
                    links.classList.remove("active");
                });
                link.classList.add("active");
            };
        });
    };

    return {
        navigationTool
    };
})();

let JavaElements = document.querySelectorAll("*[java]");

JavaElements.forEach((e) => {
    let ts = `new Java.${e.getAttribute("java")}(e)`;
    let t = eval(ts);
});