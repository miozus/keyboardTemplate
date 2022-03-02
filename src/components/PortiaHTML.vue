<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
import  saveAs  from "file-saver";
import  domtoimage  from "dom-to-image";
</script>

<template>
  <div id="fullpage" class="p-0 m-0">
    <div id="root" role="root" class="root">
      <ol ref="handleNodes" id="keyboard" class="keyboard">
        <li @click="savePngByClick" class="keystroke"><span>~</span>`</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>1</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>2</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>3</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>4</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>5</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>6</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>7</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>8</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>9</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>0</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>-</li>
        <li @click="savePngByClick" class="keystroke"><span>📦</span>=</li>
        <li @click="savePngByClick" class="keystroke special r" id="delete">delete</li>
        <li @click="savePngByClick" class="keystroke special l" id="tab"><span>🗺️</span>tab: map</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🎒</span>Q sort</li>
        <!-- <li @click="savePngByClick" class="keystroke desc"><span>🐟</span>W.assist</li> -->
        <!-- <li @click="savePngByClick" class="keystroke desc"><span>🛖</span>W.assist</li> -->
        <li @click="savePngByClick" class="keystroke desc"><span>⛏️</span>W.assist</li>
        <li @click="savePngByClick" class="keystroke desc direction"><span>📦</span>E↑pre</li>
        <li @click="savePngByClick" class="keystroke desc"><span>R</span>interact</li>
        <!-- <li @click="savePngByClick" class="keystroke desc"><span>🐟</span>T main</li> -->
        <!-- <li @click="savePngByClick" class="keystroke desc"><span>🛖</span>T main</li> -->
        <li @click="savePngByClick" class="keystroke desc"><span>⛏️</span>T main</li>
        <li @click="savePngByClick" class="keystroke">Y</li>
        <li @click="savePngByClick" class="keystroke">U</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🗡️</span>I LBtn</li>
        <li @click="savePngByClick" class="keystroke desc"><span>⚙️</span>O RBtn</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🎒</span>P 13</li>
        <li @click="savePngByClick" class="keystroke"><span>{</span>[</li>
        <li @click="savePngByClick" class="keystroke"><span>}</span>]</li>
        <li @click="savePngByClick" class="keystroke"><span>|</span>\</li>
        <li @click="savePngByClick" class="keystroke special l" id="caps-lock" ><span>🔙</span>CapsLock: Esc</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🖱️</span>A slow</li>
        <!-- <li @click="savePngByClick" class="keystroke desc"><span>🖱️</span></li> -->
        <li @click="savePngByClick" class="keystroke desc direction"><span>📖</span>S←left</li>
        <li @click="savePngByClick" class="keystroke desc direction"><span>📦</span>D↓next</li>
        <li @click="savePngByClick" class="keystroke desc direction"><span>📖</span>F→right</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🧪</span>G dev</li>
        <li @click="savePngByClick" class="keystroke desc move"><span>🖱️</span>H ←</li>
        <li @click="savePngByClick" class="keystroke desc move"><span>🖱️</span>J ↓</li>
        <li @click="savePngByClick" class="keystroke desc move"><span>🖱️</span>K ↑</li>
        <li @click="savePngByClick" class="keystroke desc move"><span>🖱️</span>L →</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🖲️</span>; down</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🖲️</span>' up</li>
        <li @click="savePngByClick" class="keystroke special r" id="enter"><span>enter</span>return</li>
        <!-- <li @click="savePngByClick" class="keystroke desc" id="enter keystroke" ><span>🤖</span>Space</li> -->
        <li @click="savePngByClick" class="keystroke special shift l">shift</li>
        <li @click="savePngByClick" class="keystroke">Z</li>
        <li @click="savePngByClick" class="keystroke">X</li>
        <li @click="savePngByClick" class="keystroke">C</li>
        <li @click="savePngByClick" class="keystroke">V</li>
        <li @click="savePngByClick" class="keystroke">B</li>
        <li @click="savePngByClick" class="keystroke">N</li>
        <li @click="savePngByClick" class="keystroke">M</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🔴</span>, stop</li>
        <!-- <li @click="savePngByClick" class="keystroke desc"><span>🛖</span>. next</li> -->
        <!-- <li @click="savePngByClick" class="keystroke desc"><span>🐟</span>. next</li> -->
        <li @click="savePngByClick" class="keystroke desc"><span>⛏️</span>. next</li>
        <li @click="savePngByClick" class="keystroke desc"><span>🎥</span>/ look</li>
        <li @click="savePngByClick" class="keystroke special shift r">shift</li>
        <li @click="savePngByClick" class="keystroke special tall less-padding l">ctrl</li>
        <li @click="savePngByClick" class="keystroke special tall less-padding l"><span></span>win</li>
        <li @click="savePngByClick" class="keystroke special tall command r"><span></span>alt</li>
        <li @click="savePngByClick" class="keystroke special tall" id="space"> <span id="space_icon">🤖</span>Space Unitelligent Robot </li>
        <li @click="savePngByClick" class="keystroke special tall command l"><span></span>alt</li>
        <li @click="savePngByClick" class="keystroke special tall less-padding r"><span></span>fn</li>
        <li @click="savePngByClick" class="keystroke arrow up">&#8593;</li>
        <li @click="savePngByClick" class="keystroke arrow">&#8592;</li>
        <li @click="savePngByClick" class="keystroke arrow down">&#8595;</li>
        <li @click="savePngByClick" class="keystroke arrow">&#8594;</li>
      </ol>
    </div>

    <div id="event-handling">
      <button @click="msgbtn">Download</button>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const root = ref(null);
    onMounted(() => {
      console.log("ref: ", root.value);
      console.log("proxy: ", proxy.root);
    });

    return {
      root,
    };
  },
  data() {
    return {
      nodes: [],
    };
  },
  methods: {
    whoami(obj){
      console.log("whoami: ", obj);
      console.log("target: ", obj.target);
      console.log("target: ", obj.target.innerText);
    },
    getPngById(name) {
      domtoimage.toPng(document.getElementById(name))
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
      // this.message = this.message.split("").reverse().join("");
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
      // this.message = this.message.split("").reverse().join("");
    },
    savePngById(name) {
      domtoimage.toBlob(document.getElementById(name))
      .then(function (blob) {
        saveAs(blob, "my-node.png");
      });
    },
    savePngByNode(node, name) {
      domtoimage.toBlob(node).then(function (blob) {
          saveAs(blob, "_" + name + ".png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
    },
    savePngByClick(node) {
      console.log('node: ', node)
    },
    savePngByClickOrigin(node) {
      domtoimage.toBlob(node.target).then(function (blob) {
          saveAs(blob, "_" + node.target.innerText + ".png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
    },
    savePngByOriginId(name) {
      domtoimage.toPng(document.getElementById(name), { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement("a");
          link.download = "area-chart.png";
          link.href = dataUrl;
          link.click();
        });
    },
    msgbtn() {
      // this.getPngById("keyboard");
      // this.savePngById("keyboard");
      this.savePngByOriginId("keyboard");
      // var i = 0;
      // const kbd = document.getElementById('keyboard').children
      // console.log("kbd:  ", kbd);
      // console.log("kbd_", i);
      // kbd.map(e => this.getPngById(e))

      // if (i<=kbd.length) {
        // this.savePngByNode(kbd[i], kbd[i].innerText);
        // this.i++;
      // }

      // for (let i = 0; i < kbd.length; i++) {
          // this.savepngbynode(kbd[i], kbd[i].innerText);
      // }
      
      // this.$refs.handleNodes
      // for (n in this.nodes) {
        // this.getPngById(n);
        // console.log("node:", n)
      // }

    },
      handleNodes(e) {
        // this.getPngById(e)
        this.nodes.push(e);
      }
  },
};
</script>

<style scoped lang="css">
/* @import "../assets/css/keyboard.css"; */
@import "../assets/css/keyboard.css";
/* @import "../assets/css/promiscuous.css"; */
</style>
