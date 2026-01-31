Script designed for mouse scroll wheels to remove the "steppy" feel of default scrolling.

### ( TEMPORARY )
1. Press `Ctrl` + `Shift` + `I` to open Developer Tools.
2. Go to the **Console** tab.
3. If it's your first time, type `allow pasting` and press `Enter`.
4. Copy the code from `smoothscroll.js`.
5. Paste it into the console.
6. Hit `Enter`.

### ( VENCORD PRELOAD )
1. Press `Win` + `R` on your keyboard.
2. Paste `%appdata%\Vencord` and press `Enter`.
3. Open the `dist` folder.
4. Place your `smoothscroll.js` file inside this folder.
5. Open `preload.js` with Notepad or a code editor.
6. Scroll to the very bottom and paste: `require("./smoothscroll.js");`
7. Save the file and restart Discord.
