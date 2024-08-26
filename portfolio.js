// nav-underline
let navUnderline = document.getElementById("nav_underline");
let navMenus = document.querySelectorAll("nav a");

navMenus.forEach(menu=>menu.addEventListener("click",(e)=>createUnderline(e)))

function createUnderline(e) {
    $('a').css('color', '#fff');
    navUnderline.style.left = e.currentTarget.offsetLeft +"px";
    navUnderline.style.width = e.currentTarget.offsetWidth + "px";
    navUnderline.style.top = e.currentTarget.offsetTop
                            + e.currentTarget.offsetHeight + "px";
    e.currentTarget.style.color = "rgb(254, 151, 49)";
}

// modal open
function modalOpen(title, detail_id, image, subImage1, subImage2, subImage3, subImage4) {
    let insertTag = '<div style="display: flex;"><div style="flex: 1; text-align: center; color:#000; font-size: 2.5em; font-family: Amsterdam; font-weight: bold;">' + title + '</div>'
                    + '<div id="modal_close" style="flex: 0.01; color: #000; font-size: 3em; font-weight: bold; cursor: pointer; transform: translateY(-20px);">X</div></div>'
                    + '<div class="modal_detail">'
                    + '   <div><img src="' + image + '"></div>'
                    + '   <div>' + document.querySelector('#' + detail_id + '_0').innerHTML + '</div>'
                    + '</div>';


    if (subImage1 != null) {
        insertTag += '<hr><div class="modal_detail">'
                    + '<div><img src="' + subImage1 + '"></div>'
                    + '   <div>' + document.querySelector('#' + detail_id + '_1').innerHTML + '</div>'
                    + '</div>'
                    + '<hr><div class="modal_detail">'
                    + '<div><img src="' + subImage2 + '"></div>'
                    + '   <div>' + document.querySelector('#' + detail_id + '_2').innerHTML + '</div>'
                    + '</div>'
                    + '<hr><div class="modal_detail">'
                    + '<div><img src="' + subImage3 + '"></div>'
                    + '   <div>' + document.querySelector('#' + detail_id + '_3').innerHTML + '</div>'
                    + '</div>'
                    + '<hr><div class="modal_detail">'
                    + '<div><img src="' + subImage4 + '"></div>'
                    + '   <div>' + document.querySelector('#' + detail_id + '_4').innerHTML + '</div>'
                    + '</div>';
                    // + '<hr><img src="' + subImage2 + '">'
                    // + '<hr><img src="' + subImage3 + '">'
                    // + '<hr><img src="' + subImage4 + '">';
    }

    $('body').css('overflow', 'hidden');
    $('.modal').addClass('modal_open');
    $('.modal_contents').append(insertTag);

    // modal close (button)
    $('#modal_close').on('click', function() {
        console.log('click');
        $('body').css('overflow', 'auto');
        $('.modal_contents').empty();
        $('.modal').removeClass('modal_open');
    });
}

// modal close (past)
// $('.modal').on('click', function() {
//     $('body').css('overflow', 'auto');
//     $('.modal_contents').empty();
//     $('.modal').removeClass('modal_open');
// });

// modal close (current)
$('.modal').on('click', function(e) {
    if (e.target.className == "modal modal_open") {
        $('body').css('overflow', 'auto');
        $('.modal_contents').empty();
        $('.modal').removeClass('modal_open');
    }
});


// dday
$(function() {
    let dday = new Date().getTime() - new Date(2022, 03, 18).getTime();
    $('#d_day').html(Math.floor(dday / (1000 * 60 * 60 * 24) + 1));
});