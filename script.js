/* CodeJourney Core Logic v23.0 - Challenge Mode (Instructions Removed, Auto-Highlight) */

const GAME = (function () {

    // --- 1. LEARNING MATERIALS (Preserved) ---
    const MATERIALS = {
        'python_general': `MODUL: PYTHON GENERAL\nPython adalah bahasa pemrograman tingkat tinggi yang serbaguna.\n\nSINTAKS DASAR:\nprint("Halo Dunia") # Mencetak output\n\nTIPE DATA:\n- int: Bilangan bulat (10)\n- float: Bilangan desimal (10.5)\n- str: Teks ("Python")\n- bool: True/False`,
        'python_loop': `MODUL: PYTHON LOOPS\n\n1. FOR LOOP:\nDigunakan untuk iterasi urutan.\nfor i in range(5):\n    print(i)\n\n2. WHILE LOOP:\nBerjalan selama kondisi True.\nwhile x > 0:\n    print(x)\n    x -= 1`,
        'python_if': `MODUL: PYTHON CONDITIONS\n\nStruktur kontrol:\nif nilai >= 90:\n    print("A")\nelif nilai >= 75:\n    print("B")\nelse:\n    print("C")`,
        'js_general': `MODUL: JAVASCRIPT CORE\nBahasa scripting untuk web interaktif.\n\nVARIABEL:\nlet x = 10; (Bisa diubah)\nconst y = 20; (Tetap)\n\nOUTPUT:\nconsole.log("Debug");\nalert("Pesan");`,
        'js_dom': `MODUL: DOM MANIPULATION\n\nSELECTING:\ndocument.getElementById("id")\ndocument.querySelector(".class")\n\nMODIFYING:\nel.innerText = "Teks Baru";\nel.style.color = "red";`,
        'html_general': `MODUL: HTML5 STRUCTURE\nStandar markup web.\n\nSTRUKTUR:\n<!DOCTYPE html>\n<html>\n<head>...</head>\n<body>...</body>\n</html>`,
        'html_form': `MODUL: HTML FORMS\n\nINPUT TYPES:\n<input type="text">\n<input type="password">\n<input type="email">\n<input type="date">\n\nATTRIBUTES:\nrequired, placeholder, value`
    };

    // --- 2. GAME DATABASE (Debug Questions Rewritten to be Questions) ---
    const QUESTIONS = {
        HTML: [
            // --- QUIZ (Preserved) ---
            { t: 'quiz', q: 'Elemen HTML manakah yang secara semantik paling tepat digunakan untuk membungkus konten navigasi utama pada sebuah website?', o: ['<nav>', '<header>', '<menu>', '<section>'], a: 0 },
            { t: 'quiz', q: 'Jika Anda ingin menampilkan teks yang dicoret (strikethrough) untuk menunjukkan bahwa informasi tersebut sudah tidak berlaku, tag apa yang paling tepat?', o: ['<s>', '<u>', '<i>', '<b>'], a: 0 },
            { t: 'quiz', q: 'Atribut apa yang wajib ditambahkan pada tag <img> agar pengguna dengan pembaca layar (screen reader) tetap dapat memahami isi gambar tersebut?', o: ['alt', 'title', 'src', 'caption'], a: 0 },
            { t: 'quiz', q: 'Dalam struktur form HTML5, manakah atribut yang mencegah pengguna mengirimkan form jika kolom input tersebut masih kosong?', o: ['required', 'validate', 'mandatory', 'important'], a: 0 },
            { t: 'quiz', q: 'Tag <meta name="viewport"> sangat penting dalam *Responsive Web Design* karena berfungsi untuk...', o: ['Mengatur skala dan lebar tampilan agar sesuai dengan layar perangkat (mobile/desktop)', 'Mengatur warna background', 'Menyimpan data user', 'Mempercepat loading website'], a: 0 },
            { t: 'quiz', q: 'Manakah elemen yang digunakan untuk mengelompokkan beberapa opsi dalam elemen <select> (dropdown) agar lebih terorganisir?', o: ['<optgroup>', '<option-group>', '<group>', '<list>'], a: 0 },
            { t: 'quiz', q: 'Apa fungsi utama dari elemen <iframe> di dalam sebuah halaman web?', o: ['Menampilkan halaman web lain atau konten eksternal di dalam halaman saat ini', 'Membuat frame garis tepi', 'Membuat layout grid', 'Menyisipkan kode Javascript'], a: 0 },
            { t: 'quiz', q: 'Tag manakah yang paling tepat digunakan untuk menampilkan potongan kode komputer agar format spasinya (monospaced) tetap terjaga?', o: ['<pre>', '<code>', '<p>', '<text>'], a: 0 },
            { t: 'quiz', q: 'Untuk menghubungkan file CSS eksternal ke dalam dokumen HTML, elemen <link> harus diletakkan di dalam bagian mana?', o: ['<head>', '<body>', '<footer>', '<script>'], a: 0 },
            { t: 'quiz', q: 'Atribut "target" pada tag <a> yang bernilai "_blank" berfungsi untuk...', o: ['Membuka tautan di tab atau jendela baru', 'Membuka tautan di tab yang sama', 'Mendownload file', 'Membuka aplikasi email'], a: 0 },
            { t: 'quiz', q: 'Dalam tabel HTML, bagaimana cara menggabungkan dua baris vertikal menjadi satu sel tunggal?', o: ['Menggunakan atribut rowspan', 'Menggunakan atribut colspan', 'Menggunakan tag <merge>', 'Menggunakan CSS flexbox'], a: 0 },
            { t: 'quiz', q: 'Elemen HTML5 <article> dirancang khusus untuk mewadahi konten yang bersifat...', o: ['Independen, mandiri, dan dapat didistribusikan ulang (seperti postingan blog)', 'Navigasi samping', 'Footer halaman', 'Hiasan visual'], a: 0 },
            { t: 'quiz', q: 'Input tipe apakah yang paling cocok digunakan untuk memasukkan angka dalam rentang tertentu, biasanya dengan tampilan slider?', o: ['<input type="range">', '<input type="number">', '<input type="slide">', '<input type="level">'], a: 0 },
            { t: 'quiz', q: 'Karakter entity &nbsp; sering digunakan dalam HTML untuk tujuan apa?', o: ['Menambahkan spasi yang tidak akan dipotong/dipish (Non-Breaking Space)', 'Menambahkan garis baru', 'Menambahkan simbol copyright', 'Menambahkan tanda kutip'], a: 0 },
            { t: 'quiz', q: 'Tag <canvas> pada HTML5 biasanya dimanfaatkan untuk keperluan apa?', o: ['Menggambar grafik atau animasi secara dinamis menggunakan JavaScript', 'Menampilkan video', 'Membuat tabel database', 'Menulis teks panjang'], a: 0 },
            { t: 'quiz', q: 'Manakah atribut global yang memberikan teks petunjuk (tooltip) tambahan saat kursor diarahkan ke elemen tersebut?', o: ['title', 'alt', 'tooltip', 'info'], a: 0 },
            { t: 'quiz', q: 'Elemen <datalist> digunakan bersama dengan elemen <input> untuk menyediakan fitur apa?', o: ['Menampilkan daftar saran otomatis (autocomplete) saat mengetik', 'Memvalidasi data', 'Menyimpan data ke server', 'Membuat dropdown statis'], a: 0 },
            { t: 'quiz', q: 'Apa perbedaan semantik antara tag <b> dan <strong>?', o: ['<strong> menyiratkan kepentingan/urgensi, sedangkan <b> hanya penanda visual (tebal)', 'Tidak ada bedanya', '<strong> untuk miring, <b> untuk tebal', '<b> sudah deprecated'], a: 0 },
            { t: 'quiz', q: 'Atribut "accept" pada input bertipe "file" berguna untuk...', o: ['Membatasi jenis file (ekstensi) yang boleh dipilih oleh pengguna', 'Mengizinkan banyak file', 'Mengupload otomatis', 'Menerima syarat dan ketentuan'], a: 0 },
            { t: 'quiz', q: 'Tag <base> yang diletakkan di <head> berfungsi untuk...', o: ['Menentukan URL dasar default untuk semua tautan relatif dalam dokumen', 'Mengatur font dasar', 'Mengatur warna background dasar', 'Menentukan database'], a: 0 },
            { t: 'quiz', q: 'Dalam aksesibilitas web (A11Y), atribut "aria-label" digunakan untuk...', o: ['Memberikan label teks pada elemen interaktif yang tidak memiliki teks visible', 'Memberikan warna', 'Mengatur navigasi', 'Menyembunyikan elemen'], a: 0 },
            { t: 'quiz', q: 'Elemen <aside> secara semantik digunakan untuk konten yang...', o: ['Berhubungan secara tidak langsung dengan konten utama (seperti sidebar)', 'Merupakan konten utama', 'Merupakan judul halaman', 'Merupakan footer'], a: 0 },
            { t: 'quiz', q: 'DOCTYPE html berfungsi untuk memberitahu browser bahwa dokumen ini menggunakan standar HTML versi berapa?', o: ['HTML5', 'HTML4', 'XHTML', 'XML'], a: 0 },
            { t: 'quiz', q: 'Tag <meter> dan <progress> memiliki perbedaan fungsi, yaitu...', o: ['<meter> untuk nilai skalar dalam rentang (disk usage), <progress> untuk status kemajuan tugas', '<meter> untuk waktu', '<progress> untuk baterai', 'Sama saja'], a: 0 },
            { t: 'quiz', q: 'Untuk memutar audio di web tanpa kontrol bawaan browser, tag apa yang digunakan?', o: ['<audio>', '<sound>', '<music>', '<mp3>'], a: 0 },

            // --- TTS (Code Puzzle) ---
            { t: 'tts', q: 'Tag HTML yang digunakan untuk mendefinisikan sel data standar di dalam sebuah baris tabel.', a: 'TD', o: ['TD', 'TR', 'TH', 'TBODY'] },
            { t: 'tts', q: 'Jenis input form yang menyembunyikan karakter yang diketik pengguna, biasanya untuk keamanan.', a: 'PASSWORD', o: ['PASSWORD', 'HIDDEN', 'TEXT', 'SECRET'] },
            { t: 'tts', q: 'Atribut pada tag <a> yang menentukan URL tujuan dari sebuah hyperlink.', a: 'HREF', o: ['HREF', 'SRC', 'LINK', 'DEST'] },
            { t: 'tts', q: 'Elemen kontainer generik (block-level) yang sering digunakan untuk mengelompokkan elemen dan styling.', a: 'DIV', o: ['DIV', 'SPAN', 'SECTION', 'BOX'] },
            { t: 'tts', q: 'Elemen kontainer generik (inline-level) untuk membungkus teks kecil atau frase dalam paragraf.', a: 'SPAN', o: ['SPAN', 'DIV', 'TEXT', 'INLINE'] },
            { t: 'tts', q: 'Atribut global yang harus bersifat unik di seluruh dokumen untuk mengidentifikasi satu elemen spesifik.', a: 'ID', o: ['ID', 'CLASS', 'NAME', 'KEY'] },
            { t: 'tts', q: 'Tag list yang digunakan ketika urutan aitem tidak penting, biasanya ditandai dengan bullet points.', a: 'UL', o: ['UL', 'OL', 'DL', 'LIST'] },
            { t: 'tts', q: 'Tag HTML yang digunakan untuk menyisipkan gambar ke dalam halaman web.', a: 'IMG', o: ['IMG', 'PIC', 'IMAGE', 'SRC'] },
            { t: 'tts', q: 'Atribut form yang menentukan metode HTTP (GET atau POST) yang digunakan saat pengiriman data.', a: 'METHOD', o: ['METHOD', 'ACTION', 'TYPE', 'SEND'] },
            { t: 'tts', q: 'Elemen root atau akar dari seluruh dokumen HTML yang membungkus semua konten lainnya.', a: 'HTML', o: ['HTML', 'ROOT', 'DOC', 'BODY'] },

            // --- DEBUG (Rewritten as CHALLENGE QUESTIONS) ---
            { t: 'debug', q: 'Kode tautan di bawah ini tidak berfungsi saat diklik. Apa yang salah dengan penulisan atributnya?', code: '<a src="page.html">Link</a>', a: '<a href="page.html">Link</a>' },
            { t: 'debug', q: 'Form berikut gagal mengirimkan data dengan aman. Perbaiki atribut metode pengirimannya.', code: '<form method="sending">', a: '<form method="POST">' },
            { t: 'debug', q: 'Struktur list berikut menggunakan tag yang salah untuk daftar berurutan (angka). Perbaiki strukturnya.', code: '<ul><li>1. Satu</li></ul>', a: '<ol><li>Satu</li></ol>' },
            { t: 'debug', q: 'Gambar tidak tampil di browser. Identifikasi kesalahan pada nama atribut sumber gambar.', code: '<img source="kucing.jpg">', a: '<img src="kucing.jpg">' },
            { t: 'debug', q: 'Tombol ini tidak memicu pengiriman form saat diklik. Apa atribut tipe yang hilang?', code: '<button>Kirim</button>', a: '<button type="submit">Kirim</button>' },
            { t: 'debug', q: 'Tipe input tanggal berikut menggunakan nilai yang usang/tidak valid. Ganti dengan standar HTML5 yang benar.', code: '<input type="datetime">', a: '<input type="date">' },
            { t: 'debug', q: 'Atribut status checkbox ini ditulis dengan format lama yang tidak efisien. Sederhanakan penulisannya.', code: '<input type="checkbox" checked="true">', a: '<input type="checkbox" checked>' },
            { t: 'debug', q: 'Struktur nesting HTML ini tidak valid secara semantik (blok di dalam inline). Perbaiki hierarkinya.', code: '<p><div>Konten</div></p>', a: '<div><div>Konten</div></div>' },
            { t: 'debug', q: 'Tag baris baru (breakline) ini menggunakan sintaks XHTML lama. Perbarui ke standar HTML5.', code: '<br />', a: '<br>' },
            { t: 'debug', q: 'Atribut dimensi gambar ini mengandung unit yang tidak perlu dalam HTML. Perbaiki nilainya.', code: '<img src="a.jpg" width="100px">', a: '<img src="a.jpg" width="100">' }
        ],
        CSS: [
            // --- QUIZ (Preserved) ---
            { t: 'quiz', q: 'Properti CSS manakah yang digunakan untuk menciptakan ruang kosong di bagian *dalam* sebuah elemen, antara konten dan batas (border) elemen tersebut?', o: ['padding', 'margin', 'border-spacing', 'gutter'], a: 0 },
            { t: 'quiz', q: 'Jika Anda ingin membuat elemen latar belakang (background) tetap diam saat halaman digulir (scroll), nilai apa yang harus diberikan pada properti background-attachment?', o: ['fixed', 'scroll', 'local', 'static'], a: 0 },
            { t: 'quiz', q: 'Bagaimana cara menyeleksi elemen <p> yang merupakan anak langsung (direct child) dari elemen <div>?', o: ['div > p', 'div p', 'div + p', 'div ~ p'], a: 0 },
            { t: 'quiz', q: 'Properti "z-index" hanya akan berfungsi pada elemen yang memiliki properti "position" dengan nilai selain...', o: ['static', 'relative', 'absolute', 'fixed'], a: 0 },
            { t: 'quiz', q: 'Dalam model Flexbox, properti manakah yang memungkinkan item-item flex untuk berpindah ke baris baru jika ruang tidak cukup?', o: ['flex-wrap: wrap', 'flex-direction: column', 'flex-flow: new-line', 'white-space: wrap'], a: 0 },
            { t: 'quiz', q: 'Selector pseudo-class :nth-child(2n) akan memilih elemen-elemen yang berada di urutan...', o: ['Genap (2, 4, 6...)', 'Ganjil (1, 3, 5...)', 'Setiap kelipatan 3', 'Dua elemen pertama'], a: 0 },
            { t: 'quiz', q: 'Unit "vw" dalam CSS merepresentasikan ukuran relatif terhadap...', o: ['Lebar viewport (Viewport Width)', 'Tinggi viewport', 'Lebar elemen induk', 'Ukuran font default'], a: 0 },
            { t: 'quiz', q: 'Apa fungsi dari properti "box-sizing: border-box"?', o: ['Menghitung lebar elemen termasuk padding dan border (agar ukuran fix)', 'Menghitung lebar hanya konten saja', 'Menghilangkan border', 'Membuat border otomatis'], a: 0 },
            { t: 'quiz', q: 'Properti CSS Grid "grid-template-columns: repeat(3, 1fr)" akan menghasilkan tata letak seperti apa?', o: ['Tiga kolom dengan lebar yang sama rata', 'Tiga kolom dengan lebar otomatis', 'Satu kolom dibagi tiga', 'Tiga baris'], a: 0 },
            { t: 'quiz', q: 'Untuk menyembunyikan elemen secara visual tetapi tetap terbaca oleh screen reader, teknik mana yang sering digunakan (selain display:none)?', o: ['visibility: hidden', 'opacity: 0', 'width: 0; height: 0;', 'color: transparent'], a: 0 },
            { t: 'quiz', q: 'Selector manakah yang memiliki tingkat spesifisitas (specificity) paling tinggi?', o: ['#id', '.class', 'tag', '* (universal)'], a: 0 },
            { t: 'quiz', q: 'Properti "line-height" paling sering digunakan untuk mengatur...', o: ['Jarak vertikal antar baris teks', 'Ketebalan garis', 'Tinggi elemen', 'Lebar huruf'], a: 0 },
            { t: 'quiz', q: 'Jika Anda ingin mengubah kursor mouse menjadi ikon jari telunjuk (klik) saat diarahkan ke elemen, gunakan properti...', o: ['cursor: pointer', 'cursor: hand', 'cursor: click', 'cursor: finger'], a: 0 },
            { t: 'quiz', q: 'Media query "@media (max-width: 600px)" akan menerapkan gaya (style) hanya jika kondisi apa terpenuhi?', o: ['Lebar layar perangkat kurang dari atau sama dengan 600px', 'Lebar layar lebih dari 600px', 'Tinggi layar 600px', 'Resolusi layar 600dpi'], a: 0 },
            { t: 'quiz', q: 'Fungsi transformasi "rotate(45deg)" akan memutar elemen sebesar 45 derajat searah jarum jam. Jika ingin berlawanan arah jarum jam, gunakan nilai...', o: ['-45deg', '315deg', 'counter-45deg', 'left-45deg'], a: 0 },
            { t: 'quiz', q: 'Apa efek visual dari properti "border-radius: 50%" pada elemen kotak persegi?', o: ['Mengubah bentuknya menjadi lingkaran sempurna', 'Membuat sudut sedikit tumpul', 'Membuat bentuk oval', 'Menghilangkan border'], a: 0 },
            { t: 'quiz', q: 'Properti "float" (yang kini jarang digunakan untuk layout utama) awalnya dirancang untuk...', o: ['Mengalirkan teks di sekitar gambar (wrapping text)', 'Membuat navigasi', 'Membuat sistem grid', 'Mengatur transparansi'], a: 0 },
            { t: 'quiz', q: 'Warna dengan format RGBA(0, 0, 0, 0.5) akan menghasilkan warna apa?', o: ['Hitam dengan transparansi 50%', 'Putih dengan transparansi 50%', 'Merah pudar', 'Hijau gelap'], a: 0 },
            { t: 'quiz', q: 'Properti "justify-content: center" pada container Flexbox berfungsi untuk...', o: ['Menengahkan item secara horizontal (pada sumbu utama)', 'Menengahkan item secara vertikal', 'Merenatakan item ke kanan', 'Merenatakan item ke kiri'], a: 0 },
            { t: 'quiz', q: 'Shorthand property "margin: 10px 20px" berarti...', o: ['Atas-Bawah 10px, Kiri-Kanan 20px', 'Atas-Kiri 10px, Bawah-Kanan 20px', 'Semua sisi 10px', 'Kiri-Kanan 10px, Atas-Bawah 20px'], a: 0 },
            { t: 'quiz', q: 'Dalam CSS Grid, properti "gap" (atau grid-gap) digunakan untuk...', o: ['Mengatur jarak celah antar baris dan kolom', 'Mengatur margin luar', 'Mengatur padding sel', 'Mengatur border grid'], a: 0 },
            { t: 'quiz', q: 'Selektor "a:visited" digunakan untuk menargetkan tautan yang...', o: ['Sudah pernah dikunjungi oleh pengguna', 'Sedang diklik', 'Sedang di-hover', 'Belum dikunjungi'], a: 0 },
            { t: 'quiz', q: 'Nilai "sticky" pada properti position membuat elemen berperilaku seperti gabungan antara...', o: ['Relative dan Fixed', 'Absolute dan Static', 'Fixed dan Absolute', 'Static dan Relative'], a: 0 },

            // --- TTS (Code Puzzle) ---
            { t: 'tts', q: 'Nilai properti display yang membuat elemen berperilaku seperti elemen baris tetapi bisa diatur lebar dan tingginya.', a: 'INLINEBLOCK', o: ['INLINEBLOCK', 'BLOCK', 'FLEX', 'GRID'] },
            { t: 'tts', q: 'Bagian dari Box Model yang berada paling luar, menciptakan jarak antara elemen ini dengan elemen di sekitarnya.', a: 'MARGIN', o: ['MARGIN', 'BORDER', 'PADDING', 'CONTENT'] },
            { t: 'tts', q: 'Properti untuk mengatur seberapa tebal (bold) karakter teks ditampilkan.', a: 'FONTWEIGHT', o: ['FONTWEIGHT', 'FONTSIZE', 'FONTSTYLE', 'FONTFAMILY'] },
            { t: 'tts', q: 'Properti yang digunakan untuk mengubah visibilitas elemen tanpa menghapus ruang yang ditempatinya di layout.', a: 'VISIBILITY', o: ['VISIBILITY', 'DISPLAY', 'OPACITY', 'HIDDEN'] },
            { t: 'tts', q: 'Unit pengukuran relatif yang didasarkan pada ukuran font elemen root (biasanya <html>).', a: 'REM', o: ['REM', 'EM', 'PX', 'VH'] },
            { t: 'tts', q: 'Properti background yang menentukan gambar latar belakang elemen.', a: 'IMAGE', o: ['IMAGE', 'COLOR', 'POSITION', 'SIZE'] },
            { t: 'tts', q: 'Kata kunci "important" dalam CSS yang digunakan untuk memaksa suatu aturan menimpa aturan lainnya.', a: 'IMPORTANT', o: ['IMPORTANT', 'PRIORITY', 'FORCE', 'ROOT'] },
            { t: 'tts', q: 'Sumbu (axis) utama default (horizontal) pada Flexbox container.', a: 'ROW', o: ['ROW', 'COLUMN', 'MAIN', 'CROSS'] },
            { t: 'tts', q: 'Nama properti untuk memberi garis bawah, garis atas, atau mencoret teks.', a: 'TEXTDECORATION', o: ['TEXTDECORATION', 'FONTSTYLE', 'TEXTTRANSFORM', 'LINEHEIGHT'] },

            // --- DEBUG (Rewritten as CHALLENGE QUESTIONS) ---
            { t: 'debug', q: 'Kode di bawah ini gagal mengubah warna teks karena propertinya tidak dikenal. Temukan kesalahannya.', code: 'font-color: red;', a: 'color: red;' },
            { t: 'debug', q: 'Sintaks padding ini mengandung karakter yang tidak valid dalam CSS standar. Koreksi penulisannya.', code: 'padding: 10px, 20px;', a: 'padding: 10px 20px;' },
            { t: 'debug', q: 'Selector ini mencoba menargetkan Class, tetapi menggunakan simbol untuk ID. Perbaiki selector tersebut.', code: '#myClass { }', a: '.myClass { }' },
            { t: 'debug', q: 'Browser mengabaikan ukuran font ini karena satuan unitnya tidak disertakan. Apa yang kurang?', code: 'font-size: 12;', a: 'font-size: 12px;' },
            { t: 'debug', q: 'Nilai properti justify-content ini salah dan tidak akan menengahkan konten. Apa nilai yang benar?', code: 'justify-content: middle;', a: 'justify-content: center;' },
            { t: 'debug', q: 'Kode ini tidak bekerja karena ada kesalahan pengetikan (typo) pada nama properti background. Perbaiki ejaannya.', code: 'backround-color: blue;', a: 'background-color: blue;' },
            { t: 'debug', q: 'Aturan !important ini tidak valid karena peletakan tanda serunya terbalik. Perbaiki sintaksnya.', code: 'display: none important!;', a: 'display: none !important;' },
            { t: 'debug', q: 'Gaya komentar C++ (double slash) tidak didukung dalam CSS standar, menyebabkan error. Ubah ke format komentar CSS.', code: '// Ini komentar', a: '/* Ini komentar */' }
        ],
        JS: [
            // --- QUIZ (Preserved) ---
            { t: 'quiz', q: 'Dalam JavaScript modern (ES6+), kata kunci manakah yang digunakan untuk mendeklarasikan variabel yang nilainya *dimaksudkan* untuk tetap dan tidak boleh diubah (reassigned) setelah inisialisasi awal?', o: ['const', 'let', 'var', 'static'], a: 0 },
            { t: 'quiz', q: 'Metode Array manakah yang berfungsi untuk menambahkan satu atau lebih elemen baru ke *akhir* sebuah array dan mengembalikan panjang array yang baru?', o: ['push()', 'pop()', 'shift()', 'unshift()'], a: 0 },
            { t: 'quiz', q: 'Apa yang akan dikembalikan oleh ekspresi logika `(true && false)` dalam JavaScript?', o: ['false', 'true', 'null', 'undefined'], a: 0 },
            { t: 'quiz', q: 'Jika Anda ingin mengubah format objek JavaScript menjadi string JSON (untuk dikirim ke server), metode apa yang digunakan?', o: ['JSON.stringify()', 'JSON.parse()', 'JSON.toString()', 'JSON.convert()'], a: 0 },
            { t: 'quiz', q: 'Manakah operator perbandingan ketat (strict equality) yang membandingkan nilai *dan* tipe data sekaligus?', o: ['===', '==', '=', '!=='], a: 0 },
            { t: 'quiz', q: 'Fungsi `setTimeout(() => {}, 1000)` akan menjalankan kode di dalamnya setelah menunggu selama...', o: ['1000 milidetik (1 detik)', '1000 detik', '1 menit', 'Segera'], a: 0 },
            { t: 'quiz', q: 'Metode `.forEach()` pada array digunakan untuk...', o: ['Melakukan iterasi (loop) pada setiap elemen array tanpa mengembalikan array baru', 'Membuat array baru', 'Menyaring array', 'Menghentikan loop'], a: 0 },
            { t: 'quiz', q: 'Kata kunci "this" dalam JavaScript merujuk pada...', o: ['Objek konteks di mana kode tersebut sedang dieksekusi (tergantung pemanggilan)', 'Fungsi itu sendiri', 'Variabel global', 'Selalu window'], a: 0 },
            { t: 'quiz', q: 'Apa kegunaan dari fitur "Destructuring Assignment" pada objek atau array?', o: ['Mengekstrak nilai dari array/objek ke dalam variabel terpisah dengan sintaks ringkas', 'Menghapus struktur data', 'Menggabungkan array', 'Membuat konstruktor'], a: 0 },
            { t: 'quiz', q: 'Manakah event yang dipicu ketika pengguna selesai mengubah nilai pada elemen <input> dan kemudian memindahkan fokus (klik di luar)?', o: ['change', 'input', 'keydown', 'click'], a: 0 },
            { t: 'quiz', q: 'Metode `Math.floor(4.9)` akan menghasilkan nilai...', o: ['4 (pembulatan ke bawah)', '5 (pembulatan ke atas)', '4.9', '0'], a: 0 },
            { t: 'quiz', q: 'Apa perbedaan utama antara `null` dan `undefined`?', o: ['`null` adalah nilai kosong yang disengaja, `undefined` berarti variabel belum diberi nilai', 'Sama saja', '`null` adalah error', '`undefined` adalah objek'], a: 0 },
            { t: 'quiz', q: 'Untuk mencegah perilaku default dari sebuah event (misalnya mencegah form reload saat suubmit), kita memanggil...', o: ['event.preventDefault()', 'event.stopPropagation()', 'event.stopImmediatePropagation()', 'return false'], a: 0 },
            { t: 'quiz', q: 'Fitur "Template Literals" (menggunakan backticks) memungkinkan kita melakukan...', o: ['Interpolasi variabel string multi-baris dengan mudah', 'Membuat template HTML', 'Membuat regex', 'Membuat fungsi'], a: 0 },
            { t: 'quiz', q: 'Apa output dari kode `console.log(2 + "2")` dalam JavaScript?', o: ['"22" (String concatenation)', '4 (Integer)', 'NaN', 'Error'], a: 0 },
            { t: 'quiz', q: 'Metode `.includes()` pada array berfungsi untuk...', o: ['Mengecek apakah array mengandung elemen tertentu (return true/false)', 'Menambahkan elemen', 'Menghapus elemen', 'Mencari index'], a: 0 },
            { t: 'quiz', q: 'Operator Ternary adalah bentuk singkat dari if-else. Sintaks yang benar adalah...', o: ['kondisi ? benar : salah', 'kondisi : benar ? salah', 'kondisi ?? benar : salah', 'if kondisi ? benar : salah'], a: 0 },
            { t: 'quiz', q: 'Di dalam blok `try...catch`, blok `finally` akan dieksekusi kapan?', o: ['Selalu dieksekusi setelah try/catch selesai, terlepas ada error atau tidak', 'Hanya jika ada error', 'Hanya jika sukses', 'Sebelum try'], a: 0 },
            { t: 'quiz', q: 'Apa fungsi dari `document.querySelector(".btn")`?', o: ['Memilih elemen pertama dalam dokumen yang memiliki class "btn"', 'Memilih semua elemen class btn', 'Memilih elemen id btn', 'Membuat elemen btn'], a: 0 },
            { t: 'quiz', q: 'Keyword `typeof` digunakan untuk...', o: ['Mengecek tipe data dari sebuah variabel atau nilai', 'Mengubah tipe data', 'Membuat tipe baru', 'Membandingkan tipe'], a: 0 },
            { t: 'quiz', q: 'Konsep "Hoisting" dalam JavaScript berarti bahwa deklarasi variabel (var) dan fungsi akan...', o: ['Diangkat ke bagian atas scope mereka sebelum kode dieksekusi', 'Dihapus', 'Dijalankan terakhir', 'Menjadi global'], a: 0 },
            { t: 'quiz', q: 'Metode `.reduce()` pada array sangat berguna untuk...', o: ['Mengakumulasi nilai array menjadi satu nilai tunggal (misal: total sum)', 'Memotong array', 'Menambah array', 'Loop biasa'], a: 0 },
            { t: 'quiz', q: 'Perintah `debugger;` dalam kode berfungsi untuk...', o: ['Menghentikan eksekusi kode jika Developer Tools terbuka (breakpoint)', 'Menampilkan pesan error', 'Menghapus bug otomatis', 'Restart browser'], a: 0 },

            // --- TTS (Puzzle) ---
            { t: 'tts', q: 'Tipe data primitif yang hanya memiliki dua kemungkinan nilai: true atau false.', a: 'BOOLEAN', o: ['BOOLEAN', 'STRING', 'NUMBER', 'SYMBOL'] },
            { t: 'tts', q: 'Metode array yang menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.', a: 'POP', o: ['POP', 'PUSH', 'SHIFT', 'SPLICE'] },
            { t: 'tts', q: 'Objek bawaan JavaScript yang menyediakan properti dan metode matematika standar (seperti PI, max, random).', a: 'MATH', o: ['MATH', 'CALC', 'NUMBER', 'ARITH'] },
            { t: 'tts', q: 'Fungsi yang menunda eksekusi kode, atau menunggu janji (Promise) selesai dalam fungsi async.', a: 'AWAIT', o: ['AWAIT', 'THEN', 'SYNC', 'NEXT'] },
            { t: 'tts', q: 'Kata kunci untuk mendeklarasikan variabel yang cakupannya terbatas pada blok (block-scoped).', a: 'LET', o: ['LET', 'VAR', 'GLOBAL', 'CONST'] },
            { t: 'tts', q: 'Struktur data berupa pasangan Key-Value yang dikurung dengan kurung kurawal {}.', a: 'OBJECT', o: ['OBJECT', 'ARRAY', 'LIST', 'JSON'] },
            { t: 'tts', q: 'Nilai khusus yang dikembalikan jika operasi matematika gagal menghasilkan angka yang valid.', a: 'NAN', o: ['NAN', 'NULL', 'UNDEFINED', 'ZERO'] },
            { t: 'tts', q: 'Metode yang digunakan untuk memecah string menjadi array berdasarkan pemisah tertentu.', a: 'SPLIT', o: ['SPLIT', 'JOIN', 'SLICE', 'CUT'] },
            { t: 'tts', q: 'Looping yang mengeksekusi blok kode setidaknya satu kali sebelum mengecek kondisi.', a: 'DOWHILE', o: ['DOWHILE', 'FOR', 'WHILE', 'MAP'] },

            // --- DEBUG (Rewritten as CHALLENGE QUESTIONS) ---
            { t: 'debug', q: 'Fungsi Arrow ini didefinisikan dengan sintaks yang tidak valid (simbol panah salah posisi). Temukan dan perbaiki deklarasinya.', code: 'function sum(a, b) => a + b', a: 'const sum = (a, b) => a + b' }, // Assuming arrow conversion
            { t: 'debug', q: 'Variabel "x" dideklarasikan ulang (re-declare) menggunakan "let" di blok yang sama, yang menyebabkan error. Apa yang harus dihapus?', code: 'let x = 1; let x = 2;', a: 'let x = 1; x = 2;' },
            { t: 'debug', q: 'Loop "for" ini gagal berjalan karena pemisah kondisinya salah menggunakan koma. Perbaiki sintaks loop.', code: 'for (let i=0, i<5, i++)', a: 'for (let i=0; i<5; i++)' },
            { t: 'debug', q: 'Pemanggilan metode "toUpperCase" disini tidak melakukan apapun karena kurang tanda kurung eksekusi. Lengkapi kodenya.', code: 'let s = "text".toUpperCase', a: 'let s = "text".toUpperCase()' },
            { t: 'debug', q: 'Definisi Objek ini menyebabkan SyntaxError karena menggunakan tanda sama dengan, bukan titik dua. Perbaiki sintaks literal objek.', code: 'let person = { name = "Budi" }', a: 'let person = { name: "Budi" }' },
            { t: 'debug', q: 'Kondisi if ini selalu bernilai true (bug logic) karena menggunakan operator assignment. Ubah menjadi operator perbandingan.', code: 'if (x = 5)', a: 'if (x == 5)' },
            { t: 'debug', q: 'Event listener gagal berjalan karena nama event salah eja (typo). Koreksi nama event.', code: 'btn.onKlick = run;', a: 'btn.onclick = run;' },
            { t: 'debug', q: 'Program crash karena fungsi "print" tidak ada di lingkungan browser. Ganti dengan fungsi logging standar.', code: 'print("Hello")', a: 'console.log("Hello")' }
        ],
        Python: [
            // --- QUIZ (Preserved) ---
            { t: 'quiz', q: 'Bagaimana sintaks yang benar untuk mengambil subset (slicing) dari sebuah list `data`, mulai dari indeks pertama hingga sebelum indeks ketiga?', o: ['data[1:3]', 'data[1:2]', 'data[0:3]', 'slice(data, 1, 3)'], a: 0 },
            { t: 'quiz', q: 'Manakah dari berikut ini yang merupakan cara yang benar untuk membuat Dictionary kosong di Python?', o: ['my_dict = {}', 'my_dict = []', 'my_dict = ()', 'my_dict = empty()'], a: 0 },
            { t: 'quiz', q: 'Fungsi `len()` di Python digunakan untuk tujuan apa?', o: ['Menghitung jumlah item (panjang) dari objek seperti string, list, atau dict', 'Menghitung memori', 'Menghitung waktu', 'Mengukur lebar layar'], a: 0 },
            { t: 'quiz', q: 'Apa perbedaan utama antara List `[]` dan Tuple `()`?', o: ['List bersifat Mutable (bisa diubah), sedangkan Tuple bersifat Immutable (tidak bisa diubah)', 'Tuple bisa diubah', 'List lebih cepat', 'Tidak ada beda'], a: 0 },
            { t: 'quiz', q: 'Metode string manakah yang digunakan untuk menghapus spasi kosong (whitespace) di awal dan akhir string?', o: ['.strip()', '.trim()', '.clean()', '.remove()'], a: 0 },
            { t: 'quiz', q: 'Operator manakah yang digunakan untuk pemangkatan (eksponen) di Python?', o: ['**', '^', '^^', 'pow'], a: 0 },
            { t: 'quiz', q: 'Dalam struktur kontrol `if __name__ == "__main__":`, blok kode di dalamnya hanya akan dijalankan jika...', o: ['Script dijalankan langsung sebagai program utama, bukan diimpor sebagai modul', 'Script diimpor', 'Selalu dijalankan', 'Terjadi error'], a: 0 },
            { t: 'quiz', q: 'Apa kegunaan dari kata kunci `break` di dalam sebuah loop?', o: ['Menghentikan paksa seluruh proses looping dan keluar dari blok loop', 'Melewati iterasi saat ini saja', 'Mengulang loop', 'Keluar program'], a: 0 },
            { t: 'quiz', q: 'Bagaimana cara menambahkan item baru "X" ke posisi paling akhir dari sebuah list `L`?', o: ['L.append("X")', 'L.add("X")', 'L.push("X")', 'L.insert("X")'], a: 0 },
            { t: 'quiz', q: 'Modul bawaan Python mana yang menyediakan fungsi untuk berinteraksi dengan sistem operasi (seperti path file, environment var)?', o: ['os', 'sys', 'system', 'path'], a: 0 },
            { t: 'quiz', q: 'Konstruksi `try...except` digunakan untuk menangani...', o: ['Error yang terjadi saat runtime (Exception Handling)', 'Syntax error', 'Looping', 'Logika boolean'], a: 0 },
            { t: 'quiz', q: 'Tipe data `set` di Python memiliki karakteristik khusus yaitu...', o: ['Hanya menyimpan nilai unik (tidak ada duplikat) dan tidak berurutan', 'Berurutan', 'Bisa duplikat', 'Key-Value pair'], a: 0 },
            { t: 'quiz', q: 'Fungsi `input()` di Python 3 akan selalu mengembalikan data dalam tipe...', o: ['String (str)', 'Integer (int)', 'Float', 'List'], a: 0 },
            { t: 'quiz', q: 'Apa output dari operasi `10 // 3` di Python?', o: ['3 (Pembagian bulat/floor)', '3.333', '1', '10'], a: 0 },
            { t: 'quiz', q: 'Manakah cara yang benar untuk mendefinisikan fungsi bernama "my_func"?', o: ['def my_func():', 'function my_func():', 'func my_func():', 'create my_func():'], a: 0 },
            { t: 'quiz', q: 'Metode `.join()` pada string berguna untuk...', o: ['Menggabungkan elemen-elemen iterable (list) menjadi satu string dengan pemisah tertentu', 'Memisahkan string', 'Menambah list', 'Mengurutkan string'], a: 0 },
            { t: 'quiz', q: 'Apa arti dari error "IndentationError"?', o: ['Terdapat kesalahan pada spasi/tab indentasi blok kode', 'Salah nama variabel', 'Salah tipe data', 'Salah import'], a: 0 },
            { t: 'quiz', q: 'Keyword `continue` dalam loop berfungsi untuk...', o: ['Melewati sisa kode pada iterasi saat ini dan langsung lanjut ke iterasi berikutnya', 'Menghentikan loop', 'Keluar fungsi', 'Restart program'], a: 0 },
            { t: 'quiz', q: 'List Comprehension `[x for x in range(5)]` akan menghasilkan...', o: ['[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4, 5]', '(0, 1, 2, 3, 4)'], a: 0 },
            { t: 'quiz', q: 'Untuk membaca isi file teks, mode apa yang digunakan pada fungsi `open()`?', o: ['"r" (read)', '"w" (write)', '"a" (append)', '"x" (create)'], a: 0 },

            // --- TTS (Puzzle) ---
            { t: 'tts', q: 'Fungsi bawaan yang digunakan untuk mengetahui panjang atau jumlah item dalam suatu objek.', a: 'LEN', o: ['LEN', 'SIZE', 'COUNT', 'LONG'] },
            { t: 'tts', q: 'Tipe data koleksi yang bersifat immutable (tidak bisa diubah elemennya setelah dibuat).', a: 'TUPLE', o: ['TUPLE', 'LIST', 'SET', 'DICT'] },
            { t: 'tts', q: 'Kata kunci untuk mendefinisikan sebuah kelas (class) dalam Pemrograman Berorientasi Objek.', a: 'CLASS', o: ['CLASS', 'DEF', 'OBJECT', 'STRUCT'] },
            { t: 'tts', q: 'Metode string yang memisahkan string menjadi list substring berdasarkan delimiter tertentu.', a: 'SPLIT', o: ['SPLIT', 'STRIP', 'CUT', 'DIVIDE'] },
            { t: 'tts', q: 'Nilai khusus di Python yang merepresentasikan ketiadaan nilai (null).', a: 'NONE', o: ['NONE', 'NULL', 'NIL', 'VOID'] },
            { t: 'tts', q: 'Kata kunci yang digunakan untuk mengimpor modul atau library eksternal ke dalam script.', a: 'IMPORT', o: ['IMPORT', 'INCLUDE', 'USING', 'FROM'] },
            { t: 'tts', q: 'Fungsi untuk menghasilkan urutan angka, sering digunakan dalam for-loop.', a: 'RANGE', o: ['RANGE', 'SEQ', 'LIST', 'NUMS'] },

            // --- DEBUG (Rewritten as CHALLENGE QUESTIONS) ---
            { t: 'debug', q: 'Kode ini akan error karena mencetak dua variabel tanpa pemisah yang benar. Identifikasi bagian yang salah.', code: 'print("Nilai: " x)', a: 'print("Nilai: ", x)' },
            { t: 'debug', q: 'Fungsi ini gagal berjalan karena blok kodenya sejajar (tidak menjorok). Perbaiki masalah indentasi.', code: 'def hello():\nprint("Hi")', a: 'def hello():\n    print("Hi")' },
            { t: 'debug', q: 'Terjadi TypeError karena mencoba menggabungkan string dan integer. Apa yang harus dilakukan pada angka tersebut?', code: 'msg = "Age: " + 20', a: 'msg = "Age: " + str(20)' },
            { t: 'debug', q: 'SyntaxError: Blok kondisi if ini kehilangan tanda baca penting di akhir baris. Tanda apa itu?', code: 'if x > 5', a: 'if x > 5:' },
            { t: 'debug', q: 'Komentar ini menggunakan sintaks yang salah untuk Python da menyebabkan error. Perbaiki simbol komentarnya.', code: '// Ini komentar', a: '# Ini komentar' },
            { t: 'debug', q: 'Kode ini error karena mencoba mengubah Tuple (immutable). Ganti struktur datanya agar bisa dimodifikasi.', code: 't = (1, 2)\nt.append(3)', a: 't = [1, 2]\nt.append(3)' },
            { t: 'debug', q: 'Nilai Boolean ini tidak dikenali karena masalah kapitalisasi huruf. Perbaiki ejaan keywordnya.', code: 'flag = true', a: 'flag = True' }
        ]
    };

    // --- 3. STATE MANAGER ---
    let state = {
        lang: 'HTML', mode: 'quiz', diff: 'time_attack',
        score: 0,
        answeredCount: 0,
        timeLeft: 60,
        timerId: null,
        pool: [],
        currentQuestion: null,
        user: JSON.parse(localStorage.getItem('cj_user')) || null
    };

    // --- 4. UTILITY FUNCTIONS ---
    const get = (id) => document.getElementById(id);
    const setTxt = (id, txt) => { const el = get(id); if (el) el.innerText = txt; };

    function showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
            s.style.display = 'none';
        });
        const target = get(screenId);
        if (target) {
            target.style.display = 'block';
            setTimeout(() => target.classList.add('active'), 10);
        }
    }
    const updateMascot = (msg) => setTxt('mascot-msg', msg);

    // --- 5. INITIALIZATION & LOGIN ---
    (function init() {
        if (state.user) {
            goToHome();
        } else {
            showScreen('screen-login');
        }
    })();

    function registerUser() {
        const name = get('user-name').value.trim();
        const dob = get('user-dob').value;
        const prodi = get('user-prodi').value.trim();
        const sem = get('user-sem').value;

        if (!name || !dob || !prodi || !sem) {
            alert("⚠️ Lengkapi data identitas!");
            return;
        }

        const newUser = { name, dob, prodi, sem };
        localStorage.setItem('cj_user', JSON.stringify(newUser));
        state.user = newUser;
        goToHome();
    }

    function goToHome() {
        const h = new Date().getHours();
        let greeting = h < 11 ? "Selamat Pagi" : h < 15 ? "Selamat Siang" : h < 18 ? "Selamat Sore" : "Selamat Malam";
        setTxt('welcome-title', `${greeting}, ${state.user.name}!`);
        updateMascot(`Siap untuk tantangan kode hari ini, ${state.user.name}?`);
        showScreen('screen-home');
        localStorage.setItem('cj_player', state.user.name);
    }

    // --- 6. LIBRARY & SEARCH ENGINE ---
    function searchMaterial() {
        const query = get('search-input').value.toLowerCase().trim();
        const resBox = get('search-result');
        if (!query) { alert("Masukkan kata kunci!"); return; }

        let matchedKey = null;
        if (query.includes('py')) matchedKey = query.includes('loop') ? 'python_loop' : query.includes('if') ? 'python_if' : 'python_general';
        else if (query.includes('js') || query.includes('script')) matchedKey = query.includes('dom') ? 'js_dom' : 'js_general';
        else if (query.includes('html')) matchedKey = query.includes('form') ? 'html_form' : 'html_general';

        if (window.jspdf && matchedKey) {
            updateMascot("Materi ditemukan! Membuat PDF...");
            generatePDF(matchedKey, query.toUpperCase());
            resBox.style.display = 'block';
            resBox.innerHTML = `<i class="fa-solid fa-check"></i> E-Book topik <b>${query}</b> berhasil diunduh!`;
            setTimeout(() => resBox.style.display = 'none', 4000);
        } else {
            downloadFile(`Info_${query}.txt`, `Materi tidak offline. Hubungkan ke neural net.`);
        }
    }

    function quickSearch(term) { get('search-input').value = term; searchMaterial(); }

    function generatePDF(key, title) {
        const { jsPDF } = window.jspdf;
        if (!jsPDF) return alert("Pustaka PDF belum dimuat.");
        const doc = new jsPDF();
        const content = MATERIALS[key] || "Konten Error";
        doc.setFont("helvetica", "bold"); doc.setFontSize(18); doc.setTextColor(0, 100, 0);
        doc.text("CODE JOURNEY MODULE", 105, 20, null, null, "center");
        doc.setFontSize(12); doc.setTextColor(0);
        doc.text(`Topik: ${title}`, 105, 30, null, null, "center");
        doc.setFontSize(10); doc.setFont("helvetica", "normal");
        const lines = doc.splitTextToSize(content, 170);
        doc.text(lines, 20, 40);
        doc.save(`Materi_${title}.pdf`);
    }

    function downloadFile(f, t) {
        const e = document.createElement('a');
        e.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(t);
        e.download = f; e.click();
    }

    // --- 7. GAME LOGIC (TIME ATTACK + RANDOMIZATION) ---

    function selectLang(lang) {
        state.lang = lang;
        updateMascot(`Bahasa ${lang} dipilih.`);
        showScreen('screen-mode');
    }

    function selectMode(mode) {
        state.mode = mode;
        updateMascot(`Mode ${mode.toUpperCase()} siap.`);
        showScreen('screen-diff');
    }

    function startGame() {
        state.score = 0;
        state.timeLeft = 60;
        setTxt('score', '0');

        const raw = QUESTIONS[state.lang] || [];
        state.pool = raw.filter(item => item.t === state.mode);

        if (state.pool.length < 5) {
            alert(`Soal ${state.mode} ${state.lang} sedang di-update.`);
            showScreen('screen-mode');
            return;
        }

        updateMascot("TIME ATTACK START! Cepat!");
        showScreen('screen-game');

        startTimer();
        loadRandomQuestion();
    }

    function startTimer() {
        clearInterval(state.timerId);
        updateTimerUI();
        state.timerId = setInterval(() => {
            state.timeLeft--;
            updateTimerUI();
            if (state.timeLeft <= 0) {
                clearInterval(state.timerId);
                finishGame();
            }
        }, 1000);
    }

    function updateTimerUI() {
        const timerVal = get('timer-val');
        const timerBar = get('timer-bar');

        // Prevent visual negative numbers
        let displayTime = state.timeLeft < 0 ? 0 : state.timeLeft;
        timerVal.innerText = displayTime + 's';

        if (state.timeLeft <= 10) {
            timerVal.style.color = '#da3633';
            timerBar.style.background = '#da3633';
        } else {
            timerVal.style.color = '#e3b341';
            timerBar.style.background = '#e3b341';
        }

        let pct = (state.timeLeft / 60) * 100;
        if (pct < 0) pct = 0;
        if (pct > 100) pct = 100;
        timerBar.style.width = pct + '%';
    }

    function quitGame() {
        if (confirm("Berhenti sekarang?")) {
            clearInterval(state.timerId);
            state.score = 0;
            showScreen('screen-diff');
        }
    }

    function loadRandomQuestion() {
        if (state.pool.length === 0) {
            finishGame();
            return;
        }

        const randIdx = Math.floor(Math.random() * state.pool.length);
        const q = state.pool[randIdx];
        state.currentQuestion = q;

        let modeLabel = state.mode.toUpperCase();
        if (state.mode === "tts") modeLabel = "CODE PUZZLE";
        if (state.mode === "debug") modeLabel = "DEBUG REPAIR";

        setTxt('label-mode', modeLabel);
        setTxt('label-diff', "INFINITE");
        setTxt('question-text', q.q);

        get('area-quiz').style.display = 'none';
        get('area-tts').style.display = 'none';
        get('area-debug').style.display = 'none';
        get('feedback').style.display = 'none';
        get('btn-next').style.display = 'none';

        if (state.mode === 'quiz') renderQuiz(q);
        else if (state.mode === 'tts') renderTTS(q);
        else if (state.mode === 'debug') renderDebug(q);
    }

    function renderQuiz(q) {
        const area = get('area-quiz');
        area.style.display = 'grid';
        area.innerHTML = '';

        let opts = q.o.map((txt, index) => ({ txt, isCorrect: index === q.a }));
        for (let i = opts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opts[i], opts[j]] = [opts[j], opts[i]];
        }

        opts.forEach((optItem) => {
            const btn = document.createElement('button');
            btn.className = 'opt-btn';
            btn.innerText = optItem.txt;
            // Add a data attribute to help us find it later
            if (optItem.isCorrect) btn.dataset.correct = 'true';
            btn.onclick = () => handleAnswer(optItem.isCorrect, btn, q, 'quiz');
            area.appendChild(btn);
        });
    }

    function renderTTS(q) {
        const area = get('area-tts');
        area.style.display = 'block';
        const optContainer = get('tts-options');
        optContainer.innerHTML = '';

        if (q.o) {
            const allOpts = [...q.o].sort(() => Math.random() - 0.5);
            allOpts.forEach(txt => {
                const s = document.createElement('span');
                s.className = 'tts-hint';
                s.innerText = txt;
                // Tag the correct hint
                if (txt === q.a) s.dataset.correct = 'true';
                optContainer.appendChild(s);
            });
        }

        const grid = get('tts-grid');
        grid.innerHTML = '';
        for (let i = 0; i < q.a.length; i++) {
            const inp = document.createElement('input');
            inp.className = 'tts-box';
            inp.maxLength = 1;
            inp.oninput = (e) => {
                e.target.value = e.target.value.toUpperCase();
                if (e.target.value && e.target.nextElementSibling) e.target.nextElementSibling.focus();
            };
            inp.onkeydown = (e) => {
                if (e.key === 'Backspace' && !e.target.value && e.target.previousElementSibling) e.target.previousElementSibling.focus();
            };
            grid.appendChild(inp);
        }

        const btnCheck = get('btn-check-tts');
        btnCheck.style.display = 'inline-flex';
        btnCheck.onclick = checkTTS;
    }

    function renderDebug(q) {
        const area = get('area-debug');
        area.style.display = 'block';
        get('debug-broken-code').innerText = q.code;
        const inp = get('debug-input');
        inp.value = "";
        inp.disabled = false;
        setTimeout(() => inp.focus(), 100);

        const btn = get('btn-debug-run');
        btn.style.display = 'inline-flex';
        btn.onclick = checkDebug;
    }

    function checkTTS() {
        const inputs = Array.from(document.querySelectorAll('.tts-box'));
        const userAns = inputs.map(i => i.value).join('');
        const q = state.currentQuestion;
        const isCorrect = userAns === q.a;
        inputs.forEach(i => { i.disabled = true; i.classList.add(isCorrect ? 'correct' : 'wrong'); });
        get('btn-check-tts').style.display = 'none';
        handleAnswer(isCorrect, null, q, 'tts');
    }

    function checkDebug() {
        const inp = get('debug-input');
        const userCode = inp.value.trim();
        const q = state.currentQuestion;
        const isCorrect = userCode === q.a;
        inp.disabled = true;
        get('btn-debug-run').style.display = 'none';
        handleAnswer(isCorrect, null, q, 'debug');
    }

    function handleAnswer(isCorrect, btn, q, type) {
        const feed = get('feedback');

        if (type === 'quiz') {
            document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
            isCorrect ? btn.classList.add('correct') : btn.classList.add('wrong');
        }

        feed.style.display = 'block';

        if (isCorrect) {
            state.score += 5;
            state.timeLeft += 2;
            updateTimerUI();

            setTxt('score', state.score);
            feed.innerHTML = "<strong>> BENAR (+2s)</strong>";
            feed.style.background = "rgba(46, 160, 67, 0.2)";
            feed.style.color = "#7ee787";
            feed.style.border = "1px solid #2ea043";
        } else {
            state.score -= 1;

            // Highlight Correct Answer in Green
            if (type === 'quiz') {
                const correctBtn = document.querySelector('.opt-btn[data-correct="true"]');
                if (correctBtn) correctBtn.classList.add('correct');
            } else if (type === 'tts') {
                const correctHint = document.querySelector('.tts-hint[data-correct="true"]');
                if (correctHint) {
                    correctHint.style.border = "2px solid #2ea043";
                    correctHint.style.color = "#2ea043";
                    correctHint.style.fontWeight = "bold";
                }
            }

            let ansText = (type === 'quiz') ? q.o[q.a] : q.a;
            feed.innerHTML = `<strong>> SALAH (0s)</strong><br>Jawab: <b>${ansText}</b>`;
            feed.style.background = "rgba(218, 54, 51, 0.2)";
            feed.style.color = "#f85149";
            feed.style.border = "1px solid #da3633";
        }

        // AUTO-NEXT
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    }

    function nextQuestion() {
        loadRandomQuestion();
    }

    function finishGame() {
        showScreen('screen-result');
        setTxt('final-score', state.score);

        const msg = get('result-text');
        const saveBtn = get('btn-save');
        let rankName = "";
        let rankColor = "";

        if (state.score <= 25) { rankName = "PEMULA"; rankColor = "#2ea043"; }
        else if (state.score <= 50) { rankName = "PENJELAJAH"; rankColor = "#58a6ff"; }
        else if (state.score <= 75) { rankName = "AHLI CODE"; rankColor = "#a371f7"; }
        else { rankName = "LEGEND / MASTER"; rankColor = "#f1e05a"; }

        msg.innerHTML = `RANK: <span style="color:${rankColor}; font-weight:bold; font-size:1.5rem;">${rankName}</span><br>TOTAL SKOR: ${state.score}`;
        msg.style.color = "#c9d1d9";

        setTxt('print-name', state.user.name);
        setTxt('print-lvl', `TIME_ATTACK_${state.lang}`);

        if (saveBtn) saveBtn.style.display = 'inline-flex';
    }

    function saveProgress() {
        const historyItem = {
            date: new Date().toLocaleString(),
            lang: state.lang,
            score: state.score,
            rank: (state.score <= 25) ? "PEMULA" : (state.score <= 50) ? "PENJELAJAH" : (state.score <= 75) ? "AHLI" : "LEGEND"
        };
        let history = JSON.parse(localStorage.getItem('cj_history')) || [];
        history.push(historyItem);
        localStorage.setItem('cj_history', JSON.stringify(history));
        alert(`Progres disimpan!\nSkor: ${state.score}\nRank: ${historyItem.rank}`);
    }

    function reset() { showScreen('screen-mode'); }

    return { registerUser, searchMaterial, quickSearch, selectLang, selectMode, startGame, quitGame, checkTTS, checkDebug, nextQuestion, reset, showScreen, saveProgress }

})();
