# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\groceryapp.spec.js >> grocery shopping application >> Manage user
- Location: tests\groceryapp.spec.js:249:18

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('tr').filter({ hasText: 'Hari' }).first().locator('.badge.bg-success')

```

# Page snapshot

```yaml
- generic [ref=f7e2]:
  - navigation [ref=f7e3]:
    - list [ref=f7e4]:
      - listitem [ref=f7e5]:
        - link "" [ref=f7e6] [cursor=pointer]:
          - /url: "#"
    - list [ref=f7e8]:
      - listitem [ref=f7e9]:
        - link [ref=f7e10] [cursor=pointer]:
          - /url: "#"
          - img "User Image" [ref=f7e11]
          - text: Admin
        - text:  
  - complementary [ref=f7e12]:
    - link [ref=f7e13] [cursor=pointer]:
      - /url: https://groceryapp.uniqassosiates.com/admin/home
      - img "AdminLTE Logo" [ref=f7e14]
      - text: 7rmart supermarket
    - generic [ref=f7e18]:
      - generic [ref=f7e19]:
        - img "User Image" [ref=f7e21]
        - link "Admin" [ref=f7e23] [cursor=pointer]:
          - /url: https://groceryapp.uniqassosiates.com/admin/home
      - navigation [ref=f7e24]:
        - menu [ref=f7e25]:
          - listitem [ref=f7e26]:
            - link " Dashboard" [ref=f7e27] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/home
              - generic [ref=f7e28]: 
              - paragraph [ref=f7e29]: Dashboard
          - listitem [ref=f7e30]:
            - link " Manage Orders " [ref=f7e31] [cursor=pointer]:
              - /url: ""
              - generic [ref=f7e32]: 
              - paragraph [ref=f7e33]:
                - text: Manage Orders
                - generic [ref=f7e34]: 
          - listitem [ref=f7e35]:
            - link " Verify Users" [ref=f7e36] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/verify-users
              - generic [ref=f7e37]: 
              - paragraph [ref=f7e38]: Verify Users
          - listitem [ref=f7e39]:
            - link " Report " [ref=f7e40] [cursor=pointer]:
              - /url: ""
              - generic [ref=f7e41]: 
              - paragraph [ref=f7e42]:
                - text: Report
                - generic [ref=f7e43]: 
            - text:  
          - listitem [ref=f7e44]:
            - link " Manage Content " [ref=f7e45] [cursor=pointer]:
              - /url: ""
              - generic [ref=f7e46]: 
              - paragraph [ref=f7e47]:
                - text: Manage Content
                - generic [ref=f7e48]: 
            - text:  
          - listitem [ref=f7e49]:
            - link " Manage Product" [ref=f7e50] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-product
              - generic [ref=f7e51]: 
              - paragraph [ref=f7e52]: Manage Product
          - listitem [ref=f7e53]:
            - link " Manage Users" [ref=f7e54] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-user
              - generic [ref=f7e55]: 
              - paragraph [ref=f7e56]: Manage Users
          - listitem [ref=f7e57]:
            - link " Push Notifications" [ref=f7e58] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-notifications
              - generic [ref=f7e59]: 
              - paragraph [ref=f7e60]: Push Notifications
          - listitem [ref=f7e61]:
            - link " Manage Slider" [ref=f7e62] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-slider
              - generic [ref=f7e63]: 
              - paragraph [ref=f7e64]: Manage Slider
          - listitem [ref=f7e65]:
            - link " Manage Category " [ref=f7e66] [cursor=pointer]:
              - /url: ""
              - generic [ref=f7e67]: 
              - paragraph [ref=f7e68]:
                - text: Manage Category
                - generic [ref=f7e69]: 
            - text:  
          - listitem [ref=f7e70]:
            - link " Manage Groups" [ref=f7e71] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-group
              - generic [ref=f7e72]: 
              - paragraph [ref=f7e73]: Manage Groups
          - listitem [ref=f7e74]:
            - link " Manage Offer Code" [ref=f7e75] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-offercode
              - generic [ref=f7e76]: 
              - paragraph [ref=f7e77]: Manage Offer Code
          - listitem [ref=f7e78]:
            - link " Manage COD" [ref=f7e79] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/add-cod
              - generic [ref=f7e80]: 
              - paragraph [ref=f7e81]: Manage COD
          - listitem [ref=f7e82]:
            - link " Manage Delivery Boy" [ref=f7e83] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-deliveryboy
              - generic [ref=f7e84]: 
              - paragraph [ref=f7e85]: Manage Delivery Boy
          - listitem [ref=f7e86]:
            - link " Manage Payment Methods" [ref=f7e87] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-payment-methods
              - generic [ref=f7e88]: 
              - paragraph [ref=f7e89]: Manage Payment Methods
          - listitem [ref=f7e90]:
            - link " Admin Users" [ref=f7e91] [cursor=pointer]:
              - /url: https://groceryapp.uniqassosiates.com/admin/list-admin
              - generic [ref=f7e92]: 
              - paragraph [ref=f7e93]: Admin Users
          - listitem [ref=f7e94]:
            - link " Settings " [ref=f7e95] [cursor=pointer]:
              - /url: ""
              - generic [ref=f7e96]: 
              - paragraph [ref=f7e97]:
                - text: Settings
                - generic [ref=f7e98]: 
            - text:   
  - generic [ref=f7e99]:
    - generic [ref=f7e102]:
      - heading "List Users" [level=1] [ref=f7e104]
      - list [ref=f7e106]:
        - listitem [ref=f7e107]:
          - link "Home" [ref=f7e108] [cursor=pointer]:
            - /url: https://groceryapp.uniqassosiates.com/admin/home
        - listitem [ref=f7e109]: / List Users
    - generic [ref=f7e110]:
      - generic [ref=f7e111]:
        - link " Search" [ref=f7e112] [cursor=pointer]:
          - /url: javascript:void(0)
          - generic [ref=f7e113]: 
          - text: Search
        - link " Reset" [ref=f7e114] [cursor=pointer]:
          - /url: https://groceryapp.uniqassosiates.com/admin/list-user
          - generic [ref=f7e115]: 
          - text: Reset
      - generic [ref=f7e117]:
        - generic [ref=f7e121]:
          - heading "Search List Users" [level=4] [ref=f7e123]
          - form [ref=f7e125]:
            - generic [ref=f7e126]:
              - generic [ref=f7e127]:
                - generic [ref=f7e128]: Name
                - textbox "Name" [ref=f7e129]: Hari
              - generic [ref=f7e130]:
                - generic [ref=f7e131]: Email
                - textbox "Email" [ref=f7e132]
              - generic [ref=f7e133]:
                - generic [ref=f7e134]: Phone Number
                - textbox "Phone Number" [ref=f7e135]
              - generic [ref=f7e136]:
                - generic [ref=f7e137]: Status
                - combobox [ref=f7e138]:
                  - option "Select" [selected]
                  - option "Active"
                  - option "Inactive"
            - generic [ref=f7e139]:
              - button " Search" [ref=f7e140] [cursor=pointer]:
                - generic [ref=f7e141]: 
                - text: Search
              - link "Reset" [ref=f7e142] [cursor=pointer]:
                - /url: https://groceryapp.uniqassosiates.com/admin/list-user
        - generic [ref=f7e143]:
          - heading "List Users" [level=4] [ref=f7e145]
          - table [ref=f7e147]:
            - rowgroup [ref=f7e148]:
              - row [ref=f7e149]:
                - columnheader "Name" [ref=f7e150]
                - columnheader "Contact" [ref=f7e151]
                - columnheader "Password" [ref=f7e152]
                - columnheader "Date" [ref=f7e153]
                - columnheader "Status" [ref=f7e154]
                - columnheader "Action" [ref=f7e155]
            - rowgroup [ref=f7e156]:
              - row [ref=f7e157]:
                - cell "Hari" [ref=f7e158]
                - 'cell "88199244 harixdharikrishnan@gmail.com User id : 15" [ref=f7e159]'
                - cell [ref=f7e160]:
                  - link " Details" [ref=f7e162] [cursor=pointer]:
                    - /url: "#"
                    - generic [ref=f7e163]: 
                    - generic [ref=f7e164]: Details
                - cell "04-Jun-2021" [ref=f7e165]
                - cell [ref=f7e166]:
                  - button "Inactive" [ref=f7e167] [cursor=pointer]
                - cell [ref=f7e169]:
                  - button "" [ref=f7e170] [cursor=pointer]
                  - button "" [ref=f7e172] [cursor=pointer]
          - generic [ref=f7e174]:
            - navigation "Page navigation":
              - list [ref=f7e175]:
                - listitem [ref=f7e176]:
                  - link "1" [ref=f7e177] [cursor=pointer]:
                    - /url: http://groceryapp.uniqassosiates.com/admin/Users/index?un=Hari&ut=&ph=&st=&Search=sr&page_ad=1
  - contentinfo [ref=f7e178]:
    - strong [ref=f7e179]:
      - text: Copyright © 2026
      - link "7rmart supermarket" [ref=f7e180] [cursor=pointer]:
        - /url: https://groceryapp.uniqassosiates.comhome
      - text: .
    - text: All rights reserved.
    - generic [ref=f7e181]:
      - text: Design & Developed by
      - link:
        - /url: ""
```

# Test source

```ts
  1  | class Manageuser
  2  | {
  3  | 
  4  |     constructor(page)
  5  |     {
  6  |         this.page=page;
  7  | 
  8  |         this.home=page.getByRole('link',{name:'Home'});
  9  | 
  10 |         this.manage=page.locator(".small-box-footer");
  11 | 
  12 |         this.searchbtn=page.locator(".btn.btn-rounded.btn-primary");
  13 | 
  14 |         this.name=page.locator('#un');
  15 | 
  16 |         this.find=page.locator(".btn.btn-block-sm.btn-danger");
  17 | 
  18 |     }
  19 | 
  20 |             async gotomodule()
  21 |                 {
  22 |                         await this.home.click();
  23 |         
  24 |                         await this.manage.nth(8).click();
  25 | 
  26 |                 }
  27 | 
  28 |             async search(name)
  29 | 
  30 |                 {
  31 |                         await this.gotomodule();
  32 | 
  33 |                         await this.searchbtn.click();
  34 | 
  35 |                         await this.name.fill(name);
  36 | 
  37 |                         await this.find.click();
  38 |                 }
  39 | 
  40 |             async status(name)
  41 |                 {
  42 | 
  43 |                         await this.search(name);
  44 | 
  45 |                         const row=this.page.locator("tr").filter({hasText:name}).first();
  46 | 
> 47 |                         await row.locator('.badge.bg-success').click();
     |                                                                ^ Error: locator.click: Test timeout of 40000ms exceeded.
  48 | 
  49 |                 }
  50 | }
  51 | 
  52 | module.exports=Manageuser;
```