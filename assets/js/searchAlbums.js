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

[
  {
    kind: "youtube#searchResult",
    etag: "wtMHIUxSHih6_lEUQCdECDvhDoM",
    id: { kind: "youtube#video", videoId: "Hv8vtX6UlZI" },
    snippet: {
      publishedAt: "2019-09-06T08:34:44Z",
      channelId: "UC5j6f4MM87pXY6gUFsq5p3w",
      title: "Сказка Мышка - Норушка",
      description:
        "Сказка Мышка - Норушка. Русская народная сказка для детей. Всем доброго здравия ! Мне приятно и я очень благодарен, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Hv8vtX6UlZI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Hv8vtX6UlZI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Hv8vtX6UlZI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "СКАЗКИ ДЕТЯМ",
      liveBroadcastContent: "none",
      publishTime: "2019-09-06T08:34:44Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "2L2Q-sJrUwe5ofVGoOXgUXUP-NM",
    id: { kind: "youtube#video", videoId: "3jRX9UJS9sE" },
    snippet: {
      publishedAt: "2018-06-08T16:56:58Z",
      channelId: "UCxJahyPZ_xEWXJiO9dCEw7g",
      title: "Мышка-норушка",
      description:
        "Provided to YouTube by Ренессанс Мышка-норушка · Слава КПСС · Unda Scope · Слава КПСС Солнце мёртвых ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3jRX9UJS9sE/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/3jRX9UJS9sE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/3jRX9UJS9sE/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Slava KPSS - Topic",
      liveBroadcastContent: "none",
      publishTime: "2018-06-08T16:56:58Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "s-kZafok9_PSI8vBHj759qvqk6Q",
    id: { kind: "youtube#video", videoId: "hmqN1p5yQco" },
    snippet: {
      publishedAt: "2018-08-04T07:27:18Z",
      channelId: "UCWpRvRgG2i2O5Po0cmMxoRA",
      title:
        "ТЕРЕМОК - МУЛЬТИК для ДЕТЕЙ. Детская Сказка ТЕРЕМ-ТЕРЕМОК. Русская сказка.",
      description:
        'Новый мультик для детей "ТЕРЕМОК " на "МУЛЬТканале. Мультфильм " ТЕРЕМОК " создан по мотивам русской народной ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hmqN1p5yQco/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/hmqN1p5yQco/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/hmqN1p5yQco/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "МУЛЬТканал",
      liveBroadcastContent: "none",
      publishTime: "2018-08-04T07:27:18Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Lk_564fiky6E28lQ_vHBQcYIFsM",
    id: { kind: "youtube#video", videoId: "acDVKta_t-c" },
    snippet: {
      publishedAt: "2023-09-09T13:05:55Z",
      channelId: "UCCexWX6TFIxIpkzLJBxw4_w",
      title: "Мышка-норушка | #shorts",
      description:
        "Маленький мальчик после того, как вынужденно остался со своей бабушкой в отеле, решил отправиться на небольшую ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/acDVKta_t-c/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/acDVKta_t-c/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/acDVKta_t-c/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Пешком По Небу",
      liveBroadcastContent: "none",
      publishTime: "2023-09-09T13:05:55Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "F1CapHaS6yP951bWyLMV_fGNZKk",
    id: { kind: "youtube#video", videoId: "u3mr7nGtl5M" },
    snippet: {
      publishedAt: "2021-05-04T17:10:53Z",
      channelId: "UC5j6f4MM87pXY6gUFsq5p3w",
      title:
        "Сборник сказок для детей. Курочка Ряба, теремок, репка, мышка норушка, про собаку! Мультики.",
      description:
        "Сборник сказок для детей. Курочка Ряба, теремок, репка, мышка норушка, про собаку! , как собака друга искала! Мультики.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/u3mr7nGtl5M/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/u3mr7nGtl5M/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/u3mr7nGtl5M/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "СКАЗКИ ДЕТЯМ",
      liveBroadcastContent: "none",
      publishTime: "2021-05-04T17:10:53Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "yd4enyH3A-7PXw5N5lz2z314PdQ",
    id: { kind: "youtube#video", videoId: "qFmu4VFheDI" },
    snippet: {
      publishedAt: "2019-09-15T12:00:15Z",
      channelId: "UCZExc415XmfTAjYm5cRcGZQ",
      title: "Приключения мышонка Переса. Мультфильм. Семейная комедия",
      description:
        "https://www.youtube.com/starmedia Лучшие русские и зарубежные фильмы, сериалы всех жанров.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qFmu4VFheDI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/qFmu4VFheDI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/qFmu4VFheDI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "StarMediaKids",
      liveBroadcastContent: "none",
      publishTime: "2019-09-15T12:00:15Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "k40d66fDrv1mPZ4Zlzi626XvTEo",
    id: { kind: "youtube#video", videoId: "Qx5RYECyFk8" },
    snippet: {
      publishedAt: "2018-04-25T11:49:58Z",
      channelId: "UCZNfLrtKveTZafrqw9ivKrA",
      title: "Слава КПСС — Мышка-норушка (кавер)",
      description:
        "Очень нравится творчество Машнова. А это одна из любимых песен. Хочется сразу извиниться за кривую игру на укулеле, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Qx5RYECyFk8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Qx5RYECyFk8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Qx5RYECyFk8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "сутулая собака",
      liveBroadcastContent: "none",
      publishTime: "2018-04-25T11:49:58Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "zkxjWr_FcweOeJ-R8jEDOcPFMV0",
    id: { kind: "youtube#video", videoId: "IstkpHHojR4" },
    snippet: {
      publishedAt: "2020-03-27T09:49:48Z",
      channelId: "UCuBlA2UhwrjyjFFOD6mcdaw",
      title:
        "Песенка про Мышку 🐭 - 8 Минут Веселых Детских Песен - БроиСис - Детские Песни",
      description:
        "Песенка про Мышку - 8 Минут Веселых Детских Песен - БроиСис - Детские Песни Подписывайтесь на наш канал ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/IstkpHHojR4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/IstkpHHojR4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/IstkpHHojR4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "БроиСис - Детские Песни",
      liveBroadcastContent: "none",
      publishTime: "2020-03-27T09:49:48Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "AB_nSySDv3oyEtw0gtjsKMJySV8",
    id: { kind: "youtube#video", videoId: "qj9u-KDzyuk" },
    snippet: {
      publishedAt: "2019-04-04T22:32:19Z",
      channelId: "UCWzkyrjZdCMx1994MCffNKw",
      title: "Мой друг Мышонок | Мультфильм 2019",
      description:
        'Все серии "Приключения Крота" по ссылке ниже: http://gestyy.com/w9syXU Старик всей душой полюбил мышонка, ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qj9u-KDzyuk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/qj9u-KDzyuk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/qj9u-KDzyuk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Мультяшки ТВ",
      liveBroadcastContent: "none",
      publishTime: "2019-04-04T22:32:19Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "mlEem0QKx7XNIHxg0B2d4-pyjCA",
    id: { kind: "youtube#video", videoId: "LAJcGusQ-mQ" },
    snippet: {
      publishedAt: "2013-10-23T21:55:46Z",
      channelId: "UCs7ok44hKWwpbwPRfYiG6cA",
      title: "Мышка норушка",
      description:
        "Автор проекта-lula.Большое ей спасибо Проект- https://yadi.sk/d/D2TOUXCk3PwdHq.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LAJcGusQ-mQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/LAJcGusQ-mQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/LAJcGusQ-mQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "tartillka2010",
      liveBroadcastContent: "none",
      publishTime: "2013-10-23T21:55:46Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Bs4XE-Z8w93a27IECCR58RvrCtM",
    id: { kind: "youtube#video", videoId: "vZtB4orsJVw" },
    snippet: {
      publishedAt: "2019-08-15T16:53:04Z",
      channelId: "UC5j6f4MM87pXY6gUFsq5p3w",
      title: "Теремок сказка",
      description:
        "Терем-теремок. Русская сказка. Стоит в поле теремок. Бежит мимо мышка-норушка. Увидела теремок, остановилась и ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vZtB4orsJVw/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vZtB4orsJVw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vZtB4orsJVw/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "СКАЗКИ ДЕТЯМ",
      liveBroadcastContent: "none",
      publishTime: "2019-08-15T16:53:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "-bKfkaIwKReQQjYmHMe-0ta3hm8",
    id: { kind: "youtube#video", videoId: "vsd3_PHKq44" },
    snippet: {
      publishedAt: "2019-09-21T14:00:14Z",
      channelId: "UCB4BRxXp2TsMCe8kU29h3Qw",
      title: "Приключения мышонка Переса. Мультфильм. Семейная комедия",
      description:
        "https://www.youtube.com/starmedia Лучшие русские и зарубежные фильмы, сериалы всех жанров.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vsd3_PHKq44/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/vsd3_PHKq44/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/vsd3_PHKq44/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Star Media",
      liveBroadcastContent: "none",
      publishTime: "2019-09-21T14:00:14Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "L27h_PFkNyEwzkxvEWrhSNrGoQY",
    id: { kind: "youtube#video", videoId: "beAxces11dM" },
    snippet: {
      publishedAt: "2021-01-17T04:00:04Z",
      channelId: "UC5j6f4MM87pXY6gUFsq5p3w",
      title:
        "Сказка про мышек. Мышь домовая и мышь полевая, мультики для детей",
      description:
        "Сказка про мышек. мультики для детей. Латышская народная сказка. Мышь домовая и мышь полевая. Развивающие ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/beAxces11dM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/beAxces11dM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/beAxces11dM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "СКАЗКИ ДЕТЯМ",
      liveBroadcastContent: "none",
      publishTime: "2021-01-17T04:00:04Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "0_rLjyD47cqEq3TzWPPbj2EgcMg",
    id: { kind: "youtube#video", videoId: "rX3ohAzmquk" },
    snippet: {
      publishedAt: "2021-11-20T05:00:09Z",
      channelId: "UCu-m7YNTxxUcfQablPJXB1w",
      title:
        "МЫШКА-МАЛЫШКА ♫ МУЛЬТиВАРИК ТВ ☺ ДОБРЫЕ ПЕСЕНКИ МУЛЬТИКИ ДЛЯ МАЛЫШЕЙ 0+",
      description:
        "ПЕСЕНКИ ЗВЕРЕЙ ДЛЯ МАЛЫШЕЙ ♫ СБОРНИК ПЕСЕН ПРО ЖИВОТНЫХ 0+ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rX3ohAzmquk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rX3ohAzmquk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rX3ohAzmquk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "МультиВарик ТВ",
      liveBroadcastContent: "none",
      publishTime: "2021-11-20T05:00:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "0qucFZxV0jquWBE0EAJC2cCizes",
    id: { kind: "youtube#video", videoId: "rpfB37RnHd4" },
    snippet: {
      publishedAt: "2018-06-02T11:17:18Z",
      channelId: "UClr_6Y6SMVPNS4-xgsxBV7Q",
      title: "Теремок сказка",
      description:
        "Русская народная сказка теремок про зверей, которые дружно жили в домике, пока его не разломал медведь. Но потом ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rpfB37RnHd4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rpfB37RnHd4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rpfB37RnHd4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Malysh Multish",
      liveBroadcastContent: "none",
      publishTime: "2018-06-02T11:17:18Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6jgLlF7cOOaqgj3UXi7ZSHENGRQ",
    id: { kind: "youtube#video", videoId: "XKGNELiy3Ns" },
    snippet: {
      publishedAt: "2016-10-12T18:35:11Z",
      channelId: "UCqrRu_iiZ4nAZz1yhgBNp6g",
      title: "Мышка-норушка",
      description: "Мультик.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/XKGNELiy3Ns/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/XKGNELiy3Ns/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/XKGNELiy3Ns/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Валерий Гриценко",
      liveBroadcastContent: "none",
      publishTime: "2016-10-12T18:35:11Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "72KHlto52IHFSEVn8WIhkj-dlIA",
    id: { kind: "youtube#video", videoId: "Krm11JkF1Rs" },
    snippet: {
      publishedAt: "2018-06-04T06:45:00Z",
      channelId: "UC2qByyGbbaOlYENo4VI817A",
      title: "МЫШКА-НОРУШКА В РЫЦАРСКИХ ДОСПЕХАХ - Ghost of a Tale #7",
      description:
        "Эта серия игры Ghost of a Tale посвящена тому, что наша мышка норушка наконец-то соберет свой комплекс доспехов ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Krm11JkF1Rs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Krm11JkF1Rs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Krm11JkF1Rs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "NILAMOP",
      liveBroadcastContent: "none",
      publishTime: "2018-06-04T06:45:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "-L9iMaqrs9frQth9o4xP6Aev298",
    id: { kind: "youtube#video", videoId: "2GLIzC1_S6k" },
    snippet: {
      publishedAt: "2019-03-02T13:00:00Z",
      channelId: "UCXIFMVnJjBGW8rJTp6SPmOg",
      title: "&quot;Понять. Простить.&quot; 963 серия - Мышка-норушка",
      description:
        "С недавних пор Надежда Еремина начала ревновать своего мужа, часто отлучающегося в длительные командировки.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2GLIzC1_S6k/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/2GLIzC1_S6k/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/2GLIzC1_S6k/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Понять. Простить",
      liveBroadcastContent: "none",
      publishTime: "2019-03-02T13:00:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "3tr-Wx0Lnxf9CoyEvbttSOdB0rs",
    id: { kind: "youtube#video", videoId: "UOXrQcKnLLk" },
    snippet: {
      publishedAt: "2012-12-03T00:09:48Z",
      channelId: "UCMju-8wN1CUUYftNyfDAFBQ",
      title: "Мышка-норушка.avi",
      description:
        "Забыл перед поездкой открыть капот, и предупредить зверьков, что уезжаю. Ну,мышка, извини.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UOXrQcKnLLk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/UOXrQcKnLLk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/UOXrQcKnLLk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "49Georgy",
      liveBroadcastContent: "none",
      publishTime: "2012-12-03T00:09:48Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "JE0vo4s_yu6JKXh6DDbOLTchHg4",
    id: { kind: "youtube#video", videoId: "_q1ajLzE1RA" },
    snippet: {
      publishedAt: "2019-04-11T08:37:02Z",
      channelId: "UC7ppD1RbGzfDNtq-i7m_xMA",
      title: "Слава КПСС - Мышка норушка",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_q1ajLzE1RA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_q1ajLzE1RA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_q1ajLzE1RA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "RVG Show",
      liveBroadcastContent: "none",
      publishTime: "2019-04-11T08:37:02Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "EiD6gEqewGKgvtVCTCwlYpbVhi4",
    id: { kind: "youtube#video", videoId: "tzfXrVhKmsY" },
    snippet: {
      publishedAt: "2016-02-24T10:43:27Z",
      channelId: "UCd7uo5PyQfeBe5mUFiX8aeA",
      title: "Мышка-норушка в дикой природе",
      description:
        "Слишком много внимания котам... Мышки тоже хорошенькие. Я имела ввиду полевых мышей, а не домашних, скребущихся ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tzfXrVhKmsY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/tzfXrVhKmsY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/tzfXrVhKmsY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Творческие фантазии",
      liveBroadcastContent: "none",
      publishTime: "2016-02-24T10:43:27Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "OKTJCKs_yHuxJmE3FxdQWXwNgpg",
    id: { kind: "youtube#video", videoId: "9lwkicX36AA" },
    snippet: {
      publishedAt: "2021-06-11T15:58:02Z",
      channelId: "UC-4km1-dU1HK-rsuHEBF8gQ",
      title: "Мышка норушка",
      description: "Выступление в роли мышки.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9lwkicX36AA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/9lwkicX36AA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/9lwkicX36AA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Дениз Исмаилова",
      liveBroadcastContent: "none",
      publishTime: "2021-06-11T15:58:02Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "pqPc4k8UkWfg32Oq3ON6Rzvnoi0",
    id: { kind: "youtube#video", videoId: "tk74PhQynXc" },
    snippet: {
      publishedAt: "2018-09-27T12:40:19Z",
      channelId: "UCDXDcJLCsBSVAU-zQ7pZ1uA",
      title: "Сказка Теремок",
      description:
        'Русская народная сказка "Теремок" Стоит в поле теремок. Бежит мимо мышка-норушка. Увидела теремок, остановилась и ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tk74PhQynXc/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/tk74PhQynXc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/tk74PhQynXc/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Zoya Maxmudova • 🅥",
      liveBroadcastContent: "none",
      publishTime: "2018-09-27T12:40:19Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "cgHWYS6CkJ9s6M6E5gxGHqSjU_U",
    id: { kind: "youtube#video", videoId: "qLAuV4VYj6M" },
    snippet: {
      publishedAt: "2024-01-12T15:31:37Z",
      channelId: "UC9yy2vWBTRIe74BYnGR47Qg",
      title: "мышка-норушка",
      description: "мышь.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qLAuV4VYj6M/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/qLAuV4VYj6M/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/qLAuV4VYj6M/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Тигряша",
      liveBroadcastContent: "none",
      publishTime: "2024-01-12T15:31:37Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "u6AOsFoWccnN63ihY-9iKsnInoo",
    id: { kind: "youtube#video", videoId: "TIMicESwVmg" },
    snippet: {
      publishedAt: "2022-08-12T11:00:25Z",
      channelId: "UC2KqLdmOT1kz4UFPC4K0URA",
      title: "ЛЕТУЧАЯ МЫШЬ В ЛЕСУ😳 #shorts #прикол",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TIMicESwVmg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/TIMicESwVmg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/TIMicESwVmg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ОСКАРИДЗЕ",
      liveBroadcastContent: "none",
      publishTime: "2022-08-12T11:00:25Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "KmtGo32xGkyyQyey7D_jpSbOn1g",
    id: { kind: "youtube#video", videoId: "O0IHDXZ9pPI" },
    snippet: {
      publishedAt: "2020-10-28T05:00:03Z",
      channelId: "UCL1p_eFStvL1nTLUjRz8Cew",
      title: "МЫШОНОК — ВЕСЕЛАЯ МУЛЬТ ПЕСЕНКА ДЛЯ ДЕТЕЙ 0+",
      description:
        "ДОБРЫЕ КРАСКИ | МУЛЬТИВАРИК ТВ | 0+ https://youtu.be/vLrjGDDJXVg МЯЧИК | МУЛЬТИВАРИК ТВ | 0+ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/O0IHDXZ9pPI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/O0IHDXZ9pPI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/O0IHDXZ9pPI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ДЕТСКАЯ ПЛОЩАДКА",
      liveBroadcastContent: "none",
      publishTime: "2020-10-28T05:00:03Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "6OTizblfjH57mHXkLf20-8X8ZZ0",
    id: { kind: "youtube#video", videoId: "xBgzafaqbB0" },
    snippet: {
      publishedAt: "2018-06-09T08:54:22Z",
      channelId: "UCkvNmUf5CozK49SB-hJ3ycw",
      title: "Мышка - норушка Съемка детей на природе",
      description:
        "Мышка - норушка Съемка детей на природе https://youtu.be/xBgzafaqbB0 В роли маленькой модели Ксюша. ▻ Я - Марина ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/xBgzafaqbB0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/xBgzafaqbB0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/xBgzafaqbB0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Семейный фотограф Марина Высоцкая",
      liveBroadcastContent: "none",
      publishTime: "2018-06-09T08:54:22Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "N2fLvqRK57UPZclGzEuBWk-5P4o",
    id: { kind: "youtube#video", videoId: "yWIKu00jx0k" },
    snippet: {
      publishedAt: "2023-11-19T04:46:09Z",
      channelId: "UC1XT6WHww4WaYg6XZFph7zQ",
      title: "Мышка норушка #mouse #wildlife #мышь #kokohead #гавайи",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yWIKu00jx0k/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/yWIKu00jx0k/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/yWIKu00jx0k/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Tanya Worldwide ",
      liveBroadcastContent: "none",
      publishTime: "2023-11-19T04:46:09Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "In2OfyyOplHedAH7cq7WspHTYWQ",
    id: { kind: "youtube#video", videoId: "BXMnpWOa6fQ" },
    snippet: {
      publishedAt: "2021-12-05T05:45:01Z",
      channelId: "UCf5lntL-0A3m414on-bd-cw",
      title: "ТЕРЕМОК 👶👧 МУЗЫКАЛЬНАЯ СКАЗКА ДЛЯ ДЕТЕЙ ОТ ДОБРОЙ ПЧЕЛЫ",
      description:
        "Привет друзья! Детям для развития полезно читать сказки-цепочки, такие как Теремок. В них надо внимательно ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/BXMnpWOa6fQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/BXMnpWOa6fQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/BXMnpWOa6fQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Добрая Пчела",
      liveBroadcastContent: "none",
      publishTime: "2021-12-05T05:45:01Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "kIJcTeUvMUldKxTtKYNj3c5dneo",
    id: { kind: "youtube#video", videoId: "QU3PQ4txDBY" },
    snippet: {
      publishedAt: "2020-07-18T06:00:02Z",
      channelId: "UCptG5819W4wSu1QklQPQDkQ",
      title:
        "Пальчиковый театр своими руками , крючком . Мышка - Норушка . Сказка &quot; Репка &quot;. Амигуруми , Crochet",
      description:
        'Продолжаем вязать пальчиковый театр своими руками крючком по народной сказке "Репка". Амигуруми . В этом видео вы ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QU3PQ4txDBY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/QU3PQ4txDBY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/QU3PQ4txDBY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Ольга Гаркуша - Furry Loya",
      liveBroadcastContent: "none",
      publishTime: "2020-07-18T06:00:02Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "DIJs9TdEaE9Q3Q9DPjaYjdZNTr4",
    id: { kind: "youtube#video", videoId: "1jlmu0Npa90" },
    snippet: {
      publishedAt: "2023-04-29T22:15:46Z",
      channelId: "UCGRuETUMofL2mJnOEypcYaA",
      title: "Кобра мышка норушка",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/1jlmu0Npa90/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/1jlmu0Npa90/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/1jlmu0Npa90/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Кериш Карбон",
      liveBroadcastContent: "none",
      publishTime: "2023-04-29T22:15:46Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Ovp_Qd-H-FGER3vMTLBmy6ufYBA",
    id: { kind: "youtube#video", videoId: "9uDLr7-R5r4" },
    snippet: {
      publishedAt: "2013-01-13T20:16:47Z",
      channelId: "UCW6Ks8JQaN_Yn_YlYlei-pg",
      title: "Мышка норушка.",
      description:
        "Заказы осуществлять через сайт : http://alex-nadobnikov.ru Группа ВК : http://vk.com/alexnadobnikov Через почту ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9uDLr7-R5r4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/9uDLr7-R5r4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/9uDLr7-R5r4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Alex N",
      liveBroadcastContent: "none",
      publishTime: "2013-01-13T20:16:47Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "zITZYTo7y6GI0RfbzqJAWUqcDBg",
    id: { kind: "youtube#video", videoId: "4fxjJxtWJWs" },
    snippet: {
      publishedAt: "2022-11-03T19:54:29Z",
      channelId: "UCpSsHz1gcH0-pq_bhRknKHw",
      title: "мышка норушка",
      description: "летучая мышь.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4fxjJxtWJWs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/4fxjJxtWJWs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/4fxjJxtWJWs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "16 калибр",
      liveBroadcastContent: "none",
      publishTime: "2022-11-03T19:54:29Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "NUy-0c-f6HLBOarONH4AHAYeYTA",
    id: { kind: "youtube#video", videoId: "RznOBdjvmvI" },
    snippet: {
      publishedAt: "2019-09-01T17:05:55Z",
      channelId: "UCaPCgAE_GVH5X8WdGGBqHjg",
      title: "МК вязаная игрушка мышка &quot;Норушка&quot; крючком 1 ЧАСТЬ",
      description:
        'Схема вязания Мышки "Норушки" Использовалась пряжа "Пехорка детская новинка", крючок № 1.5 мм 2 часть ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RznOBdjvmvI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/RznOBdjvmvI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/RznOBdjvmvI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Lila Knitt",
      liveBroadcastContent: "none",
      publishTime: "2019-09-01T17:05:55Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "WH01FLSUAb76ngpnfBS2-1vKY74",
    id: { kind: "youtube#video", videoId: "RMqc3_8rg5Q" },
    snippet: {
      publishedAt: "2019-11-28T03:07:56Z",
      channelId: "UCcnN4sTKTzBU0xKwkavGfqg",
      title: "&quot;Мышка хохоша&quot; ансамбль &quot;Вдохновение&quot;.",
      description:
        'Концертная программа "Зажги свою звезду" г. Темиртау Республика Казахстан. 2019г.',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RMqc3_8rg5Q/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/RMqc3_8rg5Q/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/RMqc3_8rg5Q/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Александр",
      liveBroadcastContent: "none",
      publishTime: "2019-11-28T03:07:56Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "8c8v0aB9F5qZpWg-mkmw8bCZfxU",
    id: { kind: "youtube#video", videoId: "5EDPf9aobBM" },
    snippet: {
      publishedAt: "2018-05-21T10:03:05Z",
      channelId: "UC2qByyGbbaOlYENo4VI817A",
      title: "МЫШКА НОРУШКА ВЕЛИЧАЙШИЙ ПОМОЩНИК - Ghost of a Tale #6",
      description:
        "Мышка норушка отправляется вновь в путешествия в Ghost of a Tale. И сегодня нас ждут великие дела, поможем ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/5EDPf9aobBM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/5EDPf9aobBM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/5EDPf9aobBM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "NILAMOP",
      liveBroadcastContent: "none",
      publishTime: "2018-05-21T10:03:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "KLwAdoTgDFntbWO9nhyfXIi5aCw",
    id: { kind: "youtube#video", videoId: "XLnF1MAqJEo" },
    snippet: {
      publishedAt: "2023-12-28T20:47:06Z",
      channelId: "UC2Iom1SGi3G7sBm3TdJ7E7w",
      title: "мышка-норушка",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/XLnF1MAqJEo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/XLnF1MAqJEo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/XLnF1MAqJEo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ГлебкиН",
      liveBroadcastContent: "none",
      publishTime: "2023-12-28T20:47:06Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "3IDZTjCNB-qyrDh-pfNnx6k4Zp8",
    id: { kind: "youtube#video", videoId: "lxwQeaNSCY0" },
    snippet: {
      publishedAt: "2018-05-05T21:34:55Z",
      channelId: "UCdoI4lQjm-tnHbw74BBbrqA",
      title: "Слава КПСС - Мышка-норушка (05.05. 2018)",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lxwQeaNSCY0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/lxwQeaNSCY0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/lxwQeaNSCY0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Пузцо Славули",
      liveBroadcastContent: "none",
      publishTime: "2018-05-05T21:34:55Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "DcPx0TYYNIwdqgQ8StKCbXlJHVc",
    id: { kind: "youtube#video", videoId: "0yJA_Doxy6I" },
    snippet: {
      publishedAt: "2017-09-21T12:47:13Z",
      channelId: "UCUIoBMhfYVXAX_tIYFUFggg",
      title: "Мышка норушка готовится к зиме!!!",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0yJA_Doxy6I/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/0yJA_Doxy6I/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/0yJA_Doxy6I/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Happy Anymals",
      liveBroadcastContent: "none",
      publishTime: "2017-09-21T12:47:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "gQ03z5-Tv0uf6tkoojJ1F45y0N4",
    id: { kind: "youtube#video", videoId: "bSqH2plpwa0" },
    snippet: {
      publishedAt: "2023-04-06T12:02:00Z",
      channelId: "UCA9j4b9EUrGDebVeTjbDcaw",
      title: "Встретил мышку норушку",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/bSqH2plpwa0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/bSqH2plpwa0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/bSqH2plpwa0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "EDWARD FAMILY",
      liveBroadcastContent: "none",
      publishTime: "2023-04-06T12:02:00Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "KYseNAUYbpARRvME-_FrbLtAb34",
    id: { kind: "youtube#video", videoId: "fUdJjwvg4b0" },
    snippet: {
      publishedAt: "2019-09-14T08:00:05Z",
      channelId: "UCGBwcE1tvr6ruit3UVmTjkg",
      title: "Мышка-Норушка крючком. Часть 3. Подробный видео МК.",
      description:
        "В этом видео мы закончим вязать игрушку Мышка-Норушка. Я вам покажу как сделать сборку игрушки и сшить все детали ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fUdJjwvg4b0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/fUdJjwvg4b0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/fUdJjwvg4b0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "NatalyToyJoy - Вяжем с удовольствием!",
      liveBroadcastContent: "none",
      publishTime: "2019-09-14T08:00:05Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "d27-tpfzd5HHo2rRuOdZh4rdsxY",
    id: { kind: "youtube#video", videoId: "Gph598KDn3A" },
    snippet: {
      publishedAt: "2009-05-10T13:10:07Z",
      channelId: "UCOJ9NT1QWIbfZGPbnxHLEqg",
      title: "My Dying Hoffman - Мышка-Норушка",
      description:
        "Live @ XO club, Moscow, 21.04.2009 feat. Диалог с Говорящим Сценическим Монитором!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Gph598KDn3A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Gph598KDn3A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Gph598KDn3A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "MyDyingHoffman",
      liveBroadcastContent: "none",
      publishTime: "2009-05-10T13:10:07Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "JmFtdRTKJ9sMLmfPviJvxVJCcMk",
    id: { kind: "youtube#video", videoId: "QUHBneb-8Lk" },
    snippet: {
      publishedAt: "2023-01-19T07:01:59Z",
      channelId: "UC0VsBgI05Bynm0ABldmws9A",
      title: "Ведьма Превратила Их В Крыс, Пока Они Ей Не Отомстили",
      description:
        "Cладкий Попкорн ▻ https://goo.su/kRztw8 #сюжетфильма #краткийпересказ #новинкикино #пересказсюжетафильма ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QUHBneb-8Lk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/QUHBneb-8Lk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/QUHBneb-8Lk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Солёный ПОПКОРН",
      liveBroadcastContent: "none",
      publishTime: "2023-01-19T07:01:59Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "YB4YqymZl9bBVv6Vvbn6rf9fktk",
    id: { kind: "youtube#video", videoId: "Zdt4THWnh6g" },
    snippet: {
      publishedAt: "2017-11-07T22:54:46Z",
      channelId: "UC6wEWtijHwA1Dk7TxbuR_ew",
      title: "ГНОЙНЫЙ - МЫШКА НОРУШКА СПБ",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Zdt4THWnh6g/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Zdt4THWnh6g/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Zdt4THWnh6g/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Олег Горелов",
      liveBroadcastContent: "none",
      publishTime: "2017-11-07T22:54:46Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "syKC6Bjx1tBBvjaUhypyB2TnTf8",
    id: { kind: "youtube#video", videoId: "VBWi2wJKiQk" },
    snippet: {
      publishedAt: "2023-09-17T09:59:43Z",
      channelId: "UCcvQ-k4XQLchrzugwpFKFmg",
      title: "мышка 🐭 норушка",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VBWi2wJKiQk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/VBWi2wJKiQk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/VBWi2wJKiQk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Записки из деревни",
      liveBroadcastContent: "none",
      publishTime: "2023-09-17T09:59:43Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4xT1IRSDU-QveZ0Pq9H2bsmkZw0",
    id: { kind: "youtube#video", videoId: "m1O-Ckf3uL4" },
    snippet: {
      publishedAt: "2020-04-23T07:44:42Z",
      channelId: "UCfeD0yUtU1GOvhWZivsLpxw",
      title: "Мастер-класс &quot;Мышка-норушка&quot;",
      description:
        'КСДЦ села АксиньиноНа этом онлайн занятии руководитель студии мягкой игрушки "Тыковка" Парамонова Галина ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/m1O-Ckf3uL4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/m1O-Ckf3uL4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/m1O-Ckf3uL4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: 'Культурно-спортивный досуговый центр "Ершовское"',
      liveBroadcastContent: "none",
      publishTime: "2020-04-23T07:44:42Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "02a10EjemJ0dhC4oXIkQ75Y-g5I",
    id: { kind: "youtube#video", videoId: "nDqFpXl7fqI" },
    snippet: {
      publishedAt: "2019-08-16T10:10:23Z",
      channelId: "UCNF0BgQBaG0xHwcWO2hwKtQ",
      title:
        "ПРЕВОСХОДНЫЙ МУЛЬТИК! &quot;В Лесной Чаще&quot; Союзмультфильм. Советские мультики для детей",
      description:
        'Мультфильм "В Лесной Чаще" Советские мультфильмы, видео для детей. Однажды маленький барсук сказал отцу, что у ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/nDqFpXl7fqI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/nDqFpXl7fqI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/nDqFpXl7fqI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Мультфильмы Для Детей",
      liveBroadcastContent: "none",
      publishTime: "2019-08-16T10:10:23Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "VFHnpBvu54pK4b87uXSLVnpO-Rk",
    id: { kind: "youtube#video", videoId: "7EvEPmK-1KI" },
    snippet: {
      publishedAt: "2020-02-16T22:29:01Z",
      channelId: "UC5CCPd7scV7KjAa6iBH7n0Q",
      title: "Слава КПСС - Мышка-норушка (live)",
      description: "Aurora Concert Hall, Санкт-Петербург 16.02.2020.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7EvEPmK-1KI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/7EvEPmK-1KI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/7EvEPmK-1KI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "alison alison",
      liveBroadcastContent: "none",
      publishTime: "2020-02-16T22:29:01Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "0jmbs8uUmLWdlS8RqP_Qu3m65_U",
    id: { kind: "youtube#video", videoId: "SUpS-3Z1FpU" },
    snippet: {
      publishedAt: "2024-01-26T07:05:45Z",
      channelId: "UCNUvkRgtZqc-3met5w8QLaA",
      title: "Мышка норушка",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SUpS-3Z1FpU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/SUpS-3Z1FpU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/SUpS-3Z1FpU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "МАМА",
      liveBroadcastContent: "none",
      publishTime: "2024-01-26T07:05:45Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "4VLdiIGLk3n4XrNwlNjl7cOFzKw",
    id: { kind: "youtube#video", videoId: "kBelRSLOuWs" },
    snippet: {
      publishedAt: "2023-07-03T20:25:35Z",
      channelId: "UC9XUT7d3eNjmtfA73xXT1Zw",
      title: "#Мышка-норушка.",
      description: "мышка #норушка #пришла #попить #чаю.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/kBelRSLOuWs/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/kBelRSLOuWs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/kBelRSLOuWs/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Евгений Субботин Лайф 2",
      liveBroadcastContent: "none",
      publishTime: "2023-07-03T20:25:35Z",
    },
  },
];


{"content":[{"type":"album","browseId":"MPREb_TE7uhe5C5bZ","playlistId":"OLAK5uy_m_92llvEIKDSFPYN6NXeX0cvshDRqXTYw","name":"Солнце мёртвых","artist":"Слава КПСС","year":"2017","thumbnails":[{"url":"https://lh3.googleusercontent.com/tqkR1XgIMw_OtHF0g9NGePNtU-fPYAwPsBQzxtq7Y72n0YxwjbqomR6BIjFvMaVnaTIjcKGqigifCvo=w60-h60-l90-rj","width":60,"height":60},{"url":"https://lh3.googleusercontent.com/tqkR1XgIMw_OtHF0g9NGePNtU-fPYAwPsBQzxtq7Y72n0YxwjbqomR6BIjFvMaVnaTIjcKGqigifCvo=w120-h120-l90-rj","width":120,"height":120},{"url":"https://lh3.googleusercontent.com/tqkR1XgIMw_OtHF0g9NGePNtU-fPYAwPsBQzxtq7Y72n0YxwjbqomR6BIjFvMaVnaTIjcKGqigifCvo=w226-h226-l90-rj","width":226,"height":226},{"url":"https://lh3.googleusercontent.com/tqkR1XgIMw_OtHF0g9NGePNtU-fPYAwPsBQzxtq7Y72n0YxwjbqomR6BIjFvMaVnaTIjcKGqigifCvo=w544-h544-l90-rj","width":544,"height":544}]},{"type":"album","browseId":"MPREb_QYVL1Gn9ylR","playlistId":"OLAK5uy_ks0AAYI-KxJt8TDgCgy-DgphSkhy9nbkU","name":"HYPE TRAIN (Mixtape)","artist":"ЗАМАЙ & Слава КПСС","year":"2016","thumbnails":[{"url":"https://lh3.googleusercontent.com/UVTkzjfk-0R7vAjw2U7SEjr-8q-ONOdjRh4RD-o41KTRrq8IFa2rk0_L_Nes9xIg6A_iJdmAy32mebCtfA=w60-h60-l90-rj","width":60,"height":60},{"url":"https://lh3.googleusercontent.com/UVTkzjfk-0R7vAjw2U7SEjr-8q-ONOdjRh4RD-o41KTRrq8IFa2rk0_L_Nes9xIg6A_iJdmAy32mebCtfA=w120-h120-l90-rj","width":120,"height":120},{"url":"https://lh3.googleusercontent.com/UVTkzjfk-0R7vAjw2U7SEjr-8q-ONOdjRh4RD-o41KTRrq8IFa2rk0_L_Nes9xIg6A_iJdmAy32mebCtfA=w226-h226-l90-rj","width":226,"height":226},{"url":"https://lh3.googleusercontent.com/UVTkzjfk-0R7vAjw2U7SEjr-8q-ONOdjRh4RD-o41KTRrq8IFa2rk0_L_Nes9xIg6A_iJdmAy32mebCtfA=w544-h544-l90-rj","width":544,"height":544}]},{"type":"album","browseId":"MPREb_Gg6OwswX4CK","playlistId":"OLAK5uy_mOvvGgtdzAzEQFufmQgxg7IqyVARf7L8Q","name":"Zmet","artist":"Der Golem","year":"1999","thumbnails":[{"url":"https://lh3.googleusercontent.com/JbM4456jAfn-Ouu8_6dMR0OfdG5ZkbTKEnmQA-xnbo5wm6270LgB6tlvr8XZQvz1VAxi3kQTo_l8fbHf=w60-h60-l90-rj","width":60,"height":60},{"url":"https://lh3.googleusercontent.com/JbM4456jAfn-Ouu8_6dMR0OfdG5ZkbTKEnmQA-xnbo5wm6270LgB6tlvr8XZQvz1VAxi3kQTo_l8fbHf=w120-h120-l90-rj","width":120,"height":120},{"url":"https://lh3.googleusercontent.com/JbM4456jAfn-Ouu8_6dMR0OfdG5ZkbTKEnmQA-xnbo5wm6270LgB6tlvr8XZQvz1VAxi3kQTo_l8fbHf=w226-h226-l90-rj","width":226,"height":226},{"url":"https://lh3.googleusercontent.com/JbM4456jAfn-Ouu8_6dMR0OfdG5ZkbTKEnmQA-xnbo5wm6270LgB6tlvr8XZQvz1VAxi3kQTo_l8fbHf=w544-h544-l90-rj","width":544,"height":544}]},{"type":"album","browseId":"MPREb_nrmMgOb2uHK","playlistId":"OLAK5uy_nM7KzvLiNApAvwFMj9h6XgyqwKig3wcos","name":"Солнце для мертвых","artist":"крематор","year":"1991","thumbnails":[{"url":"https://lh3.googleusercontent.com/dPk2KXkKlCmNLnnlDy1NCCq6X4vBLzCXXR7XG1u4KxkxReqymmQg-JcxN3vG1Xg0MyPWrsa1tq3mcqE=w60-h60-l90-rj","width":60,"height":60},{"url":"https://lh3.googleusercontent.com/dPk2KXkKlCmNLnnlDy1NCCq6X4vBLzCXXR7XG1u4KxkxReqymmQg-JcxN3vG1Xg0MyPWrsa1tq3mcqE=w120-h120-l90-rj","width":120,"height":120},{"url":"https://lh3.googleusercontent.com/dPk2KXkKlCmNLnnlDy1NCCq6X4vBLzCXXR7XG1u4KxkxReqymmQg-JcxN3vG1Xg0MyPWrsa1tq3mcqE=w226-h226-l90-rj","width":226,"height":226},{"url":"https://lh3.googleusercontent.com/dPk2KXkKlCmNLnnlDy1NCCq6X4vBLzCXXR7XG1u4KxkxReqymmQg-JcxN3vG1Xg0MyPWrsa1tq3mcqE=w544-h544-l90-rj","width":544,"height":544}]},{"type":"single","browseId":"MPREb_sikfY8254au","playlistId":"OLAK5uy_lb0xzx3QhbjtTIGpQWPzTU5glEYIJvYLY","name":"Black Siemens","artist":"PHARAOH","year":"2015","thumbnails":[{"url":"https://lh3.googleusercontent.com/KftDgajIuHTMxe2fBa_mBfQEvlbRTb561i7klH3rVyztDMfow5pGAhcrr2P24w1GVKICuaKzC6CK3JWp4w=w60-h60-l90-rj","width":60,"height":60},{"url":"https://lh3.googleusercontent.com/KftDgajIuHTMxe2fBa_mBfQEvlbRTb561i7klH3rVyztDMfow5pGAhcrr2P24w1GVKICuaKzC6CK3JWp4w=w120-h120-l90-rj","width":120,"height":120},{"url":"https://lh3.googleusercontent.com/KftDgajIuHTMxe2fBa_mBfQEvlbRTb561i7klH3rVyztDMfow5pGAhcrr2P24w1GVKICuaKzC6CK3JWp4w=w226-h226-l90-rj","width":226,"height":226},{"url":"https://lh3.googleusercontent.com/KftDgajIuHTMxe2fBa_mBfQEvlbRTb561i7klH3rVyztDMfow5pGAhcrr2P24w1GVKICuaKzC6CK3JWp4w=w544-h544-l90-rj","width":544,"height":544}]},{"type":"album","browseId":"MPREb_fPcSp67IFvR","playlistId":"OLAK5uy_mCd6o2Y8QxjiX-aaSX8pi9q_44lJ8141k","name":"Чужая Война","artist":"S.C.A.L.P.","year":"2009","thumbnails":[{"url":"https://lh3.googleusercontent.com/9BsoLi_gSl1eAtU3aRfOslzZfk3ioLqTevHWKhDJwwL1znnqKrMztWCv-XJ4ni3aCugLoGAkAOemUHzX=w60-h60-l90-rj","width":60,"height":60},{"url":"https://lh3.googleusercontent.com/9BsoLi_gSl1eAtU3aRfOslzZfk3ioLqTevHWKhDJwwL1znnqKrMztWCv-XJ4ni3aCugLoGAkAOemUHzX=w120-h120-l90-rj","width":120,"height":120},{"url":"https://lh3.googleusercontent.com/9BsoLi_gSl1eAtU3aRfOslzZfk3ioLqTevHWKhDJwwL1znnqKrMztWCv-XJ4ni3aCugLoGAkAOemUHzX=w226-h226-l90-rj","width":226,"height":226},{"url":"https://lh3.googleusercontent.com/9BsoLi_gSl1eAtU3aRfOslzZfk3ioLqTevHWKhDJwwL1znnqKrMztWCv-XJ4ni3aCugLoGAkAOemUHzX=w544-h544-l90-rj","width":544,"height":544}]},{"type":"album","browseId":"MPREb_VGtIkZkbeDf","playlistId":"OLAK5uy_nrt3lOYRAIQe0nVafX8dIoz3B-Cvs1L9U","name":"Зачем снятся сны","artist":"Гражданская оборона","year":"2007","thumbnails":[{"url":"https://lh3.googleusercontent.com/ugfzWH_eVEy3fAJTbd_avsRuFx_9ctJclaaTAvKLajR-vYbkSDD8SYxtbuNlQAIcpsdbH3XhhfNzMTyS=w60-h60-l90-rj","width":60,"height":60},{"url":"https://lh3.googleusercontent.com/ugfzWH_eVEy3fAJTbd_avsRuFx_9ctJclaaTAvKLajR-vYbkSDD8SYxtbuNlQAIcpsdbH3XhhfNzMTyS=w120-h120-l90-rj","width":120,"height":120},{"url":"https://lh3.googleusercontent.com/ugfzWH_eVEy3fAJTbd_avsRuFx_9ctJclaaTAvKLajR-vYbkSDD8SYxtbuNlQAIcpsdbH3XhhfNzMTyS=w226-h226-l90-rj","width":226,"height":226},{"url":"https://lh3.googleusercontent.com/ugfzWH_eVEy3fAJTbd_avsRuFx_9ctJclaaTAvKLajR-vYbkSDD8SYxtbuNlQAIcpsdbH3XhhfNzMTyS=w544-h544-l90-rj","width":544,"height":544}]}],"contination":[]} 