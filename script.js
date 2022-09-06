let input = $('[data-screen]');

function callback(e){
    screen = input.val();
    var find = this.id === 'need';           

    if(screen === ''){
        return
    }
    if(!find){

        $('[data-have]').append('<li><input type="checkbox" name="item" checked disabled> ' + screen +'<i class="fa-solid fa-xmark emo"></i></li>')
    }
    else{
        $('[data-need]').append('<li><input type="checkbox" name="item" disabled> ' + screen +'<i class="fa-solid fa-xmark emo"></i></li>')
    }    
    input.val('');
    input.focus();

    $('i').click(function(){
        $(this).parent('li').remove();    //this helps us to remove particular li
    })
}

$('#need, #have').click(callback);




