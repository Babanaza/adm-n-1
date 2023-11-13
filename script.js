// ... ваш код ...

function addProduct() {
    const brandInput = document.getElementById('brandInput').value;
    const priceInput = document.getElementById('priceInput').value;
    const imageInput = document.getElementById('imageInput');

    // Проверка наличия выбранного файла
    if (!imageInput.files || imageInput.files.length === 0) {
        alert('Выберите изображение');
        return;
    }

    // Получаем выбранный файл (в данном случае берем первый выбранный)
    const selectedFile = imageInput.files[0];

    // Создаем объект товара
    const newProduct = {
        brand: brandInput,
        price: priceInput,
        // Преобразуем выбранный файл в URL
        image: URL.createObjectURL(selectedFile),
    };

    // Добавляем товар в массив
    products.push(newProduct);

    // Очищаем поля ввода
    document.getElementById('brandInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('imageInput').value = '';

    // Обновляем отображение товаров
    displayProducts();
}

// ... ваш код ...