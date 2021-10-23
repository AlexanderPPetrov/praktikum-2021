$(function() {
    console.log('Document is rendered and we have an access to all the elements');

    $('#create-post').click((e) => {

        const postData = getCreatePostData();
        if(!postData){
            $('#create-post-error').show();
            return;
        }

        $('#create-post-error').hide();
        createPost(postData);
    })


    $(document).on("click", ".post-remove", (e) => { 
        const $postRemove = $(e.currentTarget);
        $postRemove.closest('.list-group-item').remove();
    });
  
    function createPost(postData) {
        clearInputFields();
        const $template = $($('#post-template').html());
        $template.find('.post-title').text(postData.title);
        $template.find('.post-city').text(postData.cityTitle);
        $template.find('.post-description').text(postData.description);
        $('#post-list').append($template);
    }

    function clearInputFields() {
        $('#post-title').val('');
        $('#post-description').val('');
        $('#no-posts-available').remove();
    }

    const getCreatePostData = () => {
        const city = $('#post-city').val();
        const cityTitle = $( "#post-city option:selected" ).text();
        const title = $('#post-title').val();
        const description = $('#post-description').val();

        if(!city || !title || !description){
            return null;
        }
        return {
            city,
            title,
            description,
            cityTitle,
        }
    }
});