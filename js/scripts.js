$(document).ready(function() {

    // Progress bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle (containerA, {
        color: ' #FFFFFF',
        strokeWidth: 8,
        duration: 1800,
        from: {color: ' #FFFFFF'},
        to: {color:' #FFFFFF'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        
            let value = Math.round(circle.value() * 11);

            circle.setText(value);
        }
    });
    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle (containerB, {
        color:  ' #FFFFFF',
        strokeWidth: 8,
        duration: 2000,
        from: {color: ' #FFFFFF'},
        to: {color:' #FFFFFF'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        
            let value = Math.round(circle.value() * 2043);

            circle.setText(value);
        }
    });
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle (containerC, {
        color:  ' #FFFFFF',
        strokeWidth: 8,
        duration: 2200,
        from: {color: ' #FFFFFF'},
        to: {color:' #FFFFFF'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
        
            let value = Math.round(circle.value() * 29);

            circle.setText(value);
        }
    });
    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle (containerD, {
        color:  ' #FFFFFF',
        strokeWidth: 8,
        duration: 2400,
        from: {color: ' #FFFFFF'},
        to: {color:' #FFFFFF'},

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);
        
            let value = Math.round(circle.value() * 42);

            circle.setText(value);
        }
    });

    //INICIO DO LOADER
    let foiExibido = false;
    let observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting === true) {
            setTimeout(function() {
                circleA.animate(1.0);
                circleB.animate(1.0);
                circleC.animate(1.0);
                circleD.animate(1.0);
                foiExibido = true;
            }, 2000);
        } else if (foiExibido) {
            circleA.stop();
            circleA.set(0);
            circleB.stop();
            circleB.set(0);
            circleC.stop();
            circleC.set(0);
            circleD.stop();
            circleD.set(0);
            foiExibido = false;
        }
    });

    observer.observe(containerA);
});    


//Parallax
setTimeout(function(){

$('#data-area').parallax({imageSrc: '../img/fl16.png'});

}),250;