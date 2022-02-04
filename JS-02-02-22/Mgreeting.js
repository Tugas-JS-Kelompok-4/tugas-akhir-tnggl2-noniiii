class person{
    constructor(nama, kelas, umur, makananfav){
        this.nama=nama;
        this.kelas=kelas;
        this.umur=umur;
        this.makananfav=makananfav;
    }
    greeeting(){
        return("namaku" + this.nama + "kelas" + this.kelas + "umurku" + this.umur + "makanan favorit" + this.makananfav);
    }
}
const person1=new person ("noni sonia", "XI RPL 2", "17", "buatan mama hihi");
console.log(person1.greeeting());