//Tozi kod ima za cel da pokaje na ekrana informaciqta ot XML faila, koito se namira v papkata DOMExamples
// async function fetchXML() {
//     try {
//         const response = await fetch('../../../../DOMExamples/ExampleTwo.xml');
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const xmlText = await response.text();
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
//
//         displayStoreInfo(xmlDoc);
//         displayCategories(xmlDoc);
//         displayProducts(xmlDoc);
//     } catch (error) {
//         console.error('Error fetching the XML file:', error);
//     }
// }
//
// function displayStoreInfo(xmlDoc) {
//     const storeInfo = xmlDoc.getElementsByTagName('storeInfo')[0];
//     const storeName = storeInfo.getElementsByTagName('storeName')[0].textContent;
//     const city = storeInfo.getElementsByTagName('city')[0].textContent;
//     const address = storeInfo.getElementsByTagName('address')[0].textContent;
//     const contactNumber = storeInfo.getElementsByTagName('contactNumber')[0].textContent;
//
//     const storeDiv = document.createElement('div');
//     storeDiv.innerHTML = `
//         <h2>Store Information</h2>
//         <p><strong>Store Name:</strong> ${storeName}</p>
//         <p><strong>Location:</strong> ${city}, ${address}</p>
//         <p><strong>Contact Number:</strong> ${contactNumber}</p>
//     `;
//     document.getElementById('xmlDataContainer').appendChild(storeDiv);
// }
//
// function displayCategories(xmlDoc) {
//     const categories = xmlDoc.getElementsByTagName('categories');
//     const categoriesDiv = document.createElement('div');
//     categoriesDiv.innerHTML = `<h2>Categories</h2>`;
//
//     for (let i = 0; i < categories.length; i++) {
//         const categoryName = categories[i].getElementsByTagName('name')[0].textContent;
//         categoriesDiv.innerHTML += `<p><strong>Category:</strong> ${categoryName}</p>`;
//
//         const subcategories = categories[i].getElementsByTagName('subcategory');
//         for (let j = 0; j < subcategories.length; j++) {
//             const subcategoryName = subcategories[j].getElementsByTagName('name')[0].textContent;
//             categoriesDiv.innerHTML += `<p> - Subcategory: ${subcategoryName}</p>`;
//         }
//     }
//     document.getElementById('xmlDataContainer').appendChild(categoriesDiv);
// }
//
// function displayProducts(xmlDoc) {
//     const products = xmlDoc.getElementsByTagName('product');
//     const productsDiv = document.createElement('div');
//     productsDiv.innerHTML = `<h2>Products</h2>`;
//
//     for (let i = 0; i < products.length; i++) {
//         const productName = products[i].getElementsByTagName('productName')[0].textContent;
//         const category = products[i].getElementsByTagName('category')[0].textContent;
//         const price = products[i].getElementsByTagName('price')[0].textContent;
//         const description = products[i].getElementsByTagName('description')[0].textContent;
//
//         productsDiv.innerHTML += `
//             <div>
//                 <h3>${productName}</h3>
//                 <p><strong>Category:</strong> ${category}</p>
//                 <p><strong>Price:</strong> ${price}</p>
//                 <p><strong>Description:</strong> ${description}</p>
//             </div>
//         `;
//     }
//     document.getElementById('xmlDataContainer').appendChild(productsDiv);
// }
// document.addEventListener('DOMContentLoaded', fetchXML);

function createXMLDocument() {
    let doc = document.implementation.createDocument(null, "computerStore", null);

    let root = doc.documentElement;

    let storeInfo = doc.createElement("storeInfo");

    let storeName = doc.createElement("storeName");
    storeName.textContent = "Ardes.bg - София";

    let location = doc.createElement("location");

    let city = doc.createElement("city");
    city.textContent = "София";

    let address = doc.createElement("address");
    address.textContent = "ж.к. Дървеница, ул. „Пловдивско поле“ 11А, 1756 София";

    location.appendChild(city);
    location.appendChild(address);

    let contactNumber = doc.createElement("contactNumber");
    contactNumber.textContent = "0700 15 060";

    storeInfo.appendChild(storeName);
    storeInfo.appendChild(location);
    storeInfo.appendChild(contactNumber);

    root.appendChild(storeInfo);

    let partCategories = doc.createElement("partCategories");

    let category = doc.createElement("category");

    let categoryName = doc.createElement("name");
    categoryName.textContent = "Процесори";

    let subcategories = doc.createElement("subcategories");

    let subcategory = doc.createElement("subcategory");

    let subcategoryName = doc.createElement("name");
    subcategoryName.textContent = "Intel";

    subcategory.appendChild(subcategoryName);
    subcategories.appendChild(subcategory);

    category.appendChild(categoryName);
    category.appendChild(subcategories);

    partCategories.appendChild(category);

    root.appendChild(partCategories);

    let products = doc.createElement("products");

    let product = doc.createElement("product");
    product.setAttribute("productID", "P001");

    let productName = doc.createElement("productName");
    productName.textContent = "Intel Core i9";

    let productCategory = doc.createElement("category");
    productCategory.textContent = "Процесори";

    let price = doc.createElement("price");
    price.textContent = "899.99";

    let description = doc.createElement("description");
    description.textContent = "Мощен процесор за гейминг и продуктивност.";

    let specifications = doc.createElement("specifications");

    let specification = doc.createElement("specification");

    let specKey = doc.createElement("key");
    specKey.textContent = "Честота";

    let specValue = doc.createElement("value");
    specValue.textContent = "3.5 GHz";

    specification.appendChild(specKey);
    specification.appendChild(specValue);

    specifications.appendChild(specification);

    product.appendChild(productName);
    product.appendChild(productCategory);
    product.appendChild(price);
    product.appendChild(description);
    product.appendChild(specifications);

    products.appendChild(product);

    root.appendChild(products);

    return doc;
}

