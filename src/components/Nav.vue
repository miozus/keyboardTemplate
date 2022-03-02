<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import Portia from "./Portia.vue";
</script>

<template>
  <div class="w-full h-full bg-gradient-to-r from-indigo-400 to-blue-600">
    <div class="px-2 py-8 mx-4 sm:px-0">
      <TabGroup>
        <TabList
          class="flex p-1 space-x-1 bg-blue-900 bg-opacity-20 rounded-xl"
        >
          <Tab
            v-for="category in Object.keys(categories)"
            as="template"
            :key="category"
            v-slot="{ selected }"
          >
            <button
              :class="[
                'w-full py-2.5 text-sm leading-5 font-medium text-blue-200 rounded-lg',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 focus:text-blue-700',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white hover:bg-opacity-10 hover:text-white',
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="flex mt-2 overflow-auto">
          <TabPanel
            :class="[
              'bg-white rounded-xl p-3',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
            ]"
          >
            <Portia class="items-center" />
          </TabPanel>
        </TabPanels>
        <TabPanels class="flex mt-2 overflow-auto">
          <Portia class="items-center" />
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script>
let categories = {
  Recent: [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
};

export default {
  data() {
    return {
      categories,
    };
  },
};
</script>
