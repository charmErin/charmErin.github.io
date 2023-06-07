// nav-underline
let navUnderline = document.getElementById("nav_underline");
let navMenus = document.querySelectorAll("nav a");

navMenus.forEach(menu=>menu.addEventListener("click",(e)=>createUnderline(e)))

function createUnderline(e) {
    $('a').css('color', '#000');
    navUnderline.style.left = e.currentTarget.offsetLeft +"px";
    navUnderline.style.width = e.currentTarget.offsetWidth + "px";
    navUnderline.style.top = e.currentTarget.offsetTop
                            + e.currentTarget.offsetHeight + "px";
    e.currentTarget.style.color = "rgb(255, 96, 96)";
}

// modal
function modalOpen(title, image, subImage1, subImage2, subImage3, subImage4) {
    let insertTag = '<div style="display: flex; margin-bottom:1em;"><div style="flex: 1; text-align: center; font-size: 2.5em; font-weight: bold;">' + title + '</div>'
                    + '<div style="flex: 0.01; font-size: 2.5em; font-weight: bold; cursor: pointer; transform: translateY(-20px);">X</div></div>'
                    + '<img src="' + image + '">';
    if (subImage1 != null) {
        insertTag += '<img style="margin-top: 2em;" src="' + subImage1 + '">'
                    + '<img style="margin-top: 2em;" src="' + subImage2 + '">'
                    + '<img style="margin-top: 2em;" src="' + subImage3 + '">'
                    + '<img style="margin-top: 2em;" src="' + subImage4 + '">';
    }

    $('body').css('overflow', 'hidden');
    $('.modal_contents').append(insertTag);
    $('.modal').addClass('modal_open');
}

$('.modal').on('click', function() {
    $('body').css('overflow', 'auto');
    $('.modal_contents').empty();
    $('.modal').removeClass('modal_open');
});

// dday
$(function() {
    let dday = new Date().getTime() - new Date(2022, 03, 18).getTime();
    $('#d_day').html(Math.floor(dday / (1000 * 60 * 60 * 24) + 1));
});