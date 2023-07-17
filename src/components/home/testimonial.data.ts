import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Lengkap & Mudah',
    content:
      'Aplikasi kasir Toska sangat lengkap dan mudah digunakan. Fitur-fiturnya membantu saya mengelola bisnis dengan lebih efisien. Saya sangat merekomendasikan Toska!',
    user: {
      id: 1,
      name: 'Dave Seva',
      professional: 'Pemilik SYF Store',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Terbaik & Cepat',
    content:
      'Aplikasi kasir Toska adalah yang terbaik dan cepat. Ringan, handal, dan memudahkan saya mengelola bisnis kasir. Saya sangat puas dengan kualitasnya!',
    user: {
      id: 1,
      name: 'Pak Riski',
      professional: 'Sumber Agung Kertek',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Fitur Lengkap',
    content:
      'Aplikasi kasir Toska sangat lengkap dengan fitur-fitur yang dibutuhkan. Membantu saya mengelola stok, pembayaran, dan laporan penjualan dengan mudah dan efisien.',
    user: {
      id: 1,
      name: 'Maulana',
      professional: 'CEO House of Elena',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Kualitas Luar Biasa',
    content:
      'Aplikasi kasir Toska memiliki kualitas luar biasa. Ringan, cepat, dan handal. Memudahkan saya dalam mengoptimalkan proses penjualan dan manajemen inventaris.',
    user: {
      id: 1,
      name: 'Mas Gio',
      professional: 'Minimarket Bungas Mart',
      photo: '4.jpg',
    },
  },
]
