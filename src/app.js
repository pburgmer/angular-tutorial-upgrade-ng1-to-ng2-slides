(function() {
  'use strict';

  /* @ngInject */
  function configureSlides(slidesConfig) {
    slidesConfig.slides = [
      'title',

      'about-me',
      'about-us',
      'overview',

      'intro/history-angularjs',
      'intro/history-angular',
      'intro/motivation',
      'intro/concepts',

      'strategies/title',
      'strategies/big-bang/big-bang',
      'strategies/big-bang/advantages',
      'strategies/big-bang/disadvantages',
      'strategies/adapt/adapt',
      'strategies/adapt/advantages',
      'strategies/adapt/disadvantages',
      'strategies/hybrid/hybrid',
      'strategies/hybrid/advantages',
      'strategies/hybrid/disadvantages',
      'strategies/truth',
      'strategies/truth-details',

      'step-by-step/title',
      'step-by-step/angularjs-update/title',
      'step-by-step/angularjs-update/angularjs-update',
      'step-by-step/angularjs-update/1.2',
      'step-by-step/angularjs-update/1.3',
      'step-by-step/angularjs-update/1.4',
      'step-by-step/angularjs-update/1.5',
      'step-by-step/angularjs-update/1.6',
      'step-by-step/typescript/title',
      'step-by-step/typescript/typescript',
      'step-by-step/typescript/es-modules',
      'step-by-step/typescript/angularjs-modules',
      'step-by-step/typescript/at-types',
      // 'step-by-step/typescript/demo',

      'step-by-step/style-guide/title',
      'step-by-step/style-guide/style-guide',
      // 'step-by-step/style-guide/demo',

      'step-by-step/hybrid-bootstrap/title',
      'step-by-step/hybrid-bootstrap/bootstrapping',
      'step-by-step/hybrid-bootstrap/code',
      // 'step-by-step/hybrid-bootstrap/demo',

      'step-by-step/hybrid-service/title',
      'step-by-step/hybrid-service/service',
      'step-by-step/hybrid-service/code-1',
      'step-by-step/hybrid-service/code-2',
      // 'step-by-step/hybrid-service/demo',

      'step-by-step/hybrid-component/title',
      'step-by-step/hybrid-component/component',
      'step-by-step/hybrid-component/code',
      // 'step-by-step/hybrid-component/demo',


      'step-by-step/hybrid-remove/title',
      'step-by-step/hybrid-remove/routing',
      'step-by-step/hybrid-remove/bootstrapping',
      'step-by-step/hybrid-remove/tooling',
      // 'step-by-step/hybrid-remove/demo',

      'summary',

      'end'
    ];

    slidesConfig.slideTemplatePrefix= '@@cacheBustingDir/slides/';
    slidesConfig.slideTemplateSuffix = '.html';

    slidesConfig.masters = {
      'regular': '@@cacheBustingDir/masters/regular.html',
      'angular': '@@cacheBustingDir/masters/angular.html',
      'hands-on': '@@cacheBustingDir/masters/hands-on.html',
      'angularjs': '@@cacheBustingDir/masters/angularjs.html',
      'section-title': '@@cacheBustingDir/masters/section-title.html'
    };
  }

  var module = angular.module('app', [
    'app.templates',
    'w11k.slides',
    'w11k.slides.template',
    'ngSanitize'
  ]);

  // set presentation mode on startup
  module.run(function (SlidesService) {
   SlidesService.setMode('screen');
  });

  module.config (configureSlides);
}());
