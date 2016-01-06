# Butler

<h2>What is it?</h2>
<p>A Node app that voice controls the home via HTML5 and <a href="http://github.com/mingram8/Node-House">Node-House</a>.</p>
<h2>How to use it?</h2>
<p>Clone the repository, and do an NPM install. You need espeak installed,  that is the voice, and a Chrome/Chromium browser, that does the voice recognition.</p>
<p>The command to 'ready the butler' is in the config/phrases.js file. Mine is, "Hey Bates", you can literally change it to anything. The voice recognition baked into the browsers isn't perfect, so do an array. The commands are in the /config/commands.js file. Same deal, should be an array. Use the current file as a guide. It has get requests, post requests, YQL requests, and a sports hack. You could add shell scripts or really anything, just set a condition for the type and have it execute the actions aray. Extra flag allows the speech to be inserted after the url/http action</p>

<h2>Raspberry pi use</h2>

<p>I put my raspberry pi 2 in a radio/stereo box with a mic. It works wonderfully. I have it launch the node app and then launch Chromium to localhost:2001. Chromium automatically picks the mic. So it can be unplugged and moved anywhere and still start up fine.</p>

<p>I added <b>startx</b> to the end of ~/.bashrc and <b>sleep 20 ~/.startUp.sh</b> to my ~.xinitrc. Do it this way, because launching straight to the desktop doesn't fire .xinitrc. Not sure why. startUp.sh is as follows:</p>

<p>
#!/bin/bash
cd ~/Butler
node server.js & chromium-browser "https://localhost:2001"
</p>

<p>That should be it. Change /config/config.js to your <a href="http://github.com/mingram8/Node-House">Node-House</a> url and port, change your command files, and do pull requests with any cool aditions. 
</p>


