// $('h1')
//
// $('li')
//
// x.css('color','red')
//
// x.css('color','green')
//
// x.css('background', 'blue')
//
// var newCSS = {
//     'color': 'white',
//     'background': 'blue',
//     'border': 'red'
// }
//
// newCSS
// {color: 'white', background: 'blue', border: 'red'}
//
// x.css(newCSS)
//
// var newCSS = {
//     'color': 'white',
//     'background': 'orange',
//     'border': '20px solid red'
// }
//
// x.css(newCSS)
//
// var listItems = $('li')
//
// listItems
//
// listItems.css('color', 'blue')
//
// listItems.eq(0).css('color', 'brown')
//
// listItems.eq(-1).css('color', 'brown')
//
// $('h1').text()
//
// $('h1').text('TRY AND LEARN NEW THINGS')
//
// $('input').eq(0).val('Surname')
//
// $('input').eq(1).attr('type', 'checkbox')
//
// $('h1').addClass('turnRed')
//
// $('h1').removeClass('turnRed')
//
// $('h1').toggleClass('turnBlue')

// EVENT

// $('h1').click(function() {
//   console.log('There was a click')
// })
//
// $('li').click(function() {
//   console.log('l1 was click');
// })
//
// $('h1').click(function() {
//   $(this).text("I was changed !")
// })

// $('input').eq(0).keypress(function() {
//   $('h3').toggleClass('turnBlue');
// })

// $('input').eq(0).keypress(function(event) {
//   console.log(event);
// })

// $('input').eq(0).keypress(function(event) {
//   if (event.which === 13) {
//     $('h3').toggleClass('turnBlue');
//   }
// })

//FADEOUT

$('button').eq(0).on('click',function() {
  $('.container').fadeOut(3000);
})

$('input').eq(0).on('click',function() {
  $('.container').slideUp(3000);
})
