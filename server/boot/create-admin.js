'use strict';

module.exports = app => {
  const { Member, Role, RoleMapping } = app.models;
  Member.findOrCreate(
    {
      where: {
        username: 'anthonyvalera'
      }
    },
    {
      username: 'anthonyvalera',
      email: process.env.ADMIN_EMAIL,
      firstName: 'Anthony',
      lastName: 'Valera',
      password: process.env.ADMIN_PW,
      avatar: process.env.ADMIN_AVATAR,
      headline: 'Instructor @OriginCodeAcademy',
      bio: 'Hi, I\'m Anthony, an organizer @SanDiegoJS'
    },
		(err, member) => {
  if (err) console.log(err);
  Role.findOrCreate(
    {
      where: {
        name: 'ROSTER_ADMIN'
      }
    },
    {
      name: 'ROSTER_ADMIN'
    },
				err => {
  if (err) console.log(err);
  RoleMapping.findOrCreate(
    {
      where: {
        principalType: 'ROSTER_ADMIN',
        principalId: member.id
      }
    },
    {
      principalType: 'ROSTER_ADMIN',
      principalId: member.id
    },
						err => {
  if (err) console.log(err);
}
					);
}
			);
}
	);
};
