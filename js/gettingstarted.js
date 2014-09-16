    $(document).ready(function(){
        
        $("#load-content").load("getting_started/article1.html");
        
        
        $(".link_one").click(function(){
            
                $("#load-content").load("getting_started/article1.html");
                $(".link_one").addClass("active");
                $(".link_two").removeClass("active");
                
                                    });
        
        
        $(".link_two").click(function(){
            
                $("#load-content").load("getting_started/article2.html");
                $(".link_two").addClass("active");
                $(".link_one").removeClass("active");
                
                                    });
        
        
                   });