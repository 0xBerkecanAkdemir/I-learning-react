const users = ['mehmet', 'hakan', 'berke'];

// push array sonuna eleman ekler
users.push['ayşe'];

// map item yerine istediğini yazabilirsin users leri döndürür.
users.map((item) => {
console.log(item);
})

// find array içindeki koşula göre arama yapar

const findIt = users.find((item.name ==='mehmet'));
console.log(result);

// filter adı mehmet ve yaşı 20 den büyük olanı getir.
const filtered = users.filter((item) => item.name ==='mehmet' && item.age >20);
console.log(filtered);

// some verdiğimiz değerler uyuyorsa true uymuyorsa false döner 10 yaşında biri varmı ?
const some = users.some((item) => item.age === 10)
console.log(some)

// every bütün elemanların şarta uymasını bekliyor ( bütün elemanların yaşı 5 den büyük mü ?)
const every = users.every(item => item.age > 5);
console.log(every);

// includes meyveler içinde muz var mı ?
const meyveler = ['elma', 'armut', 'muz'];
const isIncluded = meyveler.includes('muz');
console.log(isIncluded);