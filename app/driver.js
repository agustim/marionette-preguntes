_ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var historyNav;


var App = new Marionette.Application({
  onStart: function(options) {
    var preguntesView = Marionette.ItemView.extend({
      el: '#app-hook',
      template: false,
      events: {
        'click .answer': 'answerClick'
      }
    });
    var preguntes = new preguntesView();
    historyNav="p1";
    this.showSlide(historyNav);
    this.onClickAnswer();
  },
  hideAll: function() {
    $(".to_hide").hide();
  },
  showSlide: function(slide) {
    this.hideAll();
    $("."+slide).show();
    console.log(this.history);
    console.log(slide);
  },
  onClickAnswer: function() {
    $(".answer").click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      target_elem = e.target;
      slide = $(target_elem).data("go_slide");
      console.log(slide);
      historyNav=slide;
      App.showSlide(historyNav);
    });
  }

});

App.start();
