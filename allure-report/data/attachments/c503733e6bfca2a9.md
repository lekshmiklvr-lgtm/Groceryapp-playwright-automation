# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\groceryapp.spec.js >> grocery shopping application >> Verify user
- Location: tests\groceryapp.spec.js:230:18

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('tr').filter({ hasText: 'Hari' }).first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('tr').filter({ hasText: 'Hari' }).first() with timeout 5000ms
  - waiting for locator('tr').filter({ hasText: 'Hari' }).first()

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
- heading "List Users" [level=1]
- list:
  - listitem:
    - link "Home":
      - /url: https://groceryapp.uniqassosiates.com/admin/home
  - listitem: / List Users
- link " Search":
  - /url: javascript:void(0)
- link " Reset":
  - /url: https://groceryapp.uniqassosiates.com/admin/verify-users
- heading "Search List Users" [level=4]
- form:
  - text: Name
  - textbox "Name": Hari
  - text: Email
  - textbox "Email"
  - text: Phone Number
  - textbox "Phone Number"
  - text: Status
  - combobox:
    - option "Select" [selected]
    - option "Active"
    - option "Inactive"
  - button " Search"
  - link "Reset":
    - /url: https://groceryapp.uniqassosiates.com/admin/verify-users
- heading "List Users(0)" [level=4]
- table:
  - rowgroup:
    - row "Name Contact Password Date Status Action":
      - columnheader "Name"
      - columnheader "Contact"
      - columnheader "Password"
      - columnheader "Date"
      - columnheader "Status"
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
  174 |                         await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();
  175 | 
  176 |                         await deliveryboy.delete(testDataForGrocery.newdb.dbname);
  177 | 
  178 |                         await expect(deliveryboy.page.getByText('Alert!')).toBeVisible();
  179 | 
  180 | 
  181 |                         
  182 | 
  183 |                  });
  184 | 
  185 |                  test('@regression Manage offercode',async({offercode,testDataForGrocery})=>{
  186 | 
  187 |                         await offercode.newoffer(               testDataForGrocery.offer.code,
  188 |                                                                 testDataForGrocery.offer.percent,
  189 |                                                                 testDataForGrocery.offer.price,
  190 |                                                                 testDataForGrocery.offer.path
  191 | 
  192 |                                                 );
  193 | 
  194 |                         await expect(offercode.page.getByText('Alert!')).toBeVisible();
  195 | 
  196 | 
  197 |                         await offercode.searchcode(testDataForGrocery.offer.code);
  198 | 
  199 |                         const row=offercode.page.locator("tr").filter({hasText:testDataForGrocery.offer.code}).first();
  200 | 
  201 |                         await expect(row).toBeVisible();
  202 | 
  203 |                         await offercode.status(testDataForGrocery.offer.code);
  204 | 
  205 |                         await expect(offercode.page.getByText('Alert!')).toBeVisible();
  206 | 
  207 |                         await offercode.edit(testDataForGrocery.offer.code,testDataForGrocery.offer.percent,
  208 |                                                                 testDataForGrocery.offer.price,
  209 |                                                                 testDataForGrocery.offer.path);
  210 | 
  211 |                         await expect(offercode.page.getByText('Alert!')).toBeVisible();
  212 | 
  213 |                         await offercode.delete(testDataForGrocery.offer.code);
  214 | 
  215 |                         await expect(offercode.page.getByText('Alert!')).toBeVisible();
  216 | 
  217 | 
  218 | 
  219 |                  });
  220 | 
  221 |                  test('Manage slider',async({slider,testDataForGrocery})=>{
  222 | 
  223 |                         await slider.newslider(testDataForGrocery.slider.path,testDataForGrocery.slider.link);
  224 | 
  225 |                         await expect(slider.page.getByText('Alert!')).toBeVisible();
  226 | 
  227 | 
  228 |                  });
  229 | 
  230 |                  test('Verify user',async({verifyuser,testDataForGrocery})=>{
  231 | 
  232 |                         await verifyuser.search(testDataForGrocery.verify.username);
  233 | 
  234 |                         const row=verifyuser.page.locator("tr").filter({hasText:testDataForGrocery.verify.username}).first();
  235 | 
> 236 |                         await expect(row).toBeVisible();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  237 | 
  238 |                         await verifyuser.verify(testDataForGrocery.verify.username);
  239 | 
  240 |                         await expect(verifyuser.page.getByText('Alert!')).toBeVisible();
  241 | 
  242 |                         //await verifyuser.delete(testDataForGrocery.verify.username);
  243 | 
  244 |                         //await expect(verifyuser.page.getByText('Alert!')).toBeVisible();
  245 | 
  246 | 
  247 |                  });
  248 | 
  249 |                  test('Manage user',async({manageuser,testDataForGrocery})=>{
  250 | 
  251 |                             await manageuser.search(testDataForGrocery.verify.username);
  252 | 
  253 |                             const row=manageuser.page.locator("tr").filter({hasText:testDataForGrocery.verify.username}).first();
  254 | 
  255 |                             await expect(row).toBeVisible();
  256 |                             
  257 |                             await manageuser.status(testDataForGrocery.verify.username);
  258 |                             
  259 |                             await expect(manageuser.page.getByText('Alert!')).toBeVisible();
  260 | 
  261 |                  });
  262 | 
  263 |                  test('@smoke Manage order',async({manageorder,testDataForGrocery})=>{
  264 | 
  265 |                      await manageorder.searchorder(testDataForGrocery.order.id);
  266 | 
  267 |                      const row=manageorder.page.locator("tr").filter({hasText:testDataForGrocery.order.id}).first();
  268 | 
  269 |                      await expect(row).toBeVisible();
  270 | 
  271 |                      //await manageorder.changestatus(testDataForGrocery.order.id,testDataForGrocery.order.status);
  272 | 
  273 |                      //await expect(manageorder.page.getByText('Alert!')).toBeVisible();  //bug 
  274 | 
  275 |                      await manageorder.changedeliverydate     (       testDataForGrocery.order.id,
  276 |                                                                       testDataForGrocery.order.date,
  277 |                                                                       testDataForGrocery.order.time1,
  278 |                                                                       testDataForGrocery.order.time2
  279 |                                                                );
  280 | 
  281 |                      await expect(manageorder.page.getByText('Alert!')).toBeVisible();
  282 | 
  283 |                      await manageorder.assigndb(testDataForGrocery.order.id,testDataForGrocery.order.db);
  284 | 
  285 |                      await expect(manageorder.page.getByText('Alert!')).toBeVisible();
  286 | 
  287 |                      await manageorder.vieworder();
  288 | 
  289 |                      await expect(manageorder.page.locator('tr').filter({hasText:'Grant Total :'}).locator('td h4')).toHaveText('£ 1.7');
  290 | 
  291 | 
  292 | 
  293 | 
  294 |                  });
  295 |         
  296 |       
  297 | });
  298 | 
  299 | 
```