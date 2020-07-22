import { Component } from "@angular/core";
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



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
      userPlace: "Somewhere in California",
      slides: [
        {
          image:
          "../../assets/img/publication3.jpg",
        },
        {
          image:
          "../../assets/img/publication4.jpg",
        }
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
  faMapMarkedAlt = faMapMarkedAlt;
  faMapMarkerAlt = faMapMarkerAlt;

}
