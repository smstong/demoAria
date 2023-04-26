window.addEventListener("DOMContentLoaded", (e) => {
    // initialize tab wigets
    const init_tab = () => {
        const tablists = document.querySelectorAll('.tab-list');
        tablists.forEach((tablist) => {
            tablist.setAttribute("role", "tablist");
            const tabs = tablist.querySelectorAll('.tab');
            const panels = tablist.parentElement.querySelectorAll('.tab-panel');

            // select a tab
            const selectTab = (index) => {
                tabs.forEach((tab) => {
                    tab.classList.remove("tab-selected");
                    tab.setAttribute("aria-selected", "false");
                });

                panels.forEach((panel)=>{
                    panel.classList.remove("tab-panel-active");
                });

                if (index >=0 && index<tabs.length ) {
                    tabs[index].classList.add("tab-selected");
                    tabs[index].setAttribute("aria-selected", "true");
                    panels[index].classList.add("tab-panel-active");
                }
            }
            tabs.forEach((tab, i) => {
                tab.setAttribute("role", "tab");
                if (tab.classList.contains("tab-selected")) {
                    selectTab(i);
                }
                tab.addEventListener("click", function () {
                    selectTab(i);
                });
            });
        });
    };
    // initalize accordion widgets
    // enable ARIA
    const init_accordion = () => {
        const accs = document.querySelectorAll('.accordion');
        accs.forEach((acc) => {
            if (acc.classList.contains("accordion-expanded")) {
                acc.setAttribute("aria-expanded", "true");
            } else {
                acc.setAttribute("aria-expanded", "false");
            }
            acc.addEventListener("click", function () {
                this.classList.toggle("accordion-expanded");
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