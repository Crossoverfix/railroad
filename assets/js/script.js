$(document).ready(function () {
    var $trigerPops = $("[data-triger]");
    $trigerPops.on("click",function () {
        sortPops($(this).attr('data-triger'));
        return false;
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
        } else if($data == 'ablist'){
            openPops('list');
        } else if($data == 'ablist-drop-h'){
            openPops('list-def');
        } else if($data == 'ablist-drop-h-green'){
            openPops('list-green');
        } else if($data == 'ablist-drop-h-red'){
            openPops('list-red');
        } else if($data == 'ablist-drop-h-blue'){
            openPops('list-blue');
        }
        // return false;
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
        if($target == 'list'){
            var test = $('.drop-ablist');
            if($('.drop-ablist').hasClass('active')){
                closePops();
            } else {
                $('.drop-ablist').addClass('active');
                $('[data-triger="ablist-drop-h"]').addClass('active');
                $('[data-triger="ablist-drop-b"]').addClass('active');
            }
        }
        if($target == 'list-def'){
            $('[data-triger="ablist-drop-h"]').addClass('active');
            $('[data-triger="ablist-drop-b"]').addClass('active');
            $('[data-triger="ablist-drop-h-green"]').removeClass('active');
            $('[data-triger="ablist-drop-b-green"]').removeClass('active');
            $('[data-triger="ablist-drop-h-red"]').removeClass('active');
            $('[data-triger="ablist-drop-b-red"]').removeClass('active');
            $('[data-triger="ablist-drop-h-blue"]').removeClass('active');
            $('[data-triger="ablist-drop-b-blue"]').removeClass('active');
        } else if($target == 'list-green'){
            $('[data-triger="ablist-drop-h-green"]').addClass('active');
            $('[data-triger="ablist-drop-b-green"]').addClass('active');
            $('[data-triger="ablist-drop-h"]').removeClass('active');
            $('[data-triger="ablist-drop-b"]').removeClass('active');
            $('[data-triger="ablist-drop-h-red"]').removeClass('active');
            $('[data-triger="ablist-drop-b-red"]').removeClass('active');
            $('[data-triger="ablist-drop-h-blue"]').removeClass('active');
            $('[data-triger="ablist-drop-b-blue"]').removeClass('active');
        } else if($target == 'list-red'){
            $('[data-triger="ablist-drop-h-red"]').addClass('active');
            $('[data-triger="ablist-drop-b-red"]').addClass('active');
            $('[data-triger="ablist-drop-h-green"]').removeClass('active');
            $('[data-triger="ablist-drop-b-green"]').removeClass('active');
            $('[data-triger="ablist-drop-h"]').removeClass('active');
            $('[data-triger="ablist-drop-b"]').removeClass('active');
            $('[data-triger="ablist-drop-h-blue"]').removeClass('active');
            $('[data-triger="ablist-drop-b-blue"]').removeClass('active');
        } else if($target == 'list-blue'){
            $('[data-triger="ablist-drop-h-blue"]').addClass('active');
            $('[data-triger="ablist-drop-b-blue"]').addClass('active');
            $('[data-triger="ablist-drop-h-green"]').removeClass('active');
            $('[data-triger="ablist-drop-b-green"]').removeClass('active');
            $('[data-triger="ablist-drop-h-red"]').removeClass('active');
            $('[data-triger="ablist-drop-b-red"]').removeClass('active');
            $('[data-triger="ablist-drop-h"]').removeClass('active');
            $('[data-triger="ablist-drop-b"]').removeClass('active');
        }
        // return false;
    }
    $(document).mouseup(function (e) {
        if($trigerPops.has(e.target).length === 0 && !$trigerPops.is(e.target)){
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
    var $treeFolder = $(".catalog__tree__body__folder");
    var $treeFolderP = $(".catalog__tree__body__folder p");
    var $treeFolderReset = $(".catalog__tree__header a");
    $treeFolderReset.on('click',function () {
        $treeFolder.removeClass('active');
        $treeFolder.removeClass('open');
    })
    $treeFolderP.on('click',function () {
        $treeFolder.removeClass('active');
        $(this).parent().addClass('active');
        $(this).parent().toggleClass('open');
    })
    var $treeFolderTriger = $('.catalog__tree__btn');
    var $treeFolderWindow = $('.flex-wrap');
    $treeFolderTriger.on('click',function () {
        if($treeFolderWindow.hasClass('show')){
            $treeFolderTriger.removeClass('show');
            $treeFolderWindow.removeClass('show');
            $treeFolderWindow.addClass('hide');
            $treeFolderTriger.addClass('hide');
        } else {
            $treeFolderTriger.removeClass('hide');
            $treeFolderWindow.removeClass('hide');
            $treeFolderWindow.addClass('show');
            $treeFolderTriger.addClass('show');
        }
    })
    var $viewTriger = $("[data-view]");
    $viewTriger.on('click',function(){
        if($(this).attr('data-view') == 'list'){
            $viewTriger.removeClass('active');
            $(this).addClass('active');
            $(".catalog__window__body").addClass('mod-list');
        } else if ($(this).attr('data-view') == 'tabl'){
            $viewTriger.removeClass('active');
            $(this).addClass('active');
            $(".catalog__window__body").removeClass('mod-list');
        }
    })
    var $closeTriger = $('[data-close]');
    $closeTriger.on('click',function () {
        closeSelect($(this).attr('data-close'),$(this));
        return false
    })
    function closeSelect($select,$selectTarget) {
        if($select == 'parent'){
            $selectTarget.parent().addClass('disable');
            $selectTarget.parent().hide(300);
        } else if ($select == 'self'){
            $selectTarget.addClass('disable');
            $selectTarget.hide(300);
        }
    }
})