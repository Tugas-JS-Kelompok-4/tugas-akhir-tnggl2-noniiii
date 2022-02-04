class Person{
  constructor(nama, kelas, umur){
  this.nama=nama;
  this.kelas=kelas;
  this.umur=umur;
  }
}
class nons extends Person{
  constructor(nama, kelas, umur, hobi, favcolor){
  super(nama, kelas, umur);
  this.hobi=hobi;
  this.favcolor=favcolor;
}
greeting(){
  return `namaku ${this.nama} kelas ${this.kelas} umurku ${this.umur} hobiku ${this.hobi} favcolor ${this.favcolor}`
   }
}
const person2 = new nons("noni", 11, 17, "membaca", "pink");
console.log(person2.greeting());