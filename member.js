function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/member.html',
        controllers: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}