const listVoucherInit=[
    {
        idVoucher:1,
        voucherName:"khach hang vip",
        voucherDiscount:1000000,
        percentDiscount:0
    },
    {
        idVoucher:2,
        voucherName:"con chu tich",
        voucherDiscount:0,
        percentDiscount:100
    },
    {
        idVoucher:3,
        voucherName:"giam 20%",
        voucherDiscount:0,
        percentDiscount:20,
    },
    {
        idVoucher:4,
        voucherName:"acxsabjbas",
        voucherDiscount:3000000,
        percentDiscount:0,
    },

]

const listVoucher =(state=listVoucherInit,action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default listVoucher;