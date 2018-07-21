var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

// menu Highlights
var instaScene = new ScrollMagic.Scene({triggerElement: "#a-to-z", duration: $('#a-to-z').height()})
        .setClassToggle( "nav ul li:nth-child(1) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#myway", duration: $('#myway').height()})
        .setClassToggle( "nav ul li:nth-child(2) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#rebranding", duration: $('#rebranding').height()})
        .setClassToggle( "nav ul li:nth-child(3) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#communication", duration: $('#communication').height()})
        .setClassToggle( "nav ul li:nth-child(4) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#architecture", duration: $('#architecture').height()})
        .setClassToggle( "nav ul li:nth-child(5) a", "active")
        .addTo(controller);
var instaScene = new ScrollMagic.Scene({triggerElement: "#contact", duration: $('#contact').height()})
        .setClassToggle( "nav ul li:nth-child(6) a", "active")
        .addTo(controller);