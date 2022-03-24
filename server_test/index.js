const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/getloaisp', (req, res) => {
    const { after, before, limit, from } = req.query
    const result = [{
        id: 1,
        tensanpham: 'iPhone',
        hanhanh: 'http://www.maccenter.vn/MacFamily/iCon-iPhone.jpg'
    },
    {
        id: 2,
        tensanpham: 'AirPods',
        hanhanh: 'http://www.maccenter.vn/MacFamily/iCon-AirPods.jpg'
    }]
    return res.status(200).json({ success: true, message: 'Hallo', result })
})

app.get('/sanpham', (req, res) => {
    const { page, loai } = req.query
    let result = [

    ]
    for (let i = 1; i <= 10; i++) {
        result.push({
            id: i,
            tensp: `Laptop Dell Vostro V3568 ${i}`,
            hinhanh: 'http://mauweb.monamedia.net/hanoicomputer/wp-content/uploads/2017/12/dell-V3568-XF6C61-01.jpg',
            mota: `"Chip: Intel Core i5-7200U
RAM: DDR4 4GB (2 khe cắm)
Ổ cứng: HDD 1TB
Chipset đồ họa: Intel HD Graphics 620
Màn hình: 15.6 Inches
Hệ điều hành: Free Dos
Pin: 4 Cell Lithium-ion"`,
            loai: i > 5 ? 2 : 1,
            giasp: `${i * 1102}`
        })
    }
    return res.status(200).json({ success: true, message: 'Hallo', result })
})

app.post('/detail', (req, res) => {
    const { page = 1, loai } = req.body
    const pagesize = 10;
    let result = []
    for (let i = (page - 1) * pagesize + 1; i <= page * pagesize; i++) {
        result.push({
            id: i,
            tensp: `Laptop Dell Vostro V3568 ${i}`,
            hinhanh: 'http://mauweb.monamedia.net/hanoicomputer/wp-content/uploads/2017/12/dell-V3568-XF6C61-01.jpg',
            mota: `"Chip: Intel Core i5-7200U
    RAM: DDR4 4GB (2 khe cắm)
    Ổ cứng: HDD 1TB
    Chipset đồ họa: Intel HD Graphics 620
    Màn hình: 15.6 Inches
    Hệ điều hành: Free Dos
    Pin: 4 Cell Lithium-ion"`,
            loai: i > 5 ? 2 : 1,
            giasp: `${i * 1102}`
        })
    }


    return res.status(200).json({ success: true, message: 'Hallo', result })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

/*

đăng ký/ đăng nhập, thanh toan don hang
*/