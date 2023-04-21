window.addEventListener("DOMContentLoaded", (e) => {
    // initialize tab wigets
    const init_tab = () => {
        const tablists = document.querySelectorAll('.tab-list');
        tablists.forEach((tablist) => {
            tablist.setAttribute("role", "tablist");
            const tabs = tablist.querySelectorAll('.tab');

            tabs.forEach((tab) => {
                tab.setAttribute("role", "tab");
                if (tab.classList.contains("tab-selected")) {
                    tab.setAttribute("aria-selected", "true");
                } else {
                    tab.setAttribute("aria-selected", "false");
                }
                tab.addEventListener("click", function () {
                    tabs.forEach((tab)=>{
                        tab.classList.remove("tab-selected");
                        tab.setAttribute("aria-selected", "false");
                    });
                    this.classList.add("tab-selected");
                    this.setAttribute("aria-selected", "true");
                });
            });
        });
    };
    // initalize accordion widgets
    // enable ARIA
    const init_accordion = () => {
        const accs = document.querySelectorAll('[class="accordion"]');
        accs.forEach((acc) => {
            if (acc.classList.contains("accordion-active")) {
                acc.setAttribute("aria-expanded", "true");
            } else {
                acc.setAttribute("aria-expanded", "false");
            }
            acc.addEventListener("click", function () {
                this.classList.toggle("accordion-active");
                const panel = this.nextElementSibling;
                if (panel.style.display == "block") {
                    panel.style.display = "none";
                    this.setAttribute("aria-expanded", "false");
                } else {
                    panel.style.display = "block";
                    this.setAttribute("aria-expanded", "true");
                }
            });
        });
    }

    init_tab();
    init_accordion();
});