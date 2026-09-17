class Adminusers
{
    constructor(page)
    {
        this.page=page;

        this.adminuser=page.locator(".small-box-footer");

        this.new=page.locator('a[onclick="click_button(1)"]');

        this.usern=page.locator('#username');

        this.password=page.locator('#password');

        this.usertype=page.locator('#user_type');

        this.save=page.getByRole('button',{name:'Save'});

        this.search=page.locator('a[onclick="click_button(2)"]');

        this.name=page.locator('#un');

        this.type=page.locator('#ut');

        this.sbtn=page.getByRole('button',{name:'Search'});

        this.update=page.getByRole('button',{name:'Update'});

    }


        async adduser(username,pass)
                    
                    {
                        await this.adminuser.nth(1).click();

                        await this.new.click();

                        await this.usern.fill(username);

                        await this.password.fill(pass);

                        await this.usertype.selectOption({value:'staff'});

                        await this.save.click();

                    }


        async searchuser(username)
                    
                    {
                        await this.search.click();

                        await this.name.fill(username);

                        await this.type.selectOption({value:'staff'});

                        await this.sbtn.click();

                        
                    }

        async deleteuser(username)
                        
                    {
                            await this.searchuser(username);
                            
                            const row=this.page.locator("tr").filter({hasText:username}).first();
        
                                            while(await row.count()>0)
                                                {
                                                    this.page.once('dialog',async dialog=>{
            
                                                            console.log(dialog.message());
            
                                                            await dialog.accept();

                                                             });

                                                    await row.locator(".btn.btn-sm.btn.btn-danger.btncss").click();
                                                }
                    }


        async updateuser(username,pass)
                    {
                            await this.searchuser(username);

                            const row=this.page.locator("tr").filter({hasText:username}).first();

                            await row.locator(".btn.btn-sm.btn.btn-primary.btncss").click();

                            await this.usern.fill(username);

                            await this.password.fill(pass);

                            await this.usertype.selectOption({value:'staff'});

                            await this.update.click();
                    }


        async statusofuser(username)
                    {

                            await this.searchuser(username);

                            const userrow=this.page.locator('tr').filter({has:this.page.locator('td').filter({hasText:username})});

                            const statuslink=userrow.locator('a:has(span.badge)');

                            await statuslink.click();    
            
                     }

}
module.exports=Adminusers;