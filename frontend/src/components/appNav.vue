<template>
  <div class="mt-0">
    <div class="bg-gray-100 mt-0">
      <nav
        class="
          container
          mt-0
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >ElecTok
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
        <router-link
          to="/"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Home
        </router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
        <router-link
          to="buy"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Buy electricity
        </router-link>
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <router-link
          to="days"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          View days
        </router-link>
        </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>