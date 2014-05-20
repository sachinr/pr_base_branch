var github = new Github({
  username: "",
  password: "",
  auth: "basic"
});

var ownerAndRepo = $('meta[property="og:title"]').attr('content').split('/');
var repo = github.getRepo(ownerAndRepo[0], ownerAndRepo[1]);
var pullIds = $('.list-group-item-number').toArray();

pullIds.forEach(function(element){
  id = $(element).text().split('#')[1];
  var pull =  repo.getPull(id, function(err, pull) {
    $(element).parents('li:first').find('.branch-name').prepend('<span>' + pull.base.label + '</span>');
  });
});


