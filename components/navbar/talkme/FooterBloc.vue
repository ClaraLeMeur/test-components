<template>
  <div class="p-4">
    <div class="flex w-full justify-center md:p-8">
      <div class="p-4 w-3/4">
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 xl:gap-6 w-full pb-8">
          <img
              class="h-10 cursor-pointer justify-self-center"
              src="/logo.svg"
              alt="TalkMe"
          />
        </div>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 xl:gap-6 w-full">
          <a
              class="text-center hover:text-primary-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              href="http://maps.google.com/?q=Le%20Mans%20Innovation%2057%20Bld%20Demorieux%2072100,%20Le%20Mans"
          >
            Le Mans Innovation<br/>57 Bld Demorieux<br/>72100, Le Mans
          </a>
          <a
              class="text-center hover:text-primary-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              href="http://maps.google.com/?q=76%20place%20du%20Général%20Bonet%2061000,%20Alençon"
          >
            76 place du Général Bonet<br/>61000, Alençon
          </a>
          <div class="text-center transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Nicolas Tessier<br/>Co-founder<br/>
            <a
                class="hover:text-primary-500 "
                href="mailto:nicolas.tessier@talkme.tech"
            >nicolas.tessier@talkme.tech</a
            >
          </div>
        </div>
        <div class="flex justify-center items-center pt-6 h-30 text-primary-500">
          <div class="flex px-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a href="https://www.linkedin.com/company/talkmetech/">
              <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedIn"
                  class="h-6 md:h-10 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
              >
                <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
          <div class="flex px-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a href="https://www.youtube.com/channel/UCtZBDVIKOhVTnH_9YvJ8l1w">
              <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  class="h-6 md:h-10 fill-current"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center pt-6 text-center text-sm">
          <div class="w-full">&copy; 2021 TalkMe. Tous droits réservés</div>
          <div
              @click="$router.push({ name: 'mentions-legales' })"
              class="hover:text-primary-500 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Mentions légales
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
