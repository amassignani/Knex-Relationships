exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({id: 1, user_id: 99901, url: 'mickeymouse.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 2, user_id: 99902, url: 'Bugsbunnydisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 3, user_id: 99903, url: 'Curiodisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 4, user_id: 99904, url: 'Dilapdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 5, user_id: 99905, url: 'Exuberadisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 6, user_id: 99906, url: 'Fascinateddisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 7, user_id: 99907, url: 'Generous Gdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 8, user_id: 99908, url: 'Hiladisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 9, user_id: 99909, url: 'Intransidisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 10, user_id: 99910, url: 'Jocdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 11, user_id: 99911, url: 'Kafkaesqdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 12, user_id: 99912, url: 'Loquadisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 13, user_id: 99913, url: 'Misanthropdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 14, user_id: 99914, url: 'Nonchdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 15, user_id: 99915, url: 'Ordisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 16, user_id: 99916, url: 'Peacefdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 17, user_id: 99917, url: 'Querudisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 18, user_id: 99918, url: 'Redisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 19, user_id: 99919, url: 'Senedisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 20, user_id: 99920, url: 'Tumultuodisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 21, user_id: 99921, url: 'Unassaidisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 22, user_id: 99922, url: 'Voraciodisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 23, user_id: 99923, url: 'Wondedisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 24, user_id: 99924, url: 'Xdisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 25, user_id: 99925, url: 'Ydisney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'}),
        knex('profiles').insert({id: 26, user_id: 99926, url: 'disney.com', picture: 'https://www.google.co.nz/search?sa=X&q=Mickey+Mouse'})
      ]);
    });
};