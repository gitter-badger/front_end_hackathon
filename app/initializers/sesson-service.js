export function initialize(container, application) {
  application.inject('route', 'sessonService', 'service:sesson');
}

export default {
  name: 'sesson-service',
  initialize: initialize
};
