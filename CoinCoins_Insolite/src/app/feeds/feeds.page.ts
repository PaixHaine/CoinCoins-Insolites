import { Component } from "@angular/core";

@Component({
  selector: "app-feeds",
  templateUrl: "feeds.page.html",
  styleUrls: ["feeds.page.scss"],
})
export class FeedsPage {
  categories = [
    {
      name: "Nature",
    },
    {
      name: "Architectures",
    },
    {
      name: "Arts",
    },
    {
      name: "Places",
    },
    {
      name: "Others",
    },
  ];
  feedList = [
    {
      userName: "John Price",
      userImage: "../../assets/img/homme1.png",
      userPlace: "Rampart Lakes, United States of America",
      slides: [
        {
          image: "../../assets/img/publication1.jpg",
        },
      ],
      likes: 10,
      feedText: "Lunch @Houstan",
      time: "Just Now",
    },
    {
      userName: "Soap MacTavish",
      userImage: "../../assets/img/homme2.png",
      userPlace: "Minarets United States of America",
      slides: [
        {
          image:
            "../../assets/img/publication2.jpg",
        }
      ],
      likes: 323,
      feedText: "From Mumbai",
      time: "3 Hours ago",
    },
    {
      userName: "Lisa Bowman",
      userImage: "../../assets/img/femme1.png",
      userPlace: "Mount Rushmore National Memorial",
      slides: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVd57Rh4SLipxD_I4ikAjXk4A6B9b69SoyoiKa0Y3YC-Vc31iC",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2XXwZeGmG2LjAYFwnFS0KgHmHo0GP8pp2_VIKMYA_lYW79t43",
        },
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnoRsDHvSC2mYgY2HDNgMrkW3vPWO5b1P--snWW-ZGSah71MaL",
        },
      ],
      likes: 120,
      feedText: "Lovely places",
      time: "3 Days ago",
    },
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor() {}
}
