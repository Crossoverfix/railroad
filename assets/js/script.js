$(document).ready(function () {
    var $trigerPops = $("[data-triger]");
    $trigerPops.on("click",function () {
        sortPops($(this).attr('data-triger'));
    })
    function sortPops($data) {
        if($data == 'flag-green' || $data == 'flag-drop-h-green'){
            openPops('green');
        } else if($data == 'flag-red' || $data == 'flag-drop-h-red'){
            openPops('red');
        } else if($data == 'flag-blue' || $data == 'flag-drop-h-blue'){
            openPops('blue');
        } else if($data == 'flag'){
            closePops();
        } else if($data == 'user-in'){
                openPops('user');
        } else if($data == 'user'){
            closePops();
        }
    }
    function openPops($target) {
        if($('[data-triger="flag-drop"]').hasClass('active')){
            if($target == 'green'){
                $('[data-triger="flag-drop-h-red"]').removeClass('active');
                $('[data-triger="flag-drop-h-blue"]').removeClass('active');
                $('[data-triger="flag-drop-b-red"]').removeClass('active');
                $('[data-triger="flag-drop-b-blue"]').removeClass('active');
                $('[data-triger="flag-drop-h-green"]').addClass('active');
                $('[data-triger="flag-drop-b-green"]').addClass('active');
            } else if($target == 'red'){
                $('[data-triger="flag-drop-h-green"]').removeClass('active');
                $('[data-triger="flag-drop-h-blue"]').removeClass('active');
                $('[data-triger="flag-drop-b-green"]').removeClass('active');
                $('[data-triger="flag-drop-b-blue"]').removeClass('active');
                $('[data-triger="flag-drop-h-red"]').addClass('active');
                $('[data-triger="flag-drop-b-red"]').addClass('active');
            } else if($target == 'blue'){
                $('[data-triger="flag-drop-h-red"]').removeClass('active');
                $('[data-triger="flag-drop-h-green"]').removeClass('active');
                $('[data-triger="flag-drop-b-red"]').removeClass('active');
                $('[data-triger="flag-drop-b-green"]').removeClass('active');
                $('[data-triger="flag-drop-h-blue"]').addClass('active');
                $('[data-triger="flag-drop-b-blue"]').addClass('active');
            }
        } else {
            $trigerPops.removeClass('active');
            $('[data-triger="flag"]').addClass('active');
            $('[data-triger="flag-drop"]').addClass('active');
            if($target == 'green'){
                $('[data-triger="flag-drop-h-green"]').addClass('active');
                $('[data-triger="flag-drop-b-green"]').addClass('active');
            } else if($target == 'red'){
                $('[data-triger="flag-drop-h-red"]').addClass('active');
                $('[data-triger="flag-drop-b-red"]').addClass('active');
            } else if($target == 'blue'){
                $('[data-triger="flag-drop-h-blue"]').addClass('active');
                $('[data-triger="flag-drop-b-blue"]').addClass('active');
            }
        }
        if($target == 'user'){
            closePops();
            $('[data-triger="user"]').addClass('active');
            $('[data-triger="user-drop"]').addClass('active');
        }
    }
    $(document).mouseup(function (e) {
        if($trigerPops.has(e.target).length === 0){
            closePops();
        }
    })
    function closePops() {
        $trigerPops.removeClass('active');
    }
    var $simpleTriger = $('[data-drop-link]');
    $simpleTriger.on('click',function () {
        simpleDrop($(this).attr('data-drop-link'));
        return false;
    })
    function simpleDrop($target) {
        $('[data-drop-content='+ $target +']').toggleClass('active');
        var temp =  $('[data-drop-content='+ $target +']');
        $('[data-drop-content='+ $target +'] a').on('click',function () {
            console.log($(this));
            temp.removeClass('active');
            return false;
        });
        $(document).mouseup(function (e) {
            // var temps = temp;
            if(temp.has(e.target).length === 0){
                temp.removeClass('active');
            }
        })
    }
})