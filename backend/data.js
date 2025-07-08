const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika', logo: '/images/amikom.png' },
    { id: 2, period: '2019 - 2022', institution: 'SMKN 1 Padaherang', major: 'Rekayasa Perangkat Lunak', logo: '/images/smk.jpg' }
    ];
    const skills = [
        { name: 'Vue.js', level: 'Mahir' }, { name: 'JavaScript', level: 'Mahir' },
        { name: 'Tailwind CSS', level: 'Mahir' }, { name: 'Node.js', level: 'Menengah' },
        { name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL', level: 'Menengah' },
        { name: 'Git & GitHub', level: 'Mahir' }, { name: 'HTML5 & CSS3', level: 'Mahir' },
        ];
        const projects = [
            { title: 'Website Penjualan Tiket', image: '/images/Screenshot 2025-07-08 153204.png', description: 'Platform penjualan tiket event berbasis website.', tech: ['Vue.js', 'Laravel', 'MySQL'], link: '#' },
            { title: 'Aplikasi Manajemen Tugas', image: '/images/istockphoto-1474840525-170667a.jpg', description: 'Aplikasi untuk melacak progres tugas harian.', tech: ['React', 'Firebase'], link: '#' }
            ];
            
module.exports = { educationHistory, skills, projects };