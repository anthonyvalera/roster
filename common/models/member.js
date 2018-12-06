'use strict';

module.exports = function (Member) {
  Member.beforeRemote('find', function (context, unused, next) {
    console.log(context.req.headers);
    switch (context.req.headers.host) {
    case 'localhost:3000': {
      next();
      break;
    }
    default: {
      let error = new Error();
      error.status = 401;
      error.message = 'The request has not been applied because it lacks valid authentication credentials for the target resource.';
      next(error);
    }
    }
  });
};
