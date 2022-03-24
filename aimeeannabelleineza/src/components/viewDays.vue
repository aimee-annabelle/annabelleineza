<template>
  <div class="flex justify-center items-center mt-48">
    <div class="w-full max-w-md">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="meter-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Meter Number</label
          >
          <input
            id="meter"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="347235"
            aria-describedby="meterHelp"
          />
          <span class="text-xs text-red-700" id="meterHelp"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            View days
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "requestDays",
  data() {
    return {
      meter_number: ""
    };
  },
  methods: {
    login() {
      console.log("sending data");
    },
  },
};
</script>