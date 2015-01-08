{"filter":false,"title":"FooterView.js","tooltip":"/app/js/views/footer/FooterView.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["define([","  'jquery',","  'underscore',","  'backbone',","  'models/owner/OwnerModel',","  'text!templates/footer/footerTemplate.html'","], function($, _, Backbone, OwnerModel, footerTemplate){","","  var FooterView = Backbone.View.extend({","    el: $(\"#footer\"),","","    initialize: function() {","","      var that = this;","      var options = {query: 'thomasdavis'}","     ","","      var onDataHandler = function(collection) {","          that.render();","      }","","      this.model = new OwnerModel(options);","      this.model.fetch({ success : onDataHandler, dataType: \"jsonp\"});","","    },","","    render: function(){","","      var data = {","        owner: this.model.toJSON(),","        _: _ ","      };","","      var compiledTemplate = _.template( footerTemplate, data );","      this.$el.html(compiledTemplate);","    }","","  });","","  return FooterView;","  ","});"]}]}]]},"ace":{"folds":[],"scrolltop":1,"scrollleft":0,"selection":{"start":{"row":15,"column":5},"end":{"row":15,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1420394836000,"hash":"f77b9fe9b082652585e14eec894a35f29b2da0e3"}