<script setup>
import saveAs from "file-saver";
import domtoimage from "dom-to-image";
import portia from "../data/portia.json";
</script>

<template>
  <div class="kbd_page">
    <div role="root" class="kbd_bg">
      <ol class="keyboard">
        <template v-for="keystroke in portia" :key="keystroke.id">
          <li
            @click="whoami"
            :id="keystroke.name"
            :class="keystroke.class"
            v-if="keystroke.visible"
          >
            <span>{{ keystroke.emoji }}</span>
            {{ keystroke.text }}
          </li>
        </template>
      </ol>
    </div>
    <div><button @click="msgbtn">Download</button></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodes: [],
    };
  },
  methods: {
    whoami(obj) {
      console.log("whoami: ", obj);
      console.log("target: ", obj.target);
      console.log("target: ", obj.target.innerText);
    },
    getPngById(name) {
      domtoimage
        .toPng(document.getElementById(name))
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
    getPngByNode(node) {
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
    savePngById(name) {
      domtoimage.toBlob(document.getElementById(name)).then(function (blob) {
        saveAs(blob, "my-node.png");
      });
    },
    savePngByNode(node, name) {
      domtoimage.toBlob(node)
        .then(function (blob) {
          saveAs(blob,  `_${name}.png`);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
    savePngByClick(node) {
      domtoimage.toBlob(node.target)
        .then(function (blob) {
          saveAs(blob, `_${node.target.innerText}.png`);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
    savePngByOriginId(name) {
      domtoimage.toPng(document.getElementById(name), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "keyboard.png";
          link.href = dataUrl;
          link.click();
        });
    },
    msgbtn() {
      this.savePngByOriginId("keyboard");
    },
  },
};
</script>

<style scoped lang="css">
@import "../assets/css/keyboard.css";
</style>
