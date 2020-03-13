import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  data = [
    {
      id: 1,
      img: 'https://cdn.24h.com.vn/upload/1-2020/images/2020-03-13/gettyimages-1196188188-910x607-660-1584057488-489-width660height440.jpg',
      title: 'HLV Arteta & SAO Chelsea dương tính virus Covid-19, Premier League họp khẩn',
      desc: 'HLV trưởng Mikel Arteta của Arsenal và cầu thủ của Chelsea, Odoi được xác nhận đã nhiễm Covid-19.'
    },{
      id: 2,
      img: 'https://cdn.24h.com.vn/upload/1-2020/images/2020-03-13/gettyimages-1196188188-910x607-660-1584057488-489-width660height440.jpg',
      title: 'HLV Arteta & SAO Chelsea dương tính virus Covid-19, Premier League họp khẩn',
      desc: 'HLV trưởng Mikel Arteta của Arsenal và cầu thủ của Chelsea, Odoi được xác nhận đã nhiễm Covid-19.'
    },{
      id: 3,
      img: 'https://cdn.24h.com.vn/upload/1-2020/images/2020-03-13/gettyimages-1196188188-910x607-660-1584057488-489-width660height440.jpg',
      title: 'HLV Arteta & SAO Chelsea dương tính virus Covid-19, Premier League họp khẩn',
      desc: 'HLV trưởng Mikel Arteta của Arsenal và cầu thủ của Chelsea, Odoi được xác nhận đã nhiễm Covid-19.'
    },{
      id: 4,
      img: 'https://cdn.24h.com.vn/upload/1-2020/images/2020-03-13/gettyimages-1196188188-910x607-660-1584057488-489-width660height440.jpg',
      title: 'HLV Arteta & SAO Chelsea dương tính virus Covid-19, Premier League họp khẩn',
      desc: 'HLV trưởng Mikel Arteta của Arsenal và cầu thủ của Chelsea, Odoi được xác nhận đã nhiễm Covid-19.'
    },{
      id: 5,
      img: 'https://cdn.24h.com.vn/upload/1-2020/images/2020-03-13/gettyimages-1196188188-910x607-660-1584057488-489-width660height440.jpg',
      title: 'HLV Arteta & SAO Chelsea dương tính virus Covid-19, Premier League họp khẩn',
      desc: 'HLV trưởng Mikel Arteta của Arsenal và cầu thủ của Chelsea, Odoi được xác nhận đã nhiễm Covid-19.'
    },{
      id: 6,
      img: 'https://cdn.24h.com.vn/upload/1-2020/images/2020-03-13/gettyimages-1196188188-910x607-660-1584057488-489-width660height440.jpg',
      title: 'HLV Arteta & SAO Chelsea dương tính virus Covid-19, Premier League họp khẩn',
      desc: 'HLV trưởng Mikel Arteta của Arsenal và cầu thủ của Chelsea, Odoi được xác nhận đã nhiễm Covid-19.'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
