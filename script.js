document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Validasi login sederhana
    if (username === 'Intan' && password === '00Agustus2024') {
        message.style.color = 'green';
        message.textContent = 'Login berhasil!';

        // Arahkan pengguna ke halaman berikutnya
        window.location.href = 'https://fiznwahid.github.io/Loveyou/';  // Ganti URL ini dengan alamat tujuan yang diinginkan
    } else {
        message.style.color = 'red';
        message.textContent = 'Username atau password salah!';
    }
});
