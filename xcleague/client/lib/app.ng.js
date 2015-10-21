angular.module('xcleagueApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial'
]);

onReady = function() {
  angular.bootstrap(document, ['xcleagueApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}