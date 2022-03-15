import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {
    state = {                   // komponen state dari React untuk statefull component
        listArtikel: []         // variabel array yang digunakan untuk menyimpan data API
    }

    componentDidMount() {       // komponen untuk mengecek ketika component telah dimount-ing, maka panggil API
        fetch('https://jsonplaceholder.typicode.com/posts')         // alamat URL API yang ingin kita ambil datanya
            .then(Response => Response.json())      // ubah response dari data URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {        // data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })
    }

    render() {
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {/* <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/> */}
                {
                    this.state.listArtikel.map(artikel => {     // looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>     // mappingkan data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

export default BlogPost; 
