$(document).ready(function(){ 
    
    /*For sticky navigation*/
    $('.js--features').waypoint(function(direction){
                                           
    if(direction == "down"){
        $('nav').addClass('sticky');
    }
    else{
        $('nav').removeClass('sticky');
                                 }
                                           },{
  offset: '100px;'
});
 /*Animations on scroll*/
$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
},{offset: '45%'
            });
$('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
},{offset: '45%'
            });
$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
},{offset: '45%'
            });
$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated flash');
},{offset: '45%'
            });
 /*Mobile navigation*/
    $('.js--nav-icon').click(function() {
        var nav= $('.js--main-nav');
        var icon= $('.js--nav-icon i');
        nav.slideToggle(200)
        if(icon.hasClass('icon ion-md-menu'))
            {
              icon.addClass('icon ion-md-close-circle');
                icon.removeClass('icon ion-md-menu');
            }
        else{
            icon.addClass('icon ion-md-menu');
                icon.removeClass('icon ion-md-close-circle');
        }
    
    });
    
    
    
    
});