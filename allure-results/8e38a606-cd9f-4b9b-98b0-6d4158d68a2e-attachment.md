# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\groceryapp.spec.js >> grocery shopping application >> manage pages
- Location: tests\groceryapp.spec.js:66:17

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Alert!')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Alert!') with timeout 5000ms
  - waiting for getByText('Alert!')

```

```yaml
- text: "Fatal error: Uncaught ErrorException: include(/home/groceryappuniqas/public_html/app/Views/errors/html/error_404.php): failed to open stream: No such file or directory in /home/groceryappuniqas/public_html/system/Debug/Exceptions.php:299 Stack trace: #0 /home/groceryappuniqas/public_html/system/Debug/Exceptions.php(299): CodeIgniter\\Debug\\Exceptions->errorHandler(2, 'include(/home/g...', '/home/groceryap...', 299, Array) #1 /home/groceryappuniqas/public_html/system/Debug/Exceptions.php(299): include() #2 /home/groceryappuniqas/public_html/system/Debug/Exceptions.php(172): CodeIgniter\\Debug\\Exceptions->render(Object(CodeIgniter\\Exceptions\\PageNotFoundException), 404) #3 [internal function]: CodeIgniter\\Debug\\Exceptions->exceptionHandler(Object(CodeIgniter\\Exceptions\\PageNotFoundException)) #4 {main} thrown in /home/groceryappuniqas/public_html/system/Debug/Exceptions.php on line 299 Fatal error: Uncaught ErrorException: include(/home/groceryappuniqas/public_html/app/Views/errors/html/error_exception.php): failed to open stream: No such file or directory in /home/groceryappuniqas/public_html/system/Debug/Exceptions.php:299 Stack trace: #0 /home/groceryappuniqas/public_html/system/Debug/Exceptions.php(299): CodeIgniter\\Debug\\Exceptions->errorHandler(2, 'include(/home/g...', '/home/groceryap...', 299, Array) #1 /home/groceryappuniqas/public_html/system/Debug/Exceptions.php(299): include() #2 /home/groceryappuniqas/public_html/system/Debug/Exceptions.php(172): CodeIgniter\\Debug\\Exceptions->render(Object(ErrorException), 500) #3 /home/groceryappuniqas/public_html/system/Debug/Exceptions.php(223): CodeIgniter\\Debug\\Exceptions->exceptionHandler(Object(ErrorException)) #4 [internal function]: CodeIgniter\\Debug\\Exceptions->shutdownHandler() #5 {main} thrown in /home/groceryappuniqas/public_html/system/Debug/Exceptions.php on line 299"
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
  41  |                          await expect(row).toBeVisible();
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
> 73  |                          await expect(managepages.page.getByText('Alert!')).toBeVisible();
      |                                                                             ^ Error: expect(locator).toBeVisible() failed
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
  142 | 
  143 |                         await deliveryboy.adddeliveryboy(       testDataForGrocery.newdb.dbname,
  144 |                                                                 testDataForGrocery.newdb.email,
  145 |                                                                 testDataForGrocery.newdb.ph,
  146 |                                                                 testDataForGrocery.newdb.adrs,
  147 |                                                                 testDataForGrocery.newdb.username,
  148 |                                                                 testDataForGrocery.newdb.pass
  149 |                                                         );
  150 | 
  151 |                         await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();
  152 | 
  153 | 
  154 |                         await deliveryboy.searchdb(             testDataForGrocery.newdb.dbname,
  155 |                                                                 testDataForGrocery.newdb.email,
  156 |                                                                 testDataForGrocery.newdb.ph
  157 |                                                         );
  158 | 
  159 |                         const row=deliveryboy.page.locator("tr").filter({hasText:testDataForGrocery.newdb.dbname}).first();
  160 | 
  161 |                         await expect(row).toBeVisible();
  162 | 
  163 |                         await deliveryboy.status(testDataForGrocery.newdb.dbname);
  164 | 
  165 |                         await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();
  166 | 
  167 |                         await deliveryboy.edit(                 testDataForGrocery.newdb.dbname,
  168 |                                                                 testDataForGrocery.newdb.email,
  169 |                                                                 testDataForGrocery.newdb.ph,
  170 |                                                                 testDataForGrocery.newdb.adrs,
  171 |                                                                 testDataForGrocery.newdb.username,
  172 |                                                                 testDataForGrocery.newdb.pass);
  173 | 
```