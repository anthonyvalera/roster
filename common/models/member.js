'use strict';

module.exports = function (Member) {
  Member.beforeRemote('find', function (context, unused, next) {
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
    
  // Member.getRoster = function (id, cb) {
  //   const { Tag } = Member.app.models;
  //   Member.find({
  //     where: {
  //       isHidden: false
  //     }
  //   })
  //   .then((results) => {
  //     return Promise.all(results.map((result) => {
  //       return Player.findById(result.playerId)
  //         .then(player => player)
  //         .catch(error => console.log(error));
  //     }));
  //   })
  //   .then((allResults) => cb(null, allResults.filter(x => !!x)))
  //   .catch(err => console.log(err));
  // };

  // Member.remoteMethod('getRoster', {
  //   description: 'Returns required data from all members to populate member cards on roster.',
  //   accepts: {
  //     arg: 'id',
  //     type: 'number'
  //   },
  //   http: {
  //     path: '/getPlayers',
  //     verb: 'get'
  //   },
  //   returns: {
  //     arg: 'data',
  //     type: 'object',
  //     root: true
  //   },
  // });
};
