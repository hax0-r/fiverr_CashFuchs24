const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav>
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-24 h-20">
            <a href="./index.html" class="flex justify-center lg:justify-start">
                <img src="./Docs/Assets/logo_black.svg" class="md:h-12 h-10" alt="logo">
            </a>
            <div class="md:flex items-center gap-10 hidden">
                <ul class="md:flex hidden items-center gap-7">
                    <li><a href="./index.html"
                            class="hover:text-[#6c2313] tracking-wide font-medium transition-all duration-500">Home</a></li>
                    <li><a href="./about-us.html"
                            class="hover:text-[#6c2313] tracking-wide font-medium transition-all duration-500">Cashback
                            Club</a>
                    </li>
                    <li><a href="./premiumgewinnspiele.html"
                            class="hover:text-[#6c2313] tracking-wide font-medium transition-all duration-500">Premiumgewinnspiele</a>
                    </li>
                    <li><a href="/index.html#faq"
                            class="hover:text-[#6c2313] tracking-wide font-medium transition-all duration-500">FAQ</a></li>
                </ul>
                <button
                    class="py-3 px-7 rounded-sm transition-all duration-500 hover:opacity-80 bg-[#0d1834] text-white font-medium tracking-wide cursor-pointer">Absenden</button>
            </div>
            <i id="mobileMenuBtn" class="fa-solid text-[#eb6028] fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed left-0 top-0 bg-white max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-slate-700 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 flex-col gap-7">
                <li><a href="./index.html"
                        class="hover:text-[#6c2313] text-nowrap tracking-wide transition-all duration-500">Home</a></li>
                <li class="">
                    <button onclick="toggleAccordion(1)" class="w-full flex justify-between items-center">
                        <p class="text-nowrap">Cashback Club</p>
                        <i id="icon-1"
                            class="fa-solid fa-angle-down text-slate-800 transition-transform duration-300"></i>
                    </button>
                    <div id="content-1" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <div class="pb-5">
                            <ul class="space-y-6 pl-3 pt-6 text-zinc-800">
                                <li><a class="text-nowrap" href="#">Online-Shopping Cashback</a></li>
                                <li><a class="text-nowrap" href="/#">Offline-Shopping Cashback</a></li>
                                <li><a class="text-nowrap" href="/#">Qeise-Cashback</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href="./premiumgewinnspiele.html"
                        class="hover:text-[#6c2313] text-nowrap tracking-wide transition-all duration-500">Premiumgewinnspiele</a>
                </li>
                <li><a href="/index.html#faq"
                        class="hover:text-[#6c2313] mobileMenuCloseBtn text-nowrap tracking-wide transition-all duration-500">FAQ</a></li>
            </ul>
            <button
                class="py-3 px-7 mt-10 rounded-md w-full transition-all duration-500 hover:opacity-80 bg-[#0d1834] text-white font-medium tracking-wide cursor-pointer">Absenden</button>
        </div>
    </div>
`


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});


function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.classList.remove('rotate-180')
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180')
    }
}