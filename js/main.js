$(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()){
        $('.MoveUp').addClass('active');
    } else {
        $('.MoveUp').removeClass('active');
    }
});

$('.MoveUp').click(function () {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});




(function (){
	var anchors = [];
	var currentAnchor = -1;
	var isAnimating  = false;

    $(function(){
        function updateAnchors() {
            anchors = [];
            var clickHeaderBtn = document.getElementById('ColcOldOeople');

            $('section:visible, header, footer').each(function(i, element){
                anchors.push( $(element).offset().top );
            });
        }
        
        $('body').on('mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            if( isAnimating ) {
                return false;
            }

             // elem.onclick = function() { return 0; };
           
            isAnimating = true;
            if( e.originalEvent.wheelDelta >= 0 ) {
                currentAnchor--;
            }else{
                currentAnchor++;
            }
            if( currentAnchor > (anchors.length - 1) || currentAnchor < 0 ) {
                currentAnchor = 0;
            }
            isAnimating  = true;
            $('html, body').animate({
                scrollTop: parseInt( anchors[currentAnchor] )
            }, 900, 'swing', function(){
                isAnimating  = false;
            });

        });
        updateAnchors();  
    });
}());

function showbuild() {
    $('#slider').css({
        'display':'block',
    });
    $('#build').css({
       'display':'none',
    });
};

function CloseSection() {
    $('#slider').css({
            'display':'none',
        });
    $('#build').css({
           'display':'block',
        });
};

function ShowVideo(){
    $('#ShowVideo').css({
        'display':'block',
    });
    $('#Eyewitnessaccount').css({
            'display':'none',
    });
};

function CloseVideo(){
    $('#ShowVideo').css({
        'display':'none',
    });
    $('#Eyewitnessaccount').css({
        'display':'block',
    });
};

