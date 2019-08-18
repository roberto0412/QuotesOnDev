

jQuery(document).ready(function ($) {
    $("#nextquote").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            method: "Get",
            url: window.red_vars.rest_url + "wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1",
            data: {
                comment_status: "closed"
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-WP-Nonce", window.red_vars.wpapi_nonce);

            }
        }).done(function (response) {
            $('.entry-content').html(response[0].content.rendered);
            $('.entry-info').html(
                `<h2 class="quote-author">&#8211; ${response[0].title.rendered}</h2>`
            );

            if (response[0]._qod_quote_source !== "")


            {
                $('.entry-info').append(
                    `<p class="quote-author">&#8211; ${response[0]._qod_quote_source}</p>`
                );
            //    console.log(response[0]._qod_quote_source);


            }
            
            // console.log(response);



        
            
            


            history.pushState(null, null);
            // console.log(response[0].content.rendered)
            // alert("Success! Comments are closed for this post.");
        });
    });
});
