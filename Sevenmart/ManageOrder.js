class ManageOrder
{
    constructor(page)
    {
        this.page=page;

        this.home=page.getByRole('link',{name:'Home'});

        this.manage=page.locator(".small-box-footer");

        this.searchbtn=page.locator(".btn.btn-rounded.btn-primary");

        this.orderid=page.locator('#od');

        this.find=page.locator(".btn.btn-danger.btn-fix");

        this.changests=page.locator("#status");

        this.updatestatus=page.getByRole('button',{name:'Update'});

        //this.changedate=page.getByRole('button',{name:'Change Delivery Date'});

        this.changedate=page.locator(".btn.btn-primary.btn-sm");

        this.date=page.locator(".jquery-datepicker__input.datepicker1");

        this.time1=page.locator(".time1.time.ui-timepicker-input");

        this.time2=page.locator(".time2.time.ui-timepicker-input");

        this.assign=page.getByRole('button',{name:'Assign Delivery Boy'});

        this.deliveryboy=page.locator('#delivery_boy_id');

        this.view=page.locator(".btn.btn-block.btn-outline-info.btn-sm");//getByRole('link',{name:'View'});

       // this.updatedate=page.locator(".btn.btn-info");



    }

            async gotomodule()
                {
                        await this.home.click();
        
                        await this.manage.nth(9).click();
                }

            async searchorder(id)
                {
                        await this.gotomodule();

                        await this.searchbtn.click();

                        await this.orderid.fill(id);

                        await this.find.click();
                }

            async changestatus(id,status)
                {

                        const row=this.page.locator("tr").filter({hasText:id}).first();

                        await row.locator('.btn.btn-success.btn-sm').click();

                        await this.changests.selectOption({value:status});

                        await this.updatestatus.click();
                }

            async changedeliverydate(id,date,time1,time2)
                {

                        await this.searchorder(id);

                        await this.changedate.click();

                        await this.date.fill(date);

                        await this.time1.click();

                        await this.page.locator('.ui-timepicker-wrapper:visible li').getByText(time1,{exact:true}).click();
        
                        await this.time2.click();
        
                        await this.page.locator('.ui-timepicker-wrapper:visible li').getByText(time2,{exact:true}).click();

                        await this.updatestatus.click();
                }

            async assigndb(id,db)
                {
                        const row=this.page.locator("tr").filter({hasText:id}).first();

                        await row.locator(".btn.btn-warning.btn-sm").click();

                        await this.deliveryboy.selectOption({value:db});

                        await this.updatestatus.click();

                    }

            async deleteorder()
                {
                    // can't create order so delete will remove available order details


                }


            async vieworder()
                {

                    await this.view.click();
                }
}

module.exports=ManageOrder;