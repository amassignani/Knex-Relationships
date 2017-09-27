exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({id: 1, user_id: 99901, url: 'https://www.google.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 2, user_id: 99902, url: 'https://www.bugsbunnydisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 3, user_id: 99903, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 4, user_id: 99904, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 5, user_id: 99905, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 6, user_id: 99906, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 7, user_id: 99907, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 8, user_id: 99908, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 9, user_id: 99909, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 10, user_id: 99910, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 11, user_id: 99911, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 12, user_id: 99912, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 13, user_id: 99913, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 14, user_id: 99914, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 15, user_id: 99915, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 16, user_id: 99916, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 17, user_id: 99917, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 18, user_id: 99918, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 19, user_id: 99919, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 20, user_id: 99920, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 21, user_id: 99921, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 22, user_id: 99922, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 23, user_id: 99923, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 24, user_id: 99924, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 25, user_id: 99925, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 26, user_id: 99926, url: 'https://www.mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'})
      ]);
    });
};