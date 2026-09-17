class Managedeliveryboy
{
    constructor(page)
    {
        this.page=page;

        this.more=page.locator(".small-box-footer");

        this.add=page.locator('a[onclick="click_button(1)"]');

        this.name=page.locator('#name');

        this.email=page.locator('#email');

        this.phone=page.locator('#phone');

        this.address=page.locator('#address');

        this.username=page.locator('#username');

        this.password=page.locator('#password');

        this.save=page.getByRole('button',{name:'Save'});

        this.cancel=page.locator(".btn.btn-default.btn-fix");//getByRole('link',{name:'Cancel'});

        this.search=page.locator('a[onclick="click_button(2)"]');

        this.searchname=page.locator('#un');

        this.searchemail=page.locator('#ut');

        this.searchphn=page.locator('#ph');

        this.searchbtn=page.getByRole('button',{name:'Search'});

        this.update=page.getByRole('button',{name:'Update'});


    }



            async commonsearch(dbname)
                {

                            await this.search.click();

                            await this.searchname.fill(dbname);

                            await this.searchbtn.click();
                }

            async commonadd(dbname,email,ph,adrs,username,pass)
                {

                            await this.name.fill(dbname);

                            await this.email.fill(email);

                            await this.phone.fill(ph);

                            await this.address.fill(adrs);

                            await this.username.fill(username);

                            await this.password.fill(pass);
                }


            async adddeliveryboy(dbname,email,ph,adrs,username,pass)
                {
                            await this.more.nth(7).click();

                            await this.add.click();

                            await this.commonadd(dbname,email,ph,adrs,username,pass);

                            await this.save.click();

                               
                }


            async searchdb(dbname,email,phn)
                {

                            await this.cancel.click();
                            
                            await this.search.click();

                            await this.searchname.fill(dbname);

                            await this.searchemail.fill(email);

                            await this.searchphn.fill(phn);

                            await this.searchbtn.click();

                }

            async status(dbname)
                {
                            await this.commonsearch(dbname);

                            const resultrow=this.page.locator('tr').filter({has:this.page.locator('td').filter({hasText:dbname})});

                            const statuslink=resultrow.locator('a:has(span.badge)');

                            await statuslink.click();  
                }

            async edit(dbname,email,ph,adrs,username,pass)
                {
                            await this.commonsearch(dbname);

                            const row=this.page.locator("tr").filter({hasText:dbname}).first();

                            await row.locator(".btn.btn-sm.btn.btn-primary.btncss").click();

                            await this.commonadd(dbname,email,ph,adrs,username,pass);

                            await this.update.click();
                }

            async delete(dbname)
                {

                            await this.commonsearch(dbname);

                            const row=this.page.locator("tr").filter({hasText:dbname}).first();

                            while(await row.count()>0)
                                        {
                                            this.page.once('dialog',async dialog=>{
            
                                                    console.log(dialog.message());
            
                                                    await dialog.accept();

                                                });

                                            await row.locator(".btn.btn-sm.btn.btn-danger.btncss").click();
                                        }

            }
}
module.exports=Managedeliveryboy;