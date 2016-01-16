# Butler

<h2>What is it?</h2>
<p>Butler is a voice assistant that takes in text and executes matching commands. Also uses <a href="https://github.com/mingram8/ButlerAssistant">Buttler Assistant</a> to use other raspberry pis (or anything running pocketsphinx) as Butler relays. It also spins up a web server that can be navigated to on Chrome/Chromium and will use web speech api to send commands.</p>

<h2>Raspberry Pi Use</h2>
<p>You either need a raspberry pi 2 with chromium installed (zeros and first gen can't run Chromium) or a raspberry pi with pocketsphinx. I have an image with Butler/ButlerAssistant, Jessie, Node v5, and pocketsphinx installed. I could probably figure out how to share it if there is a demand for it. If you are using Chromium, just navigate to localhost:20001. </p>

<p>Run pocketsphinx with:</p>
<p>pocketsphinx_continuous -hmm /usr/local/share/pocketsphinx/model/en-us/en-us -lm ~/5016.lm -dict ~/5016.dic -topn 2 -ds 2 -maxwpf 5 -samprate 16000/8000/48000  -fwdflat no -pl_window 10 -maxhmmpf 50 -bestpath no -adcdev plughw:1,0  -inmic yes > ~/Butler/words.log</p>

<p>Or you can stream the audio to your desktop or beefier computer to do the pocketpshinx processing on with: </p>
<p>arecord -D plughw:1,0 -f S16_LE -r 16000 | ssh -C YOUR_USERNAME@YOUR_IP pocketsphinx_continuous -hmm /usr/local/share/pocketsphinx/model/en-us/en-us -dict 9063.dic -lm 9063.lm -infile /dev/stdin > ~/Butler/words.log</p>

<p>Replace plughw:1,0 with your card number, so if arecord -l says your microphone is on card 2, change it to plughw:2,0 . This allows you to avoid fiddling with getting the microphone to card 0. That will allow pocketsphinx to throw the words into a file that Butler watches to check for commands</p>

<p>Now run a NPM install and let it run. It sits on 2001 and runs https so that the mic doesn't have to keep being approved</p>
