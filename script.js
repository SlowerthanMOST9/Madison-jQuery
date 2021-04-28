$(document).ready(() => {
    $(`#cart`).on(`click`, () => {
      $(`cartMenu`).show();
    })
    $(`#account`).on(`click`, () => {
      $(`accountMenu`).show();
    })
  
    $(`.dropdown-menu`).on('mouseleave', () => 
    {
      $(`dropdown-menu`).hide()
    });
  })