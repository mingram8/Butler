app.controller('IndexController', function ($scope, $http, $sce, $interval, $timeout) {

    $scope.results = '';
    function wait(){
        setTimeout(function(){}, 500);
    }
    console.log(window.location.href)
    $http({method:'post', url:'/sendSpeech', data:{speech:window.location.href}}).success(function(data){
        if(data == true) {
            setTimeout(function(){
                location.reload();
            }, 500);

        }
    })
<<<<<<< HEAD
    $scope.toggleFullScreen = function () {
        console.log('d')
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
    }
    $scope.toggleFullScreen()
    $interval(function(){
        voices = window.speechSynthesis.getVoices();

    })
    if (window.location.href.indexOf('localhost') != -1 ) {

=======
    $interval(function(){
        console.log(voices)

        voices = window.speechSynthesis.getVoices();
        console.log(voices)

    },500)
    if (window.location.href.indexOf('localhost') != -1 ) {
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        var voices = window.speechSynthesis.getVoices();

        var voices = window.speechSynthesis.getVoices();

        var voices = window.speechSynthesis.getVoices();

        var voices = window.speechSynthesis.getVoices();

        var voices = window.speechSynthesis.getVoices();

        var voices = window.speechSynthesis.getVoices();

        var voices = window.speechSynthesis.getVoices();

        var voices = window.speechSynthesis.getVoices();

        console.log(voices)
        msg.voice = voices[10]; // Note: some voices don't support altering params
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 2; //0 to 2
        msg.text = 'Hello World';
        msg.lang = 'en-US';

        msg.onend = function(e) {
            console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };

        speechSynthesis.speak(msg);
>>>>>>> master
    }
   try {
        var recognition = new webkitSpeechRecognition();
    }
    catch(e)
    {
        var recognition = new SpeechRecognition();

    }
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = function(event) {
        $scope.final = '';
        $scope.results=''
        results = ''
        final = false;
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                $scope.final += event.results[i][0].transcript;
                final = true;
            } else {
                $scope.results += event.results[i][0].transcript;
                console.log($scope.results)
                if ($scope.results.indexOf('play') == -1) {
                    $http({
                        method: 'post',
                        url: '/sendSpeech',
                        data: {speech: $scope.results}
                    }).success(function (data) {
                        if (data == true) {
                            setTimeout(function () {
                                location.reload();
                            }, 500);

                        }
                    })
                }
            }
        }
        if (final == true) {
            $scope.final = $scope.capitalize($scope.final)
            $scope.final = $scope.linebreak($scope.final);


            $http({method:'post', url:'/sendSpeech', data:{speech:$scope.final}}).success(function(data){
                if(data == true) {
                    setTimeout(function(){
                    location.reload();
                    }, 500);

                }
            })
        }
        else {
            console.log('no')
        }
    }
    recognition.start();
    recognition.onend = function() {
        console.log('fuuuck')
        recognition.start();
    };
    $timeout(function(){
        location.reload();
    },25000)
    var two_line = /\n\n/g;
    var one_line = /\n/g;
     $scope.linebreak = function(s) {
        return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
    }
    var first_char = /\S/;

    $scope.capitalize = function(s) {
        return s.replace(first_char, function(m) { return m.toUpperCase(); });
    }
});