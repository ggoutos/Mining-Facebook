    $(function(){
        $('form').submit(function(){
            
            var postData = $(this).serialize();
            $.ajax({
                type: 'POST',
                data: postData,
                async:   true,
                //change the url for your project
                url: 'http://ggoutos.ddns.net:5000/music.php',
                success: function(data){
                    console.log(data);
                    //alert('Your comment was successfully added');
                },
                error: function(){
                    console.log(data);
                    alert('There was an error adding your comment');
                }
            });
            
            return false;
        });
    });
