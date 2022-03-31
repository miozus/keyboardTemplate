# Keyboard Template

> Render keyboard for keymap designer
>
> supports 60 keystrokes | Winodws | MacOS
>
> <img src="https://img.shields.io/badge/Vue-3.2.16-orange?logo=vue.js"> <img src="https://img.shields.io/badge/Tailwindcss-2.2.19-orange?logo=Tailwind CSS"> <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen?logo=Macy’s">

### Install & Run

```bash
git clone https://github.com/miozus/keyboardTemplate
```

```bash
npm install
npm run dev
```

### Usage

```bash
❯ tree -L 3 -I 'node_modules'
.
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── public
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   └── fonts
│   ├── components
│   │   ├── Keyboard.vue    <- 4️⃣ render and download controller (if nessassary)
│   │   ├── Nav.vue         <- 1️⃣ import your keyboard data (copy normal.json then change)
│   │   └── Tabs.vue
│   ├── data                <- 2️⃣ custom your keyboard as json 
│   └── main.js
├── tailwind.config.js      <- 3️⃣ global keystroke css style (tailwind)
└── vite.config.js
```

1️⃣ import

```javascript
import debug from "../data/debug.json";

//...

export default defineComponent({
  data() {
    return {
      categories,   
      keymap: debug,    // your keyboard name
    };
  },
});

```

2️⃣ custom

An example of one keystroke in  `/data/normal.json`

```json
{
   "id":7,          // sorted Id which is relate to formatter
   "name":"^6",     // origin name as physical keyboard shown
   "class":"desc ", // css style name comes from global setting 3️⃣
   "text":"debug",  // bottom content of one keystroke
   "visible":true,  // visible or not
   "emoji":"🐞"     // up content of one keystroke
}
```

4️⃣ render and output

render like (click it and down one):

![debug](docs/img/_🐞_debug.png)

render all (click website left-bottom `download`):

![debug-keyboard](docs/img/debug-keyboard.png)

### Question Shoot

Q1: How to render correctly emoji on Chrome?

- Install plugin [Chromoji - Emojis for Google Chrome](https://chrome.google.com/webstore/detail/chromoji-emojis-for-googl/negakbijaemdgbhklopmghphgaeadmpo)
- Right click plugin and choose Configuration with `Twitter` style:

```bash
Chomoji
Style

Twitter
Scale

100%
Emoji provided free by Emoji One
```
