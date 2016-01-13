var config = require("./config.js");

module.exports = [
    {
        speech: ["kill the lights"
           ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/counter/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/overhead/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/foyer/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/overhead/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/recess/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/hall/main/off"]
    },
    {
        speech: ["set the mood"
        ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/brightness/kitchen/counter/0",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/overhead/0",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/foyer/0",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/overhead/0",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/recess/0",
            config.host_ip +":"+config.host_port+ "/brightness/hall/main/0",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/counter/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/foyer/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/recess/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/hall/main/on",
            config.host_ip +":"+config.host_port+ "/playRadio/thequietstorm"]
    },
    {
        speech: [
<<<<<<< HEAD
            "dim the lights",
            "in the lights"
=======
            "dim the lights"
>>>>>>> master
        ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/brightness/kitchen/counter/0",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/overhead/0",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/foyer/0",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/overhead/0",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/recess/0",
            config.host_ip +":"+config.host_port+ "/brightness/hall/main/0"]
    },
    {
        speech: ["let me see",
            "i can't see", "me see","I can't say"
        ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/counter/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/foyer/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/recess/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/hall/main/on",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/counter/100",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/overhead/100",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/foyer/100",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/overhead/100",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/recess/100",
            config.host_ip +":"+config.host_port+ "/brightness/hall/main/100"]
    },
    {
        speech: ["Turn kitchen the lights on",
            "turn kitchen lights on",
            "turn the kitchen lights on",
            "the kitchen lights on",
        "turn the kitchen light on",
        "kitchen lights on",
            "kitchen light on",
            " turn on the kitchen lights"],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/counter/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/foyer/on"]
    },
    {
        speech: ["Turn kitchen the lights down",
            "Turn kitchen lights down",
            "Turn the kitchen lights down",
            "the kitchen lights down"
           ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/brightness/kitchen/counter/0",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/overhead/0",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/foyer/0"]
    },
    {
        speech: ["brighten the kitchen lights",
            "bright inthe kitchen lights",
            "bright the kitchen lights",
            "writing the kitchen lights",
            "brighten kitchen lights",
            "Turn the kitchen lights up",
            "the kitchen lights up",
            "Brighton the kitchen lights",
            "right in the kitchen lights",
            "Brighton kitchen lights"
        ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/brightness/kitchen/counter/100",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/overhead/100",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/foyer/100"]
    },
    {
        speech: ["Turn kitchen the lights off",
            "Turn kitchen lights off",
            "Turn the kitchen lights off",
            "the kitchen lights off",
           "kitchen lights off",
            "kitchen light off",
            "Turn off the kitchen lights"
        ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/counter/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/overhead/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/foyer/off"]
    },
    {
        speech: ["Make some coffee",
            "Coffee on",
            "make me coffee",
            "coffee now"],
        type: "http",
        requestType:"post",
        action: [config.host_ip +":"+config.host_port+ "/codesend"],
        body: [{device: ["kitchen", "coffee"]}]
    },
    {
        speech: ["Turn livingRoom the lights on",
            "Turn livingRoom lights on",
            "Turn the livingRoom lights on",
            "the livingRoom lights on",
            "Turn the livingRoom light on",
            "livingRoom light on",
            "turn on livingRoom lights"
        ],
        type: "http",
        requestType:"get",
        action:[
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/recess/on"]
    },
    {
        speech: ["Turn livingRoom the lights down",
            "Turn livingRoom lights down",
            "Turn the livingRoom lights down",
            "the kitchen livingRoom down",
            "Turn the livingRoom light down"],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/overhead/0",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/recess/0"]
    },
    {
        speech: ["Turn livingRoom the lights up",
            "Turn livingRoom lights up",
            "Turn the livingRoom lights up",
            "the livingRoom lights up",
            "Turn the livingRoom light up",
        "brighten livingRoom light",
        "brighten the livingRoom light",
            "bright the livingRoom light",
            "bright in the livingRoom light"],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/overhead/100",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/recess/100"]
    },
    {
        speech: ["Turn livingRoom the lights off",
            "Turn livingRoom lights off",
            "Turn the livingRoom lights off",
            "the livingRoom lights off",
            "Turn the livingRoom light off",
            "livingRoom light off",
            "turn off livingRoom lights",
            "Turn the living room light off"
        ],
        type: "http",
        requestType:"get",
        action: [config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/overhead/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/recess/off"]
    },
    {
        speech: ["Turn main the lights on",
            "Turn main lights on",
            "Turn the main lights on",
            "the main lights on",
            "Turn the main light on",
            "turnoffalllightson",
        "turnthelightson"],
        type: "http",
        requestType:"get",
        action:[
            config.host_ip +":"+config.host_port+ "/toggleLights/hall/main/on"]
    },
    {
        speech: ["Turn main the lights down",
            "Turn main lights down",
            "Turn the main lights down",
            "the kitchen main down",
            "Turn the main light down",
            "turnoffalllightsdown",
            "turnthelightsdown"],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/brightness/hall/main/0"
            ]
    },
    {
        speech: ["Turn main the lights up",
            "Turn main lights up",
            "Turn the main lights up",
            "the main lights up",
            "Turn the main light up",
            "turnoffalllightsup",
            "turnthelightsup",
        "brighten main light",
            "brighten the main light",
        "brighten maine light",
            "brighten the maine light",
            "bright main light",],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/brightness/hall/main/100"]
    },
    {
        speech: ["Turn main the lights off",
            "Turn main lights off",
            "Turn the main lights off",
            "the main lights off",
            "Turn the main light off",
            "turnthemainlightsoff",
            "turnthelightsoff",
            "sothemainlightsoff",
            "cinnamonwhitesauce",
        "turnthemainlightsauce",
        "southernmainelightsoff"],
        type: "http",
        requestType:"get",
        action:[
            config.host_ip +":"+config.host_port+ "/toggleLights/hall/main/off"]
    },
    {
        speech: ["No color",
            "Turn the color off"
            ],
        type: "http",
        requestType:"get",
        action:[
            config.host_ip +":"+config.host_port+ "/makeWhite/kitchen/counter",
            config.host_ip +":"+config.host_port+ "/makeWhite/kitchen/overhead",
            config.host_ip +":"+config.host_port+ "/makeWhite/kitchen/foyer",
            config.host_ip +":"+config.host_port+ "/makeWhite/livingRoom/overhead",
            config.host_ip +":"+config.host_port+ "/makeWhite/livingRoom/recess",
            config.host_ip +":"+config.host_port+ "/makeWhite/hall/main"
        ]
    },
    {
<<<<<<< HEAD
        speech: ["dim the bedroom light",
            "tim the bedroom light",
            "in the bedroom light",
            "then the bedroom light",
            "did the bedroom light"

        ],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/brightness/bedroom/hall/0",
            config.host_ip +":"+config.host_port+ "/brightness/bedroom/lamp/0"]
    },
    {
        speech: ["brighten the bedroom light",
            "bright in the bedroom light",
            "break the bedroom light",
            "right the bedroom light",
            "bright in the bedroom light"
        ],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/brightness/bedroom/hall/100",
            config.host_ip +":"+config.host_port+ "/brightness/bedroom/lamp/100"]
    },
    {
        speech: ["turn off the bedroom light",
            "the bedroom light off",
            "the bedroom lights off",
            "the bedroom lights sauce"
        ],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/toggleLights/bedroom/hall/off",
            config.host_ip +":"+config.host_port+ "/toggleLights/bedroom/lamp/off"]
    },
    {
        speech: ["turn on the bedroom light",
            "the bedroom light on",
            "turn the bedroom light on",
            "the bedroom lights on",
            "the bedroom light song"
        ],
        type: "http",
        requestType:"get",
        action: [
            config.host_ip +":"+config.host_port+ "/toggleLights/bedroom/hall/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/bedroom/lamp/on"]
    },
    {
=======
>>>>>>> master
        speech: ["Make the lights red"
        ],
        type: "http",
        requestType:"get",
        action:[
            config.host_ip +":"+config.host_port+ "/changeLights/kitchen/counter/200",
            config.host_ip +":"+config.host_port+ "/changeLights/kitchen/overhead/200",
            config.host_ip +":"+config.host_port+ "/changeLights/kitchen/foyer/200",
            config.host_ip +":"+config.host_port+ "/changeLights/livingRoom/overhead/200",
            config.host_ip +":"+config.host_port+ "/changeLights/livingRoom/recess/200",
            config.host_ip +":"+config.host_port+ "/changeLights/hall/main/200"
        ]
    },
    {
        speech: ["Set to normal",
            "normal mode"
        ],
        type: "http",
        requestType:"get",
        action:[
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/counter/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/kitchen/foyer/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/overhead/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/livingRoom/recess/on",
            config.host_ip +":"+config.host_port+ "/toggleLights/hall/main/on",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/counter/100",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/overhead/100",
            config.host_ip +":"+config.host_port+ "/brightness/kitchen/foyer/100",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/overhead/100",
            config.host_ip +":"+config.host_port+ "/brightness/livingRoom/recess/100",
            config.host_ip +":"+config.host_port+ "/brightness/hall/main/100",
            config.host_ip +":"+config.host_port+ "/stopSong"
        ]
    },
    {
        speech: ["cold is it","unclewhatisit"
        ],
        type: "yql",
        action: ["select * from weather.forecast where (location = ' "+config.zipCode+" ')"],
        values:["query.results.channel.item.condition.temp","query.results.channel.wind.chill"],
        response: ["It is","degrees out with a wind chill of",""]

    },
    {
        speech: ["when does the sunset","when does the sunrise","when the sunset","when does the sunrise"
        ],
        type: "yql",
        action: ["select * from weather.forecast where (location = ' "+config.zipCode+" ')"],
        values:["query.results.channel.astronomy.sunrise","query.results.channel.astronomy.sunset"],
        response: ["The sun rises at","and sets at"]

    },
    {
        speech: ["tell me the news"
        ],
        type: "yql",
        action: ["select title from rss where url='http://rss.news.yahoo.com/rss/topstories'"],
        values:["query.results.item.0.title","query.results.item.1.title","query.results.item.2.title","query.results.item.3.title"],
        response: ["","<break time='2000ms'/>","<break time='2000ms'/>","<break time='2000ms'/>","            "]

    },
    {
        speech: ["How fast is the wind","Is there wind"
        ],
        type: "yql",
        action: ["select * from weather.forecast where (location = ' "+config.zipCode+" ')"],
        values:["query.results.channel.wind.speed"],
        response: ["The wind is blowing at ","Miles an hour"]

    },
    {
<<<<<<< HEAD
        speech: ["football score"
        ],
        type: "get",
        action: ["http://www.nfl.com/liveupdate/scores/scores.json?random=fucksack"],
        values:["query.results.channel.wind.speed"],
        response: ["The wind is blowing at ","Miles an hour"]

    },
    {
=======
>>>>>>> master
        speech: ["score"],
        type: "football",
        teams:[
            "Ravens",
            "Bengals",
            "Browns",
            "Steelers",
            "Bears",
            "Lions",
            "Packers",
            "Vikings",
            "Texans",
            "Colts",
            "Jaguars",
            "Titans",
            "Falcons",
            "Panthers",
            "Saints",
            "Buccaneers",
            "Bills",
            "Dolphins",
            "Patriots",
            "Jets",
            "Cowboys",
            "Giants",
            "Eagles",
            "Redskins",
            "Broncos",
            "Chiefs",
            "Raiders",
            "Chargers",
            "Cardinals",
            "49ers",
            "Seahawks",
            "Rams"
        ],
        requestType:"sunrise",
        action: ["20852"],

    },
    {speech: ["play","Placing"],
        type: "http",
        requestType:"get",
        extra:true,
        action:[
            config.host_ip +":"+config.host_port+ "/playRadio/"]
    },
    {speech: ["cut the music",
        "kill the music",
        "stop the music",
        "Custom music",
        "how the music"
    ],
        type: "http",
        requestType:"get",
        action:[
            config.host_ip +":"+config.host_port+ "/stopSong"]
    }
]