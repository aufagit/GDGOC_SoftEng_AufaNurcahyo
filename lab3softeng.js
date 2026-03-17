// Template LAB Week 3 JS GDGOC UI
// (isi dengan nama pembuat kode )

// 1. Bagian Data Pesanan
// Ibaratkan ini adalah laci penyimpanan data di mesin kasir.
// Untuk mengubah isi dapat mengubah data variabel dan array dibawah
const namaPelanggan = "Aufa Nurcahyo";
const namaPesanan = ["Americano", "Fried Rice", "Mineral Water"];
const hargaPesanan = [25000, 35000, 10000];

// 2.Fungsi Utama
// Mesin ini menerima 3 Parameter: nama, daftar menu, dan daftar harga
function cetakStrukKasir(nama, daftarMenu, daftarHarga) {
    
    // Variabel untuk total harga
    let totalBayar = 0; 

    // Mencetak bagian atas Struk
    console.log("====================================");
    console.log("    GDG CODE & BREW    ");
    console.log("====================================");
    console.log("Pelanggan : " + nama);
    console.log("------------------------------------");

    // --- TODO 1: PROSES SCAN BARANG (Loop) ---
    // Buatlah perulangan (for loop) sebanyak jumlah barang di 'daftarMenu'.
    // [TULIS KODEMU DI BAWAH INI]
    for (let i = 0; i < daftarMenu.length; i++){
        console.log (daftarMenu[i] + " : " + daftarHarga[i]);
        totalBayar += daftarHarga[i];
    }
    
    
    
    

    // --- TODO 2: AREA KREATIVITAS (Logic & Math) ---
    // Sebelum struk dicetak, tambahkan fitur buatanmu sendiri di sini!
    // [TULIS KODEMU DI BAWAH INI]

    let totalSebelumDiskon = totalBayar;
    let totalBersih = totalBayar;
    
    if (totalBayar > 50000) {
        totalBersih = totalBayar - 10000; // mengurangi total bayar dengan nominal diskon
    }
    

    // Cetak Struk
    console.log("------------------------------------");
    
    // TODO 3: Sesuaikan variabel di bawah ini jika kamu membuat variabel baru di area kreativitas.
    // Jika tidak, biarkan saja mencetak total bayar (jangan lupa untuk membuat perhitungan matematika dengan loop untuk totalBayar)
    console.log("TOTAL : RP " + totalSebelumDiskon)
    console.log("TOTAL BERSIH : Rp " + totalBersih); 
    
    console.log("====================================");
    console.log("Terima kasih atas kunjungan Anda!");
}

// 4. Menjalankan Program
// Memasukkan data ke dalam mesin kasir
cetakStrukKasir(namaPelanggan, namaPesanan, hargaPesanan);