// ===================================================
// DATABASE ISI KONTEN BERITA LENGKAP (STATIS)
// ===================================================
const dataBerita = {
    "dikmaba": {
        title: "UPACARA PELANTIKAN SISWA DIKMABA",
        date: "Minggu, 08 Mar 2026 16:00 WIB - Oleh: Panitia",
        image: "img/Roblox_5_29_2026_8_17_09_PM.webp",
        content: `
            <p><b>Magelang</b> - Akademi Militer akan menyelenggarakan Upacara Pelantikan Siswa Pendidikan Pertama Bintara (Dikmaba) pada Minggu, 8 Maret 2026, pukul 16.00 WIB bertempat di Lapangan Upacara Akademi Militer.</p>
            <p>Kegiatan ini merupakan salah satu rangkaian penting dalam proses pendidikan yang menandai pelantikan para siswa Dikmaba setelah menjalani tahapan pembinaan dan pelatihan. Panitia mengundang para Perwira Tinggi (Pati), personel Angkatan Darat, tamu undangan, serta unsur pemerintahan untuk hadir dan memberikan dukungan dalam acara tersebut.</p>
            <p>Kehadiran seluruh personel juga diharapkan dapat meningkatkan partisipasi serta menjadi sarana evaluasi keaktifan anggota di setiap divisi. Dalam pelaksanaannya, siswa Dikmaba diwajibkan mengenakan PDU 4, personel AD menggunakan PDL dan baret sesuai divisi, Pati mengenakan PDU, sedangkan tamu dari pemerintahan diharapkan mengenakan pakaian formal. Upacara ini diharapkan dapat berlangsung dengan khidmat dan menjadi momentum penting dalam mencetak prajurit yang disiplin, profesional, dan siap mengemban tugas pengabdian kepada bangsa dan negara.</p>
        `
    },
    "sultan": {
        title: "Empat Sultan Mencoba dan Gagal, Sri Sultan Hamengkubuwono V Akhirnya Lahirkan Parlemen Pertama Keraton Ngayogyakarta Hadiningrat Roblox",
        date: "Sabtu, 06 Jun 2026 22:40 WIB - Oleh: adeyid",
        image: "img/Roblox_5_29_2026_8_17_09_PM.webp",
        content: `
            <p><b>Yogyakarta</b> - Sri Sultan Hamengkubuwono V mengukir sejarah baru di dunia Roblox dengan berhasil membentuk parlemen keraton pertama. Langkah ini diambil setelah pembentukan sistem koding di dunia virtual mengalami kendala.</p>
            <p>Pembentukan parlemen ini diharapkan mampu membawa stabilitas baru dan memberikan ruang bagi para pemain untuk ikut serta dalam menentukan arah kebijakan Keraton Ngayogyakarta Hadiningrat di platform tersebut.</p>
        `
    },
    "polri": {
        title: "Tujuh Siswa Lulus Seleksi Humas Polri, Pimpinan Beri Penghargaan Tinggi",
        date: "Jumat, 05 Jun 2026 10:15 WIB - Oleh: Admin",
        image: "https://picsum.photos/800/450?random=1",
        content: `
            <p><b>Jakarta</b> - Pimpinan Humas Polri memberikan penghargaan kepada tujuh siswa berprestasi yang berhasil melewati rangkaian seleksi ketat penerimaan anggota magang Humas Polri.</p>
            <p>Dalam sambutannya, pimpinan menekankan pentingnya peran generasi muda dalam menjaga kualitas informasi di era digital, khususnya dalam menyebarkan berita yang akurat dan edukatif bagi masyarakat.</p>
        `
    },
    "bencana": {
        title: "Bumi Terus Mengirim Sinyal Bahaya, Lintaraya News Ucapkan Duka Cita Mendalam",
        date: "Jumat, 05 Jun 2026 11:20 WIB - Oleh: Redaksi",
        image: "https://picsum.photos/800/450?random=2",
        content: `
            <p><b>Ponorogo</b> - Rentetan bencana alam yang terjadi belakangan ini menjadi alarm keras bagi kita semua mengenai kondisi bumi yang kian mengkhawatirkan.</p>
            <p>Pihak Lintaraya News menyampaikan duka cita sedalam-dalamnya untuk seluruh korban yang terdampak, sekaligus mengajak masyarakat untuk lebih waspada dan menjaga lingkungan sekitar.</p>
        `
    },
    "akpol": {
        title: "Akademi Kepolisian Semarang Buka Sesi Pelatihan SECATAM",
        date: "Kamis, 19 Jun 2025 09:00 WIB - Oleh: Humas Akpol",
        image: "https://picsum.photos/800/450?random=3",
        content: `
            <p><b>Semarang</b> - Akademi Kepolisian (Akpol) Semarang secara resmi membuka sesi pelatihan SECATAM baru untuk meningkatkan kompetensi, kedisiplinan, serta ketahanan fisik para calon anggota pembela tanah air.</p>
        `
    }
};

// ===================================================
// SISTEM INPUT DARI FORM ADMIN (LOCAL STORAGE)
// ===================================================
let newsDynamic = JSON.parse(localStorage.getItem("news")) || [];

function save() {
    localStorage.setItem("news", JSON.stringify(newsDynamic));
}

function addNews() {
    let titleInput = document.getElementById("title").value;
    let imageInput = document.getElementById("image").value;
    let contentInput = document.getElementById("content").value;

    if (!titleInput || !imageInput || !contentInput) {
        alert("Mohon isi semua data berita terlebih dahulu!");
        return;
    }

    let formatTanggal = new Date().toLocaleDateString('id-ID', { 
        weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' 
    });

    let idUnik = "news_" + Date.now();

    newsDynamic.push({
        id: idUnik,
        title: titleInput,
        date: formatTanggal + " - Oleh: Admin",
        image: imageInput,
        content: contentInput
    });

    save();
    alert("Berita berhasil disimpan ke browser kamu!");
    
    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
    document.getElementById("content").value = "";
}