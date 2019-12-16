"use strict";

$(function () {
  $('.more').on('click', function () {
    $('.contmenu').slideToggle(300);
    $('.more__line:nth-child(1)').toggleClass('line-rotate-first');
    $('.more__line:nth-child(3)').toggleClass('line-rotate-second');
    $('.more__line:nth-child(2)').toggle();
  });
  var $normItem = $('.norm-item');
  $normItem.on('click', function (event) {
    $(event.currentTarget).next().fadeIn();
  });
  var $crossHide = $('.full-info_cross');
  $crossHide.on('click', function () {
    $('.fullinfo-hide').fadeOut();
    console.log('unvivsible');
  });
  var $trainTypeHiden = $('.train-type__hiden');
  var $trainType = $('.train-type span');
  $trainType.on('click', function () {
    $(event.currentTarget).next().fadeIn();
  });
  $crossHide.on('click', function () {
    $trainTypeHiden.fadeOut();
  });
}); // nth-child(2)