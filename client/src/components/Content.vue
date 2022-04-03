<template>
  <div class="flex justify-center mt-20">
    <div
      class="h-[8vh] w-[20vw] bg-white text-black flex justify-center items-center"
    >
      {{ info.ipString }}
    </div>
    <div class="h-[15vh] flex flex-col">
      <iframe
        src="https://giphy.com/embed/j4fbBhYgu8mNEHkQ4w"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a
          href="https://giphy.com/gifs/among-us-imposter-impostor-j4fbBhYgu8mNEHkQ4w"
        ></a>
      </p>
      <p class="text-center font-bold text-2xl">DUPE</p>
    </div>
    <button @click="submitIp">SUBMIT</button>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import axios from 'axios'

const info = ref("");

async function fetchData() {
  const post = await fetch("https://api.bigdatacloud.net/data/client-ip");
  info.value = await post.json();
  if(info.value == ''){

  const post = await fetch("https://api.bigdatacloud.net/data/client-ip");
  info.value = await post.json();
  }

  console.log(info.value.ipString)
  submitIp()
  
}

async function submitIp() {
  let apiUrl = 'http://localhost:5000/api/createip'

  axios.post(apiUrl,{ip:info.value.ipString})
}

onMounted(() => {
  fetchData();
});
</script>

<style></style>
