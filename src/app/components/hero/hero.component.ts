import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  heros = [
    {
      id: 1,
      name: 'batman',
      gender: 1,
      img: 'https://img.cinemablend.com/filter:scale/quill/2/9/a/d/f/6/29adf6748dfd60f03e69cadbf38194752334361c.jpg?mw=600'
    },
    {
      id: 2,
      name: 'wonder women',
      gender: 2,
      img: 'https://www.nme.com/wp-content/uploads/2017/07/wonderwoman-1280-9amembargo-1488818748850_1280w-696x442.jpg'
    },
    {
      id: 3,
      name: 'Loki',
      gender: 1,
      img: 'https://genk.mediacdn.vn/thumb_w/640/2019/12/27/disney-confirms-tom-hiddleston-in-loki-tv-series-1159835-1280x0-550x309-15774393354961727586012-crop-15774393404131684282229.jpeg'
    }
  ];
  addHero = {
    id: null,
    name: null,
    img: null,
    gender: 1
  }

  removeHero(hero){
    // thực hiện loại bỏ phần tử vừa gửi lên khỏi mảng heros
    this.heros = this.heros.filter(function(val){
      return val.id != hero.id;
    });
  }

  addNewHero(){
    //nếu id != 0 thì sẽ là cập nhật, nếu = 0 thì thêm mới
    if(this.addHero.id == null){
      // tìm ra id lớn nhất
      let maxId = 0;
      this.heros.forEach(function(val, ind){
        if(val.id >= maxId){
          maxId = val.id;
        }
      });
      
      // => id mới = id lớn nhất + 1
      this.addHero.id = ++maxId;
      // chuyển giá trị gender sang dạng số
      this.addHero.gender = Number(this.addHero.gender);

      // add thêm 1 phần tử nữa vào trong mảng heros
      this.heros.push(this.addHero);
    }

    this.addHero = {
      id: null,
      name: null,
      img: null,
      gender: 1
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
