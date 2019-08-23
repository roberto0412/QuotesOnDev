

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
                if (response[0]._qod_quote_source_url !== "")
                {
                    $('.entry-info').append(
                        `<a  href="${response[0]._qod_quote_source_url}"class="quote-author">&#44; ${response[0]._qod_quote_source}</a>`
                    );

                }
                else{

                
                $('.entry-info').append(
                    `<span class="quote-author">&#44; ${response[0]._qod_quote_source}</span>`
                );
                }
            //    console.log(response[0]._qod_quote_source);


            }
            
            console.log(response);
console.log(window.red_vars);
         const url = window.red_vars.home_url + '/' + response[0].slug;
            history.pushState(null, null, url);
            // console.log(response[0].content.rendered)
            // alert("Success! Comments are closed for this post.");
        });
    });

    $('#submit-button').on("click", function(event) {
        event.preventDefault();
       

        const $author = $('#q-author').val();
        const $quote = $('#quote').val();
        const $Quote_source = $('#source-quote').val();
        const $url_Source = $('#url-quote').val();
        
        $.ajax({
          method: "post",
          url: window.red_vars.rest_url + "wp/v2/posts",
          beforeSend: function (xhr) {
            xhr.setRequestHeader("X-WP-Nonce", window.red_vars.wpapi_nonce);
          },
        
            data: {
            title: $author,
            content: $quote,
            _qod_quote_source: $Quote_source,
            _qod_quote_source_url: $url_Source,
            post_status: "pending"
          }
        }).success(function() {
          alert("Quote was sucessfully submitted to database");
          $('#quote-form')[0].reset();
          
    
        }).fail(function () {
          alert("Quote submission was unsuccessful");
          $('#quote-form')[0].reset();
    
  
        });
      });
});


