# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\groceryapp.spec.js >> grocery shopping application >> Manage products 
- Location: tests\groceryapp.spec.js:22:16

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('tr').filter({ hasText: 'peanut butter' }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('tr').filter({ hasText: 'peanut butter' }).first() with timeout 5000ms
  - waiting for locator('tr').filter({ hasText: 'peanut butter' }).first()

```

```yaml
- navigation:
  - list:
    - listitem:
      - link "":
        - /url: "#"
  - list:
    - listitem:
      - link "User Image Admin":
        - /url: "#"
        - img "User Image"
        - text: Admin
- complementary:
  - link "AdminLTE Logo 7rmart supermarket":
    - /url: https://groceryapp.uniqassosiates.com/admin/home
    - img "AdminLTE Logo"
    - text: 7rmart supermarket
  - img "User Image"
  - link "Admin":
    - /url: https://groceryapp.uniqassosiates.com/admin/home
  - navigation:
    - menu:
      - listitem:
        - link " Dashboard":
          - /url: https://groceryapp.uniqassosiates.com/admin/home
          - text: 
          - paragraph: Dashboard
      - listitem:
        - link " Manage Orders ":
          - /url: ""
          - text: 
          - paragraph: Manage Orders 
      - listitem:
        - link " Verify Users":
          - /url: https://groceryapp.uniqassosiates.com/admin/verify-users
          - text: 
          - paragraph: Verify Users
      - listitem:
        - link " Report ":
          - /url: ""
          - text: 
          - paragraph: Report 
      - listitem:
        - link " Manage Content ":
          - /url: ""
          - text: 
          - paragraph: Manage Content 
      - listitem:
        - link " Manage Product":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-product
          - text: 
          - paragraph: Manage Product
      - listitem:
        - link " Manage Users":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-user
          - text: 
          - paragraph: Manage Users
      - listitem:
        - link " Push Notifications":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-notifications
          - text: 
          - paragraph: Push Notifications
      - listitem:
        - link " Manage Slider":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-slider
          - text: 
          - paragraph: Manage Slider
      - listitem:
        - link " Manage Category ":
          - /url: ""
          - text: 
          - paragraph: Manage Category 
      - listitem:
        - link " Manage Groups":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-group
          - text: 
          - paragraph: Manage Groups
      - listitem:
        - link " Manage Offer Code":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-offercode
          - text: 
          - paragraph: Manage Offer Code
      - listitem:
        - link " Manage COD":
          - /url: https://groceryapp.uniqassosiates.com/admin/add-cod
          - text: 
          - paragraph: Manage COD
      - listitem:
        - link " Manage Delivery Boy":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-deliveryboy
          - text: 
          - paragraph: Manage Delivery Boy
      - listitem:
        - link " Manage Payment Methods":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-payment-methods
          - text: 
          - paragraph: Manage Payment Methods
      - listitem:
        - link " Admin Users":
          - /url: https://groceryapp.uniqassosiates.com/admin/list-admin
          - text: 
          - paragraph: Admin Users
      - listitem:
        - link " Settings ":
          - /url: ""
          - text: 
          - paragraph: Settings 
- heading "List Products" [level=1]
- list:
  - listitem:
    - link "Home":
      - /url: https://groceryapp.uniqassosiates.com/admin/home
  - listitem: / List Products
- link " New":
  - /url: https://groceryapp.uniqassosiates.com/admin/Product/add
- link " Search":
  - /url: javascript:void(0)
- link " Reset":
  - /url: https://groceryapp.uniqassosiates.com/admin/list-product
- heading "Search List Products" [level=4]
- form:
  - text: Title
  - textbox "Title": peanut butter
  - text: Product Code
  - button "P"
  - textbox "Product Code"
  - text: Category *
  - combobox:
    - option "Select" [selected]
    - option "Vegetables"
    - option "Dairy"
    - option "Grocery & Basics"
    - option "Bakery & Titbits"
    - option "Beverages & Juices"
    - option "Noodles / Pasta"
    - option "Coffee or Tea?"
    - option "Dry Fruits & Nuts"
    - option "Sweetness"
    - option "Fruits"
    - option "Sauces"
    - option "Specials"
    - option "Frozen & Chilled"
    - option "Fasting Foods"
    - option "Puja Items"
    - option "Natural Super Foods & Supplements"
    - option "SeaFood"
    - option "Meat"
    - option "Books, Home & Outdoors"
    - option "Broccoli"
    - option "PenHolder"
    - option "apple"
    - option "ad11"
    - option "apple1"
    - option "testapple1"
    - option "Vegetables2"
    - option "Vegetable"
    - option "Health & Music"
    - option "Beauty, Health & Movies"
    - option "Garden, Movies & Music"
    - option "Games, Kids & Music"
    - option "Jewelry"
    - option "Shoes"
    - option "Baby, Music & Outdoors"
    - option "Games & Health"
    - option "Sports"
    - option "Baby, Games & Tools"
    - option "Computers & Sports"
    - option "Books, Industrial & Shoes"
    - option "Baby & Books"
    - option "Automotive"
    - option "Shoes & Toys"
    - option "Automotive, Garden & Health"
    - option "Home & Toys"
    - option "Automotive & Clothing"
    - option "Industrial & Sports"
    - option "Music"
    - option "Clothing, Computers & Shoes"
    - option "Games"
    - option "Music & Tools"
    - option "Home"
    - option "Health & Kids"
    - option "Clothing"
    - option "Automotive & Tools"
    - option "Computers, Jewelry & Movies"
    - option "Games & Shoes"
    - option "Computers, Home & Sports"
    - option "Outdoors"
    - option "Computers"
    - option "Garden, Industrial & Outdoors"
    - option "Electronics & Music"
    - option "Computers & Outdoors"
    - option "Kids"
    - option "Beauty & Computers"
    - option "Electronics"
    - option "Electronics, Home & Shoes"
    - option "Industrial & Outdoors"
    - option "Books"
    - option "Toys"
    - option "Books & Tools"
    - option "Tools"
    - option "Jewelry & Sports"
    - option "Sports & Tools"
    - option "Clothing, Electronics & Grocery"
    - option "Beauty, Computers & Shoes"
    - option "Beauty & Grocery"
    - option "Industrial, Outdoors & Toys"
    - option "Grocery"
    - option "Baby, Clothing & Industrial"
    - option "Movies"
    - option "Baby, Kids & Movies"
    - option "Noodle"
    - option "Grocery & Kids"
    - option "Home & Kids"
    - option "Garden, Industrial & Tools"
    - option "Music & Outdoors"
    - option "Beauty, Garden & Music"
    - option "Beauty, Electronics & Music"
    - option "Games & Music"
    - option "Jewelry & Toys"
    - option "Kids, Movies & Shoes"
    - option "Beauty"
    - option "Clothing & Computers"
    - option "Health"
    - option "Clothing, Computers & Industrial"
    - option "Electronics & Home"
    - option "Automotive, Computers & Outdoors"
    - option "Garden"
    - option "Garden, Music & Shoes"
    - option "Grocery & Shoes"
    - option "Beauty & Movies"
    - option "Baby, Kids & Outdoors"
    - option "Electronics & Jewelry"
    - option "Beauty, Sports & Toys"
    - option "Jewelry & Tools"
    - option "Automotive, Health & Industrial"
    - option "Industrial & Tools"
    - option "Electronics & Games"
    - option "Industrial"
    - option "Beauty & Garden"
    - option "Health & Shoes1783667873755"
    - option "Books1783667918817"
    - option "Grocery1783667951339"
    - option "Baby & Movies1783667970667"
    - option "Grocery, Jewelry & Outdoors1783668008547"
    - option "Electronics1783668008754"
    - option "Outdoors1783668043724"
    - option "Beauty & Health1783668072815"
    - option "Red Wine Vinegar"
    - option "Oyster Sauce"
    - option "qq"
    - option "FruitsImage"
    - option "Edam"
    - option "Books & Garden"
    - option "Electronics, Industrial & Jewelry"
    - option "Oatmeal"
    - option "Automotive & Games"
    - option "Clothing & Shoes"
    - option "Baby, Garden & Music"
    - option "Electronics & Kids1784108445225"
    - option "Kids1784108668449"
    - option "Music1784110671760"
    - option "Books1784110850851"
    - option "Garden & Tools1784111082018"
    - option "Toys1784111741669"
    - option "Baby1784111825181"
    - option "Kids1784112369939"
    - option "Games & Garden1784112541379"
    - option "Computers, Jewelry & Tools1784112570726"
    - option "Industrial1784112724021"
    - option "Jewelry1784112770131"
    - option "Beauty, Outdoors & Shoes"
    - option "Computers, Outdoors & Sports"
    - option "Flower"
    - option "Baby"
    - option "Automotive, Electronics & Games"
    - option "Health1784182578532"
    - option "Electronics & Industrial1784182651891"
    - option "Beauty & Kids"
    - option "Outdoors & Toys"
    - option "Music & Sports"
    - option "Industrial & Shoes"
    - option "Automotive, Grocery & Outdoors"
    - option "Jewelry1784219893333"
    - option "Grocery, Outdoors & Shoes1784221214000"
    - option "Automotive & Books1784221530299"
    - option "Kids & Music"
    - option "Health, Movies & Toys"
    - option "Garden & Jewelry"
    - option "Electronics, Games & Shoes"
    - option "Books, Clothing & Toys"
    - option "Clothing & Toys"
    - option "Automotive1784267323228"
    - option "Computers1784267424346"
    - option "Beauty1784267852850"
    - option "Beauty1784267988522"
    - option "Automotive, Health & Toys"
    - option "Clothing, Jewelry & Music"
    - option "Garden & Grocery"
    - option "animal"
    - option "Computers & Toys"
    - option "Automotive & Shoes"
    - option "rttg"
    - option "Electronics & Tools"
    - option "jkkk"
    - option "Beauty & Jewelry"
    - option "Grocery & Health"
    - option "Industrial, Shoes & Toys"
    - option "Books, Shoes & Tools"
    - option "Automotive & Baby"
    - option "Automotive, Baby & Music"
    - option "Grapes"
    - option "Grocery, Music & Shoes1784554150942"
    - option "Clothing & Home1784554151710"
    - option "Automotive, Electronics & Grocery"
    - option "Electronics & Movies"
    - option "Grocery, Kids & Sports"
    - option "Computers & Tools"
    - option "Automotive, Garden & Home"
    - option "Computers, Jewelry & Sports"
    - option "Baby, Jewelry & Tools"
    - option "Automotive, Industrial & Outdoors"
    - option "Pomegranate"
    - option "Computers, Jewelry & Movies1784618488327"
    - option "Jewelry1784618710278"
    - option "Jewelry, Kids & Sports1784619092122"
    - option "Health1784619306525"
    - option "chocolate"
    - option "cartoon"
    - option "kiwi"
    - option "Ice cream"
    - option "Apple Fruit"
    - option "Healthy sweet"
    - option "fruit"
    - option "healthy option"
    - option "Dry Fruits"
    - option "AppleCanada"
    - option "testu"
  - text: Sub Category *
  - combobox:
    - option "Select" [selected]
  - button " Search"
  - button "Reset"
- heading "List Products(657)" [level=4]
- table:
  - rowgroup:
    - row "Title Product Type Category Image Min - Max Qty Stock Status Featured Action":
      - columnheader "Title"
      - columnheader "Product Type"
      - columnheader "Category"
      - columnheader "Image"
      - columnheader "Min - Max Qty"
      - columnheader "Stock"
      - columnheader "Status"
      - columnheader "Featured"
      - columnheader "Action"
  - rowgroup:
    - row ".........RESULT NOT FOUND.......":
      - cell ".........RESULT NOT FOUND......."
- navigation "Page navigation":
  - list
- contentinfo:
  - strong:
    - text: Copyright © 2026
    - link "7rmart supermarket":
      - /url: https://groceryapp.uniqassosiates.comhome
    - text: .
  - text: All rights reserved. Design & Developed by
  - link:
    - /url: ""
```

# Test source

```ts
  1   | const { test,expect } = require("../utils/base");
  2   | 
  3   | test.describe('grocery shopping application',()=>{
  4   | 
  5   |                 test('login with valid credentials and navigate to dashboard',async({loginPage,testDataForGrocery})=>{
  6   | 
  7   |                          await loginPage.adminLogin(testDataForGrocery.admin.username,testDataForGrocery.admin.password);
  8   | 
  9   |                          await expect(loginPage.page).toHaveURL(/admin/);
  10  | 
  11  |                  });
  12  | 
  13  | 
  14  |                 test('login using invalid credentials leads to an error message',async({loginPage,testDataForGrocery})=>{
  15  | 
  16  |                          await loginPage.adminLogin(testDataForGrocery.invalidlogin.username,testDataForGrocery.invalidlogin.password);
  17  |                     
  18  |                          await expect(loginPage.errorMessage).toBeVisible();
  19  | 
  20  |                  });
  21  | 
  22  |                test('Manage products ',async({testDataForGrocery,manage})=>{
  23  | 
  24  | 
  25  |                          await manage.addProduct(       testDataForGrocery.product.pname,
  26  |                                                         testDataForGrocery.product.weightvalue,
  27  |                                                         testDataForGrocery.product.MaxQty,
  28  |                                                         testDataForGrocery.product.price,
  29  |                                                         testDataForGrocery.product.mrp,
  30  |                                                         testDataForGrocery.product.stockavailable,
  31  |                                                         testDataForGrocery.product.purchaseprice
  32  |                                                 );
  33  | 
  34  |                 
  35  |                          await expect(manage.page.getByText('Alert!')).toBeVisible();
  36  |         
  37  |                          await manage.searchProduct(testDataForGrocery.product.pname);
  38  | 
  39  |                          const row=manage.page.locator("tr").filter({hasText:testDataForGrocery.product.pname}).first();
  40  | 
> 41  |                          await expect(row).toBeVisible();
      |                                            ^ Error: expect(locator).toBeVisible() failed
  42  | 
  43  |                          await manage.editproduct(
  44  |                                                         testDataForGrocery.product.pname,
  45  |                                                         testDataForGrocery.product.weightvalue,
  46  |                                                         testDataForGrocery.product.MaxQty,
  47  |                                                         testDataForGrocery.product.price,
  48  |                                                         testDataForGrocery.product.mrp,
  49  |                                                         testDataForGrocery.product.stockavailable,
  50  |                                                         testDataForGrocery.product.purchaseprice
  51  |                                                  );
  52  | 
  53  |                          await expect(manage.page.getByText('Alert!')).toBeVisible();
  54  | 
  55  |                          await manage.stockupdate(testDataForGrocery.product.pname);
  56  | 
  57  |                          await expect(manage.page.getByText('Alert!')).toBeVisible();
  58  | 
  59  |                          await manage.deleteproduct(testDataForGrocery.product.pname);
  60  | 
  61  |                          await expect(manage.page.getByText('Alert!')).toBeVisible();
  62  | 
  63  |                  });
  64  | 
  65  | 
  66  |                 test('manage pages',async({testDataForGrocery,managepages})=>{
  67  |   
  68  |                          await managepages.addpage(       testDataForGrocery.addpage.name,
  69  |                                                           testDataForGrocery.addpage.pagename,
  70  |                                                           testDataForGrocery.addpage.filepath
  71  |                                                  );
  72  | 
  73  |                          await expect(managepages.page.getByText('Alert!')).toBeVisible();
  74  | 
  75  |                          await managepages.searchpage(testDataForGrocery.searchpage.name);
  76  | 
  77  |                          const row=managepages.page.locator("tr").filter({hasText:testDataForGrocery.searchpage.pname}).first();
  78  | 
  79  |                          await expect(row).toBeVisible();
  80  |                          
  81  |                          await managepages.editpage(testDataForGrocery.addpage.name,testDataForGrocery.addpage.pagename,testDataForGrocery.addpage.filepath);
  82  |                         
  83  |                          await expect(managepages.page.getByText('Alert!')).toBeVisible();
  84  |                          
  85  |                          await managepages.deletepage(testDataForGrocery.searchpage.name);
  86  | 
  87  |                          await expect(managepages.page.getByText('Alert!')).toBeVisible();
  88  | 
  89  |                  });
  90  | 
  91  | 
  92  |                  test('category',async({category,testDataForGrocery})=>{
  93  | 
  94  |                             await category.addcategory(testDataForGrocery.category.categoryname,testDataForGrocery.category.image);
  95  | 
  96  |                             await expect(category.page.getByText('Alert!')).toBeVisible();
  97  | 
  98  |                             await category.searchcategory(testDataForGrocery.category.categoryname);
  99  | 
  100 |                             await category.editstatus(testDataForGrocery.category.categoryname);
  101 | 
  102 |                             await expect(category.page.getByText('Alert!')).toBeVisible();
  103 | 
  104 |                             await category.editcategory(testDataForGrocery.category.categoryname);
  105 | 
  106 |                             await expect(category.page.getByText('Alert!')).toBeVisible();
  107 | 
  108 |                             await category.deletecategory(testDataForGrocery.category.categoryname);
  109 | 
  110 |                             await expect(category.page.getByText('Alert!')).toBeVisible();
  111 | 
  112 |                  });
  113 | 
  114 | 
  115 |                  test('Admin user',async({user,testDataForGrocery})=>{
  116 | 
  117 |                                    await user.adduser(testDataForGrocery.staff.username,testDataForGrocery.staff.pass);
  118 | 
  119 |                                    await expect(user.page.getByText('Alert!')).toBeVisible();
  120 | 
  121 |                                    await user.searchuser(testDataForGrocery.staff.username);
  122 | 
  123 |                                    const row=user.page.locator("tr").filter({hasText:testDataForGrocery.staff.username}).first();
  124 | 
  125 |                                    await expect(row).toBeVisible();
  126 | 
  127 |                                    await user.updateuser(testDataForGrocery.staff.username,testDataForGrocery.staff.pass);
  128 | 
  129 |                                    await expect(user.page.getByText('Alert!')).toBeVisible();
  130 | 
  131 |                                    await user.statusofuser(testDataForGrocery.staff.username);
  132 | 
  133 |                                    await expect(user.page.getByText('Alert!')).toBeVisible();
  134 |                                    
  135 |                                    await user.deleteuser(testDataForGrocery.staff.username);
  136 | 
  137 |                                    await expect(user.page.getByText('Alert!')).toBeVisible();
  138 | 
  139 |                  });
  140 | 
  141 |                  test('Manage delivery boy',async({deliveryboy,testDataForGrocery})=>{
```