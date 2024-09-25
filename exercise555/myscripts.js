const Header = () => {
    return (
        <header className="header">
            <h1>Buat Header Menggunakan JSX</h1>
            <p>Tutorial JSX Sederhana</p>
        </header>
    );
};

// data array untuk tabel
const data = [
    { nama: 'Zevan Tumbol', gender: 'Male', jurusan: 'Informatika', whatsapp: '08123456789', alamat: 'Manado' },
    { nama: 'Bagus Utomo', gender: 'Male', jurusan: 'Sistem Informasi', whatsapp: '08123567894', alamat: 'Airmadidi' },
    { nama: 'Ester', gender: 'Female', jurusan: 'Teknik Elektro', whatsapp: '08123334455', alamat: 'Tomohon' },
    { nama: 'Dhea Anggari', gender: 'Female', jurusan: 'DKV', whatsapp: '08156667788', alamat: 'Jakarta' },
    { nama: 'Josep Sigmund', gender: 'Male', jurusan: 'Perhotelan', whatsapp: '08112223344', alamat: 'Gorontalo' },
];

const Table = () => {
    return (
        <table border="1" cellPadding="10" style= {{ width: "100%", textAlign: "center"}}>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Gender</th>
                    <th>Jurusan</th>
                    <th>No. Whatsapp</th>
                    <th>Alamat</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                        <td>{item.nama}</td>
                        <td>{item.gender}</td>
                        <td>{item.jurusan}</td>
                        <td>{item.whatsapp}</td>
                        <td>{item.alamat}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const App = () => {
    return (
        <div>
            <Header />
            <Table />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));