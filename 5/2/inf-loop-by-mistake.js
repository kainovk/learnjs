let i = 0;
// цикл не завершится из-за способа хранения числа (когда i будет равно 10, на самом деле будет 10.00...0x...,
// где x - какое-то число отличное от нуля)
while (i != 10) {
    i += 0.2;
}
console.log("Конец");