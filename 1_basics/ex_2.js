n = 4936

one = n % 10
ten = (n % 100 - n % 10) / 10
hun = (n % 1000 - n % 100) / 100
tho = (n - n % 1000) / 1000

result = ` number: ${n}
 thousands: ${tho}
 hundreds: ${hun}
 tens: ${ten}
 ones: ${one}`

console.log(result)

