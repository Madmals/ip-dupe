<template>
  <div class="flex justify-center mt-20 gap-3">
    <div
      class="h-[8vh] w-[20vw] bg-white text-black flex justify-center items-center"
    >
      {{ info.ipString }}
    </div>
    <div class="h-[15vh] flex flex-col">
      <div v-if="checker === true">
        <iframe
          src="https://giphy.com/embed/ZyGTx7DbVmHDy"
          width="480"
          height="230"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a
            class="w-[20vw]"
            href="https://giphy.com/gifs/clone-ZyGTx7DbVmHDy"
          ></a>
        </p>
        <p>
          <a
            href="https://giphy.com/gifs/among-us-imposter-impostor-j4fbBhYgu8mNEHkQ4w"
          ></a>
        </p>
        <p class="text-center font-bold text-2xl">DUPE</p>
      </div>
      <div v-if="checker == false">
        <iframe
          src="https://giphy.com/embed/YVPa6BruvYXfk9suPv"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p><a href="https://giphy.com/gifs/YVPa6BruvYXfk9suPv"></a></p>

        <p class="text-center font-bold text-2xl">GOOD</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const info = ref("");
const checker = ref(false);

async function fetchData() {
  await axios.post("https://ipdupe.onrender.com/api/keepTrue", { bool: true });
  const post = await fetch("https://api.bigdatacloud.net/data/client-ip");

  info.value = await post.json();
  if (info.value == "") {
    const post = await fetch("https://api.bigdatacloud.net/data/client-ip");
    info.value = await post.json();
  }
  submitIp();
}

async function submitIp() {
  let apiUrl = "https://ipdupe.onrender.com/api/createip";

  await axios.post(apiUrl, { ip: info.value.ipString });
}

async function getState() {
  const apiUrl = "https://ipdupe.onrender.com/api/fetchState";
  try {
    const res = await axios.get(apiUrl);
    if (res.data[0].bool) {
      checker.value = res.data[0].bool;
    }
  } catch (err) {
    console.log(err);
  }
}

onMounted(() => {
  fetchData();
  getState();
});
</script>

<style></style>