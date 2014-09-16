              
                
    (function($) {
                
        var allPanels = $('.accordion-new > dd').hide();
                                    
                                    /* Accordion One */
       
                                    $('.accordian-title-one').click(function(){


                                            $('.accordian-title-one').parent().next().slideToggle(function(){
                                                

                                             var check=$(this).is(":hidden");

                                                    if(check == false)
                                                    {
                                                        
                                                                
                                                        $('.accordian-title-two').parent().next().slideUp();
                                                        $('.accordian-title-three').parent().next().slideUp();
                                                        $('.accordian-title-four').parent().next().slideUp();
                                                        $('.accordian-title-five').parent().next().slideUp();
                                                        $('.accordian-title-six').parent().next().slideUp();
                                                        $('.accordian-title-seven').parent().next().slideUp();
                                                        

                                                    }


                                            });


                                            return false;



                                    });
                    
                                    /* Accordion Two */
                    
                                    $('.accordian-title-two').click(function(){


                                            $(this).parent().next().slideToggle(function(){

                                             var check=$(this).is(":hidden");

                                                    if(check == false)
                                                    {

                                                        $('.accordian-title-one').parent().next().slideUp();
                                                        $('.accordian-title-three').parent().next().slideUp();
                                                        $('.accordian-title-four').parent().next().slideUp();
                                                        $('.accordian-title-five').parent().next().slideUp();
                                                        $('.accordian-title-six').parent().next().slideUp();
                                                        $('.accordian-title-seven').parent().next().slideUp();

                                                    }


                                            });


                                            return false;


                                    });
        
        
                                    $('.accordian-title-three').click(function(){


                                            $(this).parent().next().slideToggle(function(){

                                             var check=$(this).is(":hidden");

                                                    if(check == false)
                                                    {

                                                        $('.accordian-title-one').parent().next().slideUp();
                                                        $('.accordian-title-two').parent().next().slideUp();
                                                        $('.accordian-title-four').parent().next().slideUp();
                                                        $('.accordian-title-five').parent().next().slideUp();
                                                        $('.accordian-title-six').parent().next().slideUp();
                                                        $('.accordian-title-seven').parent().next().slideUp();

                                                    }


                                            });


                                            return false;


                                    });
        
        
                                    $('.accordian-title-four').click(function(){


                                            $(this).parent().next().slideToggle(function(){

                                             var check=$(this).is(":hidden");

                                                    if(check == false)
                                                    {

                                                        $('.accordian-title-one').parent().next().slideUp();
                                                        $('.accordian-title-two').parent().next().slideUp();
                                                        $('.accordian-title-three').parent().next().slideUp();
                                                        $('.accordian-title-five').parent().next().slideUp();
                                                        $('.accordian-title-six').parent().next().slideUp();
                                                        $('.accordian-title-seven').parent().next().slideUp();

                                                    }


                                            });


                                            return false;


                                    });
        
        
                                     $('.accordian-title-five').click(function(){


                                            $(this).parent().next().slideToggle(function(){

                                             var check=$(this).is(":hidden");

                                                    if(check == false)
                                                    {

                                                        $('.accordian-title-one').parent().next().slideUp();
                                                        $('.accordian-title-two').parent().next().slideUp();
                                                        $('.accordian-title-three').parent().next().slideUp();
                                                        $('.accordian-title-four').parent().next().slideUp();
                                                        $('.accordian-title-six').parent().next().slideUp();
                                                        $('.accordian-title-seven').parent().next().slideUp();

                                                    }


                                            });


                                            return false;


                                    });
        
        
                                    $('.accordian-title-six').click(function(){


                                            $(this).parent().next().slideToggle(function(){

                                             var check=$(this).is(":hidden");

                                                    if(check == false)
                                                    {

                                                        $('.accordian-title-one').parent().next().slideUp();
                                                        $('.accordian-title-two').parent().next().slideUp();
                                                        $('.accordian-title-three').parent().next().slideUp();
                                                        $('.accordian-title-four').parent().next().slideUp();
                                                        $('.accordian-title-five').parent().next().slideUp();
                                                        $('.accordian-title-seven').parent().next().slideUp();

                                                    }


                                            });


                                            return false;


                                    });
        
        
                                    $('.accordian-title-seven').click(function(){


                                            $(this).parent().next().slideToggle(function(){

                                             var check=$(this).is(":hidden");

                                                    if(check == false)
                                                    {

                                                        $('.accordian-title-one').parent().next().slideUp();
                                                        $('.accordian-title-two').parent().next().slideUp();
                                                        $('.accordian-title-three').parent().next().slideUp();
                                                        $('.accordian-title-four').parent().next().slideUp();
                                                        $('.accordian-title-five').parent().next().slideUp();
                                                        $('.accordian-title-six').parent().next().slideUp();

                                                    }


                                            });


                                            return false;


                                    });
        
                                    
        
        
        
        
        
        
        
        
    
                
                })(jQuery);
                
                

    
                /*
                  (function($) {
    
                            var allPanels = $('.accordion-new > dd').hide();
    
                              $('.accordion-new > a > dt').click(function() {
                                allPanels.slideUp();
                                $(this).parent().next().slideDown();
                                
                                return false;
                              });

                            })(jQuery);
                */  