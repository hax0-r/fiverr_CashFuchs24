const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-[#0d1834] md:p-10 p-5 py-10 md:py-20">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 ">

            <div class="w-full">
                <a href="/index.html">
                    <img src="/Docs/Assets/logo.png" class="h-12 md:mx-0 mx-auto" alt="">
                </a>

                <div class="mt-10 md:pl-5">

                    <a href="tel:+03 00 0000 000"
                        class="flex items-center gap-2.5 transition-all duration-500 hover:text-[#eb6129] text-white"><i
                            class="fa-solid fa-phone text-lg text-[#eb6129]"></i> 03 00 0000 000</a>
                    <a href="mailto:post@cashfuchs24.de"
                        class="flex items-center gap-2.5 transition-all mt-4 duration-500 hover:text-[#eb6129] text-white"><i
                            class="fa-solid fa-envelope text-xl text-[#eb6129] "></i>post@cashfuchs24.de</a>
                    <a href="#"
                        class="flex items-center gap-2.5 transition-all mt-4 duration-500 hover:text-[#eb6129] text-white"><i
                            class="fa-solid fa-location-dot text-xl text-[#eb6129] "></i>Postfach 2 88 12 10131
                        Berlin</a>

                </div>

            </div>

            <div class="w-full text-gray-700">
                <h2 class="font-semibold text-2xl mb-3 text-white">Links</h2>
                <ul class="space-y-3 md:mt-6 mt-3 text-zinc-200">
                    <li><a class="hover:text-[#eb6129] transition-all duration-500" href=""> Online-Shopping
                            Cashback</a></li>
                    <li><a class="hover:text-[#eb6129] transition-all duration-500" href=""> Offline-Shopping
                            Cashback</a></li>
                    <li><a class="hover:text-[#eb6129] transition-all duration-500" href=""> Reise-Cashback</a></li>
                    <li><a class="hover:text-[#eb6129] transition-all duration-500" href=""> Premiumgewinnspiele</a>
                    </li>
                    <li><a class="hover:text-[#eb6129] transition-all duration-500" href=""> Kontakt</a></li>
                    <li><a class="hover:text-[#eb6129] transition-all duration-500" href=""> FAQ</a></li>
                </ul>
            </div>

            <div class="w-full text-gray-700">
                <h2 class="font-semibold text-2xl mb-3 text-white">Kontaktformular</h2>
                <form action="" class="mt-6 ">
                    <input required type="text" name="Vorname" placeholder="Vorname"
                        class="bg-[#232d46] w-full max-w-sm py-2.5 px-3.5 text-zinc-200 rounded-lg" id="">
                    <input required type="text" name="Nachname" placeholder="Nachname"
                        class="bg-[#232d46] w-full max-w-sm py-2.5 px-3.5 mt-2 text-zinc-200 rounded-lg" id="">
                    <input required type="email" name="E-Mail Adresse" placeholder="E-Mail Adresse"
                        class="bg-[#232d46] w-full max-w-sm py-2.5 px-3.5 mt-2 text-zinc-200 rounded-lg" id="">
                    <textarea type="email" name="Ihre Nachricht" rows="5" placeholder="Ihre Nachricht"
                        class="bg-[#232d46] mb-2 w-full max-w-sm py-2.5 px-3.5 mt-2 text-zinc-200 rounded-lg"
                        id=""></textarea>
                    <input id="check" type="checkbox">
                    <label for="check" class="text-zinc-200">Hiermit willige ich in die Speicherung und Verarbeitung
                        meiner personenbezogenen Daten ein. Die Informationen zur Verarbeitung meiner personenbezogenen
                        Daten und zum Datenschutz habe ich zur Kenntnis genommen, gelesen und inhaltlich verstanden.
                    </label>
                    <button
                        class="w-full max-w-sm p-3 rounded-lg mt-2 transition-all duration-500 hover:text-[#eb6129] bg-[#eb6129] text-white hover:bg-white font-medium tracking-wide cursor-pointer">Absenden</button>
                </form>
            </div>



        </div>
    </footer>
`