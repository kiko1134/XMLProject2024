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
    product.setAttribute("productID", "p101");

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

