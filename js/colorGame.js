$(document).ready(function() {
//  effects for all wrong colors for levels 1,3, and 5.
    $('#level1 .wrong, #level3 .wrong, #level5 .wrong').click(function() {
        $(this).effect('explode');
    });
    
//  effects for all wrong colors for levels 2, 4, and 6.    
    $('#level2 .wrong, #level4 .wrong, #level6 .wrong').click(function() {
        $(this).slideUp('slow');
    });
    
//  Play button
    $('.play').click(function() {
        $('#start').slideUp('slow');
        $('#level1').slideDown('slow')
    });
    
//  effect for right color level 1
    $('#level1 .right').click(function() {
        $(this).effect('bounce', 'slow');
        $('#level1').delay(550).slideUp('slow');
        $('#level2').delay(1200).slideDown('slow');
    });
    
// effect for right color level 2
    $('#level2 .right').click(function() {
        $(this).effect('shake', 'slow');
        $('#level2').delay(550).slideUp('slow');
        $('#level3').delay(1200).slideDown('slow');
    });
    
//  effect for right color level 3
    $('#level3 .right').click(function() {
        $(this).effect('slide', 'slow');
        $('#level3').delay(550).slideUp('slow');
        $('#level4').delay(1200).slideDown('slow');
    });
    
//  effect for right color level 4
    $('#level4 .right').click(function() {
        $(this).effect('pulsate', 'slow');
        $('#level4').delay(550).slideUp('slow');
        $('#level5').delay(1200).slideDown('slow');
    });
    
//  effect for right color level 5
    $('#level5 .right').click(function() {
        $(this).effect('bounce', 'slow');
        $('#level5').delay(550).slideUp('slow');
        $('#level6').delay(1200).slideDown('slow');
    });
    
//  effect for right color level 6
    $('#level6 .right').click(function() {
        $(this).effect('shake', 'slow');
        $('#level6').delay(550).slideUp('slow');
        $('#end').delay(1200).slideDown('slow');
    });
    
//  button to restart the game
    $('.playAgain').click(function() {
//  reloads the website to resets the game
        $('#end').slideUp('slow');
        $('#start').delay(500).slideDown('slow');
        window.setTimeout('location.reload()', 1000);
    });
});