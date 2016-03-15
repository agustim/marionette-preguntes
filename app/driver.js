_ = require('underscore');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');


var App = new Marionette.Application({
  history: 1,
  onStart: function(options) {
    var preguntesView = Marionette.ItemView.extend({
      el: '#app-hook',
      template: require('./templates/layout.html'),
      events: {
        'click .answer': 'answerClick'
      }
    });
    var preguntes = new preguntesView();
    preguntes.render();
/*    preguntes.triggerMethod('show');*/
    this.hideAll();
    this.onClickAnswer();
  },
  hideAll: function() {
    $(".to_hide").hide();
  },
  showSlide: function(slide) {
    console.log(this.history);
    console.log(slide);
  },
  answerClick: function(e){
    console.log(this);
    console.log(e);
    console.log('seguir');
    e.preventDefault();
    console.log('seguir 1');

    e.stopPropagation();
    console.log('seguir 2');

    target_elem = e.target;
    console.log('seguir 3');

    console.log($(target_elem).data());
    console.log('end');
  },
  onClickAnswer: function() {
    $(".answer").click(function() {
      alert( "Handler for .click() called." );
    });
  }

});

App.start();
