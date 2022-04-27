const domainPath = 'http://localhost:3001'; // simpan url domain server API pada variabel, sehingga bisa dinamis, (diganti) 

const GetAPI = (path) => {                  // path digunakan untuk menunjuk alamat API mana yang akan di-request 
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)              // alamat url domain + path untuk mengakses full alamat API yg di-request 
            .then(response => response.json())      // response dari server harus dijadikan json  
            .then((result) => { 
                resolve(result);                    // jika success menerima response dari server maka resolve response e user  
            }, (err) => { 
                reject(err);                        // jika to di error dari server (server down, dll), 
            })                                      // Maka kirim pesan error ke user melalui reject.   
    })
    return promise; 
}

const getNewsBlog = () => GetAPI('posts?_sort=id&_order=desc'); 
const API = {       // inisialisasi function-function yang akan disediakan global API. 
    getNewsBlog
}

export default API; 