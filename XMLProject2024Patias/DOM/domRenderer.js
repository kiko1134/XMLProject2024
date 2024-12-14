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
    storeName.textContent = "Tech Store";

    let location = doc.createElement("location");

    let city = doc.createElement("city");
    city.textContent = "София";

    let address = doc.createElement("address");
    address.textContent = "ул. Иван Вазов 23";

    location.appendChild(city);
    location.appendChild(address);

    let contactNumber = doc.createElement("contactNumber");
    contactNumber.textContent = "+359 2 123 456";

    storeInfo.appendChild(storeName);
    storeInfo.appendChild(location);
    storeInfo.appendChild(contactNumber);

    root.appendChild(storeInfo);

    let partCategories = doc.createElement("partCategories");

    let category = doc.createElement("category");

    let categoryName = doc.createElement("name");
    categoryName.textContent = "Процесори";

    let subcategories = doc.createElement("subcategories");

    let intelSubcategory = doc.createElement("subcategory");
    let intelName = doc.createElement("name");
    intelName.textContent = "Intel";
    intelSubcategory.appendChild(intelName);

    let amdSubcategory = doc.createElement("subcategory");
    let amdName = doc.createElement("name");
    amdName.textContent = "AMD";
    amdSubcategory.appendChild(amdName);

    subcategories.appendChild(intelSubcategory);
    subcategories.appendChild(amdSubcategory);

    category.appendChild(categoryName);
    category.appendChild(subcategories);

    partCategories.appendChild(category);

    root.appendChild(partCategories);

    let products = doc.createElement("products");

    let product = doc.createElement("product");
    product.setAttribute("productID", "101");

    let productName = doc.createElement("productName");
    productName.textContent = "Intel Core i9";

    let productCategory = doc.createElement("category");
    productCategory.textContent = "Процесори";

    let price = doc.createElement("price");
    price.textContent = "999.99";

    let description = doc.createElement("description");
    description.textContent = "Мощен процесор за гейминг";

    let specifications = doc.createElement("specifications");

    let frequencySpec = doc.createElement("specification");
    let freqKey = doc.createElement("key");
    freqKey.textContent = "Честота";
    let freqValue = doc.createElement("value");
    freqValue.textContent = "3.6GHz";
    frequencySpec.appendChild(freqKey);
    frequencySpec.appendChild(freqValue);

    let coresSpec = doc.createElement("specification");
    let coresKey = doc.createElement("key");
    coresKey.textContent = "Ядра";
    let coresValue = doc.createElement("value");
    coresValue.textContent = "8";
    coresSpec.appendChild(coresKey);
    coresSpec.appendChild(coresValue);

    specifications.appendChild(frequencySpec);
    specifications.appendChild(coresSpec);

    product.appendChild(productName);
    product.appendChild(productCategory);
    product.appendChild(price);
    product.appendChild(description);
    product.appendChild(specifications);

    products.appendChild(product);

    root.appendChild(products);

    return doc;
}

