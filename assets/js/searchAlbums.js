const YoutubeMusicApi = require("youtube-music-api");

const api = new YoutubeMusicApi();
api
  .initalize() // Retrieves Innertube Config
  .then((info) => {
    // api.search("Lil Бутер", "song").then((result) => console.log(result));
    // api.search("Маркиз", "video").then((result) => console.log(result));
    // api.search("Бутер Бродский", "album").then((result) => console.log(result));
    // api.search("Слава КПСС", "artist").then((result) => console.log(result));
    // api.getAlbum("MPREb_SfbAZo06uRE").then((result) => {
    //   /*{	title: 'ne deve ne kush',
    //           description: '',
    //           trackCount: 1,
    //           date: { year: 2019, month: 7, day: 26 },
    //           duration: 159180,
    //           artist: [
    //             {
    //               name: 'Büyük Ev Ablukada',
    //               browseId: 'UCCvxgd2z194wYgpBt-sajrA',
    //               thumbnails: [Array]
    //             },
    //             {
    //               name: 'Ezhel',
    //               browseId: 'UCKyS9imZeKupw7aVr6GCI5w',
    //               thumbnails: [Array]
    //             }
    //           ],
    //           tracks: [
    //             {
    //               name: 'ne deve ne kush',
    //               videoId: 'kvoO5hwsYQo',
    //               artistNames: 'Büyük Ev Ablukada, Ezhel',
    //               duration: 159180,
    //               thumbnails: [Array]
    //             }
    //           ],
    //           thumbnails: [
    //             {
    //               url: 'https://lh3.googleusercontent.com/ylDAVJnoEBwUgTZ4Rj4bLQYphOAOvB0j_t8xQEz6zO0POfHVdI1RvzNIcu3UyTnwJrRAm4mIOTmxXESp=w60-h60-l90-rj',
    //               width: 60,
    //               height: 60
    //             },
    //             ....
    //           ]
    //         }*/
    //   console.log(result);
    // });
    // api
    //   .getPlaylist("OLAK5uy_mzyqwoaGbrd4EP3m9AVPEH8NaQgtgfR3k")
    //   .then((result) => {
    //     /*{
    //       title: 'ne deve ne kush Radio',
    //       owner: 'Ateş Tan',
    //       trackCount: 51,
    //       dateYear: '2020',
    //       content: [
    //         {
    //           videoId: 'kvoO5hwsYQo',
    //           name: 'ne deve ne kush',
    //           author: [Array],
    //           duration: 159000,
    //           thumbnails: [Array]
    //         },
    //         {
    //           videoId: 'ZVvmYVDoyaw',
    //           name: 'Derine İndik',
    //           author: [Object],
    //           duration: 257000,
    //           thumbnails: [Array]
    //         },
    //            ....
    //       ],
    //       thumbnails: [
    //         {
    //           url: 'https://lh3.googleusercontent.com/ylDAVJnoEBwUgTZ4Rj4bLQYphOAOvB0j_t8xQEz6zO0POfHVdI1RvzNIcu3UyTnwJrRAm4mIOTmxXESp=w60-h60-l90-rj',
    //           width: 60,
    //           height: 60
    //         },
    //         ....
    //       ],
    //       continuation: []
    //     }*/
    //     console.log(result);
    //   });
  });
