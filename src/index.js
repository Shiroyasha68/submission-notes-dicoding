const getInitialData = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: '2022-04-14T04:27:34.572Z',
    color: '277BC0',
    archived: false,
  },
  {
    id: 2,
    title: "Functional Component",
    body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
    createdAt: '2022-04-14T04:27:34.572Z',
    color: 'FFB200',
    archived: false,
  },
  {
    id: 3,
    title: "Modularization",
    body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
    createdAt: '2022-04-14T04:27:34.572Z',
    color: 'FFB200',
    archived: false,
  },
  {
    id: 4,
    title: "Lifecycle",
    body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
    createdAt: '2022-04-14T04:27:34.572Z',
    color: 'FA2FB5',
    archived: false,
  },
  {
    id: 5,
    title: "ESM",
    body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
    createdAt: '2022-04-14T04:27:34.572Z',
    color: '5BB318',
    archived: false,
  },
  {
    id: 6,
    title: "Module Bundler",
    body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
    createdAt: '2022-04-14T04:27:34.572Z',
    color: 'FFB200',
    archived: false,
  },
];
const colorNotes = ['277BC0', 'FFB200', 'C21010', 'FA2FB5', '5BB318', '61481C']
const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getInitialData, showFormattedDate, colorNotes };
