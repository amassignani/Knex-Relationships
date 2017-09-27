
// created a seed file called profiles to match profiles migration
// copy data from users seed file to the profiles seed file
// Changed the columns name to id(note that the values for this column are different because it is the primary key for this table), 
// profile and user_id(note witj user_id that it has the same values as the id column in the users file)
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        ({id: 88801, profile: 'Ambitious Aardvark', user_id: 99901, url: 'https://imgpic.org/pic/22395'}),
        ({id: 88802, profile: 'Bamboozled Baboon', user_id: 99902, url: 'https://imgpic.org/pic/22395'}),
        ({id: 88803, profile: 'Curious Capybara', user_id: 99903, url: 'http://animals.sandiegozoo.org/sites/default/files/2016-10/animals_hero_capybara.jpg'}),
        ({id: 88804, profile: 'Dilapidated Duck', user_id: 99904, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mallard2.jpg/1200px-Mallard2.jpg'),
        ({id: 88805, profile: 'Exuberant Elephant', user_id: 99905, url: 'https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAzNi85ODgvb3JpZ2luYWwvZWxlcGhhbnRzLmpwZw=='}),
        ({id: 88806, profile: 'Fascinated Flying Fox', user_id: 99906, url: 'http://news.nationalgeographic.com/content/dam/news/2015/11/10/flyingfox/01flyingfox.jpg'}),
        ({id: 88807, profile: 'Generous Gila Monster', user_id: 99907, url: 'https://i.ytimg.com/vi/swlozUKuvFI/maxresdefault.jpg'}),
        ({id: 88808, profile: 'Hilarious Heron', user_id: 99908, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Great_blue_heron_%28Ardea_herodias_occidentalis%29_white_form.JPG/220px-Great_blue_heron_%28Ardea_herodias_occidentalis%29_white_form.JPG'}),
        ({id: 88809, profile: 'Intransigent Impala', user_id: 99909, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Impala_ram.jpg/1200px-Impala_ram.jpg'}),
        ({id: 88810, profile: 'Jocular Jerboa', user_id: 99910, url: 'http://www.factzoo.com/sites/all/img/mammals/jerboa-long-eared.jpg'}),
        ({id: 88811, profile: 'Kafkaesque Kinkajou', user_id: 99911, url: 'http://www.animalspot.net/wp-content/uploads/2014/12/Kinkajou-Pictures.jpg'}),
        ({id: 88812, profile: 'Loquacious Lemur', user_id: 99912, url: 'https://media.mnn.com/assets/images/2016/08/sclaters-lemur-closeup.jpg.653x0_q80_crop-smart.jpg'}),
        ({id: 88813, profile: 'Misanthropic Mongoose', user_id: 99913, url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Small_asian_mongoose.jpg'}),
        ({id: 88814, profile: 'Nonchalant Nyala', user_id: 99914, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nyala_%28Tragelaphus_angasii%29_female.jpg/220px-Nyala_%28Tragelaphus_angasii%29_female.jpg'}),
        ({id: 88815, profile: 'Ornery Ocelot', user_id: 99915, url: 'https://a-z-animals.com/media/animals/images/original/ocelot_8.jpg'}),
        ({id: 88816, profile: 'Peaceful Pangolin', user_id: 99916, url: 'http://www.telegraph.co.uk/content/dam/science/2016/03/15/pangolin_3180820b-xlarge_trans_NvBQzQNjv4BqpJliwavx4coWFCaEkEsb3kvxIt-lGGWCWqwLa_RXJU8.jpg'}),
        ({id: 88817, profile: 'Querulous Quokka', user_id: 99917, url: 'http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png'}),
        ({id: 88818, profile: 'Resolute Rail', user_id: 99918, url: 'https://i.pinimg.com/originals/45/e6/7e/45e67e5ba1b3f3a64bd8c69e95b0a93a.jpg'}),
        ({id: 88819, profile: 'Senescent Sloth', user_id: 99919, url: 'https://c402277.ssl.cf1.rackcdn.com/photos/6518/images/story_full_width/iStock_000011145477Large_mini_%281%29.jpg?1394632882'}),
        ({id: 88820, profile: 'Tumultuous Terrapin', user_id: 99920, url: 'https://www.collinsdictionary.com/images/thumb/terrapin_108547091_250.jpg'}),
        ({id: 88821, profile: 'Unassailable Urial', user_id: 99921, url: 'https://i.dawn.com/large/2017/03/58c066e9e7f18.jpg'}),
        ({id: 88822, profile: 'Voracious Viscacha', user_id: 99922, url: 'https://i.pinimg.com/originals/78/22/c2/7822c2e4bda645d54a119b8f2a2376c0.jpg'}),
        ({id: 88823, profile: 'Wondering Wombat', user_id: 99923, url: 'https://www.google.co.nz/search?biw=1073&bih=925&tbm=isch&sa=1&q=wombat&oq=wombat&gs_l=psy-ab.3..0l4.12197.15072.0.15136.13.10.0.0.0.0.198.1136.0j6.6.0....0...1.1.64.psy-ab..7.6.1135...0i67k1.0.cuL2xPzXSbE#imgrc=DRBZB2Mz6bTfkM:'}),
        ({id: 88824, profile: 'Xenial Xerus', user_id: 99924, url: 'http://calphotos.berkeley.edu/imgs/512x768/0000_0000/1006/0666.jpeg'}),
        ({id: 88825, profile: 'Yielding Yak', user_id: 99925, url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg/1280px-Bos_grunniens_at_Letdar_on_Annapurna_Circuit.jpg'}),
        ({id: 88826, profile: 'Zaftig Zebu', user_id: 99926, url: 'http://www.warrenphotographic.co.uk/photography/bigs/03727-Zebu-bull.jpggit a'})
      ]);
    });
};
